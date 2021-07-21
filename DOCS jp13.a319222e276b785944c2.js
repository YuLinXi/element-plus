(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[219],{

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/collapse.md?vue&type=template&id=6963c7d3

var collapsevue_type_template_id_6963c7d3_hoisted_1 = {
  class: "content element-doc"
};

var collapsevue_type_template_id_6963c7d3_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h2", {
  id: "collapse"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#collapse"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Collapse")], -1);

var collapsevue_type_template_id_6963c7d3_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "内容を格納しておくには、コラプスを使用します。", -1);

var collapsevue_type_template_id_6963c7d3_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "ji-ben-dena-shii-fang"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-ben-dena-shii-fang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 基本的な使い方")], -1);

var collapsevue_type_template_id_6963c7d3_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "複数のパネルを展開することができます", -1);

var collapsevue_type_template_id_6963c7d3_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-collapse v-model=\"activeNames\" @change=\"handleChange\">\n  <el-collapse-item title=\"Consistency\" name=\"1\">\n    <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>\n    <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Feedback\" name=\"2\">\n    <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>\n    <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Efficiency\" name=\"3\">\n    <div>Simplify the process: keep operating process simple and intuitive;</div>\n    <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>\n    <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Controllability\" name=\"4\">\n    <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>\n    <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>\n  </el-collapse-item>\n</el-collapse>\n<script>\n  export default {\n    data() {\n      return {\n        activeNames: ['1']\n      };\n    },\n    methods: {\n      handleChange(val) {\n        console.log(val);\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const activeNames = ref(['1']);\n      const handleChange = (val) => {\n        console.log(val);\n      };\n      return {\n        activeNames,\n        handleChange,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var collapsevue_type_template_id_6963c7d3_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "akodeion"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#akodeion"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" アコーディオン")], -1);

var collapsevue_type_template_id_6963c7d3_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "アコーディオンモードでは、一度に1つのパネルだけを拡大することができます。", -1);

var collapsevue_type_template_id_6963c7d3_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("アコーディオンモードを "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "accordion"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" アトリビュートを使って起動します。")])], -1);

var collapsevue_type_template_id_6963c7d3_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-collapse v-model=\"activeName\" accordion>\n  <el-collapse-item title=\"Consistency\" name=\"1\">\n    <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>\n    <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Feedback\" name=\"2\">\n    <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>\n    <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Efficiency\" name=\"3\">\n    <div>Simplify the process: keep operating process simple and intuitive;</div>\n    <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>\n    <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Controllability\" name=\"4\">\n    <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>\n    <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>\n  </el-collapse-item>\n</el-collapse>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: '1'\n      };\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const activeName = ref('1');\n\n      return {\n        activeName,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var collapsevue_type_template_id_6963c7d3_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "kasutamutaitoru"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kasutamutaitoru"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" カスタムタイトル")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("属性を使う以外にも、名前付きスロットを使ってパネルのタイトルをカスタマイズすることができ、アイコンなどのカスタムコンテンツを追加することができます。")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-collapse accordion>\n  <el-collapse-item name=\"1\">\n    <template #title>\n      Consistency<i class=\"header-icon el-icon-info\"></i>\n    </template>\n    <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>\n    <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Feedback\" name=\"2\">\n    <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>\n    <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Efficiency\" name=\"3\">\n    <div>Simplify the process: keep operating process simple and intuitive;</div>\n    <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>\n    <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>\n  </el-collapse-item>\n  <el-collapse-item title=\"Controllability\" name=\"4\">\n    <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>\n    <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>\n  </el-collapse-item>\n</el-collapse>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h3 id=\"collapse-shu-xing\"><a class=\"header-anchor\" href=\"#collapse-shu-xing\">¶</a> Collapse属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>カレントアクティブパネル</td><td>string (accordion mode) / array (non-accordion mode)</td><td>—</td><td>—</td></tr><tr><td>accordion</td><td>アコーディオンモードにするかどうか</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"collapseibento\"><a class=\"header-anchor\" href=\"#collapseibento\">¶</a> Collapseイベント</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>アクティブなパネルが変更されたときにトリガされます。</td><td>(activeNames: array (non-accordion mode) / string (accordion mode))</td></tr></tbody></table><h3 id=\"collapseaitemu-shu-xing\"><a class=\"header-anchor\" href=\"#collapseaitemu-shu-xing\">¶</a> Collapseアイテム属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>name</td><td>パネル固有の識別</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>title</td><td>パネルのタイトル</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>collapseアイテムを無効にする</td><td>boolean</td><td>—</td><td>—</td></tr></tbody></table>", 6);

function collapsevue_type_template_id_6963c7d3_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", collapsevue_type_template_id_6963c7d3_hoisted_1, [collapsevue_type_template_id_6963c7d3_hoisted_2, collapsevue_type_template_id_6963c7d3_hoisted_3, collapsevue_type_template_id_6963c7d3_hoisted_4, collapsevue_type_template_id_6963c7d3_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [collapsevue_type_template_id_6963c7d3_hoisted_6];
    }),
    _: 1
  }), collapsevue_type_template_id_6963c7d3_hoisted_7, collapsevue_type_template_id_6963c7d3_hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [collapsevue_type_template_id_6963c7d3_hoisted_10];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [collapsevue_type_template_id_6963c7d3_hoisted_9];
    }),
    _: 1
  }), collapsevue_type_template_id_6963c7d3_hoisted_11, _hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/collapse.md?vue&type=template&id=6963c7d3

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/collapse.md?vue&type=script&lang=ts


/* harmony default export */ var collapsevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", null, "Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", null, "Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", null, "Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", null, "Visual feedback: reflect current state by updating or rearranging elements of the page.", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", null, "Simplify the process: keep operating process simple and intuitive;", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", null, "Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("div", null, "Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.", -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("div", null, "Decision making: giving advices about operations is acceptable, but do not make decisions for the users;", -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("div", null, "Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.", -1);

      function render(_ctx, _cache) {
        var _component_el_collapse_item = _resolveComponent("el-collapse-item");

        var _component_el_collapse = _resolveComponent("el-collapse");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_collapse, {
          modelValue: _ctx.activeNames,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.activeNames = $event;
          }),
          onChange: _ctx.handleChange
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_collapse_item, {
              title: "Consistency",
              name: "1"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Feedback",
              name: "2"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3, _hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Efficiency",
              name: "3"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5, _hoisted_6, _hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Controllability",
              name: "4"
            }, {
              default: _withCtx(function () {
                return [_hoisted_8, _hoisted_9];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue", "onChange"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activeNames: ['1']
          };
        },
        methods: {
          handleChange: function handleChange(val) {
            console.log(val);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", null, "Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", null, "Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", null, "Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", null, "Visual feedback: reflect current state by updating or rearranging elements of the page.", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", null, "Simplify the process: keep operating process simple and intuitive;", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", null, "Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("div", null, "Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.", -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("div", null, "Decision making: giving advices about operations is acceptable, but do not make decisions for the users;", -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("div", null, "Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.", -1);

      function render(_ctx, _cache) {
        var _component_el_collapse_item = _resolveComponent("el-collapse-item");

        var _component_el_collapse = _resolveComponent("el-collapse");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_collapse, {
          modelValue: _ctx.activeName,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.activeName = $event;
          }),
          accordion: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_collapse_item, {
              title: "Consistency",
              name: "1"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Feedback",
              name: "2"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3, _hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Efficiency",
              name: "3"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5, _hoisted_6, _hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Controllability",
              name: "4"
            }, {
              default: _withCtx(function () {
                return [_hoisted_8, _hoisted_9];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activeName: '1'
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" Consistency");

      var _hoisted_2 = /*#__PURE__*/_createVNode("i", {
        class: "header-icon el-icon-info"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", null, "Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", null, "Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", null, "Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", null, "Visual feedback: reflect current state by updating or rearranging elements of the page.", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("div", null, "Simplify the process: keep operating process simple and intuitive;", -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("div", null, "Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;", -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("div", null, "Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.", -1);

      var _hoisted_10 = /*#__PURE__*/_createVNode("div", null, "Decision making: giving advices about operations is acceptable, but do not make decisions for the users;", -1);

      var _hoisted_11 = /*#__PURE__*/_createVNode("div", null, "Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.", -1);

      function render(_ctx, _cache) {
        var _component_el_collapse_item = _resolveComponent("el-collapse-item");

        var _component_el_collapse = _resolveComponent("el-collapse");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_collapse, {
          accordion: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_collapse_item, {
              name: "1"
            }, {
              title: _withCtx(function () {
                return [_hoisted_1, _hoisted_2];
              }),
              default: _withCtx(function () {
                return [_hoisted_3, _hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Feedback",
              name: "2"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5, _hoisted_6];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Efficiency",
              name: "3"
            }, {
              default: _withCtx(function () {
                return [_hoisted_7, _hoisted_8, _hoisted_9];
              }),
              _: 1
            }), _createVNode(_component_el_collapse_item, {
              title: "Controllability",
              name: "4"
            }, {
              default: _withCtx(function () {
                return [_hoisted_10, _hoisted_11];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/collapse.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/collapse.md



collapsevue_type_script_lang_ts.render = collapsevue_type_template_id_6963c7d3_render

/* harmony default export */ var collapse = __webpack_exports__["default"] = (collapsevue_type_script_lang_ts);

/***/ })

}]);