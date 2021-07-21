(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[159],{

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/drawer.md?vue&type=template&id=38336fd8

var drawervue_type_template_id_38336fd8_hoisted_1 = {
  class: "content element-doc"
};

var drawervue_type_template_id_38336fd8_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h2", {
  id: "drawer"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#drawer"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Drawer")], -1);

var drawervue_type_template_id_38336fd8_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Sometimes, "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Dialog"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" does not always satisfy our requirements, let's say you have a massive form, or you need space to display something like "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "terms & conditions"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" has almost identical API with "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Dialog"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", but it introduces different user experience.")], -1);

var drawervue_type_template_id_38336fd8_hoisted_4 = {
  class: "tip"
};

var drawervue_type_template_id_38336fd8_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h4", {
  id: "translation-needed"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#translation-needed"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Translation needed")], -1);

var drawervue_type_template_id_38336fd8_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Since v-model is natively supported for all components, "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "visible.sync"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" has been deprecated, use "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "v-model=\"visibilityBinding\""), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" to control the visibility of the current drawer. :::### Basic Usage")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Callout a temporary drawer, from multiple direction", -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("You must set "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "model-value"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" for "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" like "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Dialog"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" does to control the visibility of "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" itself, it's "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" type. "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" has to parts: "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" & "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", the "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" is a named slot, you can also set the title through attribute named "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", default to an empty string, the "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" part is the main area of "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", which contains user defined content. When opening, "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" expand itself from the "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "right corner to left"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" which size is "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "30%"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" of the browser window by default. You can change that default behavior by setting "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" attribute. This show case also demonstrated how to use the "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "before-close"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" API, check the Attribute section for more detail")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-radio-group v-model=\"direction\">\n  <el-radio label=\"ltr\">left to right</el-radio>\n  <el-radio label=\"rtl\">right to left</el-radio>\n  <el-radio label=\"ttb\">top to bottom</el-radio>\n  <el-radio label=\"btt\">bottom to top</el-radio>\n</el-radio-group>\n\n<el-button @click=\"drawer = true\" type=\"primary\" style=\"margin-left: 16px;\">\n  open\n</el-button>\n\n<el-drawer\n  title=\"I am the title\"\n  v-model=\"drawer\"\n  :direction=\"direction\"\n  :before-close=\"handleClose\">\n  <span>Hi, there!</span>\n</el-drawer>\n\n<script>\n  export default {\n    data() {\n      return {\n        drawer: false,\n        direction: 'rtl',\n      };\n    },\n    methods: {\n      handleClose(done) {\n        this.$confirm('Are you sure you want to close this?')\n          .then(_ => {\n            done();\n          })\n          .catch(_ => {});\n      }\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const drawer = ref(false);\n      const direction = ref('rtl');\n      const handleClose = (done) => {\n        ElMessageBox\n          .confirm('Are you sure you want to close this?')\n          .then((_) => {\n            done();\n          })\n          .catch((_) => {});\n      };\n      return {\n        drawer,\n        direction,\n        handleClose,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "no-title"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#no-title"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" No Title")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "When you no longer need a title, you can remove title from drawer.", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Set the "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "withHeader"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" attribute to "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", you can remove the title from drawer, thus your drawer can have more space on screen. If you want to be accessible, make sure to set the "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" attribute.")])], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-button @click=\"drawer = true\" type=\"primary\" style=\"margin-left: 16px;\">\n  open\n</el-button>\n\n<el-drawer\n  title=\"I am the title\"\n  v-model=\"drawer\"\n  :with-header=\"false\">\n  <span>Hi there!</span>\n</el-drawer>\n\n<script>\n  export default {\n    data() {\n      return {\n        drawer: false,\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        drawer: ref(false),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "customization-content"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#customization-content"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Customization Content")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Like "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Dialog"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" can do many diverse interaction as you wanted.")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-button type=\"text\" @click=\"table = true\">Open Drawer with nested table</el-button>\n<el-button type=\"text\" @click=\"dialog = true\">Open Drawer with nested form</el-button>\n<el-drawer\n  title=\"I have a nested table inside!\"\n  v-model=\"table\"\n  direction=\"rtl\"\n  size=\"50%\">\n   <el-table :data=\"gridData\">\n      <el-table-column property=\"date\" label=\"Date\" width=\"150\"></el-table-column>\n      <el-table-column property=\"name\" label=\"Name\" width=\"200\"></el-table-column>\n      <el-table-column property=\"address\" label=\"Address\"></el-table-column>\n    </el-table>\n</el-drawer>\n\n<el-drawer\n  title=\"I have a nested form inside!\"\n  :before-close=\"handleClose\"\n  v-model=\"dialog\"\n  direction=\"ltr\"\n  custom-class=\"demo-drawer\"\n  ref=\"drawer\"\n  >\n  <div class=\"demo-drawer__content\">\n    <el-form :model=\"form\">\n      <el-form-item label=\"Name\" :label-width=\"formLabelWidth\">\n        <el-input v-model=\"form.name\" autocomplete=\"off\"></el-input>\n      </el-form-item>\n      <el-form-item label=\"Area\" :label-width=\"formLabelWidth\">\n        <el-select v-model=\"form.region\" placeholder=\"Please select activity area\">\n          <el-option label=\"Area1\" value=\"shanghai\"></el-option>\n          <el-option label=\"Area2\" value=\"beijing\"></el-option>\n        </el-select>\n      </el-form-item>\n    </el-form>\n    <div class=\"demo-drawer__footer\">\n      <el-button @click=\"cancelForm\">Cancel</el-button>\n      <el-button type=\"primary\" @click=\"$refs.drawer.closeDrawer()\" :loading=\"loading\">{{ loading ? 'Submitting ...' : 'Submit' }}</el-button>\n    </div>\n  </div>\n</el-drawer>\n\n<script>\nexport default {\n  data() {\n    return {\n      table: false,\n      dialog: false,\n      loading: false,\n      gridData: [{\n        date: '2016-05-02',\n        name: 'Peter Parker',\n        address: 'Queens, New York City'\n      }, {\n        date: '2016-05-04',\n        name: 'Peter Parker',\n        address: 'Queens, New York City'\n      }, {\n        date: '2016-05-01',\n        name: 'Peter Parker',\n        address: 'Queens, New York City'\n      }, {\n        date: '2016-05-03',\n        name: 'Peter Parker',\n        address: 'Queens, New York City'\n      }],\n      form: {\n        name: '',\n        region: '',\n        date1: '',\n        date2: '',\n        delivery: false,\n        type: [],\n        resource: '',\n        desc: ''\n      },\n      formLabelWidth: '80px',\n      timer: null,\n    };\n  },\n  methods: {\n    handleClose(done) {\n      if (this.loading) {\n        return;\n      }\n      this.$confirm('Do you want to submit?')\n        .then(_ => {\n          this.loading = true;\n          this.timer = setTimeout(() => {\n            done();\n            // animation takes time\n            setTimeout(() => {\n              this.loading = false;\n            }, 400);\n          }, 2000);\n        })\n        .catch(_ => {});\n    },\n    cancelForm() {\n      this.loading = false;\n      this.dialog = false;\n      clearTimeout(this.timer);\n    }\n  }\n}\n</script>\n<!--\n<setup>\n\nimport {defineComponent, reactive, toRefs } from 'vue'; \nimport { ElMessageBox } from 'element-plus'; \n\n  export default defineComponent({\n    setup() {\n      \n      const state = reactive({\n        table: false,\n        dialog: false,\n        loading: false,\n        gridData: [\n          {\n            date: '2016-05-02',\n            name: 'Peter Parker',\n            address: 'Queens, New York City',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Peter Parker',\n            address: 'Queens, New York City',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Peter Parker',\n            address: 'Queens, New York City',\n          },\n          {\n            date: '2016-05-03',\n            name: 'Peter Parker',\n            address: 'Queens, New York City',\n          },\n        ],\n        form: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: '',\n        },\n        formLabelWidth: '80px',\n        timer: null,\n      });\n\n      const handleClose = (done) => {\n        if (state.loading) {\n          return;\n        }\n        ElMessageBox\n          .confirm('Do you want to submit?')\n          .then((_) => {\n            state.loading = true;\n            state.timer = setTimeout(() => {\n              done();\n              // 动画关闭需要一定的时间\n              setTimeout(() => {\n                state.loading = false;\n              }, 400);\n            }, 2000);\n          })\n          .catch((_) => {});\n      };\n\n      const cancelForm = () => {\n        state.loading = false;\n        state.dialog = false;\n        clearTimeout(state.timer);\n      };\n\n      return {\n        ...toRefs(state),\n        handleClose,\n        cancelForm,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "nested-drawer"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#nested-drawer"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Nested Drawer")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("You can also have multiple layer of "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" just like "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Dialog"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("If you need multiple Drawer in different layer, you must set the "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "append-to-body"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" attribute to "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "true")])], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "\n<el-button @click=\"drawer = true\" type=\"primary\" style=\"margin-left: 16px;\">\n  open\n</el-button>\n\n<el-drawer\n  title=\"I'm outer Drawer\"\n  v-model=\"drawer\"\n  size=\"50%\">\n  <div>\n   <el-button @click=\"innerDrawer = true\">Click me!</el-button>\n   <el-drawer\n     title=\"I'm inner Drawer\"\n     :append-to-body=\"true\"\n     :before-close=\"handleClose\"\n     v-model=\"innerDrawer\">\n     <p>_(:зゝ∠)_</p>\n   </el-drawer>\n  </div>\n</el-drawer>\n\n<script>\n  export default {\n    data() {\n      return {\n        drawer: false,\n        innerDrawer: false,\n      };\n    },\n    methods: {\n      handleClose(done) {\n        this.$confirm('You still have unsaved data, proceed?')\n          .then(_ => {\n            done();\n          })\n          .catch(_ => {});\n      }\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n      \n      const drawer = ref(false);\n      const innerDrawer = ref(false);\n      const handleClose = (done) => {\n        ElMessageBox\n          .confirm('You still have unsaved data, proceed?')\n          .then((_) => {\n            done();\n          })\n          .catch((_) => {});\n      };\n      return {\n        drawer,\n        innerDrawer,\n        handleClose,\n      };\n    },\n  });\n\n</setup>\n-->\n\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<div class=\"tip\"><p>The content inside Drawer should be lazy rendered, which means that the content inside Drawer will not impact the initial render performance, therefore any DOM operation should be performed through <code>ref</code> or after <code>open</code> event emitted.</p></div><div class=\"tip\"><p>Drawer provides an API called <code>destroyOnClose</code>, which is a flag variable that indicates should destroy the children content inside Drawer after Drawer was closed. You can use this API when you need your <code>mounted</code> life cycle to be called every time the Drawer opens.</p></div><h3 id=\"drawer-attributes\"><a class=\"header-anchor\" href=\"#drawer-attributes\">¶</a> Drawer Attributes</h3><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Acceptable Values</th><th>Defaults</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>Should Drawer be displayed</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>append-to-body</td><td>Controls should Drawer be inserted to DocumentBody Element, nested Drawer must assign this param to <strong>true</strong></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>before-close</td><td>If set, closing procedure will be halted</td><td>function(done), done is function type that accepts a boolean as parameter, calling done with true or without parameter will abort the close procedure</td><td>—</td><td>—</td></tr><tr><td>close-on-press-escape</td><td>Indicates whether Drawer can be closed by pressing ESC</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>custom-class</td><td>Extra class names for Drawer</td><td>string</td><td>—</td><td>—</td></tr><tr><td>destroy-on-close</td><td>Indicates whether children should be destroyed after Drawer closed</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>modal</td><td>Should show shadowing layer</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>direction</td><td>Drawer&#39;s opening direction</td><td>Direction</td><td>rtl / ltr / ttb / btt</td><td>rtl</td></tr><tr><td>show-close</td><td>Should show close button at the top right of Drawer</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>Drawer&#39;s size, if Drawer is horizontal mode, it effects the width property, otherwise it effects the height property, when size is <code>number</code> type, it describes the size by unit of pixels; when size is <code>string</code> type, it should be used with <code>x%</code> notation, other wise it will be interpreted to pixel unit</td><td>number / string</td><td>-</td><td>&#39;30%&#39;</td></tr><tr><td>title</td><td>Drawer&#39;s title, can also be set by named slot, detailed descriptions can be found in the slot form</td><td>string</td><td>—</td><td>—</td></tr><tr><td>withHeader</td><td>Flag that controls the header section&#39;s existance, default to true, when withHeader set to false, both <code>title attribute</code> and <code>title slot</code> won&#39;t work</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>modal-class</td><td>Extra class names for shadowing layer</td><td>string</td><td>-</td><td>-</td></tr></tbody></table><h3 id=\"drawer-slot\"><a class=\"header-anchor\" href=\"#drawer-slot\">¶</a> Drawer Slot</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>Drawer&#39;s Content</td></tr><tr><td>title</td><td>Drawer Title Section</td></tr></tbody></table><h3 id=\"drawer-methods\"><a class=\"header-anchor\" href=\"#drawer-methods\">¶</a> Drawer Methods</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>handleClose</td><td>In order to close Drawer, this method will call <code>before-close</code>.</td></tr></tbody></table><h3 id=\"drawer-events\"><a class=\"header-anchor\" href=\"#drawer-events\">¶</a> Drawer Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameter</th></tr></thead><tbody><tr><td>open</td><td>Triggered before Drawer opening animation begins</td><td>—</td></tr><tr><td>opened</td><td>Triggered after Drawer opening animation ended</td><td>—</td></tr><tr><td>close</td><td>Triggered before Drawer closing animation begins</td><td>—</td></tr><tr><td>closed</td><td>Triggered after Drawer closing animation ended</td><td>—</td></tr></tbody></table>", 10);

function drawervue_type_template_id_38336fd8_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", drawervue_type_template_id_38336fd8_hoisted_1, [drawervue_type_template_id_38336fd8_hoisted_2, drawervue_type_template_id_38336fd8_hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])("div", drawervue_type_template_id_38336fd8_hoisted_4, [drawervue_type_template_id_38336fd8_hoisted_5, drawervue_type_template_id_38336fd8_hoisted_6, _hoisted_7, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  })]), _hoisted_10, _hoisted_11, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_14, _hoisted_15, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), _hoisted_17, _hoisted_18, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/drawer.md?vue&type=template&id=38336fd8

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/drawer.md?vue&type=script&lang=ts


/* harmony default export */ var drawervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("left to right");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("right to left");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("top to bottom");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("bottom to top");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode(" open ");

      var _hoisted_6 = /*#__PURE__*/_createVNode("span", null, "Hi, there!", -1);

      function render(_ctx, _cache) {
        var _component_el_radio = _resolveComponent("el-radio");

        var _component_el_radio_group = _resolveComponent("el-radio-group");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_drawer = _resolveComponent("el-drawer");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.direction,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.direction = $event;
          })
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_radio, {
              label: "ltr"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_radio, {
              label: "rtl"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_radio, {
              label: "ttb"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_radio, {
              label: "btt"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_button, {
          onClick: _cache[2] || (_cache[2] = function ($event) {
            return _ctx.drawer = true;
          }),
          type: "primary",
          style: {
            "margin-left": "16px"
          }
        }, {
          default: _withCtx(function () {
            return [_hoisted_5];
          }),
          _: 1
        }), _createVNode(_component_el_drawer, {
          title: "I am the title",
          modelValue: _ctx.drawer,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.drawer = $event;
          }),
          direction: _ctx.direction,
          "before-close": _ctx.handleClose
        }, {
          default: _withCtx(function () {
            return [_hoisted_6];
          }),
          _: 1
        }, 8, ["modelValue", "direction", "before-close"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            drawer: false,
            direction: 'rtl'
          };
        },
        methods: {
          handleClose: function handleClose(done) {
            this.$confirm('Are you sure you want to close this?').then(function (_) {
              done();
            }).catch(function (_) {});
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" open ");

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", null, "Hi there!", -1);

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_drawer = _resolveComponent("el-drawer");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.drawer = true;
          }),
          type: "primary",
          style: {
            "margin-left": "16px"
          }
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_drawer, {
          title: "I am the title",
          modelValue: _ctx.drawer,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.drawer = $event;
          }),
          "with-header": false
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            drawer: false
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
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Open Drawer with nested table");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Open Drawer with nested form");

      var _hoisted_3 = {
        class: "demo-drawer__content"
      };
      var _hoisted_4 = {
        class: "demo-drawer__footer"
      };

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Cancel");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        var _component_el_drawer = _resolveComponent("el-drawer");

        var _component_el_input = _resolveComponent("el-input");

        var _component_el_form_item = _resolveComponent("el-form-item");

        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        var _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.table = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[2] || (_cache[2] = function ($event) {
            return _ctx.dialog = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode(_component_el_drawer, {
          title: "I have a nested table inside!",
          modelValue: _ctx.table,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.table = $event;
          }),
          direction: "rtl",
          size: "50%"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table, {
              data: _ctx.gridData
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_table_column, {
                  property: "date",
                  label: "Date",
                  width: "150"
                }), _createVNode(_component_el_table_column, {
                  property: "name",
                  label: "Name",
                  width: "200"
                }), _createVNode(_component_el_table_column, {
                  property: "address",
                  label: "Address"
                })];
              }),
              _: 1
            }, 8, ["data"])];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_drawer, {
          title: "I have a nested form inside!",
          "before-close": _ctx.handleClose,
          modelValue: _ctx.dialog,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
            return _ctx.dialog = $event;
          }),
          direction: "ltr",
          "custom-class": "demo-drawer",
          ref: "drawer"
        }, {
          default: _withCtx(function () {
            return [_createVNode("div", _hoisted_3, [_createVNode(_component_el_form, {
              model: _ctx.form
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_form_item, {
                  label: "Name",
                  "label-width": _ctx.formLabelWidth
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_input, {
                      modelValue: _ctx.form.name,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                        return _ctx.form.name = $event;
                      }),
                      autocomplete: "off"
                    }, null, 8, ["modelValue"])];
                  }),
                  _: 1
                }, 8, ["label-width"]), _createVNode(_component_el_form_item, {
                  label: "Area",
                  "label-width": _ctx.formLabelWidth
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_select, {
                      modelValue: _ctx.form.region,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                        return _ctx.form.region = $event;
                      }),
                      placeholder: "Please select activity area"
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_option, {
                          label: "Area1",
                          value: "shanghai"
                        }), _createVNode(_component_el_option, {
                          label: "Area2",
                          value: "beijing"
                        })];
                      }),
                      _: 1
                    }, 8, ["modelValue"])];
                  }),
                  _: 1
                }, 8, ["label-width"])];
              }),
              _: 1
            }, 8, ["model"]), _createVNode("div", _hoisted_4, [_createVNode(_component_el_button, {
              onClick: _ctx.cancelForm
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "primary",
              onClick: _cache[6] || (_cache[6] = function ($event) {
                return _ctx.$refs.drawer.closeDrawer();
              }),
              loading: _ctx.loading
            }, {
              default: _withCtx(function () {
                return [_createTextVNode(_toDisplayString(_ctx.loading ? 'Submitting ...' : 'Submit'), 1)];
              }),
              _: 1
            }, 8, ["loading"])])])];
          }),
          _: 1
        }, 8, ["before-close", "modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            table: false,
            dialog: false,
            loading: false,
            gridData: [{
              date: '2016-05-02',
              name: 'Peter Parker',
              address: 'Queens, New York City'
            }, {
              date: '2016-05-04',
              name: 'Peter Parker',
              address: 'Queens, New York City'
            }, {
              date: '2016-05-01',
              name: 'Peter Parker',
              address: 'Queens, New York City'
            }, {
              date: '2016-05-03',
              name: 'Peter Parker',
              address: 'Queens, New York City'
            }],
            form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            },
            formLabelWidth: '80px',
            timer: null
          };
        },
        methods: {
          handleClose: function handleClose(done) {
            var _this = this;

            if (this.loading) {
              return;
            }

            this.$confirm('Do you want to submit?').then(function (_) {
              _this.loading = true;
              _this.timer = setTimeout(function () {
                done(); // animation takes time

                setTimeout(function () {
                  _this.loading = false;
                }, 400);
              }, 2000);
            }).catch(function (_) {});
          },
          cancelForm: function cancelForm() {
            this.loading = false;
            this.dialog = false;
            clearTimeout(this.timer);
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" open ");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Click me!");

      var _hoisted_3 = /*#__PURE__*/_createVNode("p", null, "_(:зゝ∠)_", -1);

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_drawer = _resolveComponent("el-drawer");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.drawer = true;
          }),
          type: "primary",
          style: {
            "margin-left": "16px"
          }
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_drawer, {
          title: "I'm outer Drawer",
          modelValue: _ctx.drawer,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.drawer = $event;
          }),
          size: "50%"
        }, {
          default: _withCtx(function () {
            return [_createVNode("div", null, [_createVNode(_component_el_button, {
              onClick: _cache[2] || (_cache[2] = function ($event) {
                return _ctx.innerDrawer = true;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_drawer, {
              title: "I'm inner Drawer",
              "append-to-body": true,
              "before-close": _ctx.handleClose,
              modelValue: _ctx.innerDrawer,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                return _ctx.innerDrawer = $event;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }, 8, ["before-close", "modelValue"])])];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            drawer: false,
            innerDrawer: false
          };
        },
        methods: {
          handleClose: function handleClose(done) {
            this.$confirm('You still have unsaved data, proceed?').then(function (_) {
              done();
            }).catch(function (_) {});
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/fr-FR/drawer.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/drawer.md



drawervue_type_script_lang_ts.render = drawervue_type_template_id_38336fd8_render

/* harmony default export */ var drawer = __webpack_exports__["default"] = (drawervue_type_script_lang_ts);

/***/ })

}]);