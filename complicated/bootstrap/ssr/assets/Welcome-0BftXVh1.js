import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext, unref, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { G as GuestNavbar } from "./GuestNavbar-C88ut_hI.js";
import { Link, Head } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./InputError-fLcttu_2.js";
import "./SubmitButton-B3gBT10i.js";
import "@popperjs/core";
import "./ApplicationLogo-BZyRwGK2.js";
const _sfc_main$1 = {
  components: { Link },
  data() {
    return {
      date: (/* @__PURE__ */ new Date()).getFullYear()
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "relative bg-blueGray-200 pt-8 pb-6" }, _attrs))}><div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20" style="${ssrRenderStyle({ "transform": "translateZ(0)" })}"><svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0"><polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon></svg></div><div class="container mx-auto px-4"><div class="flex flex-wrap text-center lg:text-left"><div class="w-full lg:w-6/12 px-4"><h4 class="text-3xl font-semibold">Let&#39;s keep in touch!</h4><h5 class="text-lg mt-0 mb-2 text-blueGray-600"> Need Similar System For Your Shop...? Consult 📧 Me via Email: yasynramah@gmail.com </h5><div class="mt-6 lg:mb-0 mb-6"><button class="bg-white text-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button" onclick="window.open(&#39;https://www.linkedin.com/in/ramadhani-yassin-ramadhani&#39;)"><i class="fab fa-linkedin"></i></button><button class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button" onclick="window.open(&#39;https://github.com/Ramadhani-Yassin&#39;, &#39;_blank&#39;)"><i class="fab fa-github"></i></button><button class="bg-white text-pink-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button" onclick="window.open(&#39;https://www.instagram.com/rm_tech.tz/&#39;, &#39;_blank&#39;)"><i class="fab fa-instagram"></i></button></div></div><div class="w-full lg:w-6/12 px-4"><div class="flex flex-wrap items-top mb-6"><div class="w-full lg:w-4/12 px-4 ml-auto"><span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"> Useful Links </span><ul class="list-unstyled"><li><a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#"> About Us </a></li><li><a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://resilient-matrix.vercel.app/"> Blog </a></li><li><a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/Ramadhani-Yassin"> Github </a></li></ul></div><div class="w-full lg:w-4/12 px-4"><span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"> Other Resources </span><ul class="list-unstyled"><li>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("login"),
    class: "text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
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
  _push(`</li></ul></div></div></div></div><hr class="my-6 border-blueGray-300"><div class="flex flex-wrap items-center md:justify-between justify-center"><div class="w-full md:w-4/12 px-4 mx-auto text-center"><div class="text-sm text-blueGray-500 font-semibold py-1"> Copyright © ${ssrInterpolate($data.date)}</div></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Footers/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FooterComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const banner = "/build/assets/banner-BI2q7l9z.avif";
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    pageTitle: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: __props.pageTitle }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(GuestNavbar, null, null, _parent));
      _push(`<main><div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"><div class="absolute top-0 w-full h-full bg-center bg-cover" style="${ssrRenderStyle({ backgroundImage: `url(${unref(banner)})` })}"><span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black"></span></div><div class="container relative mx-auto"><div class="items-center flex flex-wrap"><div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center"><div class="pr-12"><h1 class="text-white font-semibold text-5xl"> Nduko Shop. </h1><p class="mt-4 text-lg text-blueGray-200"> NdukoShop is a retail store based in Dodoma, offering a wide range of quality products to meet customer needs. We focus on affordability, reliability, and excellent customer service to ensure a seamless shopping experience. </p>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.$page.props.auth.user ? _ctx.route("dashboard") : _ctx.route("login"),
        class: "mt-4 bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150",
        type: "button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Explore Inventory <i class="fas fa-arrow-alt-circle-right"${_scopeId}></i>`);
          } else {
            return [
              createTextVNode(" Explore Inventory "),
              createVNode("i", { class: "fas fa-arrow-alt-circle-right" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style="${ssrRenderStyle({ "transform": "translateZ(0)" })}"><svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0"><polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon></svg></div></div></main>`);
      _push(ssrRenderComponent(FooterComponent, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
