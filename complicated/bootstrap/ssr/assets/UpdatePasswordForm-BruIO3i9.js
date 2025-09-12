import { ref, unref, withCtx, createTextVNode, createVNode, Transition, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./InputError-fLcttu_2.js";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./SubmitButton-B3gBT10i.js";
const _sfc_main = {
  __name: "UpdatePasswordForm",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(null);
    const form = useForm({
      current_password: "",
      password: "",
      password_confirmation: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"> Update Password </h6><form><div class="flex flex-wrap"><div class="w-full lg:w-4/12 px-4"><div class="relative w-full mb-3"><label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="current_password"> Current Password </label><input id="current_password"${ssrRenderAttr("value", unref(form).current_password)} type="password" autocomplete="current-password" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        message: unref(form).errors.current_password
      }, null, _parent));
      _push(`</div></div><div class="w-full lg:w-4/12 px-4"><div class="relative w-full mb-3"><label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="password"> New Password </label><input id="password"${ssrRenderAttr("value", unref(form).password)} type="password" autocomplete="new-password" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        message: unref(form).errors.password
      }, null, _parent));
      _push(`</div></div><div class="w-full lg:w-4/12 px-4"><div class="relative w-full mb-3"><label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="password_confirmation"> Confirm Password </label><input id="password_confirmation"${ssrRenderAttr("value", unref(form).password_confirmation)} type="password" autocomplete="new-password" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        message: unref(form).errors.password_confirmation
      }, null, _parent));
      _push(`</div></div><div class="w-full px-4 flex justify-end">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
