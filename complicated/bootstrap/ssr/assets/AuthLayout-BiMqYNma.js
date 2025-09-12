import { useSSRContext, mergeProps, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import { G as GuestNavbar } from "./GuestNavbar-C88ut_hI.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = {
  data() {
    return {
      date: (/* @__PURE__ */ new Date()).getFullYear()
    };
  },
  props: {
    absolute: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({
    class: ["pb-6", [
      $props.absolute ? "absolute w-full bottom-0 bg-blueGray-800" : "relative"
    ]]
  }, _attrs))}><div class="container mx-auto px-4"><hr class="mb-6 border-b-1 border-blueGray-600"><div class="flex flex-wrap items-center md:justify-between justify-center"><div class="w-full md:w-4/12 px-4"><div class="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left"> Copyright © ${ssrInterpolate($data.date)}</div></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Footers/FooterSmall.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FooterSmall = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const registerBg2 = "/build/assets/register_bg_2-AH3mfCwx.png";
const _sfc_main = {
  __name: "AuthLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(GuestNavbar, null, null, _parent));
      _push(`<main><section class="relative w-full h-full py-40 min-h-screen"><div class="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full" style="${ssrRenderStyle(`background-image: url('${unref(registerBg2)}');`)}"></div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(FooterSmall, { absolute: "" }, null, _parent));
      _push(`</section></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
