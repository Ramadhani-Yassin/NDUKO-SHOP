import { mergeModels, useModel, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderDynamicModel, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./InputError-fLcttu_2.js";
const _sfc_main = {
  __name: "DashboardInputGroup",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: {
      type: String
    },
    name: {
      type: String
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String
    },
    errorMessage: {
      type: String
    }
  }, {
    "modelValue": {
      type: [String, Number],
      required: true
    },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["keyupEnter"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const model = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><label${ssrRenderAttr("for", __props.name)} class="text-stone-600 text-sm font-medium">${__props.label}</label><input${ssrRenderAttr("id", __props.name)}${ssrRenderDynamicModel(__props.type, model.value, null)}${ssrRenderAttr("type", __props.type)}${ssrRenderAttr("placeholder", __props.placeholder)} class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline">`);
      _push(ssrRenderComponent(_sfc_main$1, { message: __props.errorMessage }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DashboardInputGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
