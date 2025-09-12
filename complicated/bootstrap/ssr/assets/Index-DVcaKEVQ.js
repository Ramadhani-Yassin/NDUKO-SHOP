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
    expenses: {
      type: Object
    }
  },
  setup(__props) {
    const selectedExpense = ref(null);
    const showCreateModal = ref(false);
    const showEditModal = ref(false);
    const showDeleteModal = ref(false);
    const nameInput = ref(null);
    const tableHeads = ref(["#", "Name", "Amount", "Expense Date", "Action"]);
    const form = useForm({
      name: "",
      description: "",
      amount: "",
      expense_date: ""
    });
    const editExpenseModal = (expense) => {
      selectedExpense.value = expense;
      form.name = expense.name;
      form.description = expense.description;
      form.amount = expense.amount;
      form.expense_date = expense.expense_date;
      showEditModal.value = true;
      nextTick(() => nameInput.value.focus());
    };
    const deleteExpenseModal = (expense) => {
      selectedExpense.value = expense;
      showDeleteModal.value = true;
    };
    const createExpense = () => {
      form.post(route("expenses.store"), {
        preserveScroll: true,
        onSuccess: (e) => {
          closeModal();
          showToast();
        },
        onError: () => nameInput.value.focus()
      });
    };
    const updateExpense = () => {
      form.put(route("expenses.update", selectedExpense.value.id), {
        preserveScroll: true,
        onSuccess: () => {
          closeModal();
          showToast();
        },
        onError: () => nameInput.value.focus()
      });
    };
    const deleteExpense = () => {
      form.post("/expenses/" + selectedExpense.value.id + "/delete", {
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
      _push(ssrRenderComponent(unref(Head), { title: "Expense" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Expenses `);
          } else {
            return [
              createTextVNode(" Expenses ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap"${_scopeId}><div class="w-full px-4"${_scopeId}>`);
            _push2(ssrRenderComponent(CardTable, {
              indexRoute: "expenses.index",
              paginatedData: __props.expenses,
              filters: __props.filters,
              tableHeads: tableHeads.value,
              showFilters: false
            }, {
              cardHeader: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}><h4 class="text-2xl"${_scopeId2}>Expenses (${ssrInterpolate(__props.expenses.total)})</h4></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("h4", { class: "text-2xl" }, "Expenses (" + toDisplayString(__props.expenses.total) + ")", 1)
                    ])
                  ];
                }
              }),
              cardHeaderRight: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}><a${ssrRenderAttr("href", _ctx.route("expenses.index", { export: "excel" }))} class="active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"${_scopeId2}>Export</a>`);
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    onClick: ($event) => showCreateModal.value = true
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Create Expense`);
                      } else {
                        return [
                          createTextVNode("Create Expense")
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
                        href: _ctx.route("expenses.index", { export: "excel" }),
                        class: "active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                      }, "Export", 8, ["href"]),
                      createVNode(_sfc_main$2, {
                        onClick: ($event) => showCreateModal.value = true
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Create Expense")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.expenses.data, (expense, index) => {
                    _push3(`<tr${_scopeId2}>`);
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(__props.expenses.current_page * __props.expenses.per_page - (__props.expenses.per_page - (index + 1)))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(__props.expenses.current_page * __props.expenses.per_page - (__props.expenses.per_page - (index + 1))), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(expense.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(expense.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(expense.amount)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(expense.amount), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(expense.expense_date)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(expense.expense_date), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$2, {
                            onClick: ($event) => editExpenseModal(expense)
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
                            onClick: ($event) => deleteExpenseModal(expense),
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
                              onClick: ($event) => editExpenseModal(expense)
                            }, {
                              default: withCtx(() => [
                                createVNode("i", { class: "fa fa-edit" })
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            createVNode(_sfc_main$2, {
                              onClick: ($event) => deleteExpenseModal(expense),
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
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.expenses.data, (expense, index) => {
                      return openBlock(), createBlock("tr", {
                        key: expense.id
                      }, [
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.expenses.current_page * __props.expenses.per_page - (__props.expenses.per_page - (index + 1))), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(expense.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(expense.amount), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(expense.expense_date), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2, {
                              onClick: ($event) => editExpenseModal(expense)
                            }, {
                              default: withCtx(() => [
                                createVNode("i", { class: "fa fa-edit" })
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            createVNode(_sfc_main$2, {
                              onClick: ($event) => deleteExpenseModal(expense),
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
              onSubmitAction: createExpense
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"${_scopeId2}><div class="flex flex-col"${_scopeId2}><label for="name"${_scopeId2}>Name</label><input id="name"${ssrRenderAttr("value", unref(form).name)} type="text" placeholder="Enter name" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    message: unref(form).errors.name
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col"${_scopeId2}><label for="amount"${_scopeId2}>Amount</label><input id="amount"${ssrRenderAttr("value", unref(form).amount)} type="number" placeholder="Enter amount" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    message: unref(form).errors.amount
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col"${_scopeId2}><label for="expense_date"${_scopeId2}>Expense Date</label><input id="expense_date"${ssrRenderAttr("value", unref(form).expense_date)} type="date" placeholder="Enter expense date" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    message: unref(form).errors.expense_date
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="mt-2"${_scopeId2}><label for="description" class="text-stone-600 text-sm font-medium"${_scopeId2}>Description</label><textarea id="description" type="text" rows="3" placeholder="Enter description" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId2}>${ssrInterpolate(unref(form).description)}</textarea>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    message: unref(form).errors.description
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" }, [
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", { for: "name" }, "Name"),
                        withDirectives(createVNode("input", {
                          id: "name",
                          ref_key: "nameInput",
                          ref: nameInput,
                          "onUpdate:modelValue": ($event) => unref(form).name = $event,
                          onKeyup: withKeys(createExpense, ["enter"]),
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
                        createVNode("label", { for: "amount" }, "Amount"),
                        withDirectives(createVNode("input", {
                          id: "amount",
                          "onUpdate:modelValue": ($event) => unref(form).amount = $event,
                          onKeyup: withKeys(createExpense, ["enter"]),
                          type: "number",
                          placeholder: "Enter amount",
                          class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                        }, null, 40, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).amount]
                        ]),
                        createVNode(_sfc_main$4, {
                          message: unref(form).errors.amount
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", { for: "expense_date" }, "Expense Date"),
                        withDirectives(createVNode("input", {
                          id: "expense_date",
                          "onUpdate:modelValue": ($event) => unref(form).expense_date = $event,
                          onKeyup: withKeys(createExpense, ["enter"]),
                          type: "date",
                          placeholder: "Enter expense date",
                          class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                        }, null, 40, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).expense_date]
                        ]),
                        createVNode(_sfc_main$4, {
                          message: unref(form).errors.expense_date
                        }, null, 8, ["message"])
                      ])
                    ]),
                    createVNode("div", { class: "mt-2" }, [
                      createVNode("label", {
                        for: "description",
                        class: "text-stone-600 text-sm font-medium"
                      }, "Description"),
                      withDirectives(createVNode("textarea", {
                        id: "description",
                        "onUpdate:modelValue": ($event) => unref(form).description = $event,
                        type: "text",
                        rows: "3",
                        placeholder: "Enter description",
                        class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).description]
                      ]),
                      createVNode(_sfc_main$4, {
                        message: unref(form).errors.description
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
              onSubmitAction: updateExpense
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"${_scopeId2}><div class="flex flex-col"${_scopeId2}><label for="name"${_scopeId2}>Name</label><input id="name"${ssrRenderAttr("value", unref(form).name)} type="text" placeholder="Enter name" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    message: unref(form).errors.name
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col"${_scopeId2}><label for="amount"${_scopeId2}>Amount</label><input id="amount"${ssrRenderAttr("value", unref(form).amount)} type="number" placeholder="Enter amount" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    message: unref(form).errors.amount
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col"${_scopeId2}><label for="expense_date"${_scopeId2}>Expense Date</label><input id="expense_date"${ssrRenderAttr("value", unref(form).expense_date)} type="date" placeholder="Enter expense date" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    message: unref(form).errors.expense_date
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="mt-2"${_scopeId2}><label for="description" class="text-stone-600 text-sm font-medium"${_scopeId2}>Description</label><textarea id="description" type="text" rows="3" placeholder="Enter description" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId2}>${ssrInterpolate(unref(form).description)}</textarea>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    message: unref(form).errors.description
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" }, [
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", { for: "name" }, "Name"),
                        withDirectives(createVNode("input", {
                          id: "name",
                          ref_key: "nameInput",
                          ref: nameInput,
                          "onUpdate:modelValue": ($event) => unref(form).name = $event,
                          onKeyup: withKeys(updateExpense, ["enter"]),
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
                        createVNode("label", { for: "amount" }, "Amount"),
                        withDirectives(createVNode("input", {
                          id: "amount",
                          "onUpdate:modelValue": ($event) => unref(form).amount = $event,
                          onKeyup: withKeys(updateExpense, ["enter"]),
                          type: "number",
                          placeholder: "Enter amount",
                          class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                        }, null, 40, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).amount]
                        ]),
                        createVNode(_sfc_main$4, {
                          message: unref(form).errors.amount
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", { for: "expense_date" }, "Expense Date"),
                        withDirectives(createVNode("input", {
                          id: "expense_date",
                          "onUpdate:modelValue": ($event) => unref(form).expense_date = $event,
                          onKeyup: withKeys(updateExpense, ["enter"]),
                          type: "date",
                          placeholder: "Enter expense date",
                          class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                        }, null, 40, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).expense_date]
                        ]),
                        createVNode(_sfc_main$4, {
                          message: unref(form).errors.expense_date
                        }, null, 8, ["message"])
                      ])
                    ]),
                    createVNode("div", { class: "mt-2" }, [
                      createVNode("label", {
                        for: "description",
                        class: "text-stone-600 text-sm font-medium"
                      }, "Description"),
                      withDirectives(createVNode("textarea", {
                        id: "description",
                        "onUpdate:modelValue": ($event) => unref(form).description = $event,
                        type: "text",
                        rows: "3",
                        placeholder: "Enter description",
                        class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).description]
                      ]),
                      createVNode(_sfc_main$4, {
                        message: unref(form).errors.description
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
              onSubmitAction: deleteExpense,
              maxWidth: "sm",
              submitButtonText: "Yes, delete it!"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Are you sure you want to delete this expense? `);
                } else {
                  return [
                    createTextVNode(" Are you sure you want to delete this expense? ")
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
                    indexRoute: "expenses.index",
                    paginatedData: __props.expenses,
                    filters: __props.filters,
                    tableHeads: tableHeads.value,
                    showFilters: false
                  }, {
                    cardHeader: withCtx(() => [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("h4", { class: "text-2xl" }, "Expenses (" + toDisplayString(__props.expenses.total) + ")", 1)
                      ])
                    ]),
                    cardHeaderRight: withCtx(() => [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("a", {
                          href: _ctx.route("expenses.index", { export: "excel" }),
                          class: "active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                        }, "Export", 8, ["href"]),
                        createVNode(_sfc_main$2, {
                          onClick: ($event) => showCreateModal.value = true
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Create Expense")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ]),
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.expenses.data, (expense, index) => {
                        return openBlock(), createBlock("tr", {
                          key: expense.id
                        }, [
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.expenses.current_page * __props.expenses.per_page - (__props.expenses.per_page - (index + 1))), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(expense.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(expense.amount), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(expense.expense_date), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2, {
                                onClick: ($event) => editExpenseModal(expense)
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", { class: "fa fa-edit" })
                                ]),
                                _: 2
                              }, 1032, ["onClick"]),
                              createVNode(_sfc_main$2, {
                                onClick: ($event) => deleteExpenseModal(expense),
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
                onSubmitAction: createExpense
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" }, [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("label", { for: "name" }, "Name"),
                      withDirectives(createVNode("input", {
                        id: "name",
                        ref_key: "nameInput",
                        ref: nameInput,
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        onKeyup: withKeys(createExpense, ["enter"]),
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
                      createVNode("label", { for: "amount" }, "Amount"),
                      withDirectives(createVNode("input", {
                        id: "amount",
                        "onUpdate:modelValue": ($event) => unref(form).amount = $event,
                        onKeyup: withKeys(createExpense, ["enter"]),
                        type: "number",
                        placeholder: "Enter amount",
                        class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                      }, null, 40, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).amount]
                      ]),
                      createVNode(_sfc_main$4, {
                        message: unref(form).errors.amount
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("label", { for: "expense_date" }, "Expense Date"),
                      withDirectives(createVNode("input", {
                        id: "expense_date",
                        "onUpdate:modelValue": ($event) => unref(form).expense_date = $event,
                        onKeyup: withKeys(createExpense, ["enter"]),
                        type: "date",
                        placeholder: "Enter expense date",
                        class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                      }, null, 40, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).expense_date]
                      ]),
                      createVNode(_sfc_main$4, {
                        message: unref(form).errors.expense_date
                      }, null, 8, ["message"])
                    ])
                  ]),
                  createVNode("div", { class: "mt-2" }, [
                    createVNode("label", {
                      for: "description",
                      class: "text-stone-600 text-sm font-medium"
                    }, "Description"),
                    withDirectives(createVNode("textarea", {
                      id: "description",
                      "onUpdate:modelValue": ($event) => unref(form).description = $event,
                      type: "text",
                      rows: "3",
                      placeholder: "Enter description",
                      class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).description]
                    ]),
                    createVNode(_sfc_main$4, {
                      message: unref(form).errors.description
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
                onSubmitAction: updateExpense
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" }, [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("label", { for: "name" }, "Name"),
                      withDirectives(createVNode("input", {
                        id: "name",
                        ref_key: "nameInput",
                        ref: nameInput,
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        onKeyup: withKeys(updateExpense, ["enter"]),
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
                      createVNode("label", { for: "amount" }, "Amount"),
                      withDirectives(createVNode("input", {
                        id: "amount",
                        "onUpdate:modelValue": ($event) => unref(form).amount = $event,
                        onKeyup: withKeys(updateExpense, ["enter"]),
                        type: "number",
                        placeholder: "Enter amount",
                        class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                      }, null, 40, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).amount]
                      ]),
                      createVNode(_sfc_main$4, {
                        message: unref(form).errors.amount
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("label", { for: "expense_date" }, "Expense Date"),
                      withDirectives(createVNode("input", {
                        id: "expense_date",
                        "onUpdate:modelValue": ($event) => unref(form).expense_date = $event,
                        onKeyup: withKeys(updateExpense, ["enter"]),
                        type: "date",
                        placeholder: "Enter expense date",
                        class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                      }, null, 40, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).expense_date]
                      ]),
                      createVNode(_sfc_main$4, {
                        message: unref(form).errors.expense_date
                      }, null, 8, ["message"])
                    ])
                  ]),
                  createVNode("div", { class: "mt-2" }, [
                    createVNode("label", {
                      for: "description",
                      class: "text-stone-600 text-sm font-medium"
                    }, "Description"),
                    withDirectives(createVNode("textarea", {
                      id: "description",
                      "onUpdate:modelValue": ($event) => unref(form).description = $event,
                      type: "text",
                      rows: "3",
                      placeholder: "Enter description",
                      class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).description]
                    ]),
                    createVNode(_sfc_main$4, {
                      message: unref(form).errors.description
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
                onSubmitAction: deleteExpense,
                maxWidth: "sm",
                submitButtonText: "Yes, delete it!"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Are you sure you want to delete this expense? ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Expense/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
