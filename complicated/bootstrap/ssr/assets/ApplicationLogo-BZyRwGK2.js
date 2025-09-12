import { useSSRContext, computed, mergeProps } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
const LaraToryWhite = "/build/assets/laratory-white-by-dka5J.png";
const LaraToryBlack = "/build/assets/laratory-black-DlC0u56p.png";
const LaraToryFavicon = "/build/assets/laratory-white-by-dka5J.png";
const _sfc_main = {
  __name: "ApplicationLogo",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "full"
    },
    color: {
      type: String,
      default: "white"
    }
  },
  setup(__props) {
    const props = __props;
    const logo = computed(() => {
      if (props.type === "full") {
        return props.color === "white" ? LaraToryWhite : LaraToryBlack;
      }
      return LaraToryFavicon;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<img${ssrRenderAttrs(mergeProps({
        src: logo.value,
        alt: "LaraTory"
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ApplicationLogo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
