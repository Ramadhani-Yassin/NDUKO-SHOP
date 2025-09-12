import { unref, withCtx, createTextVNode, createVNode, Transition, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./InputError-fLcttu_2.js";
import { usePage, useForm, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./SubmitButton-B3gBT10i.js";
const _sfc_main = {
  __name: "UpdateProfileInformationForm",
  __ssrInlineRender: true,
  props: {
    mustVerifyEmail: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const user = usePage().props.auth.user;
    const form = useForm({
      name: user.name,
      email: user.email
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"> User Information </h6><form><div class="flex flex-wrap"><div class="w-full lg:w-6/12 px-4"><div class="relative w-full mb-3"><label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="name"> Name </label><input id="name" type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"${ssrRenderAttr("value", unref(form).name)} required autofocus autocomplete="name">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        message: unref(form).errors.name
      }, null, _parent));
      _push(`</div></div><div class="w-full lg:w-6/12 px-4"><div class="relative w-full mb-3"><label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="email"> Email address </label><input id="email" type="email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"${ssrRenderAttr("value", unref(form).email)} required autocomplete="username">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div></div>`);
      if (__props.mustVerifyEmail && unref(user).email_verified_at === null) {
        _push(`<div><p class="text-sm px-4 text-gray-800"> Your email address is unverified. `);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("verification.send"),
          method: "post",
          as: "button",
          class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Click here to re-send the verification email. `);
            } else {
              return [
                createTextVNode(" Click here to re-send the verification email. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p><div style="${ssrRenderStyle(__props.status === "verification-link-sent" ? null : { display: "none" })}" class="px-4 font-medium text-sm text-emerald-500"> A new verification link has been sent to your email address. </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="w-full px-4 flex justify-end">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        processing: unref(form).processing,
        class: "bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Save `);
            if (unref(form).recentlySuccessful) {
              _push2(`<i class="fas fa-check-circle"${_scopeId}></i>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createTextVNode(" Save "),
              createVNode(Transition, {
                "enter-active-class": "transition ease-in-out",
                "enter-from-class": "opacity-0",
                "leave-active-class": "transition ease-in-out",
                "leave-to-class": "opacity-0"
              }, {
                default: withCtx(() => [
                  unref(form).recentlySuccessful ? (openBlock(), createBlock("i", {
                    key: 0,
                    class: "fas fa-check-circle"
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></form><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
