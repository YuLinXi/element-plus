(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[305],{

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/i18n.md?vue&type=template&id=1054a82e

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h2 id=\"guo-ji-hua\"><a class=\"header-anchor\" href=\"#guo-ji-hua\">¶</a> 国际化</h2><p>Element Plus 组件内部默认使用英语，若希望使用其他语言，则需要进行多语言设置。以中文为例，在 main.js 中，如果是完整引入 Element Plus：</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;dayjs/locale/zh-cn&#39;</span>\n<span class=\"hljs-keyword\">import</span> locale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n\ncreateApp(App).use(ElementPlus, { locale })\n</code></pre><p>如果是通过 <strong>es modules</strong> 按需引入 Element Plus:</p><pre><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { ElButton, locale } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> lang <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;dayjs/locale/zh-cn&#39;</span>\n\nlocale(lang)\ncreateApp(App).component(ElButton.name, ElButton)\n</code></pre><p>如果是通过 <a href=\"#/zh-CN/component/quickstart#on-demand\">babel-plugin-component</a> 插件按需引入 Element Plus:</p><pre><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { ElButton, ElSelect } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> lang <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;dayjs/locale/zh-cn&#39;</span>\n<span class=\"hljs-keyword\">import</span> locale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale&#39;</span>\n\n<span class=\"hljs-comment\">// 设置语言</span>\nlocale.use(lang)\n\n<span class=\"hljs-comment\">// 引入组件</span>\ncreateApp(App).component(ElButton.name, ElButton)\ncreateApp(App).component(ElSelect.name, ElSelect)\n</code></pre><h3 id=\"she-zhi-day.js-guo-ji-hua\"><a class=\"header-anchor\" href=\"#she-zhi-day.js-guo-ji-hua\">¶</a> 设置 Day.js 国际化</h3><p>Element Plus 直接使用了 <a href=\"https://day.js.org/\">Day.js</a> 项目的时间日期国际化设置，如月份名称、每周第一天是周几等。并且会自动全局设置已经导入的 Day.js 国际化配置。</p><pre><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> locale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;dayjs/locale/zh-cn&#39;</span>\n\n<span class=\"hljs-comment\">// 将自动设置 Day.js 的国际化设置为 &#39;zh-cn&#39;</span>\napp.use(ElementPlus, { locale })\n</code></pre><p>当然，如果有需要，你也可以手动设置成其他 Day.js 国际化配置</p><pre><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;dayjs/locale/fr&#39;</span>\ndayjs.locale(<span class=\"hljs-string\">&#39;fr&#39;</span>)\n</code></pre><p>如果使用其它语言，默认情况下英文语言包依旧是被引入的，可以使用 webpack 的 NormalModuleReplacementPlugin 替换默认语言包。</p><p><strong>webpack.config.js</strong></p><pre><code class=\"hljs language-typescript\">{\n  <span class=\"hljs-attr\">plugins</span>: [\n    <span class=\"hljs-keyword\">new</span> webpack.NormalModuleReplacementPlugin(\n      <span class=\"hljs-regexp\">/element-plus[\\/\\\\]lib[\\/\\\\]locale[\\/\\\\]lang[\\/\\\\]en/</span>,\n      <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>,\n    ),\n  ]\n}\n</code></pre><h3 id=\"jian-rong-vue-i18n-9.x\"><a class=\"header-anchor\" href=\"#jian-rong-vue-i18n-9.x\">¶</a> 兼容 <code>vue-i18n@9.x</code></h3><p>如果需要查看 <a href=\"https://vue-i18n-next.intlify.dev/guide/#html\">VueI18n的文档</a>, 请点击这个链接去查看</p><pre><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { createI18n } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-i18n&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> enLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/en&#39;</span>\n<span class=\"hljs-keyword\">import</span> zhLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> messages = {\n  [enLocale.name]: {\n    <span class=\"hljs-comment\">// el 这个属性很关键，一定要保证有这个属性，</span>\n    <span class=\"hljs-attr\">el</span>: enLocale.el,\n    <span class=\"hljs-comment\">// 定义您自己的字典，但是请不要和 `el` 重复，这样会导致 ElementPlus 内部组件的翻译失效.</span>\n    <span class=\"hljs-attr\">message</span>: {\n      <span class=\"hljs-attr\">hello</span>: <span class=\"hljs-string\">&#39;hello world&#39;</span>,\n    },\n  },\n  [zhLocale.name]: {\n    <span class=\"hljs-attr\">el</span>: zhLocale.el,\n    <span class=\"hljs-comment\">// 定义您自己的字典，但是请不要和 `el` 重复，这样会导致 ElementPlus 内部组件的翻译失效.</span>\n    <span class=\"hljs-attr\">message</span>: {\n      <span class=\"hljs-attr\">hello</span>: <span class=\"hljs-string\">&#39;你好，世界&#39;</span>,\n    },\n  },\n  <span class=\"hljs-attr\">testLocale</span>: {\n    <span class=\"hljs-attr\">el</span>: {},\n    <span class=\"hljs-comment\">// 没有定义 message 字段，会 fallback 回到 en 去, fallbackLocale 的定义在下方 👇</span>\n  },\n}\n\n<span class=\"hljs-keyword\">const</span> i18n = createI18n({\n  <span class=\"hljs-attr\">locale</span>: zhLocale.name,\n  <span class=\"hljs-attr\">fallbackLocale</span>: enLocale.name,\n  messages,\n})\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\n\napp.use(ElementPlus, {\n  <span class=\"hljs-attr\">i18n</span>: i18n.global.t,\n})\n\n<span class=\"hljs-comment\">// 要记得使用这个插件.</span>\napp.use(i18n)\n</code></pre><h3 id=\"jian-rong-qi-ta-i18n-cha-jian\"><a class=\"header-anchor\" href=\"#jian-rong-qi-ta-i18n-cha-jian\">¶</a> 兼容其他 i18n 插件</h3><p>如果不使用 <code>vue-i18n@9.x</code>，而是用其他的 i18n 插件，Element Plus 将无法兼容，但是可以自定义 Element Plus 的 i18n 的处理方法。</p><div class=\"tip\"><p>一旦设置了这个方法，ElementPlus 内置的翻译功能就会失效，会使用用户定义的翻译功能，所以一定要确保翻译方法能够正确的翻译 \b <code>el.scope.subName</code> 的格式，如果自定义的方法无法翻译 <code>el.select.noData</code> 的格式，将会使组件的文本失效.</p></div><pre><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> Vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> enLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/en&#39;</span>\n<span class=\"hljs-keyword\">import</span> zhLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n\n<span class=\"hljs-comment\">// 这是 i18n 函数的函数签名.</span>\n<span class=\"hljs-keyword\">type</span> i18n = <span class=\"hljs-function\">(<span class=\"hljs-params\">...args: <span class=\"hljs-built_in\">any</span>[]</span>) =&gt;</span> <span class=\"hljs-built_in\">string</span>\nVue.use(Element, {\n  <span class=\"hljs-attr\">i18n</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">path, options</span>) </span>{\n    <span class=\"hljs-comment\">// ...</span>\n  },\n  <span class=\"hljs-comment\">// others.</span>\n})\n</code></pre><h3 id=\"an-xu-jia-zai-li-ding-zhi-i18n\"><a class=\"header-anchor\" href=\"#an-xu-jia-zai-li-ding-zhi-i18n\">¶</a> 按需加载里定制 i18n</h3><p>\b如果您需要按需加载翻译文件，请查看<a href=\"https://vue-i18n-next.intlify.dev/guide/advanced/lazy.html\">按需加载</a></p><pre><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { createI18n } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-i18n&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> enLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/en&#39;</span>\n<span class=\"hljs-keyword\">import</span> zhLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> messages = {\n  [enLocale.name]: {\n    <span class=\"hljs-comment\">// el 这个属性很关键，一定要保证有这个属性，</span>\n    <span class=\"hljs-attr\">el</span>: enLocale.el,\n    <span class=\"hljs-comment\">// 定义您自己的字典，但是请不要和 `el` 重复，这样会导致 ElementPlus 内部组件的翻译失效.</span>\n    <span class=\"hljs-attr\">message</span>: {\n      <span class=\"hljs-attr\">hello</span>: <span class=\"hljs-string\">&#39;hello world&#39;</span>,\n    },\n  },\n  [zhLocale.name]: {\n    <span class=\"hljs-attr\">el</span>: zhLocale.el,\n    <span class=\"hljs-comment\">// 定义您自己的字典，但是请不要和 `el` 重复，这样会导致 ElementPlus 内部组件的翻译失效.</span>\n    <span class=\"hljs-attr\">message</span>: {\n      <span class=\"hljs-attr\">hello</span>: <span class=\"hljs-string\">&#39;你好，世界&#39;</span>,\n    },\n  },\n  <span class=\"hljs-attr\">testLocale</span>: {\n    <span class=\"hljs-attr\">el</span>: {},\n    <span class=\"hljs-comment\">// 没有定义 message 字段，会 fallback 回到 en 去, fallbackLocale 的定义在下方 👇</span>\n  },\n}\n\n<span class=\"hljs-keyword\">const</span> i18n = createI18n({\n  <span class=\"hljs-attr\">locale</span>: zhLocale.name,\n  <span class=\"hljs-attr\">fallbackLocale</span>: enLocale.name,\n  messages,\n})\n\nElementLocale.i18n(i18n.global.t)\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(i18n)\n</code></pre><h3 id=\"tong-guo-cdn-de-fang-shi-jia-zai-yu-yan-wen-jian\"><a class=\"header-anchor\" href=\"#tong-guo-cdn-de-fang-shi-jia-zai-yu-yan-wen-jian\">¶</a> 通过 CDN 的方式加载语言文件</h3><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue@next&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/lib/index.full.js&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/lib/umd/locale/es.js&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/dayjs/locale/zh-cn.js&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span>\n  ElementPlus.locale(ElementPlus.lang.zhCn)\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre><p>搭配 <code>vue-i18n</code> 使用</p><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue@next&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue-i18n/dist/vue-i18n.js&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/lib/index.full.js&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/lib/umd/locale/zh-cn.js&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/lib/umd/locale/en.js&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n  <span class=\"hljs-keyword\">const</span> i18n = Vue18n.createI18n({\n    <span class=\"hljs-attr\">locale</span>: ElementPlus.lang.zhCN.name,\n    <span class=\"hljs-attr\">fallbackLocale</span>: ElementPlus.lang.en.name,\n    <span class=\"hljs-attr\">messages</span>: {\n      [ElementPlus.lang.en.name]: {\n        <span class=\"hljs-comment\">// el 这个属性很关键，一定要保证有这个属性，</span>\n        <span class=\"hljs-attr\">el</span>: ElementPlus.lang.en.el,\n        <span class=\"hljs-comment\">// 定义您自己的字典，但是请不要和 `el` 重复，这样会导致 ElementPlus 内部组件的翻译失效.</span>\n        <span class=\"hljs-attr\">message</span>: {\n          <span class=\"hljs-attr\">hello</span>: <span class=\"hljs-string\">&#39;hello world&#39;</span>,\n        },\n      },\n      [ElementPlus.lang.zhCN.name]: {\n        <span class=\"hljs-attr\">el</span>: ElementPlus.lang.zhCN.el,\n        <span class=\"hljs-comment\">// 定义您自己的字典，但是请不要和 `el` 重复，这样会导致 ElementPlus 内部组件的翻译失效.</span>\n        <span class=\"hljs-attr\">message</span>: {\n          <span class=\"hljs-attr\">hello</span>: <span class=\"hljs-string\">&#39;你好，世界&#39;</span>,\n        },\n      },\n      <span class=\"hljs-attr\">testLocale</span>: {\n        <span class=\"hljs-attr\">el</span>: {},\n        <span class=\"hljs-comment\">// 没有定义 message 字段，会 fallback 回到 en 去.</span>\n      },\n    },\n  })\n\n  <span class=\"hljs-keyword\">const</span> app = Vue.createApp()\n  app.use(i18n)\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre><p>目前 Element Plus 内置了以下语言：</p><ul class=\"language-list\"><li>简体中文（zh-cn）</li><li>英语（en）</li><li>德语（de）</li><li>葡萄牙语（pt）</li><li>西班牙语（es）</li><li>丹麦语（da）</li><li>法语（fr）</li><li>挪威语（nb-no）</li><li>繁体中文（zh-tw）</li><li>意大利语（it）</li><li>韩语（ko）</li><li>日语（ja）</li><li>荷兰语（nl）</li><li>越南语（vi）</li><li>俄语（ru）</li><li>土耳其语（tr）</li><li>巴西葡萄牙语（pt-br）</li><li>波斯语（fa）</li><li>泰语（th）</li><li>印尼语（id）</li><li>保加利亚语（bg）</li><li>波兰语（pl）</li><li>芬兰语（fi）</li><li>瑞典语（sv）</li><li>希腊语（el）</li><li>斯洛伐克语（sk）</li><li>加泰罗尼亚语（ca）</li><li>捷克语（cs）</li><li>乌克兰语（uk）</li><li>土库曼语（tk）</li><li>泰米尔语（ta）</li><li>拉脱维亚语（lv）</li><li>南非荷兰语（af）</li><li>爱沙尼亚语（et）</li><li>斯洛文尼亚语（sl）</li><li>阿拉伯语（ar）</li><li>希伯来语（he）</li><li>立陶宛语（lt）</li><li>蒙古语（mn）</li><li>哈萨克斯坦语（kk）</li><li>匈牙利语（hu）</li><li>罗马尼亚语（ro）</li><li>库尔德语（ku）</li><li>维吾尔语（ug-cn）</li><li>高棉语（km）</li><li>塞尔维亚语（sr）</li><li>巴斯克语（eu）</li><li>吉尔吉斯语（ky）</li><li>亚美尼亚语 (hy-am)</li><li>克罗地亚 (hr)</li><li>世界语 (eo)</li></ul><p>如果你需要使用其他的语言，欢迎贡献 PR：只需在 <a href=\"https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang\">这里</a> 添加一个语言配置文件即可。</p>", 32);

function render(_ctx, _cache) {
  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", _hoisted_1, [_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/i18n.md?vue&type=template&id=1054a82e

// CONCATENATED MODULE: ./website/docs/zh-CN/i18n.md

const script = {}
script.render = render

/* harmony default export */ var i18n = __webpack_exports__["default"] = (script);

/***/ })

}]);