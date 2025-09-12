import { withCtx, unref, createTextVNode, createVNode, withModifiers, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$4 } from "./InputError-fLcttu_2.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./TextInput--Bmh7Z3C.js";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AuthLayout-BiMqYNma.js";
import { _ as _sfc_main$5 } from "./SubmitButton-B3gBT10i.js";
import "./GuestNavbar-C88ut_hI.js";
import "@popperjs/core";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ApplicationLogo-BZyRwGK2.js";
const _sfc_main = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: ""
    });
    const submit = () => {
      form.post(route("password.email"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Forgot Password" }, null, _parent2, _scopeId));
            _push2(`<div class="container mx-auto px-4 h-full"${_scopeId}><div class="flex content-center items-center justify-center h-full"${_scopeId}><div class="w-full lg:w-4/12 px-4"${_scopeId}><div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"${_scopeId}><div class="rounded-t mb-0 px-6 py-6"${_scopeId}><div class="text-center"${_scopeId}><h6 class="text-blueGray-500 text-sm font-bold"${_scopeId}> Forgot your password? </h6><p${_scopeId}>No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.</p></div></div><div class="flex-auto px-4 lg:px-10 py-10 pt-0"${_scopeId}><form${_scopeId}><div class="relative w-full mb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "email",
              value: "Email",
              class: "block uppercase text-blueGray-600 text-xs font-bold mb-2"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "email",
              type: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username",
              class: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
              placeholder: "Enter email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-1",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            if (__props.status) {
              _push2(`<div class="mt-1 text-sm text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="text-center mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150",
              processing: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Email Password Reset Link `);
                } else {
                  return [
                    createTextVNode(" Email Password Reset Link ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div></div><div class="flex flex-wrap mt-6 relative"${_scopeId}><div class="w-1/2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("login"),
              class: "text-blueGray-200"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<small${_scopeId2}>Back to login</small>`);
                } else {
                  return [
                    createVNode("small", null, "Back to login")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="w-1/2 text-right"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("register"),
              class: "text-blueGray-200"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<small${_scopeId2}>Create new account</small>`);
                } else {
                  return [
                    createVNode("small", null, "Create new account")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div></div>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Forgot Password" }),
              createVNode("div", { class: "container mx-auto px-4 h-full" }, [
                createVNode("div", { class: "flex content-center items-center justify-center h-full" }, [
                  createVNode("div", { class: "w-full lg:w-4/12 px-4" }, [
                    createVNode("div", { class: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0" }, [
                      createVNode("div", { class: "rounded-t mb-0 px-6 py-6" }, [
                        createVNode("div", { class: "text-center" }, [
                          createVNode("h6", { class: "text-blueGray-500 text-sm font-bold" }, " Forgot your password? "),
                          createVNode("p", null, "No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.")
                        ])
                      ]),
                      createVNode("div", { class: "flex-auto px-4 lg:px-10 py-10 pt-0" }, [
                        createVNode("form", {
                          onSubmit: withModifiers(submit, ["prevent"])
                        }, [
                          createVNode("div", { class: "relative w-full mb-3" }, [
                            createVNode(_sfc_main$2, {
                              for: "email",
                              value: "Email",
                              class: "block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            }),
                            createVNode(_sfc_main$3, {
                              id: "email",
                              type: "email",
                              modelValue: unref(form).email,
                              "onUpdate:modelValue": ($event) => unref(form).email = $event,
                              required: "",
                              autofocus: "",
                              autocomplete: "username",
                              class: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                              placeholder: "Enter email"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-1",
                              message: unref(form).errors.email
                            }, null, 8, ["message"]),
                            __props.status ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "mt-1 text-sm text-green-600"
                            }, toDisplayString(__props.status), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "text-center mt-6" }, [
                            createVNode(_sfc_main$5, {
                              class: "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150",
                              processing: unref(form).processing
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Email Password Reset Link ")
                              ]),
                              _: 1
                            }, 8, ["processing"])
                          ])
                        ], 32)
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-wrap mt-6 relative" }, [
                      createVNode("div", { class: "w-1/2" }, [
                        createVNode(unref(Link), {
                          href: _ctx.route("login"),
                          class: "text-blueGray-200"
                        }, {
                          default: withCtx(() => [
                            createVNode("small", null, "Back to login")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ]),
                      createVNode("div", { class: "w-1/2 text-right" }, [
                        createVNode(unref(Link), {
                          href: _ctx.route("register"),
                          class: "text-blueGray-200"
                        }, {
                          default: withCtx(() => [
                            createVNode("small", null, "Create new account")
                          ]),
                          _: 1
                        }, 8, ["href"])
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
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
