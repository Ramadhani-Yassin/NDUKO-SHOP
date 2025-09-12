import { withCtx, unref, createTextVNode, createVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$4 } from "./InputError-fLcttu_2.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./TextInput--Bmh7Z3C.js";
import { useForm, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AuthLayout-BiMqYNma.js";
import { _ as _sfc_main$5 } from "./SubmitButton-B3gBT10i.js";
import "./GuestNavbar-C88ut_hI.js";
import "@popperjs/core";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ApplicationLogo-BZyRwGK2.js";
const _sfc_main = {
  __name: "ConfirmPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      password: ""
    });
    const submit = () => {
      form.post(route("password.confirm"), {
        onFinish: () => form.reset()
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Confirm Password" }, null, _parent2, _scopeId));
            _push2(`<div class="container mx-auto px-4 h-full"${_scopeId}><div class="flex content-center items-center justify-center h-full"${_scopeId}><div class="w-full lg:w-4/12 px-4"${_scopeId}><div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"${_scopeId}><div class="rounded-t mb-0 px-6 py-6"${_scopeId}><div class="text-center"${_scopeId}><h6 class="text-blueGray-500 text-sm font-bold"${_scopeId}> Confirm Password </h6><p${_scopeId}>This is a secure area of the application. Please confirm your password before continuing.</p></div></div><div class="flex-auto px-4 lg:px-10 py-10 pt-0"${_scopeId}><form${_scopeId}><div class="relative w-full mb-3"${_scopeId}>`);
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
              autofocus: "",
              autocomplete: "current-password",
              class: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
              placeholder: "Enter password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-1",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-center mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150",
              processing: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Confirm `);
                } else {
                  return [
                    createTextVNode(" Confirm ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div></div></div></div></div>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Confirm Password" }),
              createVNode("div", { class: "container mx-auto px-4 h-full" }, [
                createVNode("div", { class: "flex content-center items-center justify-center h-full" }, [
                  createVNode("div", { class: "w-full lg:w-4/12 px-4" }, [
                    createVNode("div", { class: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0" }, [
                      createVNode("div", { class: "rounded-t mb-0 px-6 py-6" }, [
                        createVNode("div", { class: "text-center" }, [
                          createVNode("h6", { class: "text-blueGray-500 text-sm font-bold" }, " Confirm Password "),
                          createVNode("p", null, "This is a secure area of the application. Please confirm your password before continuing.")
                        ])
                      ]),
                      createVNode("div", { class: "flex-auto px-4 lg:px-10 py-10 pt-0" }, [
                        createVNode("form", {
                          onSubmit: withModifiers(submit, ["prevent"])
                        }, [
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
                              autofocus: "",
                              autocomplete: "current-password",
                              class: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                              placeholder: "Enter password"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-1",
                              message: unref(form).errors.password
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "text-center mt-6" }, [
                            createVNode(_sfc_main$5, {
                              class: "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150",
                              processing: unref(form).processing
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Confirm ")
                              ]),
                              _: 1
                            }, 8, ["processing"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ConfirmPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
