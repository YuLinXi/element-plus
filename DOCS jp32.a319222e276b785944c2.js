(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[240],{

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/input.md?vue&type=template&id=0a546406

var inputvue_type_template_id_0a546406_hoisted_1 = {
  class: "content element-doc"
};

var inputvue_type_template_id_0a546406_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h2 id=\"inpututo\"><a class=\"header-anchor\" href=\"#inpututo\">¶</a> インプット</h2><p>マウスやキーボードを使ってデータを入力します。</p><div class=\"warning\"><p>インプットは制御されたコンポーネントであり、<strong>常にVueのバインディング値</strong>を表示します。</p><p>通常の状況においては、<code>input</code> イベントは処理されるべきである。そのハンドラはコンポーネントのバインディング値を更新しなければなりません (あるいは <code>v-model</code> を使用しなければなりません)。そうでなければ、入力ボックスの値は変更されません。</p><p><code>v-model</code> 修飾子はサポートしていません。</p></div><h3 id=\"ji-ben-dena-shii-fang\"><a class=\"header-anchor\" href=\"#ji-ben-dena-shii-fang\">¶</a> 基本的な使い方</h3>", 4);

var inputvue_type_template_id_0a546406_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-input placeholder=\"Please input\" v-model=\"input\"></el-input>\n\n<script>\nimport { defineComponent, ref } from 'vue'\nexport default defineComponent ({\n  setup() {\n    return {\n      input: ref('')\n    }\n  }\n})\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "wu-xiao-hua"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#wu-xiao-hua"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 無効化")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("インプットを"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("属性で無効にする。")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-input\n  placeholder=\"Please input\"\n  v-model=\"input\"\n  :disabled=\"true\">\n</el-input>\n\n<script>\nimport { defineComponent, ref } from 'vue'\nexport default defineComponent ({\n  setup() {\n    return {\n      input: ref('')\n    }\n  }\n})\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "kuria-ke-neng"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kuria-ke-neng"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" クリア可能")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("インプットを "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性でクリア可能にできます。")])], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-input\n  placeholder=\"Please input\"\n  v-model=\"input\"\n  clearable>\n</el-input>\n\n<script>\nimport { defineComponent, ref } from 'vue'\nexport default defineComponent ({\n  setup() {\n    return {\n      input: ref('')\n    }\n  }\n})\n</script>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "pasuwadobotukusu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#pasuwadobotukusu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" パスワードボックス")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "show-password"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("属性を用いて、トグル可能なパスワードインプットを作成する。")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-input placeholder=\"Please input password\" v-model=\"input\" show-password></el-input>\n\n<script>\nimport { defineComponent, ref } from 'vue'\nexport default defineComponent ({\n  setup() {\n    return {\n      input: ref('')\n    }\n  }\n})\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "aikon-fukiinpututo"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#aikon-fukiinpututo"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" アイコン付きインプット")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "インプットタイプを示すアイコンを追加します。", -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("インプットにアイコンを追加するには、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "prefix-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" と "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "suffix-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性を使えばよい。また、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "prefix"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" と "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "suffix"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" という名前のスロットも同様に機能します。")])], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"demo-input-suffix\">\n  <span class=\"demo-input-label\">Using attributes</span>\n  <el-input\n    placeholder=\"Pick a date\"\n    suffix-icon=\"el-icon-date\"\n    v-model=\"input1\">\n  </el-input>\n  <el-input\n    placeholder=\"Type something\"\n    prefix-icon=\"el-icon-search\"\n    v-model=\"input2\">\n  </el-input>\n</div>\n<div class=\"demo-input-suffix\">\n  <span class=\"demo-input-label\">Using slots</span>\n  <el-input\n    placeholder=\"Pick a date\"\n    v-model=\"input3\">\n    <template #suffix>\n      <i class=\"el-input__icon el-icon-date\"></i>\n    </template>\n  </el-input>\n  <el-input\n    placeholder=\"Type something\"\n    v-model=\"input4\">\n    <template #prefix>\n      <i class=\"el-input__icon el-icon-search\"></i>\n    </template>\n  </el-input>\n</div>\n\n<style>\n  .demo-input-label {\n    display: inline-block;\n    width: 130px;\n  }\n</style>\n\n<script>\nimport { defineComponent, ref } from 'vue'\nexport default defineComponent ({\n  setup() {\n    return {\n      input1: ref(''),\n      input2: ref(''),\n      input3: ref(''),\n      input4: ref('')\n    }\n  }\n})\n</script>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "tekisutoeria"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tekisutoeria"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" テキストエリア")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("複数行のテキスト情報を入力できるようにリサイズ可能。属性 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "type=\"textarea\""), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を追加して、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "input"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" をネイティブの "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "textarea"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" に変更します。")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Control the height by setting the "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "rows"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" prop.")])], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-input\n  type=\"textarea\"\n  :rows=\"2\"\n  placeholder=\"Please input\"\n  v-model=\"textarea\">\n</el-input>\n\n<script>\nimport { defineComponent, ref } from 'vue'\nexport default defineComponent ({\n  setup() {\n    return {\n      textarea: ref('')\n    }\n  }\n})\n</script>\n")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "tekisutoeriano-zi-dongsaizu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tekisutoeriano-zi-dongsaizu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" テキストエリアの自動サイズ")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("インプットタイプのテキストエリアに "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "autosize"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" プロップを設定すると、内容に応じて自動的に高さが調整されます。オプションオブジェクトを "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "autosize"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" に渡すことで、テキストエリアが自動的に調整できる最小行数と最大行数を指定できます。")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-input\n  type=\"textarea\"\n  autosize\n  placeholder=\"Please input\"\n  v-model=\"textarea1\">\n</el-input>\n<div style=\"margin: 20px 0;\"></div>\n<el-input\n  type=\"textarea\"\n  :autosize=\"{ minRows: 2, maxRows: 4}\"\n  placeholder=\"Please input\"\n  v-model=\"textarea2\">\n</el-input>\n\n<script>\nimport { defineComponent, ref } from 'vue'\nexport default defineComponent ({\n  setup() {\n    return {\n      textarea1: ref(''),\n      textarea2: ref('')\n    }\n  }\n})\n</script>\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "mitukusuinpututo"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#mitukusuinpututo"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" ミックスインプット")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "要素（一般的にはラベルやボタン）を前置または追加します。", -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("入力に前置または追加する要素を配置するには "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "slot"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を用いる。")])], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<div>\n  <el-input placeholder=\"Please input\" v-model=\"input1\">\n    <template #prepend>Http://</template>\n  </el-input>\n</div>\n<div style=\"margin-top: 15px;\">\n  <el-input placeholder=\"Please input\" v-model=\"input2\">\n    <template #append>.com</template>\n  </el-input>\n</div>\n<div style=\"margin-top: 15px;\">\n  <el-input placeholder=\"Please input\" v-model=\"input3\" class=\"input-with-select\">\n    <template #prepend>\n      <el-select v-model=\"select\" placeholder=\"Select\">\n        <el-option label=\"Restaurant\" value=\"1\"></el-option>\n        <el-option label=\"Order No.\" value=\"2\"></el-option>\n        <el-option label=\"Tel\" value=\"3\"></el-option>\n      </el-select>\n    </template>\n    <template #append>\n      <el-button icon=\"el-icon-search\"></el-button>\n    </template>\n  </el-input>\n</div>\n\n<style>\n  .el-select .el-input {\n    width: 110px;\n  }\n  .input-with-select .el-input-group__prepend {\n    background-color: #fff;\n  }\n</style>\n<script>\nimport { defineComponent, ref } from 'vue'\nexport default defineComponent ({\n  setup() {\n    return {\n      input1: ref(''),\n      input2: ref(''),\n      input3: ref(''),\n      select: ref('')\n    }\n  }\n})\n</script>\n")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "saizu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#saizu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" サイズ")], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("インプットサイズを変更するために"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("属性を追加する。デフォルトのサイズの他に、3つのオプションがある: "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "large"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "small"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "mini")])], -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"demo-input-size\">\n  <el-input\n    placeholder=\"Please Input\"\n    v-model=\"input1\">\n  </el-input>\n  <el-input\n    size=\"medium\"\n    placeholder=\"Please Input\"\n    v-model=\"input2\">\n  </el-input>\n  <el-input\n    size=\"small\"\n    placeholder=\"Please Input\"\n    v-model=\"input3\">\n  </el-input>\n  <el-input\n    size=\"mini\"\n    placeholder=\"Please Input\"\n    v-model=\"input4\">\n  </el-input>\n</div>\n\n<script>\nimport { defineComponent, ref } from 'vue'\nexport default defineComponent ({\n  setup() {\n    return {\n      input1: ref(''),\n      input2: ref(''),\n      input3: ref(''),\n      input4: ref('')\n    }\n  }\n})\n</script>\n")], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "otokonpurito"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#otokonpurito"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" オートコンプリート")], -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "現在のインプットをもとに、おすすめのヒントを得ることができます。", -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("オートコンプリートコンポーネントはインプットサジェスチョンを提供します。"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "fetch-suggestions"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性は、提案されたインプットを返すメソッドです。この例では、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "querySearch(queryString, cb)"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" は、準備ができたら "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "cb(data)"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を経由してオートコンプリートにサジェスチョンを返します。")])], -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-row class=\"demo-autocomplete\">\n  <el-col :span=\"12\">\n    <div class=\"sub-title\">list suggestions when activated</div>\n    <el-autocomplete\n      class=\"inline-input\"\n      v-model=\"state1\"\n      :fetch-suggestions=\"querySearch\"\n      placeholder=\"Please Input\"\n      @select=\"handleSelect\"\n    ></el-autocomplete>\n  </el-col>\n  <el-col :span=\"12\">\n    <div class=\"sub-title\">list suggestions on input</div>\n    <el-autocomplete\n      class=\"inline-input\"\n      v-model=\"state2\"\n      :fetch-suggestions=\"querySearch\"\n      placeholder=\"Please Input\"\n      :trigger-on-focus=\"false\"\n      @select=\"handleSelect\"\n    ></el-autocomplete>\n  </el-col>\n</el-row>\n<script>\nimport { defineComponent, ref, onMounted } from 'vue'\nexport default defineComponent({\n  setup() {\n    const restaurants = ref([]);\n    const querySearch = (queryString, cb) => {\n      var results = queryString\n        ? restaurants.value.filter(createFilter(queryString))\n        : restaurants.value;\n        // call callback function to return suggestions\n        cb(results);\n    };\n    const createFilter = (queryString) => {\n      return (restaurant) => {\n        return (\n          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===\n          0\n        );\n      };\n    };\n    const loadAll = () => {\n      return [\n        { \"value\": \"vue\", \"link\": \"https://github.com/vuejs/vue\" },\n        { \"value\": \"element\", \"link\": \"https://github.com/ElemeFE/element\" },\n        { \"value\": \"cooking\", \"link\": \"https://github.com/ElemeFE/cooking\" },\n        { \"value\": \"mint-ui\", \"link\": \"https://github.com/ElemeFE/mint-ui\" },\n        { \"value\": \"vuex\", \"link\": \"https://github.com/vuejs/vuex\" },\n        { \"value\": \"vue-router\", \"link\": \"https://github.com/vuejs/vue-router\" },\n        { \"value\": \"babel\", \"link\": \"https://github.com/babel/babel\" }\n        ];\n    };\n    const handleSelect = (item) => {\n      console.log(item);\n    };\n    onMounted(() => {\n      restaurants.value = loadAll();\n    });\n    return {\n      restaurants,\n      state1: ref(''),\n      state2: ref(''),\n      querySearch,\n      createFilter,\n      loadAll,\n      handleSelect,\n    };\n  },\n});\n</script>\n")], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "kasutamutenpureto"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kasutamutenpureto"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" カスタムテンプレート")], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "サジェスチョンの表示方法をカスタマイズします。", -1);

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("サジェスチョンアイテムをカスタマイズするには、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "scoped slot"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("を使う。スコープでは、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "item"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" キーを使ってサジェスチョンオブジェクトにアクセスすることができます。")])], -1);

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-autocomplete\n  popper-class=\"my-autocomplete\"\n  v-model=\"state\"\n  :fetch-suggestions=\"querySearch\"\n  placeholder=\"Please input\"\n  @select=\"handleSelect\"\n>\n  <template #suffix>\n    <i class=\"el-icon-edit el-input__icon\" @click=\"handleIconClick\"></i>\n  </template>\n  <template #default=\"{ item }\">\n    <div class=\"value\">{{ item.value }}</div>\n    <span class=\"link\">{{ item.link }}</span>\n  </template>\n</el-autocomplete>\n\n<style>\n  .my-autocomplete {\n    li {\n      line-height: normal;\n      padding: 7px;\n\n      .value {\n        text-overflow: ellipsis;\n        overflow: hidden;\n      }\n      .link {\n        font-size: 12px;\n        color: #b4b4b4;\n      }\n    }\n  }\n</style>\n\n<script>\nimport { defineComponent, ref, onMounted } from 'vue'\nexport default defineComponent({\n  setup() {\n    const links = ref([]);\n\n    const querySearch = (queryString, cb) => {\n      var results = queryString\n        ? links.value.filter(createFilter(queryString))\n        : links.value;\n      // call callback function to return suggestion objects\n      cb(results);\n    };\n    const createFilter = (queryString) => {\n      return (restaurant) => {\n        return (\n          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===\n          0\n        );\n      };\n    };\n    const loadAll = () => {\n      return [\n        { \"value\": \"vue\", \"link\": \"https://github.com/vuejs/vue\" },\n        { \"value\": \"element\", \"link\": \"https://github.com/ElemeFE/element\" },\n        { \"value\": \"cooking\", \"link\": \"https://github.com/ElemeFE/cooking\" },\n        { \"value\": \"mint-ui\", \"link\": \"https://github.com/ElemeFE/mint-ui\" },\n        { \"value\": \"vuex\", \"link\": \"https://github.com/vuejs/vuex\" },\n        { \"value\": \"vue-router\", \"link\": \"https://github.com/vuejs/vue-router\" },\n        { \"value\": \"babel\", \"link\": \"https://github.com/babel/babel\" }\n        ];\n    };\n    const handleSelect = (item) => {\n      console.log(item);\n    };\n\n    const handleIconClick = (ev) => {\n      console.log(ev);\n    };\n\n    onMounted(() => {\n      links.value = loadAll();\n    });\n\n    return {\n      links,\n      state: ref(''),\n      querySearch,\n      createFilter,\n      loadAll,\n      handleSelect,\n      handleIconClick,\n    };\n  },\n});\n</script>\n")], -1);

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "rimoto-jian-suo"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#rimoto-jian-suo"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" リモート検索")], -1);

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "サーバーサイドからデータを検索します。", -1);

var _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-autocomplete\n  v-model=\"state\"\n  :fetch-suggestions=\"querySearchAsync\"\n  placeholder=\"Please input\"\n  @select=\"handleSelect\"\n></el-autocomplete>\n<script>\nimport { defineComponent, ref, onMounted } from 'vue'\nexport default defineComponent({\n  setup() {\n    const links = ref([]);\n    const loadAll = () => {\n      return [\n        { \"value\": \"vue\", \"link\": \"https://github.com/vuejs/vue\" },\n        { \"value\": \"element\", \"link\": \"https://github.com/ElemeFE/element\" },\n        { \"value\": \"cooking\", \"link\": \"https://github.com/ElemeFE/cooking\" },\n        { \"value\": \"mint-ui\", \"link\": \"https://github.com/ElemeFE/mint-ui\" },\n        { \"value\": \"vuex\", \"link\": \"https://github.com/vuejs/vuex\" },\n        { \"value\": \"vue-router\", \"link\": \"https://github.com/vuejs/vue-router\" },\n        { \"value\": \"babel\", \"link\": \"https://github.com/babel/babel\" }\n        ];\n    };\n    let timeout;\n    const querySearchAsync = (queryString, cb) => {\n      var results = queryString\n        ? links.value.filter(createFilter(queryString))\n        : links.value;\n\n      clearTimeout(timeout);\n      timeout = setTimeout(() => {\n        cb(results);\n      }, 3000 * Math.random());\n    };\n    const createFilter = (queryString) => {\n      return (restaurant) => {\n        return (\n          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===\n          0\n        );\n      };\n    };\n    const handleSelect = (item) => {\n      console.log(item);\n    };\n    onMounted(() => {\n      links.value = loadAll();\n    });\n    return {\n      links,\n      state: ref(''),\n      querySearchAsync,\n      createFilter,\n      loadAll,\n      handleSelect\n    };\n  },\n});\n</script>\n")], -1);

var _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "xian-jie-changsa"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#xian-jie-changsa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 限界長さ")], -1);

var _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "maxlength"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" と "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "minlength"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" はネイティブ入力の属性であり、ユーザが入力できる文字数の制限を宣言するものである。テキストやテキストエリア型のインプットに対して "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "maxlength"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" プロップを設定すると、インプット値の長さを制限することができ、同時に "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "show-word-limit"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" に設定することで単語数を表示することができます。")])], -1);

var _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-input\n  type=\"text\"\n  placeholder=\"Please input\"\n  v-model=\"text\"\n  maxlength=\"10\"\n  show-word-limit\n>\n</el-input>\n<div style=\"margin: 20px 0;\"></div>\n<el-input\n  type=\"textarea\"\n  placeholder=\"Please input\"\n  v-model=\"textarea\"\n  maxlength=\"30\"\n  show-word-limit\n>\n</el-input>\n\n<script>\nimport { defineComponent, ref } from 'vue'\nexport default defineComponent ({\n  setup() {\n    return {\n      text: ref(''),\n      textarea: ref('')\n    }\n  }\n})\n</script>\n")], -1);

var _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h3 id=\"inpututo-shu-xing\"><a class=\"header-anchor\" href=\"#inpututo-shu-xing\">¶</a> インプット属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>インプットタイプ</td><td>string</td><td>text, textarea and other <a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types\">native input types</a></td><td>text</td></tr><tr><td>modelValue / v-model</td><td>バインディング値</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>maxlength</td><td>ネイティブインプットの <code>maxlength</code> と同じ</td><td>number</td><td>—</td><td>—</td></tr><tr><td>minlength</td><td>ネイティブインプットの <code>minlength</code> と同じ</td><td>number</td><td>—</td><td>—</td></tr><tr><td>show-word-limit</td><td><code>type</code> が &#39;text&#39; または &#39;textarea&#39; の場合に単語数を表示するかどうかを指定する</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>placeholder</td><td>インプットのプレースホルダー</td><td>string</td><td>—</td><td>—</td></tr><tr><td>clearable</td><td>クリアボタンを表示するかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-password</td><td>トグル可能なパスワード入力を表示するかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>入力が無効化されているかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>インプットサイズ、<code>type</code> が &#39;textarea&#39; でない場合に動作します。</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>prefix-icon</td><td>プレフィックスアイコンクラス</td><td>string</td><td>—</td><td>—</td></tr><tr><td>suffix-icon</td><td>サフィックスアイコンクラス</td><td>string</td><td>—</td><td>—</td></tr><tr><td>rows</td><td>textareaの行数、<code>type</code>が&#39;textarea&#39;の場合にのみ動作します。</td><td>number</td><td>—</td><td>2</td></tr><tr><td>autosize</td><td>textareaが適応的な高さを持つかどうか、<code>type</code>が&#39;textarea&#39;の場合にのみ動作します。オブジェクトを受け取ることができます。 e.g. { minRows: 2, maxRows: 6 }</td><td>boolean / object</td><td>—</td><td>false</td></tr><tr><td>autocomplete</td><td>ネイティブインプットの <code>autocomplete</code> と同じ</td><td>string</td><td>on/off</td><td>off</td></tr><tr><td>name</td><td>ネイティブインプットの <code>name</code> と同じ</td><td>string</td><td>—</td><td>—</td></tr><tr><td>readonly</td><td>ネイティブインプットの <code>readonly</code> と同じ</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>max</td><td>ネイティブインプットの <code>max</code> と同じ</td><td>—</td><td>—</td><td>—</td></tr><tr><td>min</td><td>ネイティブインプットの <code>min</code> と同じ</td><td>—</td><td>—</td><td>—</td></tr><tr><td>step</td><td>ネイティブインプットの <code>step</code> と同じ</td><td>—</td><td>—</td><td>—</td></tr><tr><td>resize</td><td>リサイズ性を制御する</td><td>string</td><td>none, both, horizontal, vertical</td><td>—</td></tr><tr><td>autofocus</td><td>ネイティブインプットの <code>autofocus</code> と同じ</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>form</td><td>ネイティブインプットの <code>form</code> と同じ</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>ラベルインデックス</td><td>string</td><td>—</td><td>—</td></tr><tr><td>tabindex</td><td>インプットタビインデックス</td><td>string / number</td><td>-</td><td>-</td></tr><tr><td>validate-event</td><td>フォームバリデーションをトリガするかどうか</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table><h3 id=\"inpututosurotuto\"><a class=\"header-anchor\" href=\"#inpututosurotuto\">¶</a> インプットスロット</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>prefix</td><td>インプットプレフィックスとしての内容、 <code>type</code> が &#39;text&#39; の場合のみ動作します。</td></tr><tr><td>suffix</td><td>インプットサフィックスとしての内容、 <code>type</code> が &#39;text&#39; の場合のみ動作します。</td></tr><tr><td>prepend</td><td>インプットの前に付加する内容、 <code>type</code> が &#39;text&#39; の場合のみ動作します。</td></tr><tr><td>append</td><td>インプットの後に付加する内容、 <code>type</code> が &#39;text&#39; の場合のみ動作します。</td></tr></tbody></table><h3 id=\"inpututoibento\"><a class=\"header-anchor\" href=\"#inpututoibento\">¶</a> インプットイベント</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>blur</td><td>インプットがぼやけたときにトリガーされます</td><td>(event: Event)</td></tr><tr><td>focus</td><td>インプットがフォーカスされたときトリガーされます</td><td>(event: Event)</td></tr><tr><td>change</td><td>インプットボックスがフォーカスを失ったとき、またはユーザーが Enter キーを押したときにのみトリガされます</td><td>(value: string | number)</td></tr><tr><td>input</td><td>インプット値が変更されたときにトリガーされます</td><td>(value: string | number)</td></tr><tr><td>clear</td><td>クリアボタンをクリックしてインプットがクリアされたときにトリガされます。</td><td>—</td></tr></tbody></table><h3 id=\"inpututomesotudo\"><a class=\"header-anchor\" href=\"#inpututomesotudo\">¶</a> インプットメソッド</h3><table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>focus</td><td>インプット要素にフォーカスを当てる</td><td>—</td></tr><tr><td>blur</td><td>インプット要素にフォーカスをぼやけさせる</td><td>—</td></tr><tr><td>select</td><td>インプット要素のテキストを選択</td><td>—</td></tr></tbody></table><h3 id=\"otokonpurito-shu-xing\"><a class=\"header-anchor\" href=\"#otokonpurito-shu-xing\">¶</a> オートコンプリート属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Options</th><th>Default</th></tr></thead><tbody><tr><td>placeholder</td><td>オートコンプリートでのインプットプレースホルダー</td><td>string</td><td>—</td><td>—</td></tr><tr><td>clearable</td><td>クリアボタンを表示するかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>オートコンプリートを無効にしているかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>value-key</td><td>表示用インプットサジェスチョンオブジェクトのキー名</td><td>string</td><td>—</td><td>value</td></tr><tr><td>icon</td><td>アイコン名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>model-value / v-model</td><td>バインディング値</td><td>string</td><td>—</td><td>—</td></tr><tr><td>debounce</td><td>タイプ時のデバウンス遅延（ミリ秒単位）</td><td>number</td><td>—</td><td>300</td></tr><tr><td>placement</td><td>ポップアップメニューの配置</td><td>string</td><td>top / top-start / top-end / bottom / bottom-start / bottom-end</td><td>bottom-start</td></tr><tr><td>fetch-suggestions</td><td>インプットサジェスチョンを取得するためのメソッドです。サジェスチョンの準備ができたら、<code>callback(data:[])</code> を呼び出してオートコンプリートに返す。</td><td>Function(queryString, callback)</td><td>—</td><td>—</td></tr><tr><td>popper-class</td><td>オートコンプリートのドロップダウン用カスタムクラス名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>trigger-on-focus</td><td>インプットフォーカス時にサジェスチョンを表示するかどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>name</td><td>ネイティブインプットの <code>name</code> と同じ</td><td>string</td><td>—</td><td>—</td></tr><tr><td>select-when-unmatched</td><td>オートコンプリートにマッチするイベントがない場合に、入力時に <code>select</code> イベントを発生させるかどうか。</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>label</td><td>ラベルテキスト</td><td>string</td><td>—</td><td>—</td></tr><tr><td>prefix-icon</td><td>プレフィックスアイコンクラス</td><td>string</td><td>—</td><td>—</td></tr><tr><td>suffix-icon</td><td>サフィックスアイコンクラス</td><td>string</td><td>—</td><td>—</td></tr><tr><td>hide-loading</td><td>リモート検索で読み込みアイコンを非表示にするかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>ドロップダウンをボディに追加するかどうかを指定します。ドロップダウンの位置が間違っている場合は、このプロップをfalseに設定してみてください。</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>highlight-first-item</td><td>リモート検索サジェスチョンの最初の項目をデフォルトで強調表示するかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>input-style</td><td>the style of the input element or textarea element</td><td>object</td><td>-</td><td>{}</td></tr></tbody></table><h3 id=\"otokonpuritosurotuto\"><a class=\"header-anchor\" href=\"#otokonpuritosurotuto\">¶</a> オートコンプリートスロット</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>prefix</td><td>インプットプレフィックスとしての内容</td></tr><tr><td>suffix</td><td>インプットサフィックスとしての内容</td></tr><tr><td>prepend</td><td>インプット前に付加する内容</td></tr><tr><td>append</td><td>インプット後に付加する内容</td></tr></tbody></table><h3 id=\"otokonpuritosukopusurotuto\"><a class=\"header-anchor\" href=\"#otokonpuritosukopusurotuto\">¶</a> オートコンプリートスコープスロット</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>インプットサジェスチョンのためのカスタムコンテンツ。スコープパラメータは { item } です。</td></tr></tbody></table><h3 id=\"otokonpuritoibento\"><a class=\"header-anchor\" href=\"#otokonpuritoibento\">¶</a> オートコンプリートイベント</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>select</td><td>サジェストがクリックされた時にトリガーされます。</td><td>suggestion being clicked</td></tr><tr><td>change</td><td>入力値の中のアイコンが変化したときにトリガーされます。</td><td>(value: string | number)</td></tr></tbody></table><h3 id=\"otokonpuritomesotudo\"><a class=\"header-anchor\" href=\"#otokonpuritomesotudo\">¶</a> オートコンプリートメソッド</h3><table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>focus</td><td>インプット要素にフォーカスします</td><td>—</td></tr></tbody></table>", 18);

function inputvue_type_template_id_0a546406_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo6");

  var _component_element_demo7 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo7");

  var _component_element_demo8 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo8");

  var _component_element_demo9 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo9");

  var _component_element_demo10 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo10");

  var _component_element_demo11 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo11");

  var _component_element_demo12 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo12");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", inputvue_type_template_id_0a546406_hoisted_1, [inputvue_type_template_id_0a546406_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [inputvue_type_template_id_0a546406_hoisted_6];
    }),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_16, _hoisted_17, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), _hoisted_20, _hoisted_21, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    _: 1
  }), _hoisted_24, _hoisted_25, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    _: 1
  }), _hoisted_27, _hoisted_28, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo7)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_30];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_29];
    }),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo8)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_33];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_32];
    }),
    _: 1
  }), _hoisted_34, _hoisted_35, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo9)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_37];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_36];
    }),
    _: 1
  }), _hoisted_38, _hoisted_39, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo10)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_41];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_40];
    }),
    _: 1
  }), _hoisted_42, _hoisted_43, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo11)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_44];
    }),
    _: 1
  }), _hoisted_45, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo12)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_47];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_46];
    }),
    _: 1
  }), _hoisted_48, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/input.md?vue&type=template&id=0a546406

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/input.md?vue&type=script&lang=ts


/* harmony default export */ var inputvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input, {
          placeholder: "Please input",
          modelValue: _ctx.input,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.input = $event;
          })
        }, null, 8, ["modelValue"])]);
      }

      var defineComponent = vue_esm_browser_prod["r" /* defineComponent */],
          ref = vue_esm_browser_prod["M" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            input: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input, {
          placeholder: "Please input",
          modelValue: _ctx.input,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.input = $event;
          }),
          disabled: true
        }, null, 8, ["modelValue"])]);
      }

      var defineComponent = vue_esm_browser_prod["r" /* defineComponent */],
          ref = vue_esm_browser_prod["M" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            input: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input, {
          placeholder: "Please input",
          modelValue: _ctx.input,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.input = $event;
          }),
          clearable: ""
        }, null, 8, ["modelValue"])]);
      }

      var defineComponent = vue_esm_browser_prod["r" /* defineComponent */],
          ref = vue_esm_browser_prod["M" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            input: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input, {
          placeholder: "Please input password",
          modelValue: _ctx.input,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.input = $event;
          }),
          "show-password": ""
        }, null, 8, ["modelValue"])]);
      }

      var defineComponent = vue_esm_browser_prod["r" /* defineComponent */],
          ref = vue_esm_browser_prod["M" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            input: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
      var _hoisted_1 = {
        class: "demo-input-suffix"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demo-input-label"
      }, "Using attributes", -1);

      var _hoisted_3 = {
        class: "demo-input-suffix"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", {
        class: "demo-input-label"
      }, "Using slots", -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("i", {
        class: "el-input__icon el-icon-date"
      }, null, -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("i", {
        class: "el-input__icon el-icon-search"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_input, {
          placeholder: "Pick a date",
          "suffix-icon": "el-icon-date",
          modelValue: _ctx.input1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.input1 = $event;
          })
        }, null, 8, ["modelValue"]), _createVNode(_component_el_input, {
          placeholder: "Type something",
          "prefix-icon": "el-icon-search",
          modelValue: _ctx.input2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.input2 = $event;
          })
        }, null, 8, ["modelValue"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_input, {
          placeholder: "Pick a date",
          modelValue: _ctx.input3,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.input3 = $event;
          })
        }, {
          suffix: _withCtx(function () {
            return [_hoisted_5];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_input, {
          placeholder: "Type something",
          modelValue: _ctx.input4,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.input4 = $event;
          })
        }, {
          prefix: _withCtx(function () {
            return [_hoisted_6];
          }),
          _: 1
        }, 8, ["modelValue"])])]);
      }

      var defineComponent = vue_esm_browser_prod["r" /* defineComponent */],
          ref = vue_esm_browser_prod["M" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            input1: ref(''),
            input2: ref(''),
            input3: ref(''),
            input4: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input, {
          type: "textarea",
          rows: 2,
          placeholder: "Please input",
          modelValue: _ctx.textarea,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.textarea = $event;
          })
        }, null, 8, ["modelValue"])]);
      }

      var defineComponent = vue_esm_browser_prod["r" /* defineComponent */],
          ref = vue_esm_browser_prod["M" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            textarea: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        style: {
          "margin": "20px 0"
        }
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input, {
          type: "textarea",
          autosize: "",
          placeholder: "Please input",
          modelValue: _ctx.textarea1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.textarea1 = $event;
          })
        }, null, 8, ["modelValue"]), _hoisted_1, _createVNode(_component_el_input, {
          type: "textarea",
          autosize: {
            minRows: 2,
            maxRows: 4
          },
          placeholder: "Please input",
          modelValue: _ctx.textarea2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.textarea2 = $event;
          })
        }, null, 8, ["modelValue"])]);
      }

      var defineComponent = vue_esm_browser_prod["r" /* defineComponent */],
          ref = vue_esm_browser_prod["M" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            textarea1: ref(''),
            textarea2: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo7": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Http://");

      var _hoisted_2 = {
        style: {
          "margin-top": "15px"
        }
      };

      var _hoisted_3 = /*#__PURE__*/_createTextVNode(".com");

      var _hoisted_4 = {
        style: {
          "margin-top": "15px"
        }
      };

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", null, [_createVNode(_component_el_input, {
          placeholder: "Please input",
          modelValue: _ctx.input1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.input1 = $event;
          })
        }, {
          prepend: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["modelValue"])]), _createVNode("div", _hoisted_2, [_createVNode(_component_el_input, {
          placeholder: "Please input",
          modelValue: _ctx.input2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.input2 = $event;
          })
        }, {
          append: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }, 8, ["modelValue"])]), _createVNode("div", _hoisted_4, [_createVNode(_component_el_input, {
          placeholder: "Please input",
          modelValue: _ctx.input3,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.input3 = $event;
          }),
          class: "input-with-select"
        }, {
          prepend: _withCtx(function () {
            return [_createVNode(_component_el_select, {
              modelValue: _ctx.select,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                return _ctx.select = $event;
              }),
              placeholder: "Select"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_option, {
                  label: "Restaurant",
                  value: "1"
                }), _createVNode(_component_el_option, {
                  label: "Order No.",
                  value: "2"
                }), _createVNode(_component_el_option, {
                  label: "Tel",
                  value: "3"
                })];
              }),
              _: 1
            }, 8, ["modelValue"])];
          }),
          append: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              icon: "el-icon-search"
            })];
          }),
          _: 1
        }, 8, ["modelValue"])])]);
      }

      var defineComponent = vue_esm_browser_prod["r" /* defineComponent */],
          ref = vue_esm_browser_prod["M" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            input1: ref(''),
            input2: ref(''),
            input3: ref(''),
            select: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo8": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
      var _hoisted_1 = {
        class: "demo-input-size"
      };

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_input, {
          placeholder: "Please Input",
          modelValue: _ctx.input1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.input1 = $event;
          })
        }, null, 8, ["modelValue"]), _createVNode(_component_el_input, {
          size: "medium",
          placeholder: "Please Input",
          modelValue: _ctx.input2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.input2 = $event;
          })
        }, null, 8, ["modelValue"]), _createVNode(_component_el_input, {
          size: "small",
          placeholder: "Please Input",
          modelValue: _ctx.input3,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.input3 = $event;
          })
        }, null, 8, ["modelValue"]), _createVNode(_component_el_input, {
          size: "mini",
          placeholder: "Please Input",
          modelValue: _ctx.input4,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.input4 = $event;
          })
        }, null, 8, ["modelValue"])])]);
      }

      var defineComponent = vue_esm_browser_prod["r" /* defineComponent */],
          ref = vue_esm_browser_prod["M" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            input1: ref(''),
            input2: ref(''),
            input3: ref(''),
            input4: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo9": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "sub-title"
      }, "list suggestions when activated", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "sub-title"
      }, "list suggestions on input", -1);

      function render(_ctx, _cache) {
        var _component_el_autocomplete = _resolveComponent("el-autocomplete");

        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          class: "demo-autocomplete"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode(_component_el_autocomplete, {
                  class: "inline-input",
                  modelValue: _ctx.state1,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.state1 = $event;
                  }),
                  "fetch-suggestions": _ctx.querySearch,
                  placeholder: "Please Input",
                  onSelect: _ctx.handleSelect
                }, null, 8, ["modelValue", "fetch-suggestions", "onSelect"])];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_2, _createVNode(_component_el_autocomplete, {
                  class: "inline-input",
                  modelValue: _ctx.state2,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.state2 = $event;
                  }),
                  "fetch-suggestions": _ctx.querySearch,
                  placeholder: "Please Input",
                  "trigger-on-focus": false,
                  onSelect: _ctx.handleSelect
                }, null, 8, ["modelValue", "fetch-suggestions", "onSelect"])];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var defineComponent = vue_esm_browser_prod["r" /* defineComponent */],
          ref = vue_esm_browser_prod["M" /* ref */],
          onMounted = vue_esm_browser_prod["E" /* onMounted */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          var restaurants = ref([]);

          var querySearch = function querySearch(queryString, cb) {
            var results = queryString ? restaurants.value.filter(createFilter(queryString)) : restaurants.value; // call callback function to return suggestions

            cb(results);
          };

          var createFilter = function createFilter(queryString) {
            return function (restaurant) {
              return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
            };
          };

          var loadAll = function loadAll() {
            return [{
              "value": "vue",
              "link": "https://github.com/vuejs/vue"
            }, {
              "value": "element",
              "link": "https://github.com/ElemeFE/element"
            }, {
              "value": "cooking",
              "link": "https://github.com/ElemeFE/cooking"
            }, {
              "value": "mint-ui",
              "link": "https://github.com/ElemeFE/mint-ui"
            }, {
              "value": "vuex",
              "link": "https://github.com/vuejs/vuex"
            }, {
              "value": "vue-router",
              "link": "https://github.com/vuejs/vue-router"
            }, {
              "value": "babel",
              "link": "https://github.com/babel/babel"
            }];
          };

          var handleSelect = function handleSelect(item) {
            console.log(item);
          };

          onMounted(function () {
            restaurants.value = loadAll();
          });
          return {
            restaurants: restaurants,
            state1: ref(''),
            state2: ref(''),
            querySearch: querySearch,
            createFilter: createFilter,
            loadAll: loadAll,
            handleSelect: handleSelect
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo10": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
      var _hoisted_1 = {
        class: "value"
      };
      var _hoisted_2 = {
        class: "link"
      };

      function render(_ctx, _cache) {
        var _component_el_autocomplete = _resolveComponent("el-autocomplete");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_autocomplete, {
          "popper-class": "my-autocomplete",
          modelValue: _ctx.state,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.state = $event;
          }),
          "fetch-suggestions": _ctx.querySearch,
          placeholder: "Please input",
          onSelect: _ctx.handleSelect
        }, {
          suffix: _withCtx(function () {
            return [_createVNode("i", {
              class: "el-icon-edit el-input__icon",
              onClick: _cache[1] || (_cache[1] = function () {
                return _ctx.handleIconClick && _ctx.handleIconClick.apply(_ctx, arguments);
              })
            })];
          }),
          default: _withCtx(function (_ref) {
            var item = _ref.item;
            return [_createVNode("div", _hoisted_1, _toDisplayString(item.value), 1), _createVNode("span", _hoisted_2, _toDisplayString(item.link), 1)];
          }),
          _: 1
        }, 8, ["modelValue", "fetch-suggestions", "onSelect"])]);
      }

      var defineComponent = vue_esm_browser_prod["r" /* defineComponent */],
          ref = vue_esm_browser_prod["M" /* ref */],
          onMounted = vue_esm_browser_prod["E" /* onMounted */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          var links = ref([]);

          var querySearch = function querySearch(queryString, cb) {
            var results = queryString ? links.value.filter(createFilter(queryString)) : links.value; // call callback function to return suggestion objects

            cb(results);
          };

          var createFilter = function createFilter(queryString) {
            return function (restaurant) {
              return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
            };
          };

          var loadAll = function loadAll() {
            return [{
              "value": "vue",
              "link": "https://github.com/vuejs/vue"
            }, {
              "value": "element",
              "link": "https://github.com/ElemeFE/element"
            }, {
              "value": "cooking",
              "link": "https://github.com/ElemeFE/cooking"
            }, {
              "value": "mint-ui",
              "link": "https://github.com/ElemeFE/mint-ui"
            }, {
              "value": "vuex",
              "link": "https://github.com/vuejs/vuex"
            }, {
              "value": "vue-router",
              "link": "https://github.com/vuejs/vue-router"
            }, {
              "value": "babel",
              "link": "https://github.com/babel/babel"
            }];
          };

          var handleSelect = function handleSelect(item) {
            console.log(item);
          };

          var handleIconClick = function handleIconClick(ev) {
            console.log(ev);
          };

          onMounted(function () {
            links.value = loadAll();
          });
          return {
            links: links,
            state: ref(''),
            querySearch: querySearch,
            createFilter: createFilter,
            loadAll: loadAll,
            handleSelect: handleSelect,
            handleIconClick: handleIconClick
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo11": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_autocomplete = _resolveComponent("el-autocomplete");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_autocomplete, {
          modelValue: _ctx.state,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.state = $event;
          }),
          "fetch-suggestions": _ctx.querySearchAsync,
          placeholder: "Please input",
          onSelect: _ctx.handleSelect
        }, null, 8, ["modelValue", "fetch-suggestions", "onSelect"])]);
      }

      var defineComponent = vue_esm_browser_prod["r" /* defineComponent */],
          ref = vue_esm_browser_prod["M" /* ref */],
          onMounted = vue_esm_browser_prod["E" /* onMounted */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          var links = ref([]);

          var loadAll = function loadAll() {
            return [{
              "value": "vue",
              "link": "https://github.com/vuejs/vue"
            }, {
              "value": "element",
              "link": "https://github.com/ElemeFE/element"
            }, {
              "value": "cooking",
              "link": "https://github.com/ElemeFE/cooking"
            }, {
              "value": "mint-ui",
              "link": "https://github.com/ElemeFE/mint-ui"
            }, {
              "value": "vuex",
              "link": "https://github.com/vuejs/vuex"
            }, {
              "value": "vue-router",
              "link": "https://github.com/vuejs/vue-router"
            }, {
              "value": "babel",
              "link": "https://github.com/babel/babel"
            }];
          };

          var timeout;

          var querySearchAsync = function querySearchAsync(queryString, cb) {
            var results = queryString ? links.value.filter(createFilter(queryString)) : links.value;
            clearTimeout(timeout);
            timeout = setTimeout(function () {
              cb(results);
            }, 3000 * Math.random());
          };

          var createFilter = function createFilter(queryString) {
            return function (restaurant) {
              return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
            };
          };

          var handleSelect = function handleSelect(item) {
            console.log(item);
          };

          onMounted(function () {
            links.value = loadAll();
          });
          return {
            links: links,
            state: ref(''),
            querySearchAsync: querySearchAsync,
            createFilter: createFilter,
            loadAll: loadAll,
            handleSelect: handleSelect
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo12": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        style: {
          "margin": "20px 0"
        }
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input, {
          type: "text",
          placeholder: "Please input",
          modelValue: _ctx.text,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.text = $event;
          }),
          maxlength: "10",
          "show-word-limit": ""
        }, null, 8, ["modelValue"]), _hoisted_1, _createVNode(_component_el_input, {
          type: "textarea",
          placeholder: "Please input",
          modelValue: _ctx.textarea,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.textarea = $event;
          }),
          maxlength: "30",
          "show-word-limit": ""
        }, null, 8, ["modelValue"])]);
      }

      var defineComponent = vue_esm_browser_prod["r" /* defineComponent */],
          ref = vue_esm_browser_prod["M" /* ref */];
      var democomponentExport = defineComponent({
        setup: function setup() {
          return {
            text: ref(''),
            textarea: ref('')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/input.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/input.md



inputvue_type_script_lang_ts.render = inputvue_type_template_id_0a546406_render

/* harmony default export */ var input = __webpack_exports__["default"] = (inputvue_type_script_lang_ts);

/***/ })

}]);