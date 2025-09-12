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
    categories: {
      type: Object
    }
  },
  setup(__props) {
    const selectedCategory = ref(null);
    const showCreateModal = ref(false);
    const showEditModal = ref(false);
    const showDeleteModal = ref(false);
    const nameInput = ref(null);
    const tableHeads = ref(["#", "Name", "Action"]);
    const form = useForm({
      name: null
    });
    const createCategoryModal = () => {
      showCreateModal.value = true;
      nextTick(() => nameInput.value.focus());
    };
    const editCategoryModal = (category) => {
      selectedCategory.value = category;
      form.name = category.name;
      showEditModal.value = true;
      nextTick(() => nameInput.value.focus());
    };
    const deleteCategoryModal = (category) => {
      selectedCategory.value = category;
      showDeleteModal.value = true;
    };
    const createCategory = () => {
      form.post(route("categories.store"), {
        preserveScroll: true,
        onSuccess: () => {
          closeModal();
          showToast();
        },
        onError: () => nameInput.value.focus()
      });
    };
    const updateCategory = () => {
      form.put(route("categories.update", selectedCategory.value.id), {
        preserveScroll: true,
        onSuccess: () => {
          closeModal();
          showToast();
        },
        onError: () => nameInput.value.focus()
      });
    };
    const deleteCategory = () => {
      form.post(route("categories.destroy", selectedCategory.value.id), {
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
      _push(ssrRenderComponent(unref(Head), { title: "Category" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Categories `);
          } else {
            return [
              createTextVNode(" Categories ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap"${_scopeId}><div class="w-full px-4"${_scopeId}>`);
            _push2(ssrRenderComponent(CardTable, {
              indexRoute: "categories.index",
              paginatedData: __props.categories,
              filters: __props.filters,
              tableHeads: tableHeads.value,
              showFilters: false
            }, {
              cardHeader: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}><h4 class="text-2xl"${_scopeId2}>Categories (${ssrInterpolate(__props.categories.total)})</h4></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("h4", { class: "text-2xl" }, "Categories (" + toDisplayString(__props.categories.total) + ")", 1)
                    ])
                  ];
                }
              }),
              cardHeaderRight: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}><a${ssrRenderAttr("href", _ctx.route("categories.index", { export: "excel" }))} class="active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"${_scopeId2}>Export</a>`);
                  _push3(ssrRenderComponent(_sfc_main$2, { onClick: createCategoryModal }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Create Category`);
                      } else {
                        return [
                          createTextVNode("Create Category")
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
                        href: _ctx.route("categories.index", { export: "excel" }),
                        class: "active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                      }, "Export", 8, ["href"]),
                      createVNode(_sfc_main$2, { onClick: createCategoryModal }, {
                        default: withCtx(() => [
                          createTextVNode("Create Category")
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
                  ssrRenderList(__props.categories.data, (category, index) => {
                    _push3(`<tr${_scopeId2}>`);
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(__props.categories.current_page * __props.categories.per_page - (__props.categories.per_page - (index + 1)))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(__props.categories.current_page * __props.categories.per_page - (__props.categories.per_page - (index + 1))), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(category.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(category.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$2, {
                            onClick: ($event) => editCategoryModal(category)
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
                            onClick: ($event) => deleteCategoryModal(category),
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
                              onClick: ($event) => editCategoryModal(category)
                            }, {
                              default: withCtx(() => [
                                createVNode("i", { class: "fa fa-edit" })
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            createVNode(_sfc_main$2, {
                              onClick: ($event) => deleteCategoryModal(category),
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
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.categories.data, (category, index) => {
                      return openBlock(), createBlock("tr", {
                        key: category.id
                      }, [
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.categories.current_page * __props.categories.per_page - (__props.categories.per_page - (index + 1))), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(category.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2, {
                              onClick: ($event) => editCategoryModal(category)
                            }, {
                              default: withCtx(() => [
                                createVNode("i", { class: "fa fa-edit" })
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            createVNode(_sfc_main$2, {
                              onClick: ($event) => deleteCategoryModal(category),
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
              onSubmitAction: createCategory
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
                        onKeyup: withKeys(createCategory, ["enter"]),
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
              onSubmitAction: updateCategory
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
                        onKeyup: withKeys(updateCategory, ["enter"]),
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
              onSubmitAction: deleteCategory,
              maxWidth: "sm",
              submitButtonText: "Yes, delete it!"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Are you sure you want to delete this category? `);
                } else {
                  return [
                    createTextVNode(" Are you sure you want to delete this category? ")
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
                    indexRoute: "categories.index",
                    paginatedData: __props.categories,
                    filters: __props.filters,
                    tableHeads: tableHeads.value,
                    showFilters: false
                  }, {
                    cardHeader: withCtx(() => [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("h4", { class: "text-2xl" }, "Categories (" + toDisplayString(__props.categories.total) + ")", 1)
                      ])
                    ]),
                    cardHeaderRight: withCtx(() => [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("a", {
                          href: _ctx.route("categories.index", { export: "excel" }),
                          class: "active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                        }, "Export", 8, ["href"]),
                        createVNode(_sfc_main$2, { onClick: createCategoryModal }, {
                          default: withCtx(() => [
                            createTextVNode("Create Category")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.categories.data, (category, index) => {
                        return openBlock(), createBlock("tr", {
                          key: category.id
                        }, [
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.categories.current_page * __props.categories.per_page - (__props.categories.per_page - (index + 1))), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(category.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2, {
                                onClick: ($event) => editCategoryModal(category)
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", { class: "fa fa-edit" })
                                ]),
                                _: 2
                              }, 1032, ["onClick"]),
                              createVNode(_sfc_main$2, {
                                onClick: ($event) => deleteCategoryModal(category),
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
                onSubmitAction: createCategory
              }, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("label", { for: "name" }, "Name"),
                    withDirectives(createVNode("input", {
                      id: "name",
                      ref_key: "nameInput",
                      ref: nameInput,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      onKeyup: withKeys(createCategory, ["enter"]),
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
                onSubmitAction: updateCategory
              }, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("label", { for: "name" }, "Name"),
                    withDirectives(createVNode("input", {
                      id: "name",
                      ref_key: "nameInput",
                      ref: nameInput,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      onKeyup: withKeys(updateCategory, ["enter"]),
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
                onSubmitAction: deleteCategory,
                maxWidth: "sm",
                submitButtonText: "Yes, delete it!"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Are you sure you want to delete this category? ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Category/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
