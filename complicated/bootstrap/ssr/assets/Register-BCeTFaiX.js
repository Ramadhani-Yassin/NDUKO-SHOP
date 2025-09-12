import { withCtx, unref, createTextVNode, createVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
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
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Register" }, null, _parent2, _scopeId));
            _push2(`<div class="container mx-auto px-4 h-full"${_scopeId}><div class="flex content-center items-center justify-center h-full"${_scopeId}><div class="w-full lg:w-4/12 px-4"${_scopeId}><div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"${_scopeId}><div class="rounded-t mb-0 px-6 py-6"${_scopeId}><div class="text-center"${_scopeId}><h6 class="text-blueGray-500 text-sm font-bold"${_scopeId}> Register </h6></div></div><div class="flex-auto px-4 lg:px-10 py-10 pt-0"${_scopeId}><form${_scopeId}><div class="relative w-full mb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "name",
              value: "Name",
              class: "block uppercase text-blueGray-600 text-xs font-bold mb-2"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "name",
              type: "text",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              required: "",
              autofocus: "",
              autocomplete: "name",
              class: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
              placeholder: "Enter name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-1",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="relative w-full mb-3"${_scopeId}>`);
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
              autocomplete: "username",
              class: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
              placeholder: "Enter email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-1",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="relative w-full mb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "password",
              value: "Password",
              class: "block uppercase text-blueGray-600 text-xs font-bold mb-2"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "password",
              type: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "new-password",
              class: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
              placeholder: "Enter password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-1",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="relative w-full mb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "password_confirmation",
              value: "Confirm Password",
              class: "block uppercase text-blueGray-600 text-xs font-bold mb-2"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "password_confirmation",
              type: "password",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              required: "",
              autocomplete: "new-password",
              class: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
              placeholder: "Enter confirm password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-1",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-center mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150",
              processing: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Register `);
                } else {
                  return [
                    createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("login"),
              class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Already registered? `);
                } else {
                  return [
                    createTextVNode(" Already registered? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div></div></div></div></div>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Register" }),
              createVNode("div", { class: "container mx-auto px-4 h-full" }, [
                createVNode("div", { class: "flex content-center items-center justify-center h-full" }, [
                  createVNode("div", { class: "w-full lg:w-4/12 px-4" }, [
                    createVNode("div", { class: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0" }, [
                      createVNode("div", { class: "rounded-t mb-0 px-6 py-6" }, [
                        createVNode("div", { class: "text-center" }, [
                          createVNode("h6", { class: "text-blueGray-500 text-sm font-bold" }, " Register ")
                        ])
                      ]),
                      createVNode("div", { class: "flex-auto px-4 lg:px-10 py-10 pt-0" }, [
                        createVNode("form", {
                          onSubmit: withModifiers(submit, ["prevent"])
                        }, [
                          createVNode("div", { class: "relative w-full mb-3" }, [
                            createVNode(_sfc_main$2, {
                              for: "name",
                              value: "Name",
                              class: "block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            }),
                            createVNode(_sfc_main$3, {
                              id: "name",
                              type: "text",
                              modelValue: unref(form).name,
                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                              required: "",
                              autofocus: "",
                              autocomplete: "name",
                              class: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                              placeholder: "Enter name"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-1",
                              message: unref(form).errors.name
                            }, null, 8, ["message"])
                          ]),
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
                              autocomplete: "username",
                              class: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                              placeholder: "Enter email"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-1",
                              message: unref(form).errors.email
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "relative w-full mb-3" }, [
                            createVNode(_sfc_main$2, {
                              for: "password",
                              value: "Password",
                              class: "block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            }),
                            createVNode(_sfc_main$3, {
                              id: "password",
                              type: "password",
                              modelValue: unref(form).password,
                              "onUpdate:modelValue": ($event) => unref(form).password = $event,
                              required: "",
                              autocomplete: "new-password",
                              class: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                              placeholder: "Enter password"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-1",
                              message: unref(form).errors.password
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "relative w-full mb-3" }, [
                            createVNode(_sfc_main$2, {
                              for: "password_confirmation",
                              value: "Confirm Password",
                              class: "block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            }),
                            createVNode(_sfc_main$3, {
                              id: "password_confirmation",
                              type: "password",
                              modelValue: unref(form).password_confirmation,
                              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                              required: "",
                              autocomplete: "new-password",
                              class: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                              placeholder: "Enter confirm password"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-1",
                              message: unref(form).errors.password_confirmation
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "text-center mt-6" }, [
                            createVNode(_sfc_main$5, {
                              class: "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150",
                              processing: unref(form).processing
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Register ")
                              ]),
                              _: 1
                            }, 8, ["processing"]),
                            createVNode(unref(Link), {
                              href: _ctx.route("login"),
                              class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Already registered? ")
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ])
                        ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
