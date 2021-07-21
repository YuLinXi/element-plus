(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[238],{

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/infiniteScroll.md?vue&type=template&id=d20a9544

var infiniteScrollvue_type_template_id_d20a9544_hoisted_1 = {
  class: "content element-doc"
};

var infiniteScrollvue_type_template_id_d20a9544_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h2", {
  id: "infinitescroll"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#infinitescroll"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" InfiniteScroll")], -1);

var infiniteScrollvue_type_template_id_d20a9544_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "ページ下部に到達している間にさらに多くのデータを読み込む", -1);

var infiniteScrollvue_type_template_id_d20a9544_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "ji-ben-dena-shii-fang"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-ben-dena-shii-fang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 基本的な使い方")], -1);

var infiniteScrollvue_type_template_id_d20a9544_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("リストに "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "v-infinite-scroll"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を追加し、下までスクロールしたときに自動的にロードメソッドを実行するようにする。")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <ul class=\"infinite-list\" v-infinite-scroll=\"load\" style=\"overflow:auto\">\n    <li v-for=\"i in count\" class=\"infinite-list-item\">{{ i }}</li>\n  </ul>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        count: 0\n      }\n    },\n    methods: {\n      load () {\n        this.count += 2\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const count = ref(0);\n      const load = () => {\n        count.value += 2;\n      };\n      return {\n        count,\n        load,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "rodeinguwo-wu-xiao-hua"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#rodeinguwo-wu-xiao-hua"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" ローディングを無効化")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"infinite-list-wrapper\" style=\"overflow:auto\">\n    <ul>\n      class=\"list\"\n      v-infinite-scroll=\"load\"\n      infinite-scroll-disabled=\"disabled\">\n      <li v-for=\"i in count\" class=\"list-item\">{{ i }}</li>\n    </ul>\n    <p v-if=\"loading\">Loading...</p>\n    <p v-if=\"noMore\">No more</p>\n  </div>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        count: 10,\n        loading: false\n      }\n    },\n    computed: {\n      noMore () {\n        return this.count >= 20\n      },\n      disabled () {\n        return this.loading || this.noMore\n      }\n    },\n    methods: {\n      load () {\n        this.loading = true\n        setTimeout(() => {\n          this.count += 2\n          this.loading = false\n        }, 2000)\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref, computed } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const count = ref(10);\n      const loading = ref(false);\n      const noMore = computed(() => count.value >= 20);\n      const disabled = computed(() => loading.value || noMore.value);\n      const load = () => {\n        loading.value = true;\n        setTimeout(() => {\n          count.value += 2;\n          loading.value = false;\n        }, 2000);\n      };\n      return {\n        count,\n        loading,\n        noMore,\n        disabled,\n        load,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted values</th><th>Default</th></tr></thead><tbody><tr><td>infinite-scroll-disabled</td><td>無効かどうか</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>infinite-scroll-delay</td><td>スロットルディレイ(ms)</td><td>number</td><td>-</td><td>200</td></tr><tr><td>infinite-scroll-distance</td><td>トリガー距離(px)</td><td>number</td><td>-</td><td>0</td></tr><tr><td>infinite-scroll-immediate</td><td>初期状態でコンテンツが埋まらない場合に、すぐに読み込みメソッドを実行するかどうか。</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table>", 2);

function infiniteScrollvue_type_template_id_d20a9544_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", infiniteScrollvue_type_template_id_d20a9544_hoisted_1, [infiniteScrollvue_type_template_id_d20a9544_hoisted_2, infiniteScrollvue_type_template_id_d20a9544_hoisted_3, infiniteScrollvue_type_template_id_d20a9544_hoisted_4, infiniteScrollvue_type_template_id_d20a9544_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/infiniteScroll.md?vue&type=template&id=d20a9544

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/infiniteScroll.md?vue&type=script&lang=ts


/* harmony default export */ var infiniteScrollvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _resolveDirective = vue_esm_browser_prod["R" /* resolveDirective */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _withDirectives = vue_esm_browser_prod["gb" /* withDirectives */];
      var _hoisted_1 = {
        class: "infinite-list",
        style: {
          "overflow": "auto"
        }
      };
      var _hoisted_2 = {
        class: "infinite-list-item"
      };

      function render(_ctx, _cache) {
        var _directive_infinite_scroll = _resolveDirective("infinite-scroll");

        return _openBlock(), _createBlock("div", null, [_withDirectives(_createVNode("ul", _hoisted_1, [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.count, function (i) {
          return _openBlock(), _createBlock("li", _hoisted_2, _toDisplayString(i), 1);
        }), 256))], 512), [[_directive_infinite_scroll, _ctx.load]])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            count: 0
          };
        },
        methods: {
          load: function load() {
            this.count += 2;
          }
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
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createCommentVNode = vue_esm_browser_prod["l" /* createCommentVNode */];
      var _hoisted_1 = {
        class: "infinite-list-wrapper",
        style: {
          "overflow": "auto"
        }
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" class=\"list\" v-infinite-scroll=\"load\" infinite-scroll-disabled=\"disabled\"> ");

      var _hoisted_3 = {
        class: "list-item"
      };
      var _hoisted_4 = {
        key: 0
      };
      var _hoisted_5 = {
        key: 1
      };

      function render(_ctx, _cache) {
        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode("ul", null, [_hoisted_2, (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.count, function (i) {
          return _openBlock(), _createBlock("li", _hoisted_3, _toDisplayString(i), 1);
        }), 256))]), _ctx.loading ? (_openBlock(), _createBlock("p", _hoisted_4, "Loading...")) : _createCommentVNode("", true), _ctx.noMore ? (_openBlock(), _createBlock("p", _hoisted_5, "No more")) : _createCommentVNode("", true)])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            count: 10,
            loading: false
          };
        },
        computed: {
          noMore: function noMore() {
            return this.count >= 20;
          },
          disabled: function disabled() {
            return this.loading || this.noMore;
          }
        },
        methods: {
          load: function load() {
            var _this = this;

            this.loading = true;
            setTimeout(function () {
              _this.count += 2;
              _this.loading = false;
            }, 2000);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/infiniteScroll.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/infiniteScroll.md



infiniteScrollvue_type_script_lang_ts.render = infiniteScrollvue_type_template_id_d20a9544_render

/* harmony default export */ var infiniteScroll = __webpack_exports__["default"] = (infiniteScrollvue_type_script_lang_ts);

/***/ })

}]);