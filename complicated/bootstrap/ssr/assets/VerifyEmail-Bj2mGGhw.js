import { computed, withCtx, unref, createTextVNode, createVNode, withModifiers, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AuthLayout-BiMqYNma.js";
import { _ as _sfc_main$2 } from "./SubmitButton-B3gBT10i.js";
import "./GuestNavbar-C88ut_hI.js";
import "@popperjs/core";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ApplicationLogo-BZyRwGK2.js";
const _sfc_main = {
  __name: "VerifyEmail",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({});
    const submit = () => {
      form.post(route("verification.send"));
    };
    const verificationLinkSent = computed(() => props.status === "verification-link-sent");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Email Verification" }, null, _parent2, _scopeId));
            _push2(`<div class="container mx-auto px-4 h-full"${_scopeId}><div class="flex content-center items-center justify-center h-full"${_scopeId}><div class="w-full lg:w-4/12 px-4"${_scopeId}><div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"${_scopeId}><div class="rounded-t mb-0 px-6 py-6"${_scopeId}><div class="text-center"${_scopeId}><h6 class="text-blueGray-500 text-sm font-bold"${_scopeId}> Email Verification </h6><p${_scopeId}>Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn&#39;t receive the email, we will gladly send you another.</p></div></div><div class="flex-auto px-4 lg:px-10 py-10 pt-0"${_scopeId}><form${_scopeId}>`);
            if (verificationLinkSent.value) {
              _push2(`<div class="mt-1 text-sm text-green-600"${_scopeId}> A new verification link has been sent to the email address you provided during registration. </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="text-center mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150",
              processing: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Resend Verification Email `);
                } else {
                  return [
                    createTextVNode(" Resend Verification Email ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("logout"),
              method: "post",
              as: "button",
              class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Log Out`);
                } else {
                  return [
                    createTextVNode("Log Out")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div></div></div></div></div>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Email Verification" }),
              createVNode("div", { class: "container mx-auto px-4 h-full" }, [
                createVNode("div", { class: "flex content-center items-center justify-center h-full" }, [
                  createVNode("div", { class: "w-full lg:w-4/12 px-4" }, [
                    createVNode("div", { class: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0" }, [
                      createVNode("div", { class: "rounded-t mb-0 px-6 py-6" }, [
                        createVNode("div", { class: "text-center" }, [
                          createVNode("h6", { class: "text-blueGray-500 text-sm font-bold" }, " Email Verification "),
                          createVNode("p", null, "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.")
                        ])
                      ]),
                      createVNode("div", { class: "flex-auto px-4 lg:px-10 py-10 pt-0" }, [
                        createVNode("form", {
                          onSubmit: withModifiers(submit, ["prevent"])
                        }, [
                          verificationLinkSent.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mt-1 text-sm text-green-600"
                          }, " A new verification link has been sent to the email address you provided during registration. ")) : createCommentVNode("", true),
                          createVNode("div", { class: "text-center mt-6" }, [
                            createVNode(_sfc_main$2, {
                              class: "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150",
                              processing: unref(form).processing
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Resend Verification Email ")
                              ]),
                              _: 1
                            }, 8, ["processing"]),
                            createVNode(unref(Link), {
                              href: _ctx.route("logout"),
                              method: "post",
                              as: "button",
                              class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Log Out")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
