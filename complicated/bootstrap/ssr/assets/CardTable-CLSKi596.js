import { createPopper } from "@popperjs/core";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { useSSRContext, unref, withCtx, openBlock, createBlock, toDisplayString, mergeProps, resolveComponent } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import throttle from "lodash/throttle.js";
import mapValues from "lodash/mapValues.js";
import pickBy from "lodash/pickBy.js";
import { Link, usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$5 } from "./Button-CQhKcULN.js";
import { push } from "notivue";
import { A as AsyncVueSelect } from "./AsyncVueSelect-DAiIkMoY.js";
import Datepicker from "@vuepic/vue-datepicker";
const _sfc_main$4 = {
  data() {
    return {
      dropdownPopoverShow: false
    };
  },
  methods: {
    toggleDropdown: function(event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start"
        });
      }
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><a class="text-blueGray-500 py-1 px-3" href="#pablo"><i class="fas fa-ellipsis-v"></i></a><div class="${ssrRenderClass([{
    hidden: !$data.dropdownPopoverShow,
    block: $data.dropdownPopoverShow
  }, "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"])}"><a href="javascript:void(0);" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"> Action </a><a href="javascript:void(0);" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"> Another action </a><a href="javascript:void(0);" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"> Something else here </a></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdowns/TableDropdown.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TableDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    links: {
      type: Array
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.links.length > 3) {
        _push(`<div${ssrRenderAttrs(_attrs)}><nav class="block"><ul class="flex pl-0 rounded list-none flex-wrap"><!--[-->`);
        ssrRenderList(__props.links, (link, key) => {
          _push(`<li>`);
          if (link.url === null) {
            _push(`<p class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-emerald-200 text-white bg-emerald-200">`);
            if (link.label.includes("Previous")) {
              _push(`<i class="fas fa-chevron-left -ml-px"></i>`);
            } else if (link.label.includes("Next")) {
              _push(`<i class="fas fa-chevron-right -mr-px"></i>`);
            } else {
              _push(`<span>${ssrInterpolate(link.label)}</span>`);
            }
            _push(`</p>`);
          } else {
            _push(ssrRenderComponent(unref(Link), {
              key: `link-${key}`,
              class: ["first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-emerald-200", [
                link.active ? "text-white bg-emerald-500" : "bg-white text-emerald-500 hover:bg-emerald-200"
              ]],
              href: link.url
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  if (link.label.includes("Previous")) {
                    _push2(`<i class="fas fa-chevron-left -ml-px"${_scopeId}></i>`);
                  } else if (link.label.includes("Next")) {
                    _push2(`<i class="fas fa-chevron-right -mr-px"${_scopeId}></i>`);
                  } else {
                    _push2(`<p${_scopeId}>${ssrInterpolate(link.label)}</p>`);
                  }
                } else {
                  return [
                    link.label.includes("Previous") ? (openBlock(), createBlock("i", {
                      key: 0,
                      class: "fas fa-chevron-left -ml-px"
                    })) : link.label.includes("Next") ? (openBlock(), createBlock("i", {
                      key: 1,
                      class: "fas fa-chevron-right -mr-px"
                    })) : (openBlock(), createBlock("p", { key: 2 }, toDisplayString(link.label), 1))
                  ];
                }
              }),
              _: 2
            }, _parent));
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul></nav></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Pagination.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<th${ssrRenderAttrs(mergeProps({ class: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-blueGray-50 text-blueGray-500 border-blueGray-100" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</th>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TableHead.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TableHead = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<td${ssrRenderAttrs(mergeProps({ class: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center whitespace-nowrap p-4" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</td>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TableData.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TableData = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const emptyData = "/build/assets/emptyData-CcIuLVzj.png";
const _sfc_main = {
  components: {
    AsyncVueSelect,
    Button: _sfc_main$5,
    TableData,
    TableHead,
    Pagination: _sfc_main$3,
    TableDropdown,
    Datepicker
  },
  props: {
    indexRoute: String,
    paginatedData: Object,
    filters: Object,
    tableHeads: Array,
    showFilters: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {},
      emptyData
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        if (!this.showFilters)
          return;
        let isFormChanged = false;
        for (const key in this.filters) {
          let formKeyValue = this.form[key] ?? "";
          if (formKeyValue !== this.filters[key].value) {
            isFormChanged = true;
          }
        }
        if (isFormChanged) {
          this.$inertia.get(route(this.indexRoute), pickBy(this.form), {
            preserveState: true,
            onError: (e) => {
              console.log(Object.values(e)[0]);
              this.showErrorToast(Object.values(e)[0]);
            }
          });
        }
      }, 150)
    }
  },
  created() {
    this.initializeForm();
  },
  methods: {
    initializeForm() {
      for (const key in this.filters) {
        this.form[key] = this.filters[key].value;
      }
    },
    reset() {
      this.form = mapValues(this.form, () => "");
    },
    showToast() {
      if (usePage().props.flash.isSuccess) {
        push.success(usePage().props.flash.message);
      } else {
        push.error(usePage().props.flash.message);
      }
    },
    showErrorToast(message) {
      push.error(message);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AsyncVueSelect = resolveComponent("AsyncVueSelect");
  const _component_Datepicker = resolveComponent("Datepicker");
  const _component_TableHead = resolveComponent("TableHead");
  const _component_Pagination = resolveComponent("Pagination");
  _push(`<!--[--><div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"><div class="rounded-t mb-3 px-4 py-3 border-0"><div class="flex flex-wrap items-center"><div class="relative w-full px-4 max-w-full flex-grow flex-1"><div class="flex items-center justify-between">`);
  ssrRenderSlot(_ctx.$slots, "cardHeader", {}, null, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "cardHeaderRight", {}, null, _push, _parent);
  _push(`</div>`);
  if ($props.showFilters) {
    _push(`<div class="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4"><!--[-->`);
    ssrRenderList($props.filters, (filter, key, index) => {
      _push(`<div class="flex flex-col"><label${ssrRenderAttr("for", key)} class="text-stone-600 text-sm font-medium">${ssrInterpolate(filter.label)}</label>`);
      if (filter.type === "string") {
        _push(`<input${ssrRenderAttr("id", key)}${ssrRenderAttr("placeholder", filter.placeholder)}${ssrRenderAttr("value", $data.form[key])} type="text" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline">`);
      } else {
        _push(`<!---->`);
      }
      if (filter.type === "date") {
        _push(`<input${ssrRenderAttr("id", key)}${ssrRenderAttr("placeholder", filter.placeholder)}${ssrRenderAttr("value", $data.form[key])} type="date" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline">`);
      } else {
        _push(`<!---->`);
      }
      if (filter.type === "month") {
        _push(`<input${ssrRenderAttr("id", key)}${ssrRenderAttr("placeholder", filter.placeholder)}${ssrRenderAttr("value", $data.form[key])} type="month" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline">`);
      } else if (filter.type === "select_static") {
        _push(`<select${ssrRenderAttr("id", key)} class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"><option value=""${ssrIncludeBooleanAttr(Array.isArray($data.form[key]) ? ssrLooseContain($data.form[key], "") : ssrLooseEqual($data.form[key], "")) ? " selected" : ""}>Select option</option><!--[-->`);
        ssrRenderList(filter.options, (option, staticSelectIndex) => {
          _push(`<option${ssrRenderAttr("value", option.value)}>${ssrInterpolate(option.label)}</option>`);
        });
        _push(`<!--]--></select>`);
      } else {
        _push(`<!---->`);
      }
      if (filter.type === "select") {
        _push(ssrRenderComponent(_component_AsyncVueSelect, {
          modelValue: $data.form[key],
          "onUpdate:modelValue": ($event) => $data.form[key] = $event,
          class: "mt-2",
          resource: filter.resource,
          resourceLabel: filter.resourceLabel,
          placeholder: filter.placeholder
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (filter.type === "number_range") {
        _push(`<input${ssrRenderAttr("id", key)} placeholder="Sample range: 10-100"${ssrRenderAttr("value", $data.form[key])} type="text" class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:outline-none focus:shadow-outline">`);
      } else {
        _push(`<!---->`);
      }
      if (filter.type === "date_range") {
        _push(ssrRenderComponent(_component_Datepicker, {
          modelValue: $data.form[key],
          "onUpdate:modelValue": ($event) => $data.form[key] = $event,
          "model-type": "yyyy-MM-dd",
          format: "yyyy-MM-dd",
          range: "",
          "auto-apply": "",
          "enable-time-picker": false,
          class: "mt-2",
          placeholder: filter.placeholder
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (filter.type === "datetime_range") {
        _push(ssrRenderComponent(_component_Datepicker, {
          modelValue: $data.form[key],
          "onUpdate:modelValue": ($event) => $data.form[key] = $event,
          "model-type": "yyyy-MM-dd HH:mm:ss",
          range: "",
          "auto-apply": "",
          class: "mt-2",
          placeholder: filter.placeholder
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    });
    _push(`<!--]--><div class="flex flex-col justify-end"><div><button class="active:scale-95 rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-600 outline-none focus:ring hover:opacity-90"> Reset </button></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div><div class="block w-full overflow-x-auto"><table class="items-center w-full bg-transparent border-collapse"><thead><tr><!--[-->`);
  ssrRenderList($props.tableHeads, (tableHead, index) => {
    _push(ssrRenderComponent(_component_TableHead, { key: index }, null, _parent));
  });
  _push(`<!--]--></tr></thead><tbody>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if ($props.paginatedData.data.length === 0) {
    _push(`<tr><td${ssrRenderAttr("colspan", $props.tableHeads.length)} class="py-4"><div class="flex justify-center"><img alt="Inventory management system"${ssrRenderAttr("src", $data.emptyData)}></div></td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table></div></div><div class="flex justify-end">`);
  _push(ssrRenderComponent(_component_Pagination, {
    links: $props.paginatedData.links
  }, null, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Cards/CardTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CardTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  CardTable as C,
  TableData as T,
  TableHead as a
};
