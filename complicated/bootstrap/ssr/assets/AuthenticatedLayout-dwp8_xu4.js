import { useSSRContext, resolveComponent, withCtx, createTextVNode, mergeProps, unref, openBlock, createBlock, toDisplayString, createVNode, renderSlot } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { Link, useForm } from "@inertiajs/vue3";
import { createPopper } from "@popperjs/core";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { _ as _sfc_main$7 } from "./ApplicationLogo-BZyRwGK2.js";
import { Notivue, Notification, pastelTheme } from "notivue";
const _sfc_main$6 = {
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
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><a class="text-blueGray-500 block py-1 px-3"><i class="fas fa-bell"></i></a><div class="${ssrRenderClass([{
    hidden: !$data.dropdownPopoverShow,
    block: $data.dropdownPopoverShow
  }, "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"])}"><a href="javascript:void(0);" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"> Action </a><a href="javascript:void(0);" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"> Another action </a><a href="javascript:void(0);" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"> Something else here </a><div class="h-0 my-2 border border-solid border-blueGray-100"></div><a href="javascript:void(0);" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"> Seprated link </a></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdowns/NotificationDropdown.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const NotificationDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2]]);
const avatar = "/build/assets/avatar-ODXnI4nQ.jpg";
const _sfc_main$5 = {
  data() {
    return {
      dropdownPopoverShow: false,
      avatar
    };
  },
  components: {
    Link
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
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(_attrs)}><a class="text-blueGray-500 block" href="#pablo"><div class="items-center flex"><span class="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full"></span></div></a><div class="${ssrRenderClass([{
    hidden: !$data.dropdownPopoverShow,
    block: $data.dropdownPopoverShow
  }, "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"])}">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("profile.edit"),
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
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("logout"),
    method: "post",
    class: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Logout `);
      } else {
        return [
          createTextVNode(" Logout ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdowns/UserDropdown.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const UserDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$4 = {
  __name: "SidebarItem",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String
    },
    routeName: {
      type: [String, Array]
    },
    icon: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "items-center" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route(__props.routeName),
        class: ["text-xs uppercase py-3 font-bold block", [
          _ctx.route().current(__props.routeName) ? "text-emerald-500 hover:text-emerald-600" : "text-blueGray-700 hover:text-blueGray-500"
        ]]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.route().current(__props.routeName)) {
              _push2(`<i class="${ssrRenderClass([__props.icon, "mr-2 text-sm opacity-75"])}"${_scopeId}></i>`);
            } else {
              _push2(`<i class="${ssrRenderClass([__props.icon, "mr-2 text-sm text-blueGray-300"])}"${_scopeId}></i>`);
            }
            _push2(` ${ssrInterpolate(__props.name)}`);
          } else {
            return [
              _ctx.route().current(__props.routeName) ? (openBlock(), createBlock("i", {
                key: 0,
                class: ["mr-2 text-sm opacity-75", __props.icon]
              }, null, 2)) : (openBlock(), createBlock("i", {
                key: 1,
                class: ["mr-2 text-sm text-blueGray-300", __props.icon]
              }, null, 2)),
              createTextVNode(" " + toDisplayString(__props.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sidebar/SidebarItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __default__ = {
  data() {
    return {
      collapseShow: "hidden"
    };
  },
  methods: {
    toggleCollapseShow: function(classes) {
      this.collapseShow = classes;
    }
  },
  components: {
    ApplicationLogo: _sfc_main$7,
    SidebarItem: _sfc_main$4,
    NotificationDropdown,
    UserDropdown,
    Link
  }
};
const _sfc_main$3 = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      keyword: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6" }, _attrs))}><div class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"><button class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent" type="button"><i class="fas fa-bars"></i></button>`);
      _push(ssrRenderComponent(unref(Link), {
        class: "md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0",
        href: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$7, {
              color: "black",
              class: "hidden sm:block"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$7, {
                color: "black",
                class: "hidden sm:block"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="md:hidden items-center flex flex-wrap list-none"><li class="inline-block relative">`);
      _push(ssrRenderComponent(NotificationDropdown, null, null, _parent));
      _push(`</li><li class="inline-block relative">`);
      _push(ssrRenderComponent(UserDropdown, null, null, _parent));
      _push(`</li></ul><div class="${ssrRenderClass([_ctx.collapseShow, "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"])}"><div class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200"><div class="flex flex-wrap"><div class="w-6/12">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0",
        href: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$7, {
              type: "short",
              class: "h-10"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$7, {
                type: "short",
                class: "h-10"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-6/12 flex justify-end"><button type="button" class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"><i class="fas fa-times"></i></button></div></div></div><form class="mt-6 mb-4 md:hidden"><div class="mb-3 pt-0"><input type="text"${ssrRenderAttr("value", unref(form).keyword)} placeholder="Search product..." class="border-0 px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"></div></form><hr class="my-4 md:min-w-full"><ul class="md:flex-col md:min-w-full flex flex-col list-none">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        name: "Dashboard",
        routeName: "dashboard",
        icon: "fas fa-tv"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        name: "POS",
        routeName: "carts.index",
        icon: "fas fa-shopping-cart"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        name: "Orders",
        routeName: "orders.index",
        icon: "fas fa-database"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        name: "Transactions",
        routeName: "transactions.index",
        icon: "fas fa-dollar-sign"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        name: "Categories",
        routeName: "categories.index",
        icon: "fas fa-list"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        name: "Unit Types",
        routeName: "unit-types.index",
        icon: "fa fa-balance-scale"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        name: "Suppliers",
        routeName: "suppliers.index",
        icon: "fas fa-users-cog"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        name: "Products",
        routeName: "products.index",
        icon: "fas fa-shopping-bag"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        name: "Customer",
        routeName: "customers.index",
        icon: "fas fa-users"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        name: "Employee",
        routeName: "employees.index",
        icon: "fas fa-house-user"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        name: "Expenses",
        routeName: "expenses.index",
        icon: "fas fa-book"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        name: "Settings",
        routeName: "profile.edit",
        icon: "fas fa-tools"
      }, null, _parent));
      _push(`</ul><hr class="my-4 md:min-w-full"></div></div></nav>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sidebar/Sidebar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "AdminNavbar",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      keyword: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4" }, _attrs))}><div class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"><p class="text-white text-sm uppercase hidden lg:inline-block font-semibold">`);
      ssrRenderSlot(_ctx.$slots, "breadcrumb", {}, null, _push, _parent);
      _push(`</p><form class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"><div class="relative flex w-full flex-wrap items-stretch"><span class="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"><i class="fas fa-search"></i></span><input type="text" placeholder="Search product..."${ssrRenderAttr("value", unref(form).keyword)} class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"></div></form><ul class="flex-col md:flex-row list-none items-center hidden md:flex">`);
      _push(ssrRenderComponent(UserDropdown, null, null, _parent));
      _push(`</ul></div></nav>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Navbars/AdminNavbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  data() {
    return {
      date: (/* @__PURE__ */ new Date()).getFullYear()
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "block py-4" }, _attrs))}><div class="container mx-auto px-4"><hr class="mb-4 border-b-1 border-blueGray-200"><div class="flex flex-wrap items-center md:justify-between justify-center"><div class="w-full md:w-4/12 px-4"><div class="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left"> Copyright © ${ssrInterpolate($data.date)}</div></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Footers/FooterAdmin.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FooterAdmin = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "AuthenticatedLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Notivue), null, {
        default: withCtx((item, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Notification), {
              item,
              theme: unref(pastelTheme)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Notification), {
                item,
                theme: unref(pastelTheme)
              }, null, 8, ["item", "theme"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<div class="relative md:ml-64 bg-blueGray-100">`);
      _push(ssrRenderComponent(_sfc_main$2, null, {
        breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "breadcrumb", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "breadcrumb")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<div class="relative bg-emerald-600 md:pt-32 pb-32 pt-12"><div class="px-4 md:px-10 mx-auto w-full"><div>`);
      ssrRenderSlot(_ctx.$slots, "headerState", {}, null, _push, _parent);
      _push(`</div></div></div><div class="px-4 md:px-10 mx-auto w-full -m-24">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(FooterAdmin, null, null, _parent));
      _push(`</div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthenticatedLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
