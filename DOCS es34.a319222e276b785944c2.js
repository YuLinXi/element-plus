(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[100],{

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/layout.md?vue&type=template&id=441373f6

var layoutvue_type_template_id_441373f6_hoisted_1 = {
  class: "content element-doc"
};

var layoutvue_type_template_id_441373f6_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h2 id=\"layout\"><a class=\"header-anchor\" href=\"#layout\">¶</a> Layout</h2><p>Rápido y facilmente crea un layout básico con 24 columnas.</p><div class=\"tip\"><p>The component uses flex layout by default, no need to set <code>type=&quot;flex&quot;</code> manually.</p><p>Please note that the parent container should avoid using <code>inline</code> related styles, which will cause the component to not fill up its width.</p></div><h3 id=\"layout-basico\"><a class=\"header-anchor\" href=\"#layout-basico\">¶</a> Layout básico</h3><p>Crea un layout básico usando columnas.</p>", 5);

var layoutvue_type_template_id_441373f6_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Con "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "row"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" y "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "col"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", puede facilmente manipular el layout usando el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "span"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")])], -1);

var layoutvue_type_template_id_441373f6_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-row>\n  <el-col :span=\"24\"><div class=\"grid-content bg-purple-dark\"></div></el-col>\n</el-row>\n<el-row>\n  <el-col :span=\"12\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"12\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n</el-row>\n<el-row>\n  <el-col :span=\"8\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"8\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"8\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n</el-row>\n<el-row>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n</el-row>\n\n<style>\n  .el-row {\n    margin-bottom: 20px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  .el-col {\n    border-radius: 4px;\n  }\n  .bg-purple-dark {\n    background: #99a9bf;\n  }\n  .bg-purple {\n    background: #d3dce6;\n  }\n  .bg-purple-light {\n    background: #e5e9f2;\n  }\n  .grid-content {\n    border-radius: 4px;\n    min-height: 36px;\n  }\n  .row-bg {\n    padding: 10px 0;\n    background-color: #f9fafc;\n  }\n</style>\n")], -1);

var layoutvue_type_template_id_441373f6_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "espaciado-de-columnas"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#espaciado-de-columnas"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Espaciado de columnas")], -1);

var layoutvue_type_template_id_441373f6_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "El espaciado de columnas está soportado.", -1);

var layoutvue_type_template_id_441373f6_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Row provee el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "gutter"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" para especificar el espacio entre columnas y su valor por defecto es 0.")])], -1);

var layoutvue_type_template_id_441373f6_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-row :gutter=\"20\">\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n\n<style>\n  .el-row {\n    margin-bottom: 20px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  .el-col {\n    border-radius: 4px;\n  }\n  .bg-purple-dark {\n    background: #99a9bf;\n  }\n  .bg-purple {\n    background: #d3dce6;\n  }\n  .bg-purple-light {\n    background: #e5e9f2;\n  }\n  .grid-content {\n    border-radius: 4px;\n    min-height: 36px;\n  }\n  .row-bg {\n    padding: 10px 0;\n    background-color: #f9fafc;\n  }\n</style>\n")], -1);

var layoutvue_type_template_id_441373f6_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "layout-hibrido"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#layout-hibrido"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Layout híbrido")], -1);

var layoutvue_type_template_id_441373f6_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Crea un complejo layout híbrido combinando el básico de 1/24 columnas.", -1);

var layoutvue_type_template_id_441373f6_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-row :gutter=\"20\">\n  <el-col :span=\"16\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"8\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row :gutter=\"20\">\n  <el-col :span=\"8\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"8\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row :gutter=\"20\">\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"16\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"4\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n\n<style>\n  .el-row {\n    margin-bottom: 20px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  .el-col {\n    border-radius: 4px;\n  }\n  .bg-purple-dark {\n    background: #99a9bf;\n  }\n  .bg-purple {\n    background: #d3dce6;\n  }\n  .bg-purple-light {\n    background: #e5e9f2;\n  }\n  .grid-content {\n    border-radius: 4px;\n    min-height: 36px;\n  }\n  .row-bg {\n    padding: 10px 0;\n    background-color: #f9fafc;\n  }\n</style>\n")], -1);

var layoutvue_type_template_id_441373f6_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "offset-de-columnas"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#offset-de-columnas"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Offset de columnas")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Puedes especificar offsets para las columnas.", -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Puedes especificar el offset para una columna mediante el atributo "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "offset"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" de Col.")])], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-row :gutter=\"20\">\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\" :offset=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row :gutter=\"20\">\n  <el-col :span=\"6\" :offset=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\" :offset=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row :gutter=\"20\">\n  <el-col :span=\"12\" :offset=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n\n<style>\n  .el-row {\n    margin-bottom: 20px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  .el-col {\n    border-radius: 4px;\n  }\n  .bg-purple-dark {\n    background: #99a9bf;\n  }\n  .bg-purple {\n    background: #d3dce6;\n  }\n  .bg-purple-light {\n    background: #e5e9f2;\n  }\n  .grid-content {\n    border-radius: 4px;\n    min-height: 36px;\n  }\n  .row-bg {\n    padding: 10px 0;\n    background-color: #f9fafc;\n  }\n</style>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "alineacion"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#alineacion"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Alineación")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Default use the flex layout to make flexible alignment of columns.", -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("You can define the layout of child elements by setting "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "justify"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" attribute with start, center, end, space-between or space-around.")])], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-row class=\"row-bg\">\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row class=\"row-bg\" justify=\"center\">\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row class=\"row-bg\" justify=\"end\">\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row class=\"row-bg\" justify=\"space-between\">\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n<el-row class=\"row-bg\" justify=\"space-around\">\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :span=\"6\"><div class=\"grid-content bg-purple\"></div></el-col>\n</el-row>\n\n<style>\n  .el-row {\n    margin-bottom: 20px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  .el-col {\n    border-radius: 4px;\n  }\n  .bg-purple-dark {\n    background: #99a9bf;\n  }\n  .bg-purple {\n    background: #d3dce6;\n  }\n  .bg-purple-light {\n    background: #e5e9f2;\n  }\n  .grid-content {\n    border-radius: 4px;\n    min-height: 36px;\n  }\n  .row-bg {\n    padding: 10px 0;\n    background-color: #f9fafc;\n  }\n</style>\n")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "responsive-layout"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#responsive-layout"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Responsive Layout")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Tomando el ejemplo de Bootstrap responsive design, existen 5 breakpoints: xs, sm, md, lg y xl.", -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-row :gutter=\"10\">\n  <el-col :xs=\"8\" :sm=\"6\" :md=\"4\" :lg=\"3\" :xl=\"1\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :xs=\"4\" :sm=\"6\" :md=\"8\" :lg=\"9\" :xl=\"11\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n  <el-col :xs=\"4\" :sm=\"6\" :md=\"8\" :lg=\"9\" :xl=\"11\"><div class=\"grid-content bg-purple\"></div></el-col>\n  <el-col :xs=\"8\" :sm=\"6\" :md=\"4\" :lg=\"3\" :xl=\"1\"><div class=\"grid-content bg-purple-light\"></div></el-col>\n</el-row>\n\n<style>\n  .el-col {\n    border-radius: 4px;\n  }\n  .bg-purple-dark {\n    background: #99a9bf;\n  }\n  .bg-purple {\n    background: #d3dce6;\n  }\n  .bg-purple-light {\n    background: #e5e9f2;\n  }\n  .grid-content {\n    border-radius: 4px;\n    min-height: 36px;\n  }\n</style>\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h3 id=\"clases-utiles-para-ocultar-elementos\"><a class=\"header-anchor\" href=\"#clases-utiles-para-ocultar-elementos\">¶</a> Clases útiles para ocultar elementos</h3><p>Adicionalmente, Element Plus provee una serie de clases para ocultar elementos dadas ciertas condiciones. Estas clases pueden se agregadas a cualquier elemento del DOM o un elemento propio. Necesita importar el siguiente archivo CSS para usar estas clases:</p><pre><code class=\"hljs language-js\"><span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;element-plus/lib/theme-chalk/display.css&#39;</span>;\n</code></pre><p>Las clases son:</p><ul><li><code>hidden-xs-only</code> - oculto en viewports extra pequeños solamente</li><li><code>hidden-sm-only</code> - oculto en viewports pequeños solamente</li><li><code>hidden-sm-and-down</code> - oculto en viewports pequeños y menores</li><li><code>hidden-sm-and-up</code> - oculto en viewports pequeños y superiores</li><li><code>hidden-md-only</code> - oculto en viewports medios solamente</li><li><code>hidden-md-and-down</code> - oculto en viewports medios y menores</li><li><code>hidden-md-and-up</code> - oculto en viewports medios y mayores</li><li><code>hidden-lg-only</code> - ocultos en viewports grandes solamente</li><li><code>hidden-lg-and-down</code> - ocultos en viewports grandes y menores</li><li><code>hidden-lg-and-up</code> - ocultos en viewports grandes y superiores</li><li><code>hidden-xl-only</code> - oculto en viewports extra grandes solamente</li></ul><h3 id=\"atributos-row\"><a class=\"header-anchor\" href=\"#atributos-row\">¶</a> Atributos Row</h3><table><thead><tr><th>Atributos</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Valor por defecto</th></tr></thead><tbody><tr><td>gutter</td><td>espaciado de la grilla</td><td>number</td><td>—</td><td>0</td></tr><tr><td>justify</td><td>alineación horizontal del layout flex</td><td>string</td><td>start/end/center/space-around/space-between</td><td>start</td></tr><tr><td>align</td><td>alineación vertical del layout flex</td><td>string</td><td>top/middle/bottom</td><td>top</td></tr><tr><td>tag</td><td>tag de elemento propio</td><td>string</td><td>*</td><td>div</td></tr></tbody></table><h3 id=\"atributos-col\"><a class=\"header-anchor\" href=\"#atributos-col\">¶</a> Atributos Col</h3><table><thead><tr><th>Atributos</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Valor por defecto</th></tr></thead><tbody><tr><td>span</td><td>número de columnas que abarca la cuadrícula</td><td>number</td><td>—</td><td>24</td></tr><tr><td>offset</td><td>especific espacio en el lado izquierdo de la grill</td><td>number</td><td>—</td><td>0</td></tr><tr><td>push</td><td>número de columnas que la grilla se mueve hacia la derecha</td><td>number</td><td>—</td><td>0</td></tr><tr><td>pull</td><td>número de columnas que la grilla se mueve hacia la izquierda</td><td>number</td><td>—</td><td>0</td></tr><tr><td>xs</td><td><code>&lt;768px</code> Columnas responsive u objeto con propiedades de la columna</td><td>number/object (e.g. {span: 4, offset: 4})</td><td>—</td><td>—</td></tr><tr><td>sm</td><td><code>≥768px</code> Columnas responsive u objeto con propiedades de la columna</td><td>number/object (e.g. {span: 4, offset: 4})</td><td>—</td><td>—</td></tr><tr><td>md</td><td><code>≥992px</code> Columnas responsive u objeto con propiedades de la columna</td><td>number/object (e.g. {span: 4, offset: 4})</td><td>—</td><td>—</td></tr><tr><td>lg</td><td><code>≥1200px</code> Columnas responsive u objeto con propiedades de la columna</td><td>number/object (e.g. {span: 4, offset: 4})</td><td>—</td><td>—</td></tr><tr><td>xl</td><td><code>≥1920px</code> Columnas responsive u objeto con propiedades de la columna</td><td>number/object (e.g. {span: 4, offset: 4})</td><td>—</td><td>—</td></tr><tr><td>tag</td><td>tag de elemento propio</td><td>string</td><td>*</td><td>div</td></tr></tbody></table>", 9);

function layoutvue_type_template_id_441373f6_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo5");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", layoutvue_type_template_id_441373f6_hoisted_1, [layoutvue_type_template_id_441373f6_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [layoutvue_type_template_id_441373f6_hoisted_8];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [layoutvue_type_template_id_441373f6_hoisted_7];
    }),
    _: 1
  }), layoutvue_type_template_id_441373f6_hoisted_9, layoutvue_type_template_id_441373f6_hoisted_10, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [layoutvue_type_template_id_441373f6_hoisted_12];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [layoutvue_type_template_id_441373f6_hoisted_11];
    }),
    _: 1
  }), layoutvue_type_template_id_441373f6_hoisted_13, layoutvue_type_template_id_441373f6_hoisted_14, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [layoutvue_type_template_id_441373f6_hoisted_15];
    }),
    _: 1
  }), layoutvue_type_template_id_441373f6_hoisted_16, _hoisted_17, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
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
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo4)];
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
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/layout.md?vue&type=template&id=441373f6

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/layout.md?vue&type=script&lang=ts


/* harmony default export */ var layoutvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-dark"
      }, null, -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_10 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_11 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_12 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_13 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_14 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_15 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_16 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 24
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_9];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_10];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_11];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_12];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_13];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_14];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_15];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_16];
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
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          gutter: 20
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
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
    "element-demo2": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          gutter: 20
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 16
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, {
          gutter: 20
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, {
          gutter: 20
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 16
            }, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 4
            }, {
              default: _withCtx(function () {
                return [_hoisted_9];
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
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          gutter: 20
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6,
              offset: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, {
          gutter: 20
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6,
              offset: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6,
              offset: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, {
          gutter: 20
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 12,
              offset: 6
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
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_5 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_10 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_11 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_12 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_13 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_14 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_15 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          class: "row-bg"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, {
          class: "row-bg",
          justify: "center"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, {
          class: "row-bg",
          justify: "end"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_9];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, {
          class: "row-bg",
          justify: "space-between"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_10];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_11];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_12];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_row, {
          class: "row-bg",
          justify: "space-around"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_13];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_14];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 6
            }, {
              default: _withCtx(function () {
                return [_hoisted_15];
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
    "element-demo5": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple"
      }, null, -1);

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
        class: "grid-content bg-purple-light"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          gutter: 10
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              xs: 8,
              sm: 6,
              md: 4,
              lg: 3,
              xl: 1
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              xs: 4,
              sm: 6,
              md: 8,
              lg: 9,
              xl: 11
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              xs: 4,
              sm: 6,
              md: 8,
              lg: 9,
              xl: 11
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              xs: 8,
              sm: 6,
              md: 4,
              lg: 3,
              xl: 1
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
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/es/layout.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/es/layout.md



layoutvue_type_script_lang_ts.render = layoutvue_type_template_id_441373f6_render

/* harmony default export */ var layout = __webpack_exports__["default"] = (layoutvue_type_script_lang_ts);

/***/ })

}]);