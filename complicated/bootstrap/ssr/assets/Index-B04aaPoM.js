import { ref, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext, nextTick } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-dwp8_xu4.js";
import { useForm, Head } from "@inertiajs/vue3";
import { C as CardTable, T as TableData } from "./CardTable-CLSKi596.js";
import { _ as _sfc_main$2 } from "./Button-CQhKcULN.js";
import { _ as _sfc_main$4 } from "./InputError-fLcttu_2.js";
import { _ as _sfc_main$3 } from "./Modal-i5NunLpR.js";
import { _ as _sfc_main$5 } from "./DashboardInputGroup-KLfMQA2p.js";
import { A as AsyncVueSelect, s as showToast } from "./AsyncVueSelect-DAiIkMoY.js";
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
    salaries: {
      type: Object
    }
  },
  setup(__props) {
    const selectedSalary = ref(null);
    const showCreateModal = ref(false);
    const showEditModal = ref(false);
    const showDeleteModal = ref(false);
    const nameInput = ref(null);
    const tableHeads = ref(["#", "Employee", "Amount", "Salary Date", "Action"]);
    const form = useForm({
      employee_id: "",
      amount: "",
      salary_date: ""
    });
    const editSalaryModal = (salary) => {
      selectedSalary.value = salary;
      form.employee_id = salary.employee_id;
      form.amount = salary.amount;
      form.salary_date = salary.salary_date;
      showEditModal.value = true;
      nextTick(() => nameInput.value.focus());
    };
    const deleteSalaryModal = (salary) => {
      selectedSalary.value = salary;
      showDeleteModal.value = true;
    };
    const createSalary = () => {
      form.post(route("salaries.store"), {
        preserveScroll: true,
        onSuccess: (e) => {
          closeModal();
          showToast();
        },
        onError: () => nameInput.value.focus()
      });
    };
    const updateSalary = () => {
      form.put(route("salaries.update", selectedSalary.value.id), {
        preserveScroll: true,
        onSuccess: () => {
          closeModal();
          showToast();
        },
        onError: () => nameInput.value.focus()
      });
    };
    const deleteSalary = () => {
      form.delete(route("salaries.destroy", selectedSalary.value.id), {
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
      _push(ssrRenderComponent(unref(Head), { title: "Salary" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Salary `);
          } else {
            return [
              createTextVNode(" Salary ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap"${_scopeId}><div class="w-full px-4"${_scopeId}>`);
            _push2(ssrRenderComponent(CardTable, {
              indexRoute: "salaries.index",
              paginatedData: __props.salaries,
              filters: __props.filters,
              tableHeads: tableHeads.value,
              showFilters: false
            }, {
              cardHeader: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}><h4 class="text-2xl"${_scopeId2}>Salary (${ssrInterpolate(__props.salaries.total)})</h4></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("h4", { class: "text-2xl" }, "Salary (" + toDisplayString(__props.salaries.total) + ")", 1)
                    ])
                  ];
                }
              }),
              cardHeaderRight: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}><a${ssrRenderAttr("href", _ctx.route("salaries.index", { export: "excel" }))} class="active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"${_scopeId2}>Export</a>`);
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    onClick: ($event) => showCreateModal.value = true
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Pay Salary`);
                      } else {
                        return [
                          createTextVNode("Pay Salary")
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
                        href: _ctx.route("salaries.index", { export: "excel" }),
                        class: "active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                      }, "Export", 8, ["href"]),
                      createVNode(_sfc_main$2, {
                        onClick: ($event) => showCreateModal.value = true
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Pay Salary")
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
                  ssrRenderList(__props.salaries.data, (salary, index) => {
                    _push3(`<tr${_scopeId2}>`);
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(__props.salaries.current_page * __props.salaries.per_page - (__props.salaries.per_page - (index + 1)))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(__props.salaries.current_page * __props.salaries.per_page - (__props.salaries.per_page - (index + 1))), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(salary.employee.name)} (${ssrInterpolate(salary.employee.designation)})`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(salary.employee.name) + " (" + toDisplayString(salary.employee.designation) + ")", 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(salary.amount)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(salary.amount), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(salary.salary_date)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(salary.salary_date), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(TableData, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$2, {
                            onClick: ($event) => editSalaryModal(salary)
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
                            onClick: ($event) => deleteSalaryModal(salary),
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
                              onClick: ($event) => editSalaryModal(salary)
                            }, {
                              default: withCtx(() => [
                                createVNode("i", { class: "fa fa-edit" })
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            createVNode(_sfc_main$2, {
                              onClick: ($event) => deleteSalaryModal(salary),
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
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.salaries.data, (salary, index) => {
                      return openBlock(), createBlock("tr", {
                        key: salary.id
                      }, [
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.salaries.current_page * __props.salaries.per_page - (__props.salaries.per_page - (index + 1))), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(salary.employee.name) + " (" + toDisplayString(salary.employee.designation) + ")", 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(salary.amount), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(salary.salary_date), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(TableData, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2, {
                              onClick: ($event) => editSalaryModal(salary)
                            }, {
                              default: withCtx(() => [
                                createVNode("i", { class: "fa fa-edit" })
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            createVNode(_sfc_main$2, {
                              onClick: ($event) => deleteSalaryModal(salary),
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
              title: "Pay Salary",
              show: showCreateModal.value,
              formProcessing: unref(form).processing,
              onClose: closeModal,
              onSubmitAction: createSalary
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mt-2 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 min-h-32"${_scopeId2}><div class="flex flex-col"${_scopeId2}><label for="employee" class="text-stone-600 text-sm font-medium"${_scopeId2}>Select Employee</label>`);
                  _push3(ssrRenderComponent(AsyncVueSelect, {
                    modelValue: unref(form).employee_id,
                    "onUpdate:modelValue": ($event) => unref(form).employee_id = $event,
                    resource: "employees.index",
                    placeholder: "Select employee",
                    class: "mt-2"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    message: unref(form).errors.employee_id
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col overflow-auto"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    label: "Salary Date",
                    name: "salary_date",
                    modelValue: unref(form).salary_date,
                    "onUpdate:modelValue": ($event) => unref(form).salary_date = $event,
                    placeholder: "Enter salary date",
                    errorMessage: unref(form).errors.salary_date,
                    onKeyupEnter: createSalary,
                    type: "date"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "mt-2 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 min-h-32" }, [
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", {
                          for: "employee",
                          class: "text-stone-600 text-sm font-medium"
                        }, "Select Employee"),
                        createVNode(AsyncVueSelect, {
                          modelValue: unref(form).employee_id,
                          "onUpdate:modelValue": ($event) => unref(form).employee_id = $event,
                          resource: "employees.index",
                          placeholder: "Select employee",
                          class: "mt-2"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$4, {
                          message: unref(form).errors.employee_id
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "flex flex-col overflow-auto" }, [
                        createVNode(_sfc_main$5, {
                          label: "Salary Date",
                          name: "salary_date",
                          modelValue: unref(form).salary_date,
                          "onUpdate:modelValue": ($event) => unref(form).salary_date = $event,
                          placeholder: "Enter salary date",
                          errorMessage: unref(form).errors.salary_date,
                          onKeyupEnter: createSalary,
                          type: "date"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
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
              onSubmitAction: updateSalary
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    label: "Employee",
                    name: "employee_id",
                    modelValue: unref(form).employee_id,
                    "onUpdate:modelValue": ($event) => unref(form).employee_id = $event,
                    placeholder: "Select employee",
                    errorMessage: unref(form).errors.employee_id,
                    onKeyupEnter: createSalary
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="mt-2 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"${_scopeId2}><div class="flex flex-col overflow-auto"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    label: "Amount",
                    name: "amount",
                    modelValue: unref(form).amount,
                    "onUpdate:modelValue": ($event) => unref(form).amount = $event,
                    placeholder: "Enter amount",
                    errorMessage: unref(form).errors.amount,
                    onKeyupEnter: createSalary,
                    type: "number"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col overflow-auto"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    label: "Salary Date",
                    name: "salary_date",
                    modelValue: unref(form).salary_date,
                    "onUpdate:modelValue": ($event) => unref(form).salary_date = $event,
                    placeholder: "Enter salary date",
                    errorMessage: unref(form).errors.salary_date,
                    onKeyupEnter: createSalary,
                    type: "date"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode(_sfc_main$5, {
                        label: "Employee",
                        name: "employee_id",
                        modelValue: unref(form).employee_id,
                        "onUpdate:modelValue": ($event) => unref(form).employee_id = $event,
                        placeholder: "Select employee",
                        errorMessage: unref(form).errors.employee_id,
                        onKeyupEnter: createSalary
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                    ]),
                    createVNode("div", { class: "mt-2 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" }, [
                      createVNode("div", { class: "flex flex-col overflow-auto" }, [
                        createVNode(_sfc_main$5, {
                          label: "Amount",
                          name: "amount",
                          modelValue: unref(form).amount,
                          "onUpdate:modelValue": ($event) => unref(form).amount = $event,
                          placeholder: "Enter amount",
                          errorMessage: unref(form).errors.amount,
                          onKeyupEnter: createSalary,
                          type: "number"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                      ]),
                      createVNode("div", { class: "flex flex-col overflow-auto" }, [
                        createVNode(_sfc_main$5, {
                          label: "Salary Date",
                          name: "salary_date",
                          modelValue: unref(form).salary_date,
                          "onUpdate:modelValue": ($event) => unref(form).salary_date = $event,
                          placeholder: "Enter salary date",
                          errorMessage: unref(form).errors.salary_date,
                          onKeyupEnter: createSalary,
                          type: "date"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
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
              onSubmitAction: deleteSalary,
              maxWidth: "sm",
              submitButtonText: "Yes, delete it!"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Are you sure you want to delete this salary? `);
                } else {
                  return [
                    createTextVNode(" Are you sure you want to delete this salary? ")
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
                    indexRoute: "salaries.index",
                    paginatedData: __props.salaries,
                    filters: __props.filters,
                    tableHeads: tableHeads.value,
                    showFilters: false
                  }, {
                    cardHeader: withCtx(() => [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("h4", { class: "text-2xl" }, "Salary (" + toDisplayString(__props.salaries.total) + ")", 1)
                      ])
                    ]),
                    cardHeaderRight: withCtx(() => [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("a", {
                          href: _ctx.route("salaries.index", { export: "excel" }),
                          class: "active:scale-95 rounded bg-gray-700 px-4 py-2 text-white text-xs font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                        }, "Export", 8, ["href"]),
                        createVNode(_sfc_main$2, {
                          onClick: ($event) => showCreateModal.value = true
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Pay Salary")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ]),
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.salaries.data, (salary, index) => {
                        return openBlock(), createBlock("tr", {
                          key: salary.id
                        }, [
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.salaries.current_page * __props.salaries.per_page - (__props.salaries.per_page - (index + 1))), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(salary.employee.name) + " (" + toDisplayString(salary.employee.designation) + ")", 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(salary.amount), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(salary.salary_date), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(TableData, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2, {
                                onClick: ($event) => editSalaryModal(salary)
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", { class: "fa fa-edit" })
                                ]),
                                _: 2
                              }, 1032, ["onClick"]),
                              createVNode(_sfc_main$2, {
                                onClick: ($event) => deleteSalaryModal(salary),
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
                title: "Pay Salary",
                show: showCreateModal.value,
                formProcessing: unref(form).processing,
                onClose: closeModal,
                onSubmitAction: createSalary
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mt-2 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 min-h-32" }, [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("label", {
                        for: "employee",
                        class: "text-stone-600 text-sm font-medium"
                      }, "Select Employee"),
                      createVNode(AsyncVueSelect, {
                        modelValue: unref(form).employee_id,
                        "onUpdate:modelValue": ($event) => unref(form).employee_id = $event,
                        resource: "employees.index",
                        placeholder: "Select employee",
                        class: "mt-2"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$4, {
                        message: unref(form).errors.employee_id
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", { class: "flex flex-col overflow-auto" }, [
                      createVNode(_sfc_main$5, {
                        label: "Salary Date",
                        name: "salary_date",
                        modelValue: unref(form).salary_date,
                        "onUpdate:modelValue": ($event) => unref(form).salary_date = $event,
                        placeholder: "Enter salary date",
                        errorMessage: unref(form).errors.salary_date,
                        onKeyupEnter: createSalary,
                        type: "date"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
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
                onSubmitAction: updateSalary
              }, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode(_sfc_main$5, {
                      label: "Employee",
                      name: "employee_id",
                      modelValue: unref(form).employee_id,
                      "onUpdate:modelValue": ($event) => unref(form).employee_id = $event,
                      placeholder: "Select employee",
                      errorMessage: unref(form).errors.employee_id,
                      onKeyupEnter: createSalary
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                  ]),
                  createVNode("div", { class: "mt-2 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" }, [
                    createVNode("div", { class: "flex flex-col overflow-auto" }, [
                      createVNode(_sfc_main$5, {
                        label: "Amount",
                        name: "amount",
                        modelValue: unref(form).amount,
                        "onUpdate:modelValue": ($event) => unref(form).amount = $event,
                        placeholder: "Enter amount",
                        errorMessage: unref(form).errors.amount,
                        onKeyupEnter: createSalary,
                        type: "number"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
                    ]),
                    createVNode("div", { class: "flex flex-col overflow-auto" }, [
                      createVNode(_sfc_main$5, {
                        label: "Salary Date",
                        name: "salary_date",
                        modelValue: unref(form).salary_date,
                        "onUpdate:modelValue": ($event) => unref(form).salary_date = $event,
                        placeholder: "Enter salary date",
                        errorMessage: unref(form).errors.salary_date,
                        onKeyupEnter: createSalary,
                        type: "date"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "errorMessage"])
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
                onSubmitAction: deleteSalary,
                maxWidth: "sm",
                submitButtonText: "Yes, delete it!"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Are you sure you want to delete this salary? ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Salary/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
