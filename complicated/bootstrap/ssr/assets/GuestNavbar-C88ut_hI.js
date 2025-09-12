import { createPopper } from "@popperjs/core";
import { useSSRContext, resolveComponent, withCtx, createTextVNode, mergeProps, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { _ as _sfc_main$2 } from "./ApplicationLogo-BZyRwGK2.js";
import { Link } from "@inertiajs/vue3";
const _sfc_main$1 = {
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
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(_attrs)}><a class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="#pablo"> Demo Pages </a><div class="${ssrRenderClass([{
    hidden: !$data.dropdownPopoverShow,
    block: $data.dropdownPopoverShow
  }, "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"])}"><span class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"> Admin Layout </span>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/admin/dashboard",
    class: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Dashboard `);
      } else {
        return [
          createTextVNode(" Dashboard ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    to: "/admin/settings",
    class: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Settings `);
      } else {
        return [
          createTextVNode(" Settings ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    to: "/admin/tables",
    class: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Tables `);
      } else {
        return [
          createTextVNode(" Tables ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    to: "/admin/maps",
    class: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Maps `);
      } else {
        return [
          createTextVNode(" Maps ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="h-0 mx-4 my-2 border border-solid border-blueGray-100"></div><span class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"> Auth Layout </span>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/auth/login",
    class: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Login `);
      } else {
        return [
          createTextVNode(" Login ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    to: "/auth/register",
    class: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Register `);
      } else {
        return [
          createTextVNode(" Register ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="h-0 mx-4 my-2 border border-solid border-blueGray-100"></div><span class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"> No Layout </span>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/landing",
    class: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Landing `);
      } else {
        return [
          createTextVNode(" Landing ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    to: "/profile",
    class: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Profile `);
      } else {
        return [
          createTextVNode(" Profile ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdowns/PagesDropdown.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PagesDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  data() {
    return {
      navbarOpen: false
    };
  },
  methods: {
    setNavbarOpen: function() {
      this.navbarOpen = !this.navbarOpen;
    }
  },
  components: {
    ApplicationLogo: _sfc_main$2,
    PagesDropdown,
    Link
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_ApplicationLogo = resolveComponent("ApplicationLogo");
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg" }, _attrs))}><div class="container px-4 mx-auto flex flex-wrap items-center justify-between"><div class="w-full relative flex justify-center lg:w-auto lg:static lg:block lg:justify-start">`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/",
    class: "text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ApplicationLogo, { class: "h-7 fill-current text-gray-500" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ApplicationLogo, { class: "h-7 fill-current text-gray-500" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></nav>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Navbars/GuestNavbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GuestNavbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  GuestNavbar as G
};
