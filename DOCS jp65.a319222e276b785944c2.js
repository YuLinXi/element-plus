(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[276],{

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/tooltip.md?vue&type=template&id=9936b86c

var tooltipvue_type_template_id_9936b86c_hoisted_1 = {
  class: "content element-doc"
};

var tooltipvue_type_template_id_9936b86c_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h2", {
  id: "turutitupu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#turutitupu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" ツールチップ")], -1);

var tooltipvue_type_template_id_9936b86c_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "マウスホバーのプロンプト情報を表示します。", -1);

var tooltipvue_type_template_id_9936b86c_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "ji-ben-dena-shii-fang"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-ben-dena-shii-fang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 基本的な使い方")], -1);

var tooltipvue_type_template_id_9936b86c_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "ツールチップの配置は9箇所です。", -1);

var tooltipvue_type_template_id_9936b86c_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("ホバー時の表示内容を設定するには、属性 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を用いる。属性 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "placement"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" はツールチップの位置を決める。値は "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "[orientation]-[alignment]"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" で、方向は "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "left"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "right"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "bottom"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" の4つ、アライメントは "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "start"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "end"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "null"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" の3つで、デフォルトのアライメントはnullです。例えば、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "placement=\"left-end\""), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を例にとると、ツールチップはホバリングしている要素の左側に表示され、ツールチップの下端は要素の下端に合わせて配置されます。")])], -1);

var tooltipvue_type_template_id_9936b86c_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"box\">\n  <div class=\"top\">\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Top Left prompts info\" placement=\"top-start\">\n      <el-button>top-start</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Top Center prompts info\" placement=\"top\">\n      <el-button>top</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Top Right prompts info\" placement=\"top-end\">\n      <el-button>top-end</el-button>\n    </el-tooltip>\n  </div>\n  <div class=\"left\">\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Left Top prompts info\" placement=\"left-start\">\n      <el-button>left-start</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Left Center prompts info\" placement=\"left\">\n      <el-button>left</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Left Bottom prompts info\" placement=\"left-end\">\n      <el-button>left-end</el-button>\n    </el-tooltip>\n  </div>\n\n  <div class=\"right\">\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Right Top prompts info\" placement=\"right-start\">\n      <el-button>right-start</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Right Center prompts info\" placement=\"right\">\n      <el-button>right</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Right Bottom prompts info\" placement=\"right-end\">\n      <el-button>right-end</el-button>\n    </el-tooltip>\n  </div>\n  <div class=\"bottom\">\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Bottom Left prompts info\" placement=\"bottom-start\">\n      <el-button>bottom-start</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Bottom Center prompts info\" placement=\"bottom\">\n      <el-button>bottom</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Bottom Right prompts info\" placement=\"bottom-end\">\n      <el-button>bottom-end</el-button>\n    </el-tooltip>\n  </div>\n</div>\n\n<style>\n  .box {\n    width: 400px;\n\n    .top {\n      text-align: center;\n    }\n\n    .left {\n      float: left;\n      width: 110px;\n    }\n\n    .right {\n      float: right;\n      width: 110px;\n    }\n\n    .bottom {\n      clear: both;\n      text-align: center;\n    }\n\n    .item {\n      margin: 4px;\n    }\n\n    .left .el-tooltip__popper,\n    .right .el-tooltip__popper {\n      padding: 8px 10px;\n    }\n\n    .el-button {\n      width: 110px;\n    }\n  }\n</style>\n")], -1);

var tooltipvue_type_template_id_9936b86c_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "tema"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tema"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" テーマ")], -1);

var tooltipvue_type_template_id_9936b86c_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("ツールチップには、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "dark"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" と "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "light"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" の2つのテーマがあります。")], -1);

var tooltipvue_type_template_id_9936b86c_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("テーマを変更するには "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "effect"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を設定します。デフォルト値は"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "dark"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("です。")])], -1);

var tooltipvue_type_template_id_9936b86c_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-tooltip content=\"Top center\" placement=\"top\">\n  <el-button>Dark</el-button>\n</el-tooltip>\n<el-tooltip content=\"Bottom center\" placement=\"bottom\" effect=\"light\">\n  <el-button>Light</el-button>\n</el-tooltip>\n")], -1);

var tooltipvue_type_template_id_9936b86c_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "kontentuwo-zhui-jiasimasu."
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kontentuwo-zhui-jiasimasu."
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" コンテンツを追加します。")], -1);

var tooltipvue_type_template_id_9936b86c_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "複数行のテキストを表示し、そのフォーマットを設定します。", -1);

var tooltipvue_type_template_id_9936b86c_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" の "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" という名前のスロットを追加して "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" の "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性をオーバーライドします。")])], -1);

var tooltipvue_type_template_id_9936b86c_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-tooltip placement=\"top\">\n  <template #content>\n    multiple lines<br/>second line\n  </template>\n  <el-button>Top center</el-button>\n</el-tooltip>\n")], -1);

var tooltipvue_type_template_id_9936b86c_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h3 id=\"gao-duna-shi-yong-fa\"><a class=\"header-anchor\" href=\"#gao-duna-shi-yong-fa\">¶</a> 高度な使用法</h3><p>基本的な使い方に加えて、自分でカスタマイズできる属性がいくつかあります。:</p><p><code>transition</code> 属性はツールチップの表示・非表示のアニメーションをカスタマイズすることができ、デフォルト値は el-fade-in-linear です。</p><p>デフォルト値は el-faade-in-linear です。 <code>disabled</code> 属性は <code>tooltip</code> を無効にします。<code>true</code>に設定すればよいだけです。</p><p>実際、ツールチップは<a href=\"https://github.com/element-component/vue-popper\">Vue-popper</a>をベースにした拡張機能なので、Vue-popperで許可されている属性なら何でも使えます。</p>", 5);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-tooltip :disabled=\"disabled\" content=\"click to close tooltip function\" placement=\"bottom\" effect=\"light\">\n    <el-button @click=\"disabled = !disabled\">click to {{disabled ? 'active' : 'close'}} tooltip function</el-button>\n  </el-tooltip>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        disabled: false\n      };\n    }\n  };\n</script>\n\n<style>\n  .slide-fade-enter-active {\n    transition: all .3s ease;\n  }\n  .slide-fade-leave-active {\n    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);\n  }\n  .slide-fade-enter, .expand-fade-leave-active {\n    margin-left: 20px;\n    opacity: 0;\n  }\n</style>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<div class=\"tip\"><p>ツールチップでは <code>router-link</code> コンポーネントはサポートされていないので、<code>vm.$router.push</code> を使用してください。</p><p>無効化されたフォーム要素は、Tooltipではサポートされていません。詳細は<a href=\"https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter\">Mdn</a>を参照してください。Tooltipが動作するためには、無効化されたフォーム要素をコンテナ要素で包む必要があります。</p></div><h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>append-to-body</td><td>dialog自身をボディに追加するかどうかを指定します。入れ子になったdialogは、この属性を <code>true</code> に設定しなければなりません。</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>effect</td><td>ツールチップのテーマ</td><td>string</td><td>dark/light</td><td>dark</td></tr><tr><td>content</td><td>コンテンツを表示、<code>slot#content</code> で上書きすることができます。</td><td>String</td><td>—</td><td>—</td></tr><tr><td>placement</td><td>ツールチップの位置</td><td>string</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td><td>bottom</td></tr><tr><td>model-value / v-model</td><td>ツールチップの可視性</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>ツールチップが無効になっているかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>offset</td><td>ツールチップのオフセット</td><td>number</td><td>—</td><td>0</td></tr><tr><td>transition</td><td>アニメーション名</td><td>string</td><td>—</td><td>el-fade-in-linear</td></tr><tr><td>visible-arrow</td><td>矢印が表示されているかどうかを指定します。詳しくは、<a href=\"https://github.com/element-component/vue-popper\">Vue-popper</a>のページを参照してください。</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>popper-options</td><td><a href=\"https://popper.js.org/documentation.html\">popper.js</a> parameters</td><td>Object</td><td>refer to <a href=\"https://popper.js.org/documentation.html\">popper.js</a> doc</td><td><code>{ boundariesElement: &#39;body&#39;, gpuAcceleration: false }</code></td></tr><tr><td>show-after</td><td>ミリ秒単位の出現の遅延</td><td>number</td><td>—</td><td>0</td></tr><tr><td>hide-after</td><td>ミリ秒単位の消えるの遅延</td><td>number</td><td>—</td><td>0</td></tr><tr><td>auto-close</td><td>ツールチップを非表示にするタイムアウト（ミリ秒単位）</td><td>number</td><td>—</td><td>0</td></tr><tr><td>manual</td><td>ツールチップを手動で制御するかどうかを指定します。<code>true</code> に設定すると <code>mouseenter</code> と <code>mouseleave</code> は効果を持ちません。</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>popper-class</td><td>ツールチップのポッパーのカスタムクラス名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>enterable</td><td>マウスがツールチップに入るかどうか</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>tabindex</td><td><a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex\">tabindex</a> のツールチップ</td><td>number</td><td>—</td><td>0</td></tr></tbody></table>", 3);

function tooltipvue_type_template_id_9936b86c_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", tooltipvue_type_template_id_9936b86c_hoisted_1, [tooltipvue_type_template_id_9936b86c_hoisted_2, tooltipvue_type_template_id_9936b86c_hoisted_3, tooltipvue_type_template_id_9936b86c_hoisted_4, tooltipvue_type_template_id_9936b86c_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_9936b86c_hoisted_7];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_9936b86c_hoisted_6];
    }),
    _: 1
  }), tooltipvue_type_template_id_9936b86c_hoisted_8, tooltipvue_type_template_id_9936b86c_hoisted_9, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_9936b86c_hoisted_11];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_9936b86c_hoisted_10];
    }),
    _: 1
  }), tooltipvue_type_template_id_9936b86c_hoisted_12, tooltipvue_type_template_id_9936b86c_hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_9936b86c_hoisted_15];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_9936b86c_hoisted_14];
    }),
    _: 1
  }), tooltipvue_type_template_id_9936b86c_hoisted_16, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/tooltip.md?vue&type=template&id=9936b86c

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/tooltip.md?vue&type=script&lang=ts


/* harmony default export */ var tooltipvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
      var _hoisted_1 = {
        class: "box"
      };
      var _hoisted_2 = {
        class: "top"
      };

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("top-start");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("top");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("top-end");

      var _hoisted_6 = {
        class: "left"
      };

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("left-start");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("left");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("left-end");

      var _hoisted_10 = {
        class: "right"
      };

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("right-start");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("right");

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("right-end");

      var _hoisted_14 = {
        class: "bottom"
      };

      var _hoisted_15 = /*#__PURE__*/_createTextVNode("bottom-start");

      var _hoisted_16 = /*#__PURE__*/_createTextVNode("bottom");

      var _hoisted_17 = /*#__PURE__*/_createTextVNode("bottom-end");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_tooltip = _resolveComponent("el-tooltip");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Top Left prompts info",
          placement: "top-start"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Top Center prompts info",
          placement: "top"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Top Right prompts info",
          placement: "top-end"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })];
          }),
          _: 1
        })]), _createVNode("div", _hoisted_6, [_createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Left Top prompts info",
          placement: "left-start"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Left Center prompts info",
          placement: "left"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Left Bottom prompts info",
          placement: "left-end"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_9];
              }),
              _: 1
            })];
          }),
          _: 1
        })]), _createVNode("div", _hoisted_10, [_createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Right Top prompts info",
          placement: "right-start"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_11];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Right Center prompts info",
          placement: "right"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_12];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Right Bottom prompts info",
          placement: "right-end"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_13];
              }),
              _: 1
            })];
          }),
          _: 1
        })]), _createVNode("div", _hoisted_14, [_createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Bottom Left prompts info",
          placement: "bottom-start"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_15];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Bottom Center prompts info",
          placement: "bottom"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_16];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Bottom Right prompts info",
          placement: "bottom-end"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_17];
              }),
              _: 1
            })];
          }),
          _: 1
        })])])]);
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Dark");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Light");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_tooltip = _resolveComponent("el-tooltip");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tooltip, {
          content: "Top center",
          placement: "top"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          content: "Bottom center",
          placement: "bottom",
          effect: "light"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_2];
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
    "element-demo2": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" multiple lines");

      var _hoisted_2 = /*#__PURE__*/_createVNode("br", null, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("second line ");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Top center");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_tooltip = _resolveComponent("el-tooltip");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tooltip, {
          placement: "top"
        }, {
          content: _withCtx(function () {
            return [_hoisted_1, _hoisted_2, _hoisted_3];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_4];
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
      var _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_tooltip = _resolveComponent("el-tooltip");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tooltip, {
          disabled: _ctx.disabled,
          content: "click to close tooltip function",
          placement: "bottom",
          effect: "light"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              onClick: _cache[1] || (_cache[1] = function ($event) {
                return _ctx.disabled = !_ctx.disabled;
              })
            }, {
              default: _withCtx(function () {
                return [_createTextVNode("click to " + _toDisplayString(_ctx.disabled ? 'active' : 'close') + " tooltip function", 1)];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["disabled"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            disabled: false
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/tooltip.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/tooltip.md



tooltipvue_type_script_lang_ts.render = tooltipvue_type_template_id_9936b86c_render

/* harmony default export */ var tooltip = __webpack_exports__["default"] = (tooltipvue_type_script_lang_ts);

/***/ })

}]);