import { watch, onMounted, onUnmounted, computed, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderTeleport, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Button-CQhKcULN.js";
import { _ as _sfc_main$2 } from "./SubmitButton-B3gBT10i.js";
const _sfc_main = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String
    },
    formProcessing: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: "2xl"
    },
    closeable: {
      type: Boolean,
      default: true
    },
    showSubmitButton: {
      type: Boolean,
      default: true
    },
    submitButtonText: {
      type: String,
      default: "Submit"
    }
  },
  emits: ["close", "submitAction"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    watch(
      () => props.show,
      () => {
        if (props.show) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = null;
        }
      }
    );
    const submitAction = () => {
      emit("submitAction");
    };
    const close = () => {
      if (props.closeable) {
        emit("close");
      }
    };
    const closeOnEscape = (e) => {
      if (e.key === "Escape" && props.show) {
        close();
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = null;
    });
    const maxWidthClass = computed(() => {
      return {
        sm: "sm:max-w-sm",
        md: "sm:max-w-md",
        lg: "sm:max-w-lg",
        xl: "sm:max-w-xl",
        "2xl": "sm:max-w-2xl",
        "4xl": "max-w-4xl"
      }[props.maxWidth];
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex" scroll-region><div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="fixed inset-0 transform transition-all"><div class="absolute inset-0 bg-gray-500 opacity-75"></div></div><div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="${ssrRenderClass([maxWidthClass.value, "mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto"])}"><div class="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t"><h6 class="text-2xl font-semibold">${ssrInterpolate(__props.title)}</h6><button class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"><span class="bg-transparent text-black opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none"> × </span></button></div><div class="p-6">`);
        if (__props.show) {
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="mt-6 flex justify-end">`);
        _push2(ssrRenderComponent(_sfc_main$1, {
          type: "gray",
          onClick: close
        }, {
          default: withCtx((_, _push3, _parent2, _scopeId) => {
            if (_push3) {
              _push3(`Cancel`);
            } else {
              return [
                createTextVNode("Cancel")
              ];
            }
          }),
          _: 1
        }, _parent));
        if (__props.showSubmitButton) {
          _push2(ssrRenderComponent(_sfc_main$2, {
            processing: __props.formProcessing,
            onClick: submitAction,
            class: "text-white bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`${ssrInterpolate(__props.submitButtonText)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(__props.submitButtonText), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div></div></div>`);
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
