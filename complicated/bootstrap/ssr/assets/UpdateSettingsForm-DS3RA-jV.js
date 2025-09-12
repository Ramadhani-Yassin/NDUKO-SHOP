import { ref, onMounted, withCtx, createTextVNode, createVNode, Transition, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "./InputError-fLcttu_2.js";
import "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./SubmitButton-B3gBT10i.js";
const _sfc_main = {
  __name: "UpdateSettingsForm",
  __ssrInlineRender: true,
  props: {
    settings: {
      type: Object
    }
  },
  setup(__props) {
    const props = __props;
    const form = ref({});
    onMounted(() => {
      let formData = {};
      props.settings.fields.forEach((field) => {
        var _a;
        formData[field.value] = ((_a = props.settings.data) == null ? void 0 : _a.hasOwnProperty(field.value)) ? props.settings.data[field.value] : null;
      });
      form.value = formData;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"> System Settings </h6><form><div class="flex flex-wrap"><!--[-->`);
      ssrRenderList(__props.settings.fields, (settingField, index) => {
        _push(`<div class="w-full lg:w-6/12 px-4"><div class="relative w-full mb-3"><label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"${ssrRenderAttr("for", settingField.value)}>${ssrInterpolate(settingField.label)}</label><input${ssrRenderAttr("id", settingField.value)} type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"${ssrRenderAttr("value", form.value[settingField.value])}></div></div>`);
      });
      _push(`<!--]--><div class="w-full px-4 flex justify-end">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        processing: form.value.processing,
        class: "bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Save `);
            if (form.value.recentlySuccessful) {
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
                  form.value.recentlySuccessful ? (openBlock(), createBlock("i", {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateSettingsForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
