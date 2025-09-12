import { computed, mergeProps, useSSRContext, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, withModifiers, withDirectives, vModelText } from "vue";
import { ssrRenderAttrs, ssrLooseContain, ssrGetDynamicModelProps, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./AuthLayout-BiMqYNma.js";
import { _ as _sfc_main$3 } from "./InputError-fLcttu_2.js";
import { useForm, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$4 } from "./SubmitButton-B3gBT10i.js";
import "./GuestNavbar-C88ut_hI.js";
import "@popperjs/core";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ApplicationLogo-BZyRwGK2.js";
const _sfc_main$1 = {
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    checked: {
      type: [Array, Boolean],
      required: true
    },
    value: {
      default: null
    }
  },
  emits: ["update:checked"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const proxyChecked = computed({
      get() {
        return props.checked;
      },
      set(val) {
        emit("update:checked", val);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        type: "checkbox",
        value: __props.value,
        checked: Array.isArray(proxyChecked.value) ? ssrLooseContain(proxyChecked.value, __props.value) : proxyChecked.value,
        class: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, proxyChecked.value))))}>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Checkbox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    pageTitle: {
      type: String
    },
    canResetPassword: {
      type: Boolean
    },
    canRegister: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.post(route("login"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: __props.pageTitle }, null, _parent2, _scopeId));
            if (__props.status) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="container mx-auto px-4 h-full"${_scopeId}><div class="flex content-center items-center justify-center h-full"${_scopeId}><div class="w-full lg:w-4/12 px-4"${_scopeId}><div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"${_scopeId}><div class="rounded-t mb-0 px-6 py-6"${_scopeId}><div class="text-center mb-3"${_scopeId}><h6 class="text-blueGray-500 text-sm font-bold"${_scopeId}> Sign in with credentials </h6></div><hr class="mt-6 border-b-1 border-blueGray-300"${_scopeId}></div><div class="flex-auto px-4 lg:px-10 py-10 pt-0"${_scopeId}><form${_scopeId}><div class="relative w-full mb-3"${_scopeId}><label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="email"${_scopeId}> Email </label><input id="email" type="email"${ssrRenderAttr("value", unref(form).email)} required autofocus class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="relative w-full mb-3"${_scopeId}><label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="password"${_scopeId}> Password </label><input id="password" type="password" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Password"${ssrRenderAttr("value", unref(form).password)} required autocomplete="current-password"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="inline-flex items-center cursor-pointer"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              name: "remember",
              checked: unref(form).remember,
              "onUpdate:checked": ($event) => unref(form).remember = $event,
              class: "form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-2 text-sm font-semibold text-blueGray-600"${_scopeId}> Remember me </span></label></div><div class="text-center mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150",
              processing: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Sign In `);
                } else {
                  return [
                    createTextVNode(" Sign In ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div></div><div class="flex flex-wrap mt-6 relative"${_scopeId}><div class="w-1/2"${_scopeId}></div><div class="w-1/2 text-right"${_scopeId}></div></div></div></div></div>`);
          } else {
            return [
              createVNode(unref(Head), { title: __props.pageTitle }, null, 8, ["title"]),
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              createVNode("div", { class: "container mx-auto px-4 h-full" }, [
                createVNode("div", { class: "flex content-center items-center justify-center h-full" }, [
                  createVNode("div", { class: "w-full lg:w-4/12 px-4" }, [
                    createVNode("div", { class: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0" }, [
                      createVNode("div", { class: "rounded-t mb-0 px-6 py-6" }, [
                        createVNode("div", { class: "text-center mb-3" }, [
                          createVNode("h6", { class: "text-blueGray-500 text-sm font-bold" }, " Sign in with credentials ")
                        ]),
                        createVNode("hr", { class: "mt-6 border-b-1 border-blueGray-300" })
                      ]),
                      createVNode("div", { class: "flex-auto px-4 lg:px-10 py-10 pt-0" }, [
                        createVNode("form", {
                          onSubmit: withModifiers(submit, ["prevent"])
                        }, [
                          createVNode("div", { class: "relative w-full mb-3" }, [
                            createVNode("label", {
                              class: "block uppercase text-blueGray-600 text-xs font-bold mb-2",
                              for: "email"
                            }, " Email "),
                            withDirectives(createVNode("input", {
                              id: "email",
                              type: "email",
                              "onUpdate:modelValue": ($event) => unref(form).email = $event,
                              required: "",
                              autofocus: "",
                              class: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                              placeholder: "Email"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).email]
                            ]),
                            createVNode(_sfc_main$3, {
                              message: unref(form).errors.email
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "relative w-full mb-3" }, [
                            createVNode("label", {
                              class: "block uppercase text-blueGray-600 text-xs font-bold mb-2",
                              for: "password"
                            }, " Password "),
                            withDirectives(createVNode("input", {
                              id: "password",
                              type: "password",
                              class: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                              placeholder: "Password",
                              "onUpdate:modelValue": ($event) => unref(form).password = $event,
                              required: "",
                              autocomplete: "current-password"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).password]
                            ]),
                            createVNode(_sfc_main$3, {
                              message: unref(form).errors.password
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "inline-flex items-center cursor-pointer" }, [
                              createVNode(_sfc_main$1, {
                                name: "remember",
                                checked: unref(form).remember,
                                "onUpdate:checked": ($event) => unref(form).remember = $event,
                                class: "form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                              }, null, 8, ["checked", "onUpdate:checked"]),
                              createVNode("span", { class: "ml-2 text-sm font-semibold text-blueGray-600" }, " Remember me ")
                            ])
                          ]),
                          createVNode("div", { class: "text-center mt-6" }, [
                            createVNode(_sfc_main$4, {
                              class: "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150",
                              processing: unref(form).processing
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Sign In ")
                              ]),
                              _: 1
                            }, 8, ["processing"])
                          ])
                        ], 32)
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-wrap mt-6 relative" }, [
                      createVNode("div", { class: "w-1/2" }),
                      createVNode("div", { class: "w-1/2 text-right" })
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
