(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[275],{

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/timeline.md?vue&type=template&id=191f457c

var timelinevue_type_template_id_191f457c_hoisted_1 = {
  class: "content element-doc"
};

var timelinevue_type_template_id_191f457c_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h2", {
  id: "taimurain"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#taimurain"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" タイムライン")], -1);

var timelinevue_type_template_id_191f457c_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "タイムラインを視覚的に表示します。", -1);

var timelinevue_type_template_id_191f457c_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "ji-ben-dena-shii-fang"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-ben-dena-shii-fang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 基本的な使い方")], -1);

var timelinevue_type_template_id_191f457c_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "タイムラインは、昇順または降順で複数のアクティビティに分割することができます。タイムスタンプは他のコンポーネントと区別するための重要な機能です。ステップとの違いに注意してください。", -1);

var timelinevue_type_template_id_191f457c_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <el-timeline>\n    <el-timeline-item\n      v-for=\"(activity, index) in activities\"\n      :key=\"index\"\n      :timestamp=\"activity.timestamp\">\n      {{activity.content}}\n    </el-timeline-item>\n  </el-timeline>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        activities: [{\n          content: 'Event start',\n          timestamp: '2018-04-15'\n        }, {\n          content: 'Approved',\n          timestamp: '2018-04-13'\n        }, {\n          content: 'Success',\n          timestamp: '2018-04-11'\n        }]\n      };\n    }\n  };\n</script>\n")], -1);

var timelinevue_type_template_id_191f457c_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "kasutamunodo"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kasutamunodo"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" カスタムノード")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "サイズ、色、アイコンはノード内でカスタマイズ可能です。", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <el-timeline>\n    <el-timeline-item\n      v-for=\"(activity, index) in activities\"\n      :key=\"index\"\n      :icon=\"activity.icon\"\n      :type=\"activity.type\"\n      :color=\"activity.color\"\n      :size=\"activity.size\"\n      :timestamp=\"activity.timestamp\">\n      {{activity.content}}\n    </el-timeline-item>\n  </el-timeline>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        activities: [{\n          content: 'Custom icon',\n          timestamp: '2018-04-12 20:46',\n          size: 'large',\n          type: 'primary',\n          icon: 'el-icon-more'\n        }, {\n          content: 'Custom color',\n          timestamp: '2018-04-03 20:46',\n          color: '#0bbd87'\n        }, {\n          content: 'Custom size',\n          timestamp: '2018-04-03 20:46',\n          size: 'large'\n        }, {\n          content: 'Default node',\n          timestamp: '2018-04-03 20:46'\n        }]\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "kasutamutaimusutanpu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kasutamutaimusutanpu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" カスタムタイムスタンプ")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "タイムスタンプは、コンテンツが大きい場合にコンテンツの上部に配置することができます。", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <el-timeline>\n    <el-timeline-item timestamp=\"2018/4/12\" placement=\"top\">\n      <el-card>\n        <h4>Update Github template</h4>\n        <p>Tom committed 2018/4/12 20:46</p>\n      </el-card>\n    </el-timeline-item>\n    <el-timeline-item timestamp=\"2018/4/3\" placement=\"top\">\n      <el-card>\n        <h4>Update Github template</h4>\n        <p>Tom committed 2018/4/3 20:46</p>\n      </el-card>\n    </el-timeline-item>\n    <el-timeline-item timestamp=\"2018/4/2\" placement=\"top\">\n      <el-card>\n        <h4>Update Github template</h4>\n        <p>Tom committed 2018/4/2 20:46</p>\n      </el-card>\n    </el-timeline-item>\n  </el-timeline>\n</div>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h3 id=\"taimurain-aitemu-shu-xing\"><a class=\"header-anchor\" href=\"#taimurain-aitemu-shu-xing\">¶</a> タイムライン-アイテム属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>timestamp</td><td>タイムスタンプコンテンツ</td><td>string</td><td>-</td><td>—</td></tr><tr><td>hide-timestamp</td><td>タイムスタンプを表示するかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>placement</td><td>タイムスタンプ位置</td><td>string</td><td>top / bottom</td><td>bottom</td></tr><tr><td>type</td><td>ノード型</td><td>string</td><td>primary / success / warning / danger / info</td><td>-</td></tr><tr><td>color</td><td>ノードの背景色</td><td>string</td><td>hsl / hsv / hex / rgb</td><td>-</td></tr><tr><td>size</td><td>ノードサイズ</td><td>string</td><td>normal / large</td><td>normal</td></tr><tr><td>icon</td><td>アイコンクラス名</td><td>string</td><td>—</td><td>-</td></tr></tbody></table><h3 id=\"taimurainaitemusurotuto\"><a class=\"header-anchor\" href=\"#taimurainaitemusurotuto\">¶</a> タイムラインアイテムスロット</h3><table><thead><tr><th>name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>タイムライン項目のカスタムコンテンツ</td></tr><tr><td>dot</td><td>カスタム定義ノード</td></tr></tbody></table>", 4);

function timelinevue_type_template_id_191f457c_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", timelinevue_type_template_id_191f457c_hoisted_1, [timelinevue_type_template_id_191f457c_hoisted_2, timelinevue_type_template_id_191f457c_hoisted_3, timelinevue_type_template_id_191f457c_hoisted_4, timelinevue_type_template_id_191f457c_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [timelinevue_type_template_id_191f457c_hoisted_6];
    }),
    _: 1
  }), timelinevue_type_template_id_191f457c_hoisted_7, _hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_10, _hoisted_11, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/timeline.md?vue&type=template&id=191f457c

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/timeline.md?vue&type=script&lang=ts


/* harmony default export */ var timelinevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */];
      var _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        var _component_el_timeline_item = _resolveComponent("el-timeline-item");

        var _component_el_timeline = _resolveComponent("el-timeline");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_timeline, null, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.activities, function (activity, index) {
              return _openBlock(), _createBlock(_component_el_timeline_item, {
                key: index,
                timestamp: activity.timestamp
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(activity.content), 1)];
                }),
                _: 2
              }, 1032, ["timestamp"]);
            }), 128))];
          }),
          _: 1
        })])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activities: [{
              content: 'Event start',
              timestamp: '2018-04-15'
            }, {
              content: 'Approved',
              timestamp: '2018-04-13'
            }, {
              content: 'Success',
              timestamp: '2018-04-11'
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */];
      var _hoisted_1 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        var _component_el_timeline_item = _resolveComponent("el-timeline-item");

        var _component_el_timeline = _resolveComponent("el-timeline");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_timeline, null, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.activities, function (activity, index) {
              return _openBlock(), _createBlock(_component_el_timeline_item, {
                key: index,
                icon: activity.icon,
                type: activity.type,
                color: activity.color,
                size: activity.size,
                timestamp: activity.timestamp
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(activity.content), 1)];
                }),
                _: 2
              }, 1032, ["icon", "type", "color", "size", "timestamp"]);
            }), 128))];
          }),
          _: 1
        })])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activities: [{
              content: 'Custom icon',
              timestamp: '2018-04-12 20:46',
              size: 'large',
              type: 'primary',
              icon: 'el-icon-more'
            }, {
              content: 'Custom color',
              timestamp: '2018-04-03 20:46',
              color: '#0bbd87'
            }, {
              content: 'Custom size',
              timestamp: '2018-04-03 20:46',
              size: 'large'
            }, {
              content: 'Default node',
              timestamp: '2018-04-03 20:46'
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("h4", null, "Update Github template", -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("p", null, "Tom committed 2018/4/12 20:46", -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("h4", null, "Update Github template", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("p", null, "Tom committed 2018/4/3 20:46", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("h4", null, "Update Github template", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("p", null, "Tom committed 2018/4/2 20:46", -1);

      function render(_ctx, _cache) {
        var _component_el_card = _resolveComponent("el-card");

        var _component_el_timeline_item = _resolveComponent("el-timeline-item");

        var _component_el_timeline = _resolveComponent("el-timeline");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_timeline, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_timeline_item, {
              timestamp: "2018/4/12",
              placement: "top"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_card, null, {
                  default: _withCtx(function () {
                    return [_hoisted_2, _hoisted_3];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_timeline_item, {
              timestamp: "2018/4/3",
              placement: "top"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_card, null, {
                  default: _withCtx(function () {
                    return [_hoisted_4, _hoisted_5];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_timeline_item, {
              timestamp: "2018/4/2",
              placement: "top"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_card, null, {
                  default: _withCtx(function () {
                    return [_hoisted_6, _hoisted_7];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        })])]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/timeline.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/timeline.md



timelinevue_type_script_lang_ts.render = timelinevue_type_template_id_191f457c_render

/* harmony default export */ var timeline = __webpack_exports__["default"] = (timelinevue_type_script_lang_ts);

/***/ })

}]);