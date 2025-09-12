import { usePage } from "@inertiajs/vue3";
import { push } from "notivue";
import vSelect from "vue-select";
import pickBy from "lodash/pickBy.js";
import { resolveComponent, mergeProps, withCtx, withDirectives, createVNode, vShow, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
function truncateString(str, maxLength = 10) {
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength) + "...";
}
function getCurrency() {
  return usePage().props.currency;
}
function numberFormat(number) {
  return parseFloat(number.toFixed(usePage().props.decimal_point));
}
function formatDatetime(datetime) {
  const date = new Date(datetime);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  };
  return date.toLocaleString("en-US", options);
}
function showToast() {
  if (usePage().props.flash.isSuccess) {
    push.success(usePage().props.flash.message);
  } else {
    push.error(usePage().props.flash.message);
  }
}
const _sfc_main = {
  name: "AsyncVueSelect",
  components: {
    vSelect
  },
  props: {
    resource: String,
    resourceLabel: {
      type: String,
      default: "name"
    },
    placeholder: String
  },
  data: () => ({
    observer: null,
    page: 1,
    per_page: 100,
    search: "",
    paginatedData: {},
    options: []
  }),
  computed: {
    hasNextPage() {
      var _a;
      return !!((_a = this.paginatedData) == null ? void 0 : _a.next_page_url);
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(this.infiniteScroll);
    this.apiCall();
  },
  methods: {
    apiCall() {
      let queries = {
        page: this.page,
        per_page: this.per_page,
        inertia: "disabled",
        sort_order: "asc"
      };
      queries[this.resourceLabel] = this.search;
      axios.get(route(this.resource, pickBy(queries))).then(({ data }) => {
        this.paginatedData = data;
        if (this.page === 1) {
          this.options = data.data;
        } else {
          this.options = [
            ...this.options,
            ...data.data
          ];
        }
      });
    },
    async onOpen() {
      if (this.hasNextPage) {
        await this.$nextTick();
        this.observer.observe(this.$refs.load);
      }
    },
    onClose() {
      this.observer.disconnect();
    },
    async infiniteScroll([{ isIntersecting, target }]) {
      if (isIntersecting) {
        const ul = target.offsetParent;
        const scrollTop = target.offsetParent.scrollTop;
        this.page += 1;
        await this.$nextTick();
        ul.scrollTop = scrollTop;
      }
    }
  },
  watch: {
    search(newSearch) {
      this.page = 1;
      this.options = [];
      this.apiCall();
    },
    page(newPage) {
      this.apiCall();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_select = resolveComponent("v-select");
  _push(ssrRenderComponent(_component_v_select, mergeProps({
    options: _ctx.options,
    filterable: false,
    onOpen: $options.onOpen,
    onClose: $options.onClose,
    onSearch: (query) => _ctx.search = query,
    reduce: (option) => option.id,
    label: $props.resourceLabel,
    placeholder: this.placeholder
  }, _attrs), {
    "list-footer": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li style="${ssrRenderStyle($options.hasNextPage ? null : { display: "none" })}" class="loader" data-v-c52cccd9${_scopeId}> Loading more options... </li>`);
      } else {
        return [
          withDirectives(createVNode("li", {
            ref: "load",
            class: "loader"
          }, " Loading more options... ", 512), [
            [vShow, $options.hasNextPage]
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AsyncVueSelect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AsyncVueSelect = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c52cccd9"]]);
export {
  AsyncVueSelect as A,
  formatDatetime as f,
  getCurrency as g,
  numberFormat as n,
  showToast as s,
  truncateString as t
};
