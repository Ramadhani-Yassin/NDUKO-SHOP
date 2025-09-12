import { ref, unref, withCtx, createTextVNode, createVNode, withDirectives, withKeys, vModelText, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-dwp8_xu4.js";
import { useForm, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./InputError-fLcttu_2.js";
import { _ as _sfc_main$2 } from "./Button-CQhKcULN.js";
import { _ as _sfc_main$4 } from "./SubmitButton-B3gBT10i.js";
import { A as AsyncVueSelect, s as showToast } from "./AsyncVueSelect-DAiIkMoY.js";
import "@popperjs/core";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ApplicationLogo-BZyRwGK2.js";
import "notivue";
import "vue-select";
import "lodash/pickBy.js";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    filters: {
      type: Object
    }
  },
  setup(__props) {
    const nameInput = ref(null);
    ref(false);
    ref(null);
    ref(null);
    const form = useForm({
      category_id: null,
      supplier_id: null,
      name: null,
      description: null,
      product_code: null,
      root: null,
      buying_date: null,
      buying_price: null,
      selling_price: null,
      unit_type_id: null,
      quantity: null,
      photo: null,
      status: "active"
    });
    const createProduct = () => {
      form.post(route("products.store"), {
        preserveScroll: true,
        onSuccess: () => {
          showToast();
        },
        onError: () => nameInput.value.focus()
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Product" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Products &gt; Create `);
          } else {
            return [
              createTextVNode(" Products > Create ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap"${_scopeId}><div class="w-full px-4"${_scopeId}><div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"${_scopeId}><div class="rounded-t mb-3 px-4 py-3 border-0"${_scopeId}><div class="flex flex-wrap items-center"${_scopeId}><div class="relative w-full px-4 max-w-full flex-grow flex-1"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><h4 class="text-2xl"${_scopeId}>Create Product</h4>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              href: _ctx.route("products.index"),
              buttonType: "link"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Go Back `);
                } else {
                  return [
                    createTextVNode(" Go Back ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div><div class="block w-full overflow-x-auto px-8 py-4"${_scopeId}><div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"${_scopeId}><div class="flex flex-col"${_scopeId}><label for="category" class="text-stone-600 text-sm font-medium"${_scopeId}>Select Category</label>`);
            _push2(ssrRenderComponent(AsyncVueSelect, {
              modelValue: unref(form).category_id,
              "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
              resource: "categories.index",
              placeholder: "Select category",
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              message: unref(form).errors.category_id
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col"${_scopeId}><label for="supplier" class="text-stone-600 text-sm font-medium"${_scopeId}>Select Supplier</label>`);
            _push2(ssrRenderComponent(AsyncVueSelect, {
              modelValue: unref(form).supplier_id,
              "onUpdate:modelValue": ($event) => unref(form).supplier_id = $event,
              resource: "suppliers.index",
              placeholder: "Select supplier",
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              message: unref(form).errors.supplier_id
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col"${_scopeId}><label for="name" class="text-stone-600 text-sm font-medium"${_scopeId}>Name</label><input id="name"${ssrRenderAttr("value", unref(form).name)} type="text" placeholder="Enter name" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col"${_scopeId}><label for="product_code" class="text-stone-600 text-sm font-medium"${_scopeId}>Product Code</label><input id="product_code"${ssrRenderAttr("value", unref(form).product_code)} type="text" placeholder="Enter product code" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              message: unref(form).errors.product_code
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col"${_scopeId}><label for="root" class="text-stone-600 text-sm font-medium"${_scopeId}>Supplier Location</label><input id="root"${ssrRenderAttr("value", unref(form).root)} type="text" placeholder="Supplier Location" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              message: unref(form).errors.root
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col"${_scopeId}><label for="buying_date" class="text-stone-600 text-sm font-medium"${_scopeId}>Buying Date</label><input id="buying_date"${ssrRenderAttr("value", unref(form).buying_date)} type="date" placeholder="Enter buying date" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              message: unref(form).errors.buying_date
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col"${_scopeId}><label for="buying_price" class="text-stone-600 text-sm font-medium"${_scopeId}>Buying Price</label><input id="buying_price"${ssrRenderAttr("value", unref(form).buying_price)} type="number" placeholder="Enter buying price" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              message: unref(form).errors.buying_price
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col"${_scopeId}><label for="selling_price" class="text-stone-600 text-sm font-medium"${_scopeId}>Selling Price</label><input id="selling_price"${ssrRenderAttr("value", unref(form).selling_price)} type="number" placeholder="Enter selling price" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              message: unref(form).errors.selling_price
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col"${_scopeId}><label for="quantity" class="text-stone-600 text-sm font-medium"${_scopeId}>Quantity</label><div class="flex mt-1"${_scopeId}>`);
            _push2(ssrRenderComponent(AsyncVueSelect, {
              modelValue: unref(form).unit_type_id,
              "onUpdate:modelValue": ($event) => unref(form).unit_type_id = $event,
              resource: "unit-types.index",
              placeholder: "Select unit type",
              class: "w-1/2 rounded-l-md bg-gray-300 border-none outline-none focus:outline-none"
            }, null, _parent2, _scopeId));
            _push2(`<input id="quantity"${ssrRenderAttr("value", unref(form).quantity)} type="number" placeholder="Enter quantity" class="w-full rounded-r-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              message: unref(form).errors.unit_type_id
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              message: unref(form).errors.quantity
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col"${_scopeId}><label for="status" class="text-stone-600 text-sm font-medium"${_scopeId}>Status</label><select id="status" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId}><option value="active"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "active") : ssrLooseEqual(unref(form).status, "active")) ? " selected" : ""}${_scopeId}>Active</option><option value="inactive"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "inactive") : ssrLooseEqual(unref(form).status, "inactive")) ? " selected" : ""}${_scopeId}>Inactive</option></select>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              message: unref(form).errors.status
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col"${_scopeId}></div><div class="flex flex-col"${_scopeId}><label for="description" class="text-stone-600 text-sm font-medium"${_scopeId}>Description</label><textarea id="description" type="text" rows="3" placeholder="Enter description" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"${_scopeId}>${ssrInterpolate(unref(form).description)}</textarea>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              message: unref(form).errors.description
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="my-6 flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              processing: unref(form).processing,
              onClick: createProduct,
              class: "text-white bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Submit `);
                } else {
                  return [
                    createTextVNode(" Submit ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap" }, [
                createVNode("div", { class: "w-full px-4" }, [
                  createVNode("div", { class: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white" }, [
                    createVNode("div", { class: "rounded-t mb-3 px-4 py-3 border-0" }, [
                      createVNode("div", { class: "flex flex-wrap items-center" }, [
                        createVNode("div", { class: "relative w-full px-4 max-w-full flex-grow flex-1" }, [
                          createVNode("div", { class: "flex justify-between items-center" }, [
                            createVNode("h4", { class: "text-2xl" }, "Create Product"),
                            createVNode(_sfc_main$2, {
                              href: _ctx.route("products.index"),
                              buttonType: "link"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Go Back ")
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "block w-full overflow-x-auto px-8 py-4" }, [
                      createVNode("div", { class: "grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" }, [
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("label", {
                            for: "category",
                            class: "text-stone-600 text-sm font-medium"
                          }, "Select Category"),
                          createVNode(AsyncVueSelect, {
                            modelValue: unref(form).category_id,
                            "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
                            resource: "categories.index",
                            placeholder: "Select category",
                            class: "mt-2"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$3, {
                            message: unref(form).errors.category_id
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("label", {
                            for: "supplier",
                            class: "text-stone-600 text-sm font-medium"
                          }, "Select Supplier"),
                          createVNode(AsyncVueSelect, {
                            modelValue: unref(form).supplier_id,
                            "onUpdate:modelValue": ($event) => unref(form).supplier_id = $event,
                            resource: "suppliers.index",
                            placeholder: "Select supplier",
                            class: "mt-2"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$3, {
                            message: unref(form).errors.supplier_id
                          }, null, 8, ["message"])
                        ]),
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
                            onKeyup: withKeys(createProduct, ["enter"]),
                            type: "text",
                            placeholder: "Enter name",
                            class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                          }, null, 40, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).name]
                          ]),
                          createVNode(_sfc_main$3, {
                            message: unref(form).errors.name
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("label", {
                            for: "product_code",
                            class: "text-stone-600 text-sm font-medium"
                          }, "Product Code"),
                          withDirectives(createVNode("input", {
                            id: "product_code",
                            "onUpdate:modelValue": ($event) => unref(form).product_code = $event,
                            onKeyup: withKeys(createProduct, ["enter"]),
                            type: "text",
                            placeholder: "Enter product code",
                            class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                          }, null, 40, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).product_code]
                          ]),
                          createVNode(_sfc_main$3, {
                            message: unref(form).errors.product_code
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("label", {
                            for: "root",
                            class: "text-stone-600 text-sm font-medium"
                          }, "Supplier Location"),
                          withDirectives(createVNode("input", {
                            id: "root",
                            "onUpdate:modelValue": ($event) => unref(form).root = $event,
                            onKeyup: withKeys(createProduct, ["enter"]),
                            type: "text",
                            placeholder: "Supplier Location",
                            class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                          }, null, 40, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).root]
                          ]),
                          createVNode(_sfc_main$3, {
                            message: unref(form).errors.root
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("label", {
                            for: "buying_date",
                            class: "text-stone-600 text-sm font-medium"
                          }, "Buying Date"),
                          withDirectives(createVNode("input", {
                            id: "buying_date",
                            "onUpdate:modelValue": ($event) => unref(form).buying_date = $event,
                            onKeyup: withKeys(createProduct, ["enter"]),
                            type: "date",
                            placeholder: "Enter buying date",
                            class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                          }, null, 40, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).buying_date]
                          ]),
                          createVNode(_sfc_main$3, {
                            message: unref(form).errors.buying_date
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("label", {
                            for: "buying_price",
                            class: "text-stone-600 text-sm font-medium"
                          }, "Buying Price"),
                          withDirectives(createVNode("input", {
                            id: "buying_price",
                            "onUpdate:modelValue": ($event) => unref(form).buying_price = $event,
                            onKeyup: withKeys(createProduct, ["enter"]),
                            type: "number",
                            placeholder: "Enter buying price",
                            class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                          }, null, 40, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).buying_price]
                          ]),
                          createVNode(_sfc_main$3, {
                            message: unref(form).errors.buying_price
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("label", {
                            for: "selling_price",
                            class: "text-stone-600 text-sm font-medium"
                          }, "Selling Price"),
                          withDirectives(createVNode("input", {
                            id: "selling_price",
                            "onUpdate:modelValue": ($event) => unref(form).selling_price = $event,
                            onKeyup: withKeys(createProduct, ["enter"]),
                            type: "number",
                            placeholder: "Enter selling price",
                            class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                          }, null, 40, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).selling_price]
                          ]),
                          createVNode(_sfc_main$3, {
                            message: unref(form).errors.selling_price
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("label", {
                            for: "quantity",
                            class: "text-stone-600 text-sm font-medium"
                          }, "Quantity"),
                          createVNode("div", { class: "flex mt-1" }, [
                            createVNode(AsyncVueSelect, {
                              modelValue: unref(form).unit_type_id,
                              "onUpdate:modelValue": ($event) => unref(form).unit_type_id = $event,
                              resource: "unit-types.index",
                              placeholder: "Select unit type",
                              class: "w-1/2 rounded-l-md bg-gray-300 border-none outline-none focus:outline-none"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            withDirectives(createVNode("input", {
                              id: "quantity",
                              "onUpdate:modelValue": ($event) => unref(form).quantity = $event,
                              onKeyup: withKeys(createProduct, ["enter"]),
                              type: "number",
                              placeholder: "Enter quantity",
                              class: "w-full rounded-r-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                            }, null, 40, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).quantity]
                            ])
                          ]),
                          createVNode(_sfc_main$3, {
                            message: unref(form).errors.unit_type_id
                          }, null, 8, ["message"]),
                          createVNode(_sfc_main$3, {
                            message: unref(form).errors.quantity
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("label", {
                            for: "status",
                            class: "text-stone-600 text-sm font-medium"
                          }, "Status"),
                          withDirectives(createVNode("select", {
                            id: "status",
                            "onUpdate:modelValue": ($event) => unref(form).status = $event,
                            class: "mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline"
                          }, [
                            createVNode("option", { value: "active" }, "Active"),
                            createVNode("option", { value: "inactive" }, "Inactive")
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(form).status]
                          ]),
                          createVNode(_sfc_main$3, {
                            message: unref(form).errors.status
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "flex flex-col" }),
                        createVNode("div", { class: "flex flex-col" }, [
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
                          createVNode(_sfc_main$3, {
                            message: unref(form).errors.description
                          }, null, 8, ["message"])
                        ])
                      ]),
                      createVNode("div", { class: "my-6 flex justify-end" }, [
                        createVNode(_sfc_main$4, {
                          processing: unref(form).processing,
                          onClick: createProduct,
                          class: "text-white bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Submit ")
                          ]),
                          _: 1
                        }, 8, ["processing"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Product/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
