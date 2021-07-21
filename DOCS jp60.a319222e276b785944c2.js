(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[271],{

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/tabs.md?vue&type=template&id=2a3649d5

var tabsvue_type_template_id_2a3649d5_hoisted_1 = {
  class: "content element-doc"
};

var tabsvue_type_template_id_2a3649d5_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h2", {
  id: "tabu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tabu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" タブ")], -1);

var tabsvue_type_template_id_2a3649d5_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "関連しているが異なるタイプに属するデータコレクションを分割します。", -1);

var tabsvue_type_template_id_2a3649d5_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "ji-ben-dena-shii-fang"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-ben-dena-shii-fang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 基本的な使い方")], -1);

var tabsvue_type_template_id_2a3649d5_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "基本的で簡潔なタブです。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("タブはカードの選択機能を提供します。デフォルトでは最初のタブがアクティブとして選択されており、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("属性を設定することで任意のタブをアクティブにすることができます。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-tabs v-model=\"activeName\" @tab-click=\"handleClick\">\n    <el-tab-pane label=\"User\" name=\"first\">User</el-tab-pane>\n    <el-tab-pane label=\"Config\" name=\"second\">Config</el-tab-pane>\n    <el-tab-pane label=\"Role\" name=\"third\">Role</el-tab-pane>\n    <el-tab-pane label=\"Task\" name=\"fourth\">Task</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: 'first'\n      };\n    },\n    methods: {\n      handleClick(tab, event) {\n        console.log(tab, event);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "kadosutairu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kadosutairu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" カードスタイル")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "カードのようなスタイルのタブ", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "card"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" に設定すると、カードスタイルのタブを取得できます。")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-tabs type=\"card\" @tab-click=\"handleClick\">\n    <el-tab-pane label=\"User\">User</el-tab-pane>\n    <el-tab-pane label=\"Config\">Config</el-tab-pane>\n    <el-tab-pane label=\"Role\">Role</el-tab-pane>\n    <el-tab-pane label=\"Task\">Task</el-tab-pane>\n  </el-tabs>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: 'first'\n      };\n    },\n    methods: {\n      handleClick(tab, event) {\n        console.log(tab, event);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "bodakado"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#bodakado"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" ボーダーカード")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "ボーダーカードのタブです。", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "border-card"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" に設定します。")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-tabs type=\"border-card\">\n  <el-tab-pane label=\"User\">User</el-tab-pane>\n  <el-tab-pane label=\"Config\">Config</el-tab-pane>\n  <el-tab-pane label=\"Role\">Role</el-tab-pane>\n  <el-tab-pane label=\"Task\">Task</el-tab-pane>\n</el-tabs>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h3 id=\"tabuno-wei-zhi\"><a class=\"header-anchor\" href=\"#tabuno-wei-zhi\">¶</a> タブの位置</h3><p>タブの位置を設定するには <code>tab-position</code> 属性を使います。</p><p>タブの位置を設定するには、<code>tab-position</code>属性を使用します。<code>tabPosition=&quot;left|right|top|bottom&quot; </code></p><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-radio-group</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">&quot;tabPosition&quot;</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">&quot;margin-bottom: 30px;&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-radio-button</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;top&quot;</span>&gt;</span>top<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-radio-button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-radio-button</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;right&quot;</span>&gt;</span>right<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-radio-button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-radio-button</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;bottom&quot;</span>&gt;</span>bottom<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-radio-button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-radio-button</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;left&quot;</span>&gt;</span>left<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-radio-button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-radio-group</span>&gt;</span>\n\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-tabs</span> <span class=\"hljs-attr\">:tab-position</span>=<span class=\"hljs-string\">&quot;tabPosition&quot;</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">&quot;height: 200px;&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-tab-pane</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;User&quot;</span>&gt;</span>User<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-tab-pane</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-tab-pane</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;Config&quot;</span>&gt;</span>Config<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-tab-pane</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-tab-pane</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;Role&quot;</span>&gt;</span>Role<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-tab-pane</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-tab-pane</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;Task&quot;</span>&gt;</span>Task<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-tab-pane</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-tabs</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n    <span class=\"hljs-function\"><span class=\"hljs-title\">data</span>(<span class=\"hljs-params\"></span>)</span> {\n      <span class=\"hljs-keyword\">return</span> {\n        <span class=\"hljs-attr\">tabPosition</span>: <span class=\"hljs-string\">&#39;left&#39;</span>\n      };\n    }\n  };\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre><p>:::</p><h3 id=\"kasutamutabu\"><a class=\"header-anchor\" href=\"#kasutamutabu\">¶</a> カスタムタブ</h3><p>名前付きスロットを使用して、タブラベルの内容をカスタマイズすることができます。</p>", 7);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-tabs type=\"border-card\">\n  <el-tab-pane>\n    <template #label>\n      <span><i class=\"el-icon-date\"></i> Route</span>\n    </template>\n    Route\n  </el-tab-pane>\n  <el-tab-pane label=\"Config\">Config</el-tab-pane>\n  <el-tab-pane label=\"Role\">Role</el-tab-pane>\n  <el-tab-pane label=\"Task\">Task</el-tab-pane>\n</el-tabs>\n")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "tabuwo-zhui-jiasite-biziru"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tabuwo-zhui-jiasite-biziru"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" タブを追加して閉じる")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "カードタイプのタブのみ、追加可能＆クローズ可能に対応しています。", -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-tabs v-model=\"editableTabsValue\" type=\"card\" editable @edit=\"handleTabsEdit\">\n  <el-tab-pane\n    v-for=\"(item, index) in editableTabs\"\n    :key=\"item.name\"\n    :label=\"item.title\"\n    :name=\"item.name\"\n  >\n    {{item.content}}\n  </el-tab-pane>\n</el-tabs>\n<script>\n  export default {\n    data() {\n      return {\n        editableTabsValue: '2',\n        editableTabs: [{\n          title: 'Tab 1',\n          name: '1',\n          content: 'Tab 1 content'\n        }, {\n          title: 'Tab 2',\n          name: '2',\n          content: 'Tab 2 content'\n        }],\n        tabIndex: 2\n      }\n    },\n    methods: {\n      handleTabsEdit(targetName, action) {\n        if (action === 'add') {\n          let newTabName = ++this.tabIndex + '';\n          this.editableTabs.push({\n            title: 'New Tab',\n            name: newTabName,\n            content: 'New Tab content'\n          });\n          this.editableTabsValue = newTabName;\n        }\n        if (action === 'remove') {\n          let tabs = this.editableTabs;\n          let activeName = this.editableTabsValue;\n          if (activeName === targetName) {\n            tabs.forEach((tab, index) => {\n              if (tab.name === targetName) {\n                let nextTab = tabs[index + 1] || tabs[index - 1];\n                if (nextTab) {\n                  activeName = nextTab.name;\n                }\n              }\n            });\n          }\n\n          this.editableTabsValue = activeName;\n          this.editableTabs = tabs.filter(tab => tab.name !== targetName);\n        }\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "kasutamaizusita-xin-guitabunotorigabotan"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kasutamaizusita-xin-guitabunotorigabotan"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" カスタマイズした新規タブのトリガーボタン")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<div style=\"margin-bottom: 20px;\">\n  <el-button\n    size=\"small\"\n    @click=\"addTab(editableTabsValue)\"\n  >\n    add tab\n  </el-button>\n</div>\n<el-tabs v-model=\"editableTabsValue\" type=\"card\" closable @tab-remove=\"removeTab\">\n  <el-tab-pane\n    v-for=\"(item, index) in editableTabs\"\n    :key=\"item.name\"\n    :label=\"item.title\"\n    :name=\"item.name\"\n  >\n    {{item.content}}\n  </el-tab-pane>\n</el-tabs>\n<script>\n  export default {\n    data() {\n      return {\n        editableTabsValue: '2',\n        editableTabs: [{\n          title: 'Tab 1',\n          name: '1',\n          content: 'Tab 1 content'\n        }, {\n          title: 'Tab 2',\n          name: '2',\n          content: 'Tab 2 content'\n        }],\n        tabIndex: 2\n      }\n    },\n    methods: {\n      addTab(targetName) {\n        let newTabName = ++this.tabIndex + '';\n        this.editableTabs.push({\n          title: 'New Tab',\n          name: newTabName,\n          content: 'New Tab content'\n        });\n        this.editableTabsValue = newTabName;\n      },\n      removeTab(targetName) {\n        let tabs = this.editableTabs;\n        let activeName = this.editableTabsValue;\n        if (activeName === targetName) {\n          tabs.forEach((tab, index) => {\n            if (tab.name === targetName) {\n              let nextTab = tabs[index + 1] || tabs[index - 1];\n              if (nextTab) {\n                activeName = nextTab.name;\n              }\n            }\n          });\n        }\n\n        this.editableTabsValue = activeName;\n        this.editableTabs = tabs.filter(tab => tab.name !== targetName);\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h3 id=\"tabuno-shu-xing\"><a class=\"header-anchor\" href=\"#tabuno-shu-xing\">¶</a> タブの属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>バインディング値、選択されたタブの名前</td><td>string</td><td>—</td><td>name of first tab</td></tr><tr><td>type</td><td>タブの種類</td><td>string</td><td>card/border-card</td><td>—</td></tr><tr><td>closable</td><td>タブが閉じられるかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>addable</td><td>タブの追加が可能かどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>タブが追加可能で閉じられるかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>tab-position</td><td>タブの位置</td><td>string</td><td>top/right/bottom/left</td><td>top</td></tr><tr><td>stretch</td><td>タブの幅が自動的にコンテナに収まるかどうか</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>before-leave</td><td>フック関数を使ってタブを切り替える。<code>false</code> を返すか、<code>Promise</code> を返した後に拒否された場合は、タブの切り替えができないようにする。</td><td>Function(activeName, oldActiveName)</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"tabuibento\"><a class=\"header-anchor\" href=\"#tabuibento\">¶</a> タブイベント</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>tab-click</td><td>タブがクリックされたときにトリガーされます。</td><td>clicked tab</td></tr><tr><td>tab-remove</td><td>タブ削除ボタンがクリックされたときにトリガーされます。</td><td>name of the removed tab</td></tr><tr><td>tab-add</td><td>タブ追加ボタンがクリックされたときにトリガーされます。</td><td>—</td></tr><tr><td>edit</td><td>タブ追加ボタンやタブ削除ボタンがクリックされたときにトリガーされます。</td><td>(targetName, action)</td></tr></tbody></table><h3 id=\"tabupeinno-shu-xing\"><a class=\"header-anchor\" href=\"#tabupeinno-shu-xing\">¶</a> タブペインの属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>タブのタイトル</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>タブが無効になっているかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>タブの名前に対応する識別子、タブペインのエイリアスを表す</td><td>string</td><td>—</td><td>ordinal number of the tab-pane in the sequence, e.g. the first tab-pane is &#39;1&#39;</td></tr><tr><td>closable</td><td>タブが閉じられるかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lazy</td><td>タブがレイジーにレンダリングされるかどうか</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"tab-pane-slots\"><a class=\"header-anchor\" href=\"#tab-pane-slots\">¶</a> Tab-pane Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>-</td><td>Tab-pane&#39;s content</td></tr><tr><td>label</td><td>Tab-pane&#39;s label</td></tr></tbody></table>", 8);

function tabsvue_type_template_id_2a3649d5_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo5");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", tabsvue_type_template_id_2a3649d5_hoisted_1, [tabsvue_type_template_id_2a3649d5_hoisted_2, tabsvue_type_template_id_2a3649d5_hoisted_3, tabsvue_type_template_id_2a3649d5_hoisted_4, tabsvue_type_template_id_2a3649d5_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
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
  }), _hoisted_16, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    _: 1
  }), _hoisted_24, _hoisted_25, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/tabs.md?vue&type=template&id=2a3649d5

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/tabs.md?vue&type=script&lang=ts


/* harmony default export */ var tabsvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("User");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Config");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Role");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Task");

      function render(_ctx, _cache) {
        var _component_el_tab_pane = _resolveComponent("el-tab-pane");

        var _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tabs, {
          modelValue: _ctx.activeName,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.activeName = $event;
          }),
          onTabClick: _ctx.handleClick
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_tab_pane, {
              label: "User",
              name: "first"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Config",
              name: "second"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Role",
              name: "third"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Task",
              name: "fourth"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue", "onTabClick"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activeName: 'first'
          };
        },
        methods: {
          handleClick: function handleClick(tab, event) {
            console.log(tab, event);
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("User");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Config");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Role");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Task");

      function render(_ctx, _cache) {
        var _component_el_tab_pane = _resolveComponent("el-tab-pane");

        var _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tabs, {
          type: "card",
          onTabClick: _ctx.handleClick
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_tab_pane, {
              label: "User"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Config"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Role"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Task"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["onTabClick"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            activeName: 'first'
          };
        },
        methods: {
          handleClick: function handleClick(tab, event) {
            console.log(tab, event);
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("User");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Config");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Role");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Task");

      function render(_ctx, _cache) {
        var _component_el_tab_pane = _resolveComponent("el-tab-pane");

        var _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tabs, {
          type: "border-card"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_tab_pane, {
              label: "User"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Config"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Role"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Task"
            }, {
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
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("span", null, [/*#__PURE__*/_createVNode("i", {
        class: "el-icon-date"
      }), /*#__PURE__*/_createTextVNode(" Route")], -1);

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" Route ");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Config");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Role");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Task");

      function render(_ctx, _cache) {
        var _component_el_tab_pane = _resolveComponent("el-tab-pane");

        var _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tabs, {
          type: "border-card"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_tab_pane, null, {
              label: _withCtx(function () {
                return [_hoisted_1];
              }),
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Config"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Role"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_tab_pane, {
              label: "Task"
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
    "element-demo4": function () {
      var _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */];

      function render(_ctx, _cache) {
        var _component_el_tab_pane = _resolveComponent("el-tab-pane");

        var _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tabs, {
          modelValue: _ctx.editableTabsValue,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.editableTabsValue = $event;
          }),
          type: "card",
          editable: "",
          onEdit: _ctx.handleTabsEdit
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.editableTabs, function (item, index) {
              return _openBlock(), _createBlock(_component_el_tab_pane, {
                key: item.name,
                label: item.title,
                name: item.name
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(item.content), 1)];
                }),
                _: 2
              }, 1032, ["label", "name"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue", "onEdit"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            editableTabsValue: '2',
            editableTabs: [{
              title: 'Tab 1',
              name: '1',
              content: 'Tab 1 content'
            }, {
              title: 'Tab 2',
              name: '2',
              content: 'Tab 2 content'
            }],
            tabIndex: 2
          };
        },
        methods: {
          handleTabsEdit: function handleTabsEdit(targetName, action) {
            if (action === 'add') {
              var newTabName = ++this.tabIndex + '';
              this.editableTabs.push({
                title: 'New Tab',
                name: newTabName,
                content: 'New Tab content'
              });
              this.editableTabsValue = newTabName;
            }

            if (action === 'remove') {
              var tabs = this.editableTabs;
              var activeName = this.editableTabsValue;

              if (activeName === targetName) {
                tabs.forEach(function (tab, index) {
                  if (tab.name === targetName) {
                    var nextTab = tabs[index + 1] || tabs[index - 1];

                    if (nextTab) {
                      activeName = nextTab.name;
                    }
                  }
                });
              }

              this.editableTabsValue = activeName;
              this.editableTabs = tabs.filter(function (tab) {
                return tab.name !== targetName;
              });
            }
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */];
      var _hoisted_1 = {
        style: {
          "margin-bottom": "20px"
        }
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" add tab ");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_tab_pane = _resolveComponent("el-tab-pane");

        var _component_el_tabs = _resolveComponent("el-tabs");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_button, {
          size: "small",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.addTab(_ctx.editableTabsValue);
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        })]), _createVNode(_component_el_tabs, {
          modelValue: _ctx.editableTabsValue,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.editableTabsValue = $event;
          }),
          type: "card",
          closable: "",
          onTabRemove: _ctx.removeTab
        }, {
          default: _withCtx(function () {
            return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.editableTabs, function (item, index) {
              return _openBlock(), _createBlock(_component_el_tab_pane, {
                key: item.name,
                label: item.title,
                name: item.name
              }, {
                default: _withCtx(function () {
                  return [_createTextVNode(_toDisplayString(item.content), 1)];
                }),
                _: 2
              }, 1032, ["label", "name"]);
            }), 128))];
          }),
          _: 1
        }, 8, ["modelValue", "onTabRemove"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            editableTabsValue: '2',
            editableTabs: [{
              title: 'Tab 1',
              name: '1',
              content: 'Tab 1 content'
            }, {
              title: 'Tab 2',
              name: '2',
              content: 'Tab 2 content'
            }],
            tabIndex: 2
          };
        },
        methods: {
          addTab: function addTab(targetName) {
            var newTabName = ++this.tabIndex + '';
            this.editableTabs.push({
              title: 'New Tab',
              name: newTabName,
              content: 'New Tab content'
            });
            this.editableTabsValue = newTabName;
          },
          removeTab: function removeTab(targetName) {
            var tabs = this.editableTabs;
            var activeName = this.editableTabsValue;

            if (activeName === targetName) {
              tabs.forEach(function (tab, index) {
                if (tab.name === targetName) {
                  var nextTab = tabs[index + 1] || tabs[index - 1];

                  if (nextTab) {
                    activeName = nextTab.name;
                  }
                }
              });
            }

            this.editableTabsValue = activeName;
            this.editableTabs = tabs.filter(function (tab) {
              return tab.name !== targetName;
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
// CONCATENATED MODULE: ./website/docs/jp/tabs.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/tabs.md



tabsvue_type_script_lang_ts.render = tabsvue_type_template_id_2a3649d5_render

/* harmony default export */ var tabs = __webpack_exports__["default"] = (tabsvue_type_script_lang_ts);

/***/ })

}]);