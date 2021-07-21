(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[298],{

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/descriptions.md?vue&type=template&id=fb83dbbe

var descriptionsvue_type_template_id_fb83dbbe_hoisted_1 = {
  class: "content element-doc"
};

var descriptionsvue_type_template_id_fb83dbbe_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h2", {
  id: "descriptions-miao-shu-lie-biao"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#descriptions-miao-shu-lie-biao"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Descriptions 描述列表")], -1);

var descriptionsvue_type_template_id_fb83dbbe_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "列表形式展示多个字段。", -1);

var descriptionsvue_type_template_id_fb83dbbe_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 基础用法")], -1);

var descriptionsvue_type_template_id_fb83dbbe_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-descriptions title=\"用户信息\">\n    <el-descriptions-item label=\"用户名\">kooriookami</el-descriptions-item>\n    <el-descriptions-item label=\"手机号\">18100000000</el-descriptions-item>\n    <el-descriptions-item label=\"居住地\">苏州市</el-descriptions-item>\n    <el-descriptions-item label=\"备注\">\n      <el-tag size=\"small\">学校</el-tag>\n    </el-descriptions-item>\n    <el-descriptions-item label=\"联系地址\">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>\n</el-descriptions>\n")], -1);

var descriptionsvue_type_template_id_fb83dbbe_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "bu-tong-chi-cun"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#bu-tong-chi-cun"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 不同尺寸")], -1);

var descriptionsvue_type_template_id_fb83dbbe_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-radio-group v-model=\"size\">\n    <el-radio label=\"\">默认</el-radio>\n    <el-radio label=\"medium\">中等</el-radio>\n    <el-radio label=\"small\">小型</el-radio>\n    <el-radio label=\"mini\">超小</el-radio>\n  </el-radio-group>\n\n  <el-descriptions class=\"margin-top\" title=\"带边框列表\" :column=\"3\" :size=\"size\" border>\n    <template #extra>\n      <el-button type=\"primary\" size=\"small\">操作</el-button>\n    </template>\n    <el-descriptions-item>\n      <template #label>\n        <i class=\"el-icon-user\"></i>\n        用户名\n      </template>\n      kooriookami\n    </el-descriptions-item>\n    <el-descriptions-item>\n      <template #label>\n        <i class=\"el-icon-mobile-phone\"></i>\n        手机号\n      </template>\n      18100000000\n    </el-descriptions-item>\n    <el-descriptions-item>\n      <template #label>\n        <i class=\"el-icon-location-outline\"></i>\n        居住地\n      </template>\n      苏州市\n    </el-descriptions-item>\n    <el-descriptions-item>\n      <template #label>\n        <i class=\"el-icon-tickets\"></i>\n        备注\n      </template>\n      <el-tag size=\"small\">学校</el-tag>\n    </el-descriptions-item>\n    <el-descriptions-item>\n      <template #label>\n        <i class=\"el-icon-office-building\"></i>\n        联系地址\n      </template>\n      江苏省苏州市吴中区吴中大道 1188 号\n    </el-descriptions-item>\n  </el-descriptions>\n\n  <el-descriptions class=\"margin-top\" title=\"无边框列表\" :column=\"3\" :size=\"size\">\n    <template #extra>\n      <el-button type=\"primary\" size=\"small\">操作</el-button>\n    </template>\n    <el-descriptions-item label=\"用户名\">kooriookami</el-descriptions-item>\n    <el-descriptions-item label=\"手机号\">18100000000</el-descriptions-item>\n    <el-descriptions-item label=\"居住地\">苏州市</el-descriptions-item>\n    <el-descriptions-item label=\"备注\">\n      <el-tag size=\"small\">学校</el-tag>\n    </el-descriptions-item>\n    <el-descriptions-item label=\"联系地址\">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>\n  </el-descriptions>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        size: ''\n      };\n    }\n  }\n</script>\n")], -1);

var descriptionsvue_type_template_id_fb83dbbe_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "chui-zhi-lie-biao"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#chui-zhi-lie-biao"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 垂直列表")], -1);

var descriptionsvue_type_template_id_fb83dbbe_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-descriptions title=\"垂直带边框列表\" direction=\"vertical\" :column=\"4\" border>\n  <el-descriptions-item label=\"用户名\">kooriookami</el-descriptions-item>\n  <el-descriptions-item label=\"手机号\">18100000000</el-descriptions-item>\n  <el-descriptions-item label=\"居住地\" :span=\"2\">苏州市</el-descriptions-item>\n  <el-descriptions-item label=\"备注\">\n    <el-tag size=\"small\">学校</el-tag>\n  </el-descriptions-item>\n  <el-descriptions-item label=\"联系地址\">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>\n</el-descriptions>\n\n<el-descriptions class=\"margin-top\" title=\"垂直无边框列表\" :column=\"4\" direction=\"vertical\">\n  <el-descriptions-item label=\"用户名\">kooriookami</el-descriptions-item>\n  <el-descriptions-item label=\"手机号\">18100000000</el-descriptions-item>\n  <el-descriptions-item label=\"居住地\" :span=\"2\">苏州市</el-descriptions-item>\n  <el-descriptions-item label=\"备注\">\n    <el-tag size=\"small\">学校</el-tag>\n  </el-descriptions-item>\n  <el-descriptions-item label=\"联系地址\">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>\n</el-descriptions>\n")], -1);

var descriptionsvue_type_template_id_fb83dbbe_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "zi-ding-yi-yang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-yang-shi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 自定义样式")], -1);

var descriptionsvue_type_template_id_fb83dbbe_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-descriptions title=\"自定义样式列表\" :column=\"3\" border>\n  <el-descriptions-item label=\"用户名\" label-align=\"right\" align=\"center\" label-class-name=\"my-label\" class-name=\"my-content\" width=\"150px\">kooriookami</el-descriptions-item>\n  <el-descriptions-item label=\"手机号\" label-align=\"right\" align=\"center\">18100000000</el-descriptions-item>\n  <el-descriptions-item label=\"居住地\" label-align=\"right\" align=\"center\">苏州市</el-descriptions-item>\n  <el-descriptions-item label=\"备注\" label-align=\"right\" align=\"center\">\n    <el-tag size=\"small\">学校</el-tag>\n  </el-descriptions-item>\n  <el-descriptions-item label=\"联系地址\" label-align=\"right\" align=\"center\">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>\n</el-descriptions>\n")], -1);

var descriptionsvue_type_template_id_fb83dbbe_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h3 id=\"descriptions-attributes\"><a class=\"header-anchor\" href=\"#descriptions-attributes\">¶</a> Descriptions Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>border</td><td>是否带有边框</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>column</td><td>一行 <code>Descriptions Item</code> 的数量</td><td>number</td><td>—</td><td>3</td></tr><tr><td>direction</td><td>排列的方向</td><td>string</td><td>vertical / horizontal</td><td>horizontal</td></tr><tr><td>size</td><td>列表的尺寸</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>title</td><td>标题文本，显示在左上方</td><td>string</td><td>—</td><td>—</td></tr><tr><td>extra</td><td>操作区文本，显示在右上方</td><td>string</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"descriptions-slots\"><a class=\"header-anchor\" href=\"#descriptions-slots\">¶</a> Descriptions Slots</h3><table><thead><tr><th>Name</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>自定义标题，显示在左上方</td></tr><tr><td>extra</td><td>自定义操作区，显示在右上方</td></tr></tbody></table><h3 id=\"descriptions-item-attributes\"><a class=\"header-anchor\" href=\"#descriptions-item-attributes\">¶</a> Descriptions Item Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>标签文本</td><td>string</td><td>—</td><td>—</td></tr><tr><td>span</td><td>列的数量</td><td>number</td><td>—</td><td>1</td></tr><tr><td>width</td><td>列的宽度，不同行相同列的宽度按最大值设定</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>min-width</td><td>列的最小宽度，与 <code>width</code> 的区别是 <code>width</code> 是固定的，<code>min-width</code> 会把剩余宽度按比例分配给设置了 <code>min-width</code> 的列</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>align</td><td>列的内容对齐方式</td><td>string</td><td>left / center / right</td><td>left</td></tr><tr><td>label-align</td><td>列的标签对齐方式，若不设置该项，则使用内容的对齐方式</td><td>string</td><td>left / center / right</td><td>—</td></tr><tr><td>class-name</td><td>列的内容自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label-class-name</td><td>列的标签自定义类名</td><td>string</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"descriptions-item-slots\"><a class=\"header-anchor\" href=\"#descriptions-item-slots\">¶</a> Descriptions Item Slots</h3><table><thead><tr><th>Name</th><th>说明</th></tr></thead><tbody><tr><td>label</td><td>自定义标签文本</td></tr></tbody></table>", 8);

function descriptionsvue_type_template_id_fb83dbbe_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", descriptionsvue_type_template_id_fb83dbbe_hoisted_1, [descriptionsvue_type_template_id_fb83dbbe_hoisted_2, descriptionsvue_type_template_id_fb83dbbe_hoisted_3, descriptionsvue_type_template_id_fb83dbbe_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [descriptionsvue_type_template_id_fb83dbbe_hoisted_5];
    }),
    _: 1
  }), descriptionsvue_type_template_id_fb83dbbe_hoisted_6, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [descriptionsvue_type_template_id_fb83dbbe_hoisted_7];
    }),
    _: 1
  }), descriptionsvue_type_template_id_fb83dbbe_hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [descriptionsvue_type_template_id_fb83dbbe_hoisted_9];
    }),
    _: 1
  }), descriptionsvue_type_template_id_fb83dbbe_hoisted_10, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [descriptionsvue_type_template_id_fb83dbbe_hoisted_11];
    }),
    _: 1
  }), descriptionsvue_type_template_id_fb83dbbe_hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/descriptions.md?vue&type=template&id=fb83dbbe

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/descriptions.md?vue&type=script&lang=ts


/* harmony default export */ var descriptionsvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("kooriookami");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("18100000000");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("苏州市");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("学校");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("江苏省苏州市吴中区吴中大道 1188 号");

      function render(_ctx, _cache) {
        var _component_el_descriptions_item = _resolveComponent("el-descriptions-item");

        var _component_el_tag = _resolveComponent("el-tag");

        var _component_el_descriptions = _resolveComponent("el-descriptions");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_descriptions, {
          title: "用户信息"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_descriptions_item, {
              label: "用户名"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "手机号"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "居住地"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "备注"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_tag, {
                  size: "small"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "联系地址"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
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
    }(),
    "element-demo1": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("默认");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("中等");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("小型");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("超小");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("操作");

      var _hoisted_6 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-user"
      }, null, -1);

      var _hoisted_7 = /*#__PURE__*/_createTextVNode(" 用户名 ");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode(" kooriookami ");

      var _hoisted_9 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-mobile-phone"
      }, null, -1);

      var _hoisted_10 = /*#__PURE__*/_createTextVNode(" 手机号 ");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode(" 18100000000 ");

      var _hoisted_12 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-location-outline"
      }, null, -1);

      var _hoisted_13 = /*#__PURE__*/_createTextVNode(" 居住地 ");

      var _hoisted_14 = /*#__PURE__*/_createTextVNode(" 苏州市 ");

      var _hoisted_15 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-tickets"
      }, null, -1);

      var _hoisted_16 = /*#__PURE__*/_createTextVNode(" 备注 ");

      var _hoisted_17 = /*#__PURE__*/_createTextVNode("学校");

      var _hoisted_18 = /*#__PURE__*/_createVNode("i", {
        class: "el-icon-office-building"
      }, null, -1);

      var _hoisted_19 = /*#__PURE__*/_createTextVNode(" 联系地址 ");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode(" 江苏省苏州市吴中区吴中大道 1188 号 ");

      var _hoisted_21 = /*#__PURE__*/_createTextVNode("操作");

      var _hoisted_22 = /*#__PURE__*/_createTextVNode("kooriookami");

      var _hoisted_23 = /*#__PURE__*/_createTextVNode("18100000000");

      var _hoisted_24 = /*#__PURE__*/_createTextVNode("苏州市");

      var _hoisted_25 = /*#__PURE__*/_createTextVNode("学校");

      var _hoisted_26 = /*#__PURE__*/_createTextVNode("江苏省苏州市吴中区吴中大道 1188 号");

      function render(_ctx, _cache) {
        var _component_el_radio = _resolveComponent("el-radio");

        var _component_el_radio_group = _resolveComponent("el-radio-group");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_descriptions_item = _resolveComponent("el-descriptions-item");

        var _component_el_tag = _resolveComponent("el-tag");

        var _component_el_descriptions = _resolveComponent("el-descriptions");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.size,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.size = $event;
          })
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_radio, {
              label: ""
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_radio, {
              label: "medium"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_radio, {
              label: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_radio, {
              label: "mini"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_descriptions, {
          class: "margin-top",
          title: "带边框列表",
          column: 3,
          size: _ctx.size,
          border: ""
        }, {
          extra: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              type: "primary",
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_el_descriptions_item, null, {
              label: _withCtx(function () {
                return [_hoisted_6, _hoisted_7];
              }),
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, null, {
              label: _withCtx(function () {
                return [_hoisted_9, _hoisted_10];
              }),
              default: _withCtx(function () {
                return [_hoisted_11];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, null, {
              label: _withCtx(function () {
                return [_hoisted_12, _hoisted_13];
              }),
              default: _withCtx(function () {
                return [_hoisted_14];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, null, {
              label: _withCtx(function () {
                return [_hoisted_15, _hoisted_16];
              }),
              default: _withCtx(function () {
                return [_createVNode(_component_el_tag, {
                  size: "small"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_17];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, null, {
              label: _withCtx(function () {
                return [_hoisted_18, _hoisted_19];
              }),
              default: _withCtx(function () {
                return [_hoisted_20];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["size"]), _createVNode(_component_el_descriptions, {
          class: "margin-top",
          title: "无边框列表",
          column: 3,
          size: _ctx.size
        }, {
          extra: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              type: "primary",
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_21];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_el_descriptions_item, {
              label: "用户名"
            }, {
              default: _withCtx(function () {
                return [_hoisted_22];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "手机号"
            }, {
              default: _withCtx(function () {
                return [_hoisted_23];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "居住地"
            }, {
              default: _withCtx(function () {
                return [_hoisted_24];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "备注"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_tag, {
                  size: "small"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_25];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "联系地址"
            }, {
              default: _withCtx(function () {
                return [_hoisted_26];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["size"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            size: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("kooriookami");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("18100000000");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("苏州市");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("学校");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("江苏省苏州市吴中区吴中大道 1188 号");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("kooriookami");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("18100000000");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("苏州市");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("学校");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("江苏省苏州市吴中区吴中大道 1188 号");

      function render(_ctx, _cache) {
        var _component_el_descriptions_item = _resolveComponent("el-descriptions-item");

        var _component_el_tag = _resolveComponent("el-tag");

        var _component_el_descriptions = _resolveComponent("el-descriptions");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_descriptions, {
          title: "垂直带边框列表",
          direction: "vertical",
          column: 4,
          border: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_descriptions_item, {
              label: "用户名"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "手机号"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "居住地",
              span: 2
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "备注"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_tag, {
                  size: "small"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "联系地址"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_descriptions, {
          class: "margin-top",
          title: "垂直无边框列表",
          column: 4,
          direction: "vertical"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_descriptions_item, {
              label: "用户名"
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "手机号"
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "居住地",
              span: 2
            }, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "备注"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_tag, {
                  size: "small"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "联系地址"
            }, {
              default: _withCtx(function () {
                return [_hoisted_10];
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
    }(),
    "element-demo3": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("kooriookami");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("18100000000");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("苏州市");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("学校");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("江苏省苏州市吴中区吴中大道 1188 号");

      function render(_ctx, _cache) {
        var _component_el_descriptions_item = _resolveComponent("el-descriptions-item");

        var _component_el_tag = _resolveComponent("el-tag");

        var _component_el_descriptions = _resolveComponent("el-descriptions");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_descriptions, {
          title: "自定义样式列表",
          column: 3,
          border: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_descriptions_item, {
              label: "用户名",
              "label-align": "right",
              align: "center",
              "label-class-name": "my-label",
              "class-name": "my-content",
              width: "150px"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "手机号",
              "label-align": "right",
              align: "center"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "居住地",
              "label-align": "right",
              align: "center"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "备注",
              "label-align": "right",
              align: "center"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_tag, {
                  size: "small"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_descriptions_item, {
              label: "联系地址",
              "label-align": "right",
              align: "center"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
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
// CONCATENATED MODULE: ./website/docs/zh-CN/descriptions.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/descriptions.md



descriptionsvue_type_script_lang_ts.render = descriptionsvue_type_template_id_fb83dbbe_render

/* harmony default export */ var descriptions = __webpack_exports__["default"] = (descriptionsvue_type_script_lang_ts);

/***/ })

}]);