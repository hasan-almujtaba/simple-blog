var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { createPinia, defineStore } from "pinia";
import { openBlock, createElementBlock, createElementVNode, useSSRContext, defineComponent, resolveComponent, mergeProps, withCtx, renderSlot, ref, unref, createTextVNode, createVNode, toDisplayString, createBlock, Fragment, renderList, Transition, onMounted, createCommentVNode, computed } from "vue";
import { Menu, MenuButton, MenuItems, MenuItem, TransitionRoot, Dialog, TransitionChild, DialogOverlay } from "@headlessui/vue";
import { useBreakpoints, breakpointsTailwind } from "@vueuse/core";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderSlot, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import AOS from "aos";
import { ViteSSG } from "vite-ssg";
import { useRoute } from "vue-router";
import axios from "axios";
const install = ({ isClient, initialState, app }) => {
  const pinia = createPinia();
  app.use(pinia);
  if (isClient)
    pinia.state.value = initialState.pinia || {};
  else
    initialState.pinia = pinia.state.value;
};
var __glob_5_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  install
});
const _hoisted_1$9 = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$9 = /* @__PURE__ */ createElementVNode("path", {
  d: "M17 22v-8h-4v2h2v6h-3v2h8v-2h-3z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$9 = /* @__PURE__ */ createElementVNode("path", {
  d: "M16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z",
  fill: "currentColor"
}, null, -1);
const _hoisted_4$3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4z",
  fill: "currentColor"
}, null, -1);
const _hoisted_5$3 = [
  _hoisted_2$9,
  _hoisted_3$9,
  _hoisted_4$3
];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_5$3);
}
var __unplugin_components_14 = { name: "carbon-information", render: render$9 };
const _hoisted_1$8 = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$8 = /* @__PURE__ */ createElementVNode("circle", {
  cx: "9.5",
  cy: "9.5",
  r: "2.5",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$8 = /* @__PURE__ */ createElementVNode("circle", {
  cx: "9.5",
  cy: "22.5",
  r: "2.5",
  fill: "currentColor"
}, null, -1);
const _hoisted_4$2 = /* @__PURE__ */ createElementVNode("circle", {
  cx: "22.5",
  cy: "22.5",
  r: "2.5",
  fill: "currentColor"
}, null, -1);
const _hoisted_5$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M28 2H4a2.002 2.002 0 0 0-2 2v24a2.002 2.002 0 0 0 2 2h24a2.002 2.002 0 0 0 2-2V4a2.002 2.002 0 0 0-2-2zm0 13H17V4h11zM15 4v11H4V4zM4 17h11v11H4zm13 11V17h11v11z",
  fill: "currentColor"
}, null, -1);
const _hoisted_6$1 = [
  _hoisted_2$8,
  _hoisted_3$8,
  _hoisted_4$2,
  _hoisted_5$2
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_6$1);
}
var __unplugin_components_13 = { name: "carbon-scatter-matrix", render: render$8 };
const _hoisted_1$7 = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("path", {
  d: "M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428zM18 26h-4v-8h4zm2 0v-8a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$7
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$7);
}
var __unplugin_components_12 = { name: "carbon-home", render: render$7 };
const _hoisted_1$6 = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("path", {
  d: "M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$6 = [
  _hoisted_2$6
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$6);
}
var __unplugin_components_11 = { name: "carbon-close", render: render$6 };
const _hoisted_1$5 = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", {
  d: "M4 6h24v2H4z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$5 = /* @__PURE__ */ createElementVNode("path", {
  d: "M4 24h24v2H4z",
  fill: "currentColor"
}, null, -1);
const _hoisted_4$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M4 12h24v2H4z",
  fill: "currentColor"
}, null, -1);
const _hoisted_5$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M4 18h24v2H4z",
  fill: "currentColor"
}, null, -1);
const _hoisted_6 = [
  _hoisted_2$5,
  _hoisted_3$5,
  _hoisted_4$1,
  _hoisted_5$1
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_6);
}
var __unplugin_components_6 = { name: "carbon-menu", render: render$5 };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    href: null,
    to: null,
    target: null,
    variant: null
  },
  setup(__props) {
    const props = __props;
    const cssClasses = ["px-5", "py-1.5", "rounded-full", "capitalize", "flex", "items-center", "justify-center", "gap-x-2", "transition", "duration-500", "w-full"];
    switch (props.variant) {
      case "primary":
        cssClasses.push("bg-red-100", "text-red-600", "hover:bg-red-200");
        break;
      case "fill":
        cssClasses.push("bg-red-600", "text-white", "hover:bg-red-400");
        break;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inline-block" }, _attrs))}>`);
      if (props.href) {
        _push(`<a${ssrRenderAttr("href", props.href)} class="${ssrRenderClass(cssClasses)}"${ssrRenderAttr("target", __props.target)}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else if (props.to) {
        _push(ssrRenderComponent(_component_router_link, {
          to: props.to,
          class: cssClasses
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<button class="${ssrRenderClass(cssClasses)}">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</button>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/BaseButton.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _hoisted_1$4 = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", {
  d: "M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$4);
}
var __unplugin_components_2$1 = { name: "carbon-chevron-down", render: render$4 };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const breakpoints = useBreakpoints(breakpointsTailwind);
    const categories = ref([
      {
        id: 1,
        name: "Productivity"
      },
      {
        id: 2,
        name: "UI/UX"
      },
      {
        id: 3,
        name: "Javascript"
      }
    ]);
    const mobileNav = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_Menu = Menu;
      const _component_menu_button = MenuButton;
      const _component_i_carbon_chevron_down = __unplugin_components_2$1;
      const _component_menu_items = MenuItems;
      const _component_menu_item = MenuItem;
      const _component_base_button = _sfc_main$c;
      const _component_i_carbon_menu = __unplugin_components_6;
      const _component_transition_root = TransitionRoot;
      const _component_Dialog = Dialog;
      const _component_transition_child = TransitionChild;
      const _component_DialogOverlay = DialogOverlay;
      const _component_i_carbon_close = __unplugin_components_11;
      const _component_i_carbon_home = __unplugin_components_12;
      const _component_i_carbon_scatter_matrix = __unplugin_components_13;
      const _component_i_carbon_information = __unplugin_components_14;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-5 px-10 flex justify-between items-center" }, _attrs))}><div class="text-3xl"><span class="font-light text-red-400">Simple</span><span class="font-bold text-red-600">Blog</span></div>`);
      if (unref(breakpoints).isGreater("lg")) {
        _push(`<div class="space-x-2">`);
        _push(ssrRenderComponent(_component_router_link, {
          to: "/",
          class: "font-medium py-1.5 px-3 rounded-full transition hover:bg-red-100 hover:text-red-600",
          "active-class": "text-red-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Home `);
            } else {
              return [
                createTextVNode(" Home ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Menu, {
          as: "div",
          class: "relative inline-block text-left"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_menu_button, { class: "inline-flex justify-center items-center font-medium py-1.5 px-3 rounded-full transition hover:bg-red-100 hover:text-red-600" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Category `);
                    _push3(ssrRenderComponent(_component_i_carbon_chevron_down, {
                      class: "w-3 h-3 ml-2 -mr-1",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createTextVNode(" Category "),
                      createVNode(_component_i_carbon_chevron_down, {
                        class: "w-3 h-3 ml-2 -mr-1",
                        "aria-hidden": "true"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_menu_items, mergeProps({ class: "absolute right-0 w-56 mt-2 p-2 origin-top-right z-10 bg-white divide-y divide-gray-100 rounded-md shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none" }, _attrs), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(categories.value, (category, i) => {
                      _push3(ssrRenderComponent(_component_menu_item, { key: i }, {
                        default: withCtx(({ active }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<button class="${ssrRenderClass([
                              active ? "bg-red-200 text-red-600" : "text-gray-900",
                              "group flex rounded-md items-center w-full px-2 py-2 text-sm"
                            ])}"${_scopeId3}>${ssrInterpolate(category.name)}</button>`);
                          } else {
                            return [
                              createVNode("button", {
                                class: [
                                  active ? "bg-red-200 text-red-600" : "text-gray-900",
                                  "group flex rounded-md items-center w-full px-2 py-2 text-sm"
                                ]
                              }, toDisplayString(category.name), 3)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (category, i) => {
                        return openBlock(), createBlock(_component_menu_item, { key: i }, {
                          default: withCtx(({ active }) => [
                            createVNode("button", {
                              class: [
                                active ? "bg-red-200 text-red-600" : "text-gray-900",
                                "group flex rounded-md items-center w-full px-2 py-2 text-sm"
                              ]
                            }, toDisplayString(category.name), 3)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("div", null, [
                  createVNode(_component_menu_button, { class: "inline-flex justify-center items-center font-medium py-1.5 px-3 rounded-full transition hover:bg-red-100 hover:text-red-600" }, {
                    default: withCtx(() => [
                      createTextVNode(" Category "),
                      createVNode(_component_i_carbon_chevron_down, {
                        class: "w-3 h-3 ml-2 -mr-1",
                        "aria-hidden": "true"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode(Transition, {
                  "enter-active-class": "transition duration-100 ease-out",
                  "enter-from-class": "transform scale-95 opacity-0",
                  "enter-to-class": "transform scale-100 opacity-100",
                  "leave-active-class": "transition duration-75 ease-in",
                  "leave-from-class": "transform scale-100 opacity-100",
                  "leave-to-class": "transform scale-95 opacity-0"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_menu_items, { class: "absolute right-0 w-56 mt-2 p-2 origin-top-right z-10 bg-white divide-y divide-gray-100 rounded-md shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (category, i) => {
                          return openBlock(), createBlock(_component_menu_item, { key: i }, {
                            default: withCtx(({ active }) => [
                              createVNode("button", {
                                class: [
                                  active ? "bg-red-200 text-red-600" : "text-gray-900",
                                  "group flex rounded-md items-center w-full px-2 py-2 text-sm"
                                ]
                              }, toDisplayString(category.name), 3)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button class="font-medium py-1.5 px-3 rounded-full transition hover:bg-red-100 hover:text-red-600" active-class="text-red-500"> About </button>`);
        _push(ssrRenderComponent(_component_base_button, { variant: "primary" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Log in `);
            } else {
              return [
                createTextVNode(" Log in ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_base_button, { variant: "fill" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Get Started `);
            } else {
              return [
                createTextVNode(" Get Started ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div><button>`);
        _push(ssrRenderComponent(_component_i_carbon_menu, { class: "h-6 w-6 text-red-600" }, null, _parent));
        _push(`</button>`);
        _push(ssrRenderComponent(_component_transition_root, {
          as: "template",
          show: mobileNav.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Dialog, {
                as: "div",
                class: "fixed inset-0 overflow-hidden"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="absolute inset-0 overflow-hidden"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_transition_child, {
                      as: "template",
                      enter: "ease-in-out duration-300",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "ease-in-out duration-300",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_DialogOverlay, { class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_DialogOverlay, { class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-40"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_transition_child, {
                      as: "template",
                      enter: "transform transition ease-in-out duration-300 sm:duration-700",
                      "enter-from": "translate-x-full",
                      "enter-to": "translate-x-0",
                      leave: "transform transition ease-in-out duration-300 sm:duration-700",
                      "leave-from": "translate-x-0",
                      "leave-to": "translate-x-full"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="pointer-events-auto relative w-screen max-w-md"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_transition_child, {
                            as: "template",
                            enter: "ease-in-out duration-300",
                            "enter-from": "opacity-0",
                            "enter-to": "opacity-100",
                            leave: "ease-in-out duration-300",
                            "leave-from": "opacity-100",
                            "leave-to": "opacity-0"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4"${_scopeId4}><button type="button" class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"${_scopeId4}><span class="sr-only"${_scopeId4}>Close panel</span>`);
                                _push5(ssrRenderComponent(_component_i_carbon_close, {
                                  class: "h-6 w-6",
                                  "aria-hidden": "true"
                                }, null, _parent5, _scopeId4));
                                _push5(`</button></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4" }, [
                                    createVNode("button", {
                                      type: "button",
                                      class: "rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white",
                                      onClick: ($event) => mobileNav.value = false
                                    }, [
                                      createVNode("span", { class: "sr-only" }, "Close panel"),
                                      createVNode(_component_i_carbon_close, {
                                        class: "h-6 w-6",
                                        "aria-hidden": "true"
                                      })
                                    ], 8, ["onClick"])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"${_scopeId3}><div class="relative mt-6 flex-1 px-4 sm:px-6"${_scopeId3}><div class="px-4 sm:px-6 space-y-3"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_router_link, {
                            to: "/",
                            "active-class": "text-red-500",
                            class: "flex gap-x-2.5 items-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_i_carbon_home, { class: "h-6 w-6" }, null, _parent5, _scopeId4));
                                _push5(`<div class="text-2xl tracking-widest"${_scopeId4}> Home </div>`);
                              } else {
                                return [
                                  createVNode(_component_i_carbon_home, { class: "h-6 w-6" }),
                                  createVNode("div", { class: "text-2xl tracking-widest" }, " Home ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(categories.value, (category, i) => {
                            _push4(`<div to="/" active-class="text-red-500" class="flex gap-x-2.5 items-center"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_i_carbon_scatter_matrix, { class: "h-6 w-6" }, null, _parent4, _scopeId3));
                            _push4(`<div class="text-2xl tracking-widest"${_scopeId3}>${ssrInterpolate(category.name)}</div></div>`);
                          });
                          _push4(`<!--]--><div active-class="text-red-500" class="flex gap-x-2.5 items-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_i_carbon_information, { class: "h-6 w-6" }, null, _parent4, _scopeId3));
                          _push4(`<div class="text-2xl tracking-widest"${_scopeId3}> About </div></div></div><div class="absolute bottom-10 px-4 sm:px-6 space-y-3"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_base_button, {
                            variant: "primary",
                            class: "w-full block"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Log in `);
                              } else {
                                return [
                                  createTextVNode(" Log in ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_base_button, {
                            variant: "fill",
                            class: "w-full block"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Get Started `);
                              } else {
                                return [
                                  createTextVNode(" Get Started ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div></div></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "pointer-events-auto relative w-screen max-w-md" }, [
                              createVNode(_component_transition_child, {
                                as: "template",
                                enter: "ease-in-out duration-300",
                                "enter-from": "opacity-0",
                                "enter-to": "opacity-100",
                                leave: "ease-in-out duration-300",
                                "leave-from": "opacity-100",
                                "leave-to": "opacity-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4" }, [
                                    createVNode("button", {
                                      type: "button",
                                      class: "rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white",
                                      onClick: ($event) => mobileNav.value = false
                                    }, [
                                      createVNode("span", { class: "sr-only" }, "Close panel"),
                                      createVNode(_component_i_carbon_close, {
                                        class: "h-6 w-6",
                                        "aria-hidden": "true"
                                      })
                                    ], 8, ["onClick"])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl" }, [
                                createVNode("div", { class: "relative mt-6 flex-1 px-4 sm:px-6" }, [
                                  createVNode("div", { class: "px-4 sm:px-6 space-y-3" }, [
                                    createVNode(_component_router_link, {
                                      to: "/",
                                      "active-class": "text-red-500",
                                      class: "flex gap-x-2.5 items-center",
                                      onClick: ($event) => mobileNav.value = false
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_i_carbon_home, { class: "h-6 w-6" }),
                                        createVNode("div", { class: "text-2xl tracking-widest" }, " Home ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (category, i) => {
                                      return openBlock(), createBlock("div", {
                                        key: i,
                                        to: "/",
                                        "active-class": "text-red-500",
                                        class: "flex gap-x-2.5 items-center",
                                        onClick: ($event) => mobileNav.value = false
                                      }, [
                                        createVNode(_component_i_carbon_scatter_matrix, { class: "h-6 w-6" }),
                                        createVNode("div", { class: "text-2xl tracking-widest" }, toDisplayString(category.name), 1)
                                      ], 8, ["onClick"]);
                                    }), 128)),
                                    createVNode("div", {
                                      "active-class": "text-red-500",
                                      class: "flex gap-x-2.5 items-center",
                                      onClick: ($event) => mobileNav.value = false
                                    }, [
                                      createVNode(_component_i_carbon_information, { class: "h-6 w-6" }),
                                      createVNode("div", { class: "text-2xl tracking-widest" }, " About ")
                                    ], 8, ["onClick"])
                                  ]),
                                  createVNode("div", { class: "absolute bottom-10 px-4 sm:px-6 space-y-3" }, [
                                    createVNode(_component_base_button, {
                                      variant: "primary",
                                      class: "w-full block"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Log in ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_base_button, {
                                      variant: "fill",
                                      class: "w-full block"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Get Started ")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "absolute inset-0 overflow-hidden" }, [
                        createVNode(_component_transition_child, {
                          as: "template",
                          enter: "ease-in-out duration-300",
                          "enter-from": "opacity-0",
                          "enter-to": "opacity-100",
                          leave: "ease-in-out duration-300",
                          "leave-from": "opacity-100",
                          "leave-to": "opacity-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_DialogOverlay, { class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-40" }, [
                          createVNode(_component_transition_child, {
                            as: "template",
                            enter: "transform transition ease-in-out duration-300 sm:duration-700",
                            "enter-from": "translate-x-full",
                            "enter-to": "translate-x-0",
                            leave: "transform transition ease-in-out duration-300 sm:duration-700",
                            "leave-from": "translate-x-0",
                            "leave-to": "translate-x-full"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "pointer-events-auto relative w-screen max-w-md" }, [
                                createVNode(_component_transition_child, {
                                  as: "template",
                                  enter: "ease-in-out duration-300",
                                  "enter-from": "opacity-0",
                                  "enter-to": "opacity-100",
                                  leave: "ease-in-out duration-300",
                                  "leave-from": "opacity-100",
                                  "leave-to": "opacity-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4" }, [
                                      createVNode("button", {
                                        type: "button",
                                        class: "rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white",
                                        onClick: ($event) => mobileNav.value = false
                                      }, [
                                        createVNode("span", { class: "sr-only" }, "Close panel"),
                                        createVNode(_component_i_carbon_close, {
                                          class: "h-6 w-6",
                                          "aria-hidden": "true"
                                        })
                                      ], 8, ["onClick"])
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl" }, [
                                  createVNode("div", { class: "relative mt-6 flex-1 px-4 sm:px-6" }, [
                                    createVNode("div", { class: "px-4 sm:px-6 space-y-3" }, [
                                      createVNode(_component_router_link, {
                                        to: "/",
                                        "active-class": "text-red-500",
                                        class: "flex gap-x-2.5 items-center",
                                        onClick: ($event) => mobileNav.value = false
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_i_carbon_home, { class: "h-6 w-6" }),
                                          createVNode("div", { class: "text-2xl tracking-widest" }, " Home ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (category, i) => {
                                        return openBlock(), createBlock("div", {
                                          key: i,
                                          to: "/",
                                          "active-class": "text-red-500",
                                          class: "flex gap-x-2.5 items-center",
                                          onClick: ($event) => mobileNav.value = false
                                        }, [
                                          createVNode(_component_i_carbon_scatter_matrix, { class: "h-6 w-6" }),
                                          createVNode("div", { class: "text-2xl tracking-widest" }, toDisplayString(category.name), 1)
                                        ], 8, ["onClick"]);
                                      }), 128)),
                                      createVNode("div", {
                                        "active-class": "text-red-500",
                                        class: "flex gap-x-2.5 items-center",
                                        onClick: ($event) => mobileNav.value = false
                                      }, [
                                        createVNode(_component_i_carbon_information, { class: "h-6 w-6" }),
                                        createVNode("div", { class: "text-2xl tracking-widest" }, " About ")
                                      ], 8, ["onClick"])
                                    ]),
                                    createVNode("div", { class: "absolute bottom-10 px-4 sm:px-6 space-y-3" }, [
                                      createVNode(_component_base_button, {
                                        variant: "primary",
                                        class: "w-full block"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Log in ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_base_button, {
                                        variant: "fill",
                                        class: "w-full block"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Get Started ")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Dialog, {
                  as: "div",
                  class: "fixed inset-0 overflow-hidden",
                  onClose: ($event) => mobileNav.value = false
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "absolute inset-0 overflow-hidden" }, [
                      createVNode(_component_transition_child, {
                        as: "template",
                        enter: "ease-in-out duration-300",
                        "enter-from": "opacity-0",
                        "enter-to": "opacity-100",
                        leave: "ease-in-out duration-300",
                        "leave-from": "opacity-100",
                        "leave-to": "opacity-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_DialogOverlay, { class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-40" }, [
                        createVNode(_component_transition_child, {
                          as: "template",
                          enter: "transform transition ease-in-out duration-300 sm:duration-700",
                          "enter-from": "translate-x-full",
                          "enter-to": "translate-x-0",
                          leave: "transform transition ease-in-out duration-300 sm:duration-700",
                          "leave-from": "translate-x-0",
                          "leave-to": "translate-x-full"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "pointer-events-auto relative w-screen max-w-md" }, [
                              createVNode(_component_transition_child, {
                                as: "template",
                                enter: "ease-in-out duration-300",
                                "enter-from": "opacity-0",
                                "enter-to": "opacity-100",
                                leave: "ease-in-out duration-300",
                                "leave-from": "opacity-100",
                                "leave-to": "opacity-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4" }, [
                                    createVNode("button", {
                                      type: "button",
                                      class: "rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white",
                                      onClick: ($event) => mobileNav.value = false
                                    }, [
                                      createVNode("span", { class: "sr-only" }, "Close panel"),
                                      createVNode(_component_i_carbon_close, {
                                        class: "h-6 w-6",
                                        "aria-hidden": "true"
                                      })
                                    ], 8, ["onClick"])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl" }, [
                                createVNode("div", { class: "relative mt-6 flex-1 px-4 sm:px-6" }, [
                                  createVNode("div", { class: "px-4 sm:px-6 space-y-3" }, [
                                    createVNode(_component_router_link, {
                                      to: "/",
                                      "active-class": "text-red-500",
                                      class: "flex gap-x-2.5 items-center",
                                      onClick: ($event) => mobileNav.value = false
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_i_carbon_home, { class: "h-6 w-6" }),
                                        createVNode("div", { class: "text-2xl tracking-widest" }, " Home ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (category, i) => {
                                      return openBlock(), createBlock("div", {
                                        key: i,
                                        to: "/",
                                        "active-class": "text-red-500",
                                        class: "flex gap-x-2.5 items-center",
                                        onClick: ($event) => mobileNav.value = false
                                      }, [
                                        createVNode(_component_i_carbon_scatter_matrix, { class: "h-6 w-6" }),
                                        createVNode("div", { class: "text-2xl tracking-widest" }, toDisplayString(category.name), 1)
                                      ], 8, ["onClick"]);
                                    }), 128)),
                                    createVNode("div", {
                                      "active-class": "text-red-500",
                                      class: "flex gap-x-2.5 items-center",
                                      onClick: ($event) => mobileNav.value = false
                                    }, [
                                      createVNode(_component_i_carbon_information, { class: "h-6 w-6" }),
                                      createVNode("div", { class: "text-2xl tracking-widest" }, " About ")
                                    ], 8, ["onClick"])
                                  ]),
                                  createVNode("div", { class: "absolute bottom-10 px-4 sm:px-6 space-y-3" }, [
                                    createVNode(_component_base_button, {
                                      variant: "primary",
                                      class: "w-full block"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Log in ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_base_button, {
                                      variant: "fill",
                                      class: "w-full block"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Get Started ")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["onClose"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/WebNavigation.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
var aos = "";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    onMounted(() => {
      AOS.init({
        duration: 500
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_web_navigation = _sfc_main$b;
      const _component_router_view = resolveComponent("router-view");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_web_navigation, null, null, _parent));
      _push(ssrRenderComponent(_component_router_view, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/layouts/default.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$9 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_router_view = resolveComponent("router-view");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen grid place-content-center py-20" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/layouts/example.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var __layout_1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$2]]);
const layouts = {
  "default": _sfc_main$a,
  "example": __layout_1
};
function setupLayouts(routes2) {
  return routes2.map((route) => {
    var _a;
    return {
      path: route.path,
      component: layouts[((_a = route.meta) == null ? void 0 : _a.layout) || "default"],
      children: [__spreadProps(__spreadValues({}, route), { path: "" })]
    };
  });
}
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    articles: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="font-bold text-2xl text-center lg:text-left lg:pl-4" data-aos="fade-up"> Popular Articles </h2><ul class="list-disc p-5 lg:pl-9 space-y-1"><!--[-->`);
      ssrRenderList(props.articles, (article, i) => {
        _push(`<li data-aos="fade-up" class="transition hover:text-red-600">`);
        _push(ssrRenderComponent(_component_router_link, {
          to: `/article/${article.slug}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(article.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(article.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/PopularArticles.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    title: null,
    slug: null,
    imageUrl: null,
    writer: null,
    description: null,
    wrapperClass: null,
    titleClass: null,
    imageClass: null,
    showReadMore: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(ssrRenderComponent(_component_router_link, mergeProps({
        as: "div",
        to: `/article/${props.slug}`,
        class: [__props.wrapperClass, "flex items-center my-2 p-2.5 rounded-3xl gap-2 group"]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", props.imageUrl)}${ssrRenderAttr("alt", props.title)} class="${ssrRenderClass([[__props.imageClass ? __props.imageClass : ""], "w-20 h-[70px] object-cover rounded-2xl flex-none"])}"${_scopeId}><div${_scopeId}><h2 class="${ssrRenderClass([[__props.titleClass ? __props.titleClass : ""], "line-clamp-2 transition group-hover:text-red-600"])}"${_scopeId}>${ssrInterpolate(props.title)}</h2><div class="font-bold"${_scopeId}>${ssrInterpolate(props.writer)}</div><p class="line-clamp-3"${_scopeId}>${ssrInterpolate(props.description)}</p>`);
            if (__props.showReadMore) {
              _push2(`<p class="text-red-600 font-bold text-center lg:text-right mt-3"${_scopeId}> Read more... </p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("img", {
                src: props.imageUrl,
                alt: props.title,
                class: ["w-20 h-[70px] object-cover rounded-2xl flex-none", [__props.imageClass ? __props.imageClass : ""]]
              }, null, 10, ["src", "alt"]),
              createVNode("div", null, [
                createVNode("h2", {
                  class: ["line-clamp-2 transition group-hover:text-red-600", [__props.titleClass ? __props.titleClass : ""]]
                }, toDisplayString(props.title), 3),
                createVNode("div", { class: "font-bold" }, toDisplayString(props.writer), 1),
                createVNode("p", { class: "line-clamp-3" }, toDisplayString(props.description), 1),
                __props.showReadMore ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "text-red-600 font-bold text-center lg:text-right mt-3"
                }, " Read more... ")) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/ArticleCard.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    articles: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_article_card = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="font-bold text-2xl text-center lg:text-left lg:pl-4" data-aos="fade-up"> New Articles </h2><!--[-->`);
      ssrRenderList(props.articles, (article, i) => {
        _push(ssrRenderComponent(_component_article_card, {
          key: i,
          title: article.title,
          "image-url": article.imageUrl,
          writer: article.writer,
          slug: article.slug,
          description: article.desc,
          "wrapper-class": "flex-col lg:flex-row !my-5",
          "title-class": "text-2xl",
          "image-class": "!w-full lg:!w-40 !h-40",
          "show-read-more": "",
          "data-aos": "fade-up"
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/NewArticles.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    articles: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_article_card = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="font-bold text-2xl text-center lg:text-left" data-aos="fade-up"> Recent Articles </h2><!--[-->`);
      ssrRenderList(props.articles, (article, i) => {
        _push(`<!--[-->`);
        if (i !== 0) {
          _push(ssrRenderComponent(_component_article_card, {
            title: article.title,
            "image-url": article.imageUrl,
            writer: article.writer,
            slug: article.slug,
            "data-aos": "fade-up"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/RecentArticles.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    image: null,
    title: null,
    writer: null,
    slug: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(ssrRenderComponent(_component_router_link, mergeProps({
        as: "div",
        to: `/article/${__props.slug}`,
        class: "relative bg-black/70 h-[430px] rounded-3xl overflow-hidden group",
        "data-aos": "fade-up"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", props.image)} class="h-full w-full object-cover"${_scopeId}><div class="absolute inset-0 bg-black/70 transition group-hover:bg-slate-600/70 text-white p-5 flex items-end"${_scopeId}><div${_scopeId}><h2 class="text-2xl transition font-medium"${_scopeId}>${ssrInterpolate(props.title)}</h2><div${_scopeId}> By ${ssrInterpolate(props.writer)}</div></div></div>`);
          } else {
            return [
              createVNode("img", {
                src: props.image,
                class: "h-full w-full object-cover"
              }, null, 8, ["src"]),
              createVNode("div", { class: "absolute inset-0 bg-black/70 transition group-hover:bg-slate-600/70 text-white p-5 flex items-end" }, [
                createVNode("div", null, [
                  createVNode("h2", { class: "text-2xl transition font-medium" }, toDisplayString(props.title), 1),
                  createVNode("div", null, " By " + toDisplayString(props.writer), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/MainArticle.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const api = axios.create({
  baseURL: ""
});
const useArticle = defineStore("article", {
  state: () => ({
    collection: []
  }),
  actions: {
    setCollection(article) {
      this.collection = article;
    }
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const articleStore = useArticle();
    const articles = ref([]);
    const getData = async () => {
      const { data } = await api.get("/data/data.json");
      const { articles: articlesData } = data;
      articles.value = articlesData;
      articleStore.setCollection(articlesData);
    };
    onMounted(() => {
      getData();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_main_article = _sfc_main$4;
      const _component_recent_articles = _sfc_main$5;
      const _component_new_articles = _sfc_main$6;
      const _component_popular_articles = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container p-10 space-y-5" }, _attrs))}><div class="flex flex-col lg:flex-row gap-5">`);
      if (articles.value.length !== 0) {
        _push(ssrRenderComponent(_component_main_article, {
          image: articles.value[0].imageUrl,
          title: articles.value[0].title,
          writer: articles.value[0].writer,
          slug: articles.value[0].slug,
          class: "lg:basis-2/3"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_recent_articles, {
        articles: articles.value,
        class: "lg:basis-1/3"
      }, null, _parent));
      _push(`</div><div class="flex flex-col-reverse lg:flex-row gap-5">`);
      _push(ssrRenderComponent(_component_new_articles, {
        articles: articles.value,
        class: "lg:basis-2/3"
      }, null, _parent));
      _push(ssrRenderComponent(_component_popular_articles, {
        articles: articles.value,
        class: "lg:basis-1/3"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const routes$1 = [{ "name": "index", "path": "/", "component": _sfc_main$3, "props": true }, { "name": "all", "path": "/:all(.*)*", "component": () => Promise.resolve().then(function() {
  return ____all_$1;
}), "props": true }, { "name": "article-url", "path": "/article/:url", "component": () => Promise.resolve().then(function() {
  return _url_;
}), "props": true }];
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_router_view = resolveComponent("router-view");
  _push(ssrRenderComponent(_component_router_view, _attrs, null, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/App.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var App = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
var main = "";
const routes = setupLayouts(routes$1);
const createApp = ViteSSG(App, {
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition)
      return savedPosition;
    else
      return { top: 0 };
  }
}, (ctx) => {
  Object.values({ "./modules/pinia.ts": __glob_5_0 }).forEach((i) => {
    var _a;
    return (_a = i.install) == null ? void 0 : _a.call(i, ctx);
  });
});
const _hoisted_1$3 = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
var __unplugin_components_1$1 = { name: "mdi-home", render: render$3 };
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_base_button = _sfc_main$c;
  const _component_i_mdi_home = __unplugin_components_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))}><h1 class="text-blue-600 text-2xl lg:text-4xl font-black"> Not Found </h1><p class="mb-5 text-blue-400"> Your requested url was not found </p>`);
  _push(ssrRenderComponent(_component_base_button, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_i_mdi_home, null, null, _parent2, _scopeId));
        _push2(` back to home `);
      } else {
        return [
          createVNode(_component_i_mdi_home),
          createTextVNode(" back to home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/[...all].vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var ____all_ = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
var ____all_$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": ____all_
});
const _hoisted_1$2 = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("circle", {
  cx: "22.406",
  cy: "9.594",
  r: "1.44",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M16 9.838A6.162 6.162 0 1 0 22.162 16A6.162 6.162 0 0 0 16 9.838zM16 20a4 4 0 1 1 4-4a4 4 0 0 1-4 4z",
  fill: "currentColor"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createElementVNode("path", {
  d: "M16 6.162c3.204 0 3.584.012 4.849.07a6.642 6.642 0 0 1 2.228.413a3.975 3.975 0 0 1 2.278 2.278a6.642 6.642 0 0 1 .413 2.228c.058 1.265.07 1.645.07 4.85s-.012 3.583-.07 4.848a6.642 6.642 0 0 1-.413 2.228a3.975 3.975 0 0 1-2.278 2.278a6.642 6.642 0 0 1-2.228.413c-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07a6.642 6.642 0 0 1-2.228-.413a3.975 3.975 0 0 1-2.278-2.278a6.642 6.642 0 0 1-.413-2.228c-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849a6.642 6.642 0 0 1 .413-2.228a3.975 3.975 0 0 1 2.278-2.278a6.642 6.642 0 0 1 2.228-.413c1.265-.058 1.645-.07 4.849-.07M16 4c-3.259 0-3.668.014-4.948.072a8.807 8.807 0 0 0-2.912.558a6.136 6.136 0 0 0-3.51 3.51a8.807 8.807 0 0 0-.558 2.913C4.014 12.333 4 12.74 4 16s.014 3.668.072 4.948a8.807 8.807 0 0 0 .558 2.912a6.136 6.136 0 0 0 3.51 3.51a8.807 8.807 0 0 0 2.913.558c1.28.058 1.688.072 4.947.072s3.668-.014 4.948-.072a8.807 8.807 0 0 0 2.913-.558a6.136 6.136 0 0 0 3.51-3.51a8.807 8.807 0 0 0 .557-2.913C27.986 19.667 28 19.26 28 16s-.014-3.668-.072-4.948a8.807 8.807 0 0 0-.558-2.912a6.136 6.136 0 0 0-3.51-3.51a8.807 8.807 0 0 0-2.913-.557C19.667 4.013 19.26 4 16 4z",
  fill: "currentColor"
}, null, -1);
const _hoisted_5 = [
  _hoisted_2$2,
  _hoisted_3$2,
  _hoisted_4
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_5);
}
var __unplugin_components_2 = { name: "carbon-logo-instagram", render: render$2 };
const _hoisted_1$1 = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M11.92 24.94A12.76 12.76 0 0 0 24.76 12.1v-.59A9.4 9.4 0 0 0 27 9.18a9.31 9.31 0 0 1-2.59.71a4.56 4.56 0 0 0 2-2.5a8.89 8.89 0 0 1-2.86 1.1a4.52 4.52 0 0 0-7.7 4.11a12.79 12.79 0 0 1-9.3-4.71a4.51 4.51 0 0 0 1.4 6a4.47 4.47 0 0 1-2-.56v.05a4.53 4.53 0 0 0 3.55 4.45a4.53 4.53 0 0 1-2 .08A4.51 4.51 0 0 0 11.68 21a9.05 9.05 0 0 1-5.61 2A9.77 9.77 0 0 1 5 22.91a12.77 12.77 0 0 0 6.92 2",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
var __unplugin_components_1 = { name: "carbon-logo-twitter", render: render$1 };
const _hoisted_1 = {
  width: "1.2em",
  height: "1.2em",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M26.67 4H5.33A1.34 1.34 0 0 0 4 5.33v21.34A1.34 1.34 0 0 0 5.33 28h11.49v-9.28H13.7v-3.63h3.12v-2.67c0-3.1 1.89-4.79 4.67-4.79c.93 0 1.86 0 2.79.14V11h-1.91c-1.51 0-1.8.72-1.8 1.77v2.31h3.6l-.47 3.63h-3.13V28h6.1A1.34 1.34 0 0 0 28 26.67V5.33A1.34 1.34 0 0 0 26.67 4z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
var __unplugin_components_0 = { name: "carbon-logo-facebook", render };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const articleStore = useArticle();
    if (articleStore.collection.length === 0) {
      const getData = async () => {
        const { data } = await api.get("/data/data.json");
        const { articles: articlesData } = data;
        articleStore.setCollection(articlesData);
      };
      onMounted(() => {
        getData();
      });
    }
    const filteredArticle = computed(() => {
      return articleStore.collection.filter((item) => item.slug === route.params.url)[0];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i_carbon_logo_facebook = __unplugin_components_0;
      const _component_i_carbon_logo_twitter = __unplugin_components_1;
      const _component_i_carbon_logo_instagram = __unplugin_components_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto p-10" }, _attrs))}>`);
      if (unref(filteredArticle)) {
        _push(`<div><div data-aos="fade-up"> Posted by <span class="font-semibold text-red-600">${ssrInterpolate(unref(filteredArticle).writer)}</span> - ${ssrInterpolate(unref(filteredArticle).created_at)}</div><h1 data-aos="fade-up" class="text-2xl lg:text-3xl font-bold mb-5">${ssrInterpolate(unref(filteredArticle).title)}</h1><img data-aos="fade-up"${ssrRenderAttr("src", unref(filteredArticle).imageUrl)}${ssrRenderAttr("alt", unref(filteredArticle).title)} class="w-full h-52 lg:h-[450px] object-cover rounded-3xl mb-5"><div class="leading-loose space-y-3" data-aos="fade-up"><p>${ssrInterpolate(unref(filteredArticle).desc)}</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vitae ducimus maiores, architecto pariatur aliquid temporibus ea aperiam harum tempore perspiciatis minima deleniti nemo libero fugit doloremque iste molestiae laudantium cumque mollitia incidunt natus, dolorem impedit. Minima eligendi ducimus hic illo quibusdam omnis optio placeat, tempore obcaecati nulla animi consequatur!</p><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, dolores debitis. Libero saepe pariatur vero sed iste nisi, sequi natus asperiores. Exercitationem placeat perferendis cum optio dolor facere sint labore modi mollitia neque quibusdam porro, suscipit, dolorem sit nihil hic quod. Reprehenderit sit voluptas, accusantium eius, reiciendis atque vero ad asperiores libero fuga in at blanditiis consectetur hic ducimus nam nulla recusandae ipsam ratione excepturi autem sunt maxime tempore officia. Quibusdam sunt non provident modi fugiat quae reprehenderit eligendi ratione! </p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex justify-center items-center gap-3 mt-10"><button class="group">`);
      _push(ssrRenderComponent(_component_i_carbon_logo_facebook, { class: "text-red-600 h-7 w-7 transition group-hover:text-red-300" }, null, _parent));
      _push(`</button><button class="group">`);
      _push(ssrRenderComponent(_component_i_carbon_logo_twitter, { class: "text-red-600 h-7 w-7 transition group-hover:text-red-300" }, null, _parent));
      _push(`</button><button class="group">`);
      _push(ssrRenderComponent(_component_i_carbon_logo_instagram, { class: "text-red-600 h-7 w-7 transition group-hover:text-red-300" }, null, _parent));
      _push(`</button></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/article/[url].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _url_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main
});
export { createApp };
