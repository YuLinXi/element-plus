(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[247],{

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/message.md?vue&type=template&id=010f5db0

var messagevue_type_template_id_010f5db0_hoisted_1 = {
  class: "content element-doc"
};

var messagevue_type_template_id_010f5db0_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h2", {
  id: "metusezi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#metusezi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" メッセージ")], -1);

var messagevue_type_template_id_010f5db0_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "アクティビティ後のフィードバックを表示するために使用されます。Notificationとの違いは、後者はシステムレベルの受動的な通知を表示するために使用されることが多いことです。", -1);

var messagevue_type_template_id_010f5db0_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "ji-ben-dena-shii-fang"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-ben-dena-shii-fang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 基本的な使い方")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "上部に表示され、3秒後に消えます。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("メッセージの設定は通知と非常に似ているので、ここではオプションの詳細については説明しません。以下のオプション表とnotificationのドキュメントを組み合わせて確認すると理解が深まります。要素には "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "$message"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" メソッドを登録しています。メッセージは文字列かVNodeをパラメータに取ることができ、それが本文として表示されます。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button :plain=\"true\" @click=\"open\">Show message</el-button>\n  <el-button :plain=\"true\" @click=\"openVn\">VNode</el-button>\n</template>\n\n<script>\n  import { h } from 'vue';\n\n  export default {\n    methods: {\n      open() {\n        this.$message('This is a message.');\n      },\n\n      openVn() {\n        this.$message({\n          message: h('p', null, [\n            h('span', null, 'Message can be '),\n            h('i', { style: 'color: teal' }, 'VNode')\n          ])\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, h } from 'vue';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open = () => {\n        ElMessage('this is a message.');\n      };\n\n      const openVn = () => {\n        ElMessage({\n          message: h('p', null, [\n            h('span', null, 'Message can be '),\n            h('i', { style: 'color: teal' }, 'VNode'),\n          ]),\n        });\n      };\n\n      return {\n        open,\n        openVn,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "taipu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#taipu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" タイプ")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "成功、警告、メッセージ、エラーのアクティビティのフィードバックを表示するために使用されます。", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("さらにカスタマイズが必要な場合は、メッセージコンポーネントはオブジェクトをパラメータとして受け取ることもできます。例えば、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("の値を設定することで異なるタイプを定義することができ、デフォルトは "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "info"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" です。このような場合、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("の値として本体が渡されます。また、型ごとにメソッドを登録しているので、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "open4"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("のように型を渡さずに直接呼び出すこともできる。")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button :plain=\"true\" @click=\"open2\">success</el-button>\n  <el-button :plain=\"true\" @click=\"open3\">warning</el-button>\n  <el-button :plain=\"true\" @click=\"open1\">message</el-button>\n  <el-button :plain=\"true\" @click=\"open4\">error</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open1() {\n        this.$message('This is a message.');\n      },\n      open2() {\n        this.$message({\n          message: 'Congrats, this is a success message.',\n          type: 'success'\n        });\n      },\n\n      open3() {\n        this.$message({\n          message: 'Warning, this is a warning message.',\n          type: 'warning'\n        });\n      },\n\n      open4() {\n        this.$message.error('Oops, this is a error message.');\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open1 = () => {\n        ElMessage('this is a message.');\n      };\n      const open2 = () => {\n        ElMessage({\n          message: 'Congrats, this is a success message.',\n          type: 'success',\n        });\n      };\n      const open3 = () => {\n        ElMessage({\n          message: 'Warning, this is a warning message.',\n          type: 'warning',\n        });\n      };\n      const open4 = () => {\n        ElMessage.error('Oops, this is a error message.');\n      };\n      return {\n        open1,\n        open2,\n        open3,\n        open4,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "kurozu-ke-neng"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kurozu-ke-neng"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" クローズ可能")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "閉じるボタンを追加することができます。", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("デフォルトのメッセージは手動で閉じることができません。メッセージを閉じたい場合は "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "showClose"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" フィールドを設定することができます。通知と同様に、メッセージにも制御可能な "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "duration"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" があります。デフォルトの持続時間は3000msで、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "0"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("に設定してもメッセージは消えません。")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button :plain=\"true\" @click=\"open1\">message</el-button>\n  <el-button :plain=\"true\" @click=\"open2\">success</el-button>\n  <el-button :plain=\"true\" @click=\"open3\">warning</el-button>\n  <el-button :plain=\"true\" @click=\"open4\">error</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open1() {\n        this.$message({\n          showClose: true,\n          message: 'This is a message.'\n        });\n      },\n\n      open2() {\n        this.$message({\n          showClose: true,\n          message: 'Congrats, this is a success message.',\n          type: 'success'\n        });\n      },\n\n      open3() {\n        this.$message({\n          showClose: true,\n          message: 'Warning, this is a warning message.',\n          type: 'warning'\n        });\n      },\n\n      open4() {\n        this.$message({\n          showClose: true,\n          message: 'Oops, this is a error message.',\n          type: 'error'\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const open1 = () => {\n        ElMessage({\n          showClose: true,\n          message: 'This is a message.',\n        });\n      };\n      const open2 = () => {\n        ElMessage({\n          showClose: true,\n          message: 'Congrats, this is a success message.',\n          type: 'success',\n        });\n      };\n      const open3 = () => {\n        ElMessage({\n          showClose: true,\n          message: 'Warning, this is a warning message.',\n          type: 'warning',\n        });\n      };\n      const open4 = () => {\n        ElMessage({\n          showClose: true,\n          message: 'Oops, this is a error message.',\n          type: 'error',\n        });\n      };\n      return {\n        open1,\n        open2,\n        open3,\n        open4,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "zhong-yangnotekisuto"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zhong-yangnotekisuto"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 中央のテキスト")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("テキストを中央に配置するには "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "center"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性を使用します。")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button :plain=\"true\" @click=\"openCenter\">Centered text</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      openCenter() {\n        this.$message({\n          message: 'Centered text',\n          center: true\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const openCenter = () => {\n        ElMessage({\n          showClose: true,\n          message: 'Centered text',\n        });\n      };\n      return {\n        openCenter,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "html-wen-zi-liewo-shi-yongsimasu."
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#html-wen-zi-liewo-shi-yongsimasu."
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" HTML文字列を使用します。")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" は HTML 文字列をサポートしています。")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "dangerouslyUseHTMLString"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を true に設定すると、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "message"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" は HTML 文字列として扱われます。")])], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-button :plain=\"true\" @click=\"openHTML\">Use HTML String</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      openHTML() {\n        this.$message({\n          dangerouslyUseHTMLString: true,\n          message: '<strong>This is <i>HTML</i> string</strong>'\n        });\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n  import { ElMessage } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const openCenter = () => {\n        ElMessage({\n          dangerouslyUseHTMLString: true,\n          message: '<strong>This is <i>HTML</i> string</strong>',\n        });\n      };\n      return {\n        openCenter,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<div class=\"warning\"><p><code>message</code>プロパティはHTML文字列をサポートしていますが、任意のHTMLを動的にレンダリングすると<a href=\"https://en.wikipedia.org/wiki/Cross-site_scripting\">XSS攻撃</a>につながりやすく、非常に危険です。したがって、<code>dangerouslyUseHTMLString</code>がオンの場合は、<code>message</code>の内容が信頼できるものであることを確認し、<strong>決して</strong>ユーザが提供したコンテンツに<code>message</code>を代入しないようにしてください。</p></div><h3 id=\"gurobarumesotudo\"><a class=\"header-anchor\" href=\"#gurobarumesotudo\">¶</a> グローバルメソッド</h3><p>要素には、Vue.prototype用のグローバルメソッド <code>$message</code> が追加されました。これにより、vueのインスタンスでは、このページで行ったように <code>Message</code> を呼び出すことができます。</p><h3 id=\"rokaruinpoto\"><a class=\"header-anchor\" href=\"#rokaruinpoto\">¶</a> ローカルインポート</h3><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { ElMessage } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n</code></pre><p>この場合は <code>ElMessage(options)</code> を呼び出す必要があります。また、<code>ElMessage.success(options)</code>のように、異なるタイプのメソッドも登録しています。すべてのインスタンスを手動で閉じるには、<code>ElMessage.closeAll()</code>を呼び出すことができます。</p><h3 id=\"opusiyon\"><a class=\"header-anchor\" href=\"#opusiyon\">¶</a> オプション</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>message</td><td>メッセージテキスト</td><td>string / VNode</td><td>—</td><td>—</td></tr><tr><td>type</td><td>メッセージタイプ</td><td>string</td><td>success/warning/info/error</td><td>info</td></tr><tr><td>iconClass</td><td>カスタムアイコンのクラス、 <code>type</code> をオーバーライドします。</td><td>string</td><td>—</td><td>—</td></tr><tr><td>dangerouslyUseHTMLString</td><td><code>message</code> を HTML 文字列として扱うかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>customClass</td><td>メッセージ用カスタムクラス名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>duration</td><td>表示時間、ミリ秒。0に設定した場合、自動的にはオフになりません。</td><td>number</td><td>—</td><td>3000</td></tr><tr><td>showClose</td><td>閉じるボタンを表示するかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>center</td><td>テキストを中央に配置するかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>onClose</td><td>メッセージのインスタンスをパラメータにして閉じた場合のコールバック関数</td><td>function</td><td>—</td><td>—</td></tr><tr><td>offset</td><td>ビューポートの上端までの距離を設定します</td><td>number</td><td>—</td><td>20</td></tr></tbody></table><h3 id=\"mesotudo\"><a class=\"header-anchor\" href=\"#mesotudo\">¶</a> メソッド</h3><p><code>Message</code> と <code>this.$message</code> は現在の Message インスタンスを返します。インスタンスを手動で閉じるには、そのインスタンスに対して <code>close</code> を呼び出すことができます。</p><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td>close</td><td>メッセージを閉じる</td></tr></tbody></table>", 11);

function messagevue_type_template_id_010f5db0_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo4");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", messagevue_type_template_id_010f5db0_hoisted_1, [messagevue_type_template_id_010f5db0_hoisted_2, messagevue_type_template_id_010f5db0_hoisted_3, messagevue_type_template_id_010f5db0_hoisted_4, _hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_12, _hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
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
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), _hoisted_19, _hoisted_20, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/message.md?vue&type=template&id=010f5db0

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/message.md?vue&type=script&lang=ts


/* harmony default export */ var messagevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Show message");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("VNode");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.openVn
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var h = vue_esm_browser_prod["t" /* h */];
      var democomponentExport = {
        methods: {
          open: function open() {
            this.$message('This is a message.');
          },
          openVn: function openVn() {
            this.$message({
              message: h('p', null, [h('span', null, 'Message can be '), h('i', {
                style: 'color: teal'
              }, 'VNode')])
            });
          }
        }
      };
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("success");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("warning");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("message");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("error");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open2
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open3
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open1
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open4
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open1: function open1() {
            this.$message('This is a message.');
          },
          open2: function open2() {
            this.$message({
              message: 'Congrats, this is a success message.',
              type: 'success'
            });
          },
          open3: function open3() {
            this.$message({
              message: 'Warning, this is a warning message.',
              type: 'warning'
            });
          },
          open4: function open4() {
            this.$message.error('Oops, this is a error message.');
          }
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("message");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("success");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("warning");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("error");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open1
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open2
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open3
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.open4
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          open1: function open1() {
            this.$message({
              showClose: true,
              message: 'This is a message.'
            });
          },
          open2: function open2() {
            this.$message({
              showClose: true,
              message: 'Congrats, this is a success message.',
              type: 'success'
            });
          },
          open3: function open3() {
            this.$message({
              showClose: true,
              message: 'Warning, this is a warning message.',
              type: 'warning'
            });
          },
          open4: function open4() {
            this.$message({
              showClose: true,
              message: 'Oops, this is a error message.',
              type: 'error'
            });
          }
        }
      };
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Centered text");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.openCenter
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          openCenter: function openCenter() {
            this.$message({
              message: 'Centered text',
              center: true
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Use HTML String");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          plain: true,
          onClick: _ctx.openHTML
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }, 8, ["onClick"])]);
      }

      var democomponentExport = {
        methods: {
          openHTML: function openHTML() {
            this.$message({
              dangerouslyUseHTMLString: true,
              message: '<strong>This is <i>HTML</i> string</strong>'
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/message.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/message.md



messagevue_type_script_lang_ts.render = messagevue_type_template_id_010f5db0_render

/* harmony default export */ var message = __webpack_exports__["default"] = (messagevue_type_script_lang_ts);

/***/ })

}]);