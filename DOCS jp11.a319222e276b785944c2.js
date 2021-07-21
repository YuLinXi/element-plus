(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[217],{

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/cascader.md?vue&type=template&id=7f305fd4

var cascadervue_type_template_id_7f305fd4_hoisted_1 = {
  class: "content element-doc"
};

var cascadervue_type_template_id_7f305fd4_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h2", {
  id: "cascader-kasukedo"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#cascader-kasukedo"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Cascader(カスケード)")], -1);

var cascadervue_type_template_id_7f305fd4_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "オプションが明確な階層構造になっている場合は、Cascaderを使って表示したり選択したりすることができます。", -1);

var cascadervue_type_template_id_7f305fd4_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "ji-ben-dena-shii-fang"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-ben-dena-shii-fang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 基本的な使い方")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "子要素のオプション項目を拡張するには2つの方法があります。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("オプションの配列に "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性を代入すると、cascaderをレンダリングします。"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "props.expandTrigger"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性は、子オプションがどのように展開されるかを定義します。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">クリックすると子オプションが展開される(デフォルト)</span>\n  <el-cascader\n    v-model=\"value\"\n    :options=\"options\"\n    @change=\"handleChange\"></el-cascader>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">ホバーすると子のオプションが拡張される</span>\n  <el-cascader\n    v-model=\"value\"\n    :options=\"options\"\n    :props=\"{ expandTrigger: 'hover' }\"\n    @change=\"handleChange\"></el-cascader>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: [],\n        options: [{\n          value: 'guide',\n          label: 'Guide',\n          children: [{\n            value: 'disciplines',\n            label: 'Disciplines',\n            children: [{\n              value: 'consistency',\n              label: 'Consistency'\n            }, {\n              value: 'feedback',\n              label: 'Feedback'\n            }, {\n              value: 'efficiency',\n              label: 'Efficiency'\n            }, {\n              value: 'controllability',\n              label: 'Controllability'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'side nav',\n              label: 'Side Navigation'\n            }, {\n              value: 'top nav',\n              label: 'Top Navigation'\n            }]\n          }]\n        }, {\n          value: 'component',\n          label: 'Component',\n          children: [{\n            value: 'basic',\n            label: 'Basic',\n            children: [{\n              value: 'layout',\n              label: 'Layout'\n            }, {\n              value: 'color',\n              label: 'Color'\n            }, {\n              value: 'typography',\n              label: 'Typography'\n            }, {\n              value: 'icon',\n              label: 'Icon'\n            }, {\n              value: 'button',\n              label: 'Button'\n            }]\n          }, {\n            value: 'form',\n            label: 'Form',\n            children: [{\n              value: 'radio',\n              label: 'Radio'\n            }, {\n              value: 'checkbox',\n              label: 'Checkbox'\n            }, {\n              value: 'input',\n              label: 'Input'\n            }, {\n              value: 'input-number',\n              label: 'InputNumber'\n            }, {\n              value: 'select',\n              label: 'Select'\n            }, {\n              value: 'cascader',\n              label: 'Cascader'\n            }, {\n              value: 'switch',\n              label: 'Switch'\n            }, {\n              value: 'slider',\n              label: 'Slider'\n            }, {\n              value: 'time-picker',\n              label: 'TimePicker'\n            }, {\n              value: 'date-picker',\n              label: 'DatePicker'\n            }, {\n              value: 'datetime-picker',\n              label: 'DateTimePicker'\n            }, {\n              value: 'upload',\n              label: 'Upload'\n            }, {\n              value: 'rate',\n              label: 'Rate'\n            }, {\n              value: 'form',\n              label: 'Form'\n            }]\n          }, {\n            value: 'data',\n            label: 'Data',\n            children: [{\n              value: 'table',\n              label: 'Table'\n            }, {\n              value: 'tag',\n              label: 'Tag'\n            }, {\n              value: 'progress',\n              label: 'Progress'\n            }, {\n              value: 'tree',\n              label: 'Tree'\n            }, {\n              value: 'pagination',\n              label: 'Pagination'\n            }, {\n              value: 'badge',\n              label: 'Badge'\n            }]\n          }, {\n            value: 'notice',\n            label: 'Notice',\n            children: [{\n              value: 'alert',\n              label: 'Alert'\n            }, {\n              value: 'loading',\n              label: 'Loading'\n            }, {\n              value: 'message',\n              label: 'Message'\n            }, {\n              value: 'message-box',\n              label: 'MessageBox'\n            }, {\n              value: 'notification',\n              label: 'Notification'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'menu',\n              label: 'NavMenu'\n            }, {\n              value: 'tabs',\n              label: 'Tabs'\n            }, {\n              value: 'breadcrumb',\n              label: 'Breadcrumb'\n            }, {\n              value: 'dropdown',\n              label: 'Dropdown'\n            }, {\n              value: 'steps',\n              label: 'Steps'\n            }]\n          }, {\n            value: 'others',\n            label: 'Others',\n            children: [{\n              value: 'dialog',\n              label: 'Dialog'\n            }, {\n              value: 'tooltip',\n              label: 'Tooltip'\n            }, {\n              value: 'popover',\n              label: 'Popover'\n            }, {\n              value: 'card',\n              label: 'Card'\n            }, {\n              value: 'carousel',\n              label: 'Carousel'\n            }, {\n              value: 'collapse',\n              label: 'Collapse'\n            }]\n          }]\n        }, {\n          value: 'resource',\n          label: 'Resource',\n          children: [{\n            value: 'axure',\n            label: 'Axure Components'\n          }, {\n            value: 'sketch',\n            label: 'Sketch Templates'\n          }, {\n            value: 'docs',\n            label: 'Design Documentation'\n          }]\n        }]\n      };\n    },\n    methods: {\n      handleChange(value) {\n        console.log(value);\n      }\n    }\n  };\n</script>\n\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        value: [],\n        options: [\n          {\n            value: 'guide',\n            label: 'Guide',\n            children: [\n              {\n                value: 'disciplines',\n                label: 'Disciplines',\n                children: [\n                  {\n                    value: 'consistency',\n                    label: 'Consistency',\n                  },\n                  {\n                    value: 'feedback',\n                    label: 'Feedback',\n                  },\n                  {\n                    value: 'efficiency',\n                    label: 'Efficiency',\n                  },\n                  {\n                    value: 'controllability',\n                    label: 'Controllability',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'side nav',\n                    label: 'Side Navigation',\n                  },\n                  {\n                    value: 'top nav',\n                    label: 'Top Navigation',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'component',\n            label: 'Component',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'resource',\n            label: 'Resource',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'docs',\n                label: 'Design Documentation',\n              },\n            ],\n          },\n        ],\n      });\n      const handleChange = (value) => {\n        console.log(value);\n      };\n      return {\n        ...toRefs(state),\n        handleChange,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "wu-xiao-huasaretaopusiyon"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#wu-xiao-huasaretaopusiyon"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 無効化されたオプション")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("オプションオブジェクトに "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" フィールドを設定することで、オプションを無効にします。")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("この例では、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 配列の最初の項目に "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "disabled: true"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" フィールドがあるので、無効になっています。デフォルトでは、Cascader は各オプションオブジェクトの "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" フィールドをチェックします。オプションが無効かどうかを示すために別のフィールド名を使用している場合は、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "props.disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性にそれを割り当てることができます (詳細は以下の API テーブルを参照してください)。もちろん、フィールド名 "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "value"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "children"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" も同様にカスタマイズすることができます。")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-cascader :options=\"options\"></el-cascader>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'guide',\n          label: 'Guide',\n          disabled: true,\n          children: [{\n            value: 'disciplines',\n            label: 'Disciplines',\n            children: [{\n              value: 'consistency',\n              label: 'Consistency'\n            }, {\n              value: 'feedback',\n              label: 'Feedback'\n            }, {\n              value: 'efficiency',\n              label: 'Efficiency'\n            }, {\n              value: 'controllability',\n              label: 'Controllability'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'side nav',\n              label: 'Side Navigation'\n            }, {\n              value: 'top nav',\n              label: 'Top Navigation'\n            }]\n          }]\n        }, {\n          value: 'component',\n          label: 'Component',\n          children: [{\n            value: 'basic',\n            label: 'Basic',\n            children: [{\n              value: 'layout',\n              label: 'Layout'\n            }, {\n              value: 'color',\n              label: 'Color'\n            }, {\n              value: 'typography',\n              label: 'Typography'\n            }, {\n              value: 'icon',\n              label: 'Icon'\n            }, {\n              value: 'button',\n              label: 'Button'\n            }]\n          }, {\n            value: 'form',\n            label: 'Form',\n            children: [{\n              value: 'radio',\n              label: 'Radio'\n            }, {\n              value: 'checkbox',\n              label: 'Checkbox'\n            }, {\n              value: 'input',\n              label: 'Input'\n            }, {\n              value: 'input-number',\n              label: 'InputNumber'\n            }, {\n              value: 'select',\n              label: 'Select'\n            }, {\n              value: 'cascader',\n              label: 'Cascader'\n            }, {\n              value: 'switch',\n              label: 'Switch'\n            }, {\n              value: 'slider',\n              label: 'Slider'\n            }, {\n              value: 'time-picker',\n              label: 'TimePicker'\n            }, {\n              value: 'date-picker',\n              label: 'DatePicker'\n            }, {\n              value: 'datetime-picker',\n              label: 'DateTimePicker'\n            }, {\n              value: 'upload',\n              label: 'Upload'\n            }, {\n              value: 'rate',\n              label: 'Rate'\n            }, {\n              value: 'form',\n              label: 'Form'\n            }]\n          }, {\n            value: 'data',\n            label: 'Data',\n            children: [{\n              value: 'table',\n              label: 'Table'\n            }, {\n              value: 'tag',\n              label: 'Tag'\n            }, {\n              value: 'progress',\n              label: 'Progress'\n            }, {\n              value: 'tree',\n              label: 'Tree'\n            }, {\n              value: 'pagination',\n              label: 'Pagination'\n            }, {\n              value: 'badge',\n              label: 'Badge'\n            }]\n          }, {\n            value: 'notice',\n            label: 'Notice',\n            children: [{\n              value: 'alert',\n              label: 'Alert'\n            }, {\n              value: 'loading',\n              label: 'Loading'\n            }, {\n              value: 'message',\n              label: 'Message'\n            }, {\n              value: 'message-box',\n              label: 'MessageBox'\n            }, {\n              value: 'notification',\n              label: 'Notification'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'menu',\n              label: 'NavMenu'\n            }, {\n              value: 'tabs',\n              label: 'Tabs'\n            }, {\n              value: 'breadcrumb',\n              label: 'Breadcrumb'\n            }, {\n              value: 'dropdown',\n              label: 'Dropdown'\n            }, {\n              value: 'steps',\n              label: 'Steps'\n            }]\n          }, {\n            value: 'others',\n            label: 'Others',\n            children: [{\n              value: 'dialog',\n              label: 'Dialog'\n            }, {\n              value: 'tooltip',\n              label: 'Tooltip'\n            }, {\n              value: 'popover',\n              label: 'Popover'\n            }, {\n              value: 'card',\n              label: 'Card'\n            }, {\n              value: 'carousel',\n              label: 'Carousel'\n            }, {\n              value: 'collapse',\n              label: 'Collapse'\n            }]\n          }]\n        }, {\n          value: 'resource',\n          label: 'Resource',\n          children: [{\n            value: 'axure',\n            label: 'Axure Components'\n          }, {\n            value: 'sketch',\n            label: 'Sketch Templates'\n          }, {\n            value: 'docs',\n            label: 'Design Documentation'\n          }]\n        }]\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        options: [\n          {\n            value: 'guide',\n            label: 'Guide',\n            disabled: true,\n            children: [\n              {\n                value: 'disciplines',\n                label: 'Disciplines',\n                children: [\n                  {\n                    value: 'consistency',\n                    label: 'Consistency',\n                  },\n                  {\n                    value: 'feedback',\n                    label: 'Feedback',\n                  },\n                  {\n                    value: 'efficiency',\n                    label: 'Efficiency',\n                  },\n                  {\n                    value: 'controllability',\n                    label: 'Controllability',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'side nav',\n                    label: 'Side Navigation',\n                  },\n                  {\n                    value: 'top nav',\n                    label: 'Top Navigation',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'component',\n            label: 'Component',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'resource',\n            label: 'Resource',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'docs',\n                label: 'Design Documentation',\n              },\n            ],\n          },\n        ],\n      });\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "kuria-ke-neng"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kuria-ke-neng"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" クリア可能")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-cascader"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" に "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性を設定すると、選択してホバリングしたときにクリアアイコンが表示されるようになります。")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-cascader :options=\"options\" clearable></el-cascader>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'guide',\n          label: 'Guide',\n          children: [{\n            value: 'disciplines',\n            label: 'Disciplines',\n            children: [{\n              value: 'consistency',\n              label: 'Consistency'\n            }, {\n              value: 'feedback',\n              label: 'Feedback'\n            }, {\n              value: 'efficiency',\n              label: 'Efficiency'\n            }, {\n              value: 'controllability',\n              label: 'Controllability'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'side nav',\n              label: 'Side Navigation'\n            }, {\n              value: 'top nav',\n              label: 'Top Navigation'\n            }]\n          }]\n        }, {\n          value: 'component',\n          label: 'Component',\n          children: [{\n            value: 'basic',\n            label: 'Basic',\n            children: [{\n              value: 'layout',\n              label: 'Layout'\n            }, {\n              value: 'color',\n              label: 'Color'\n            }, {\n              value: 'typography',\n              label: 'Typography'\n            }, {\n              value: 'icon',\n              label: 'Icon'\n            }, {\n              value: 'button',\n              label: 'Button'\n            }]\n          }, {\n            value: 'form',\n            label: 'Form',\n            children: [{\n              value: 'radio',\n              label: 'Radio'\n            }, {\n              value: 'checkbox',\n              label: 'Checkbox'\n            }, {\n              value: 'input',\n              label: 'Input'\n            }, {\n              value: 'input-number',\n              label: 'InputNumber'\n            }, {\n              value: 'select',\n              label: 'Select'\n            }, {\n              value: 'cascader',\n              label: 'Cascader'\n            }, {\n              value: 'switch',\n              label: 'Switch'\n            }, {\n              value: 'slider',\n              label: 'Slider'\n            }, {\n              value: 'time-picker',\n              label: 'TimePicker'\n            }, {\n              value: 'date-picker',\n              label: 'DatePicker'\n            }, {\n              value: 'datetime-picker',\n              label: 'DateTimePicker'\n            }, {\n              value: 'upload',\n              label: 'Upload'\n            }, {\n              value: 'rate',\n              label: 'Rate'\n            }, {\n              value: 'form',\n              label: 'Form'\n            }]\n          }, {\n            value: 'data',\n            label: 'Data',\n            children: [{\n              value: 'table',\n              label: 'Table'\n            }, {\n              value: 'tag',\n              label: 'Tag'\n            }, {\n              value: 'progress',\n              label: 'Progress'\n            }, {\n              value: 'tree',\n              label: 'Tree'\n            }, {\n              value: 'pagination',\n              label: 'Pagination'\n            }, {\n              value: 'badge',\n              label: 'Badge'\n            }]\n          }, {\n            value: 'notice',\n            label: 'Notice',\n            children: [{\n              value: 'alert',\n              label: 'Alert'\n            }, {\n              value: 'loading',\n              label: 'Loading'\n            }, {\n              value: 'message',\n              label: 'Message'\n            }, {\n              value: 'message-box',\n              label: 'MessageBox'\n            }, {\n              value: 'notification',\n              label: 'Notification'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'menu',\n              label: 'NavMenu'\n            }, {\n              value: 'tabs',\n              label: 'Tabs'\n            }, {\n              value: 'breadcrumb',\n              label: 'Breadcrumb'\n            }, {\n              value: 'dropdown',\n              label: 'Dropdown'\n            }, {\n              value: 'steps',\n              label: 'Steps'\n            }]\n          }, {\n            value: 'others',\n            label: 'Others',\n            children: [{\n              value: 'dialog',\n              label: 'Dialog'\n            }, {\n              value: 'tooltip',\n              label: 'Tooltip'\n            }, {\n              value: 'popover',\n              label: 'Popover'\n            }, {\n              value: 'card',\n              label: 'Card'\n            }, {\n              value: 'carousel',\n              label: 'Carousel'\n            }, {\n              value: 'collapse',\n              label: 'Collapse'\n            }]\n          }]\n        }, {\n          value: 'resource',\n          label: 'Resource',\n          children: [{\n            value: 'axure',\n            label: 'Axure Components'\n          }, {\n            value: 'sketch',\n            label: 'Sketch Templates'\n          }, {\n            value: 'docs',\n            label: 'Design Documentation'\n          }]\n        }]\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        options: [\n          {\n            value: 'guide',\n            label: 'Guide',\n            children: [\n              {\n                value: 'disciplines',\n                label: 'Disciplines',\n                children: [\n                  {\n                    value: 'consistency',\n                    label: 'Consistency',\n                  },\n                  {\n                    value: 'feedback',\n                    label: 'Feedback',\n                  },\n                  {\n                    value: 'efficiency',\n                    label: 'Efficiency',\n                  },\n                  {\n                    value: 'controllability',\n                    label: 'Controllability',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'side nav',\n                    label: 'Side Navigation',\n                  },\n                  {\n                    value: 'top nav',\n                    label: 'Top Navigation',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'component',\n            label: 'Component',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'resource',\n            label: 'Resource',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'docs',\n                label: 'Design Documentation',\n              },\n            ],\n          },\n        ],\n      });\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "zui-hounoreberunomi-biao-shi"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zui-hounoreberunomi-biao-shi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 最後のレベルのみ表示")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "入力では、すべてのレベルを表示するのではなく、最後のレベルのみを表示することができます。", -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "show-all-levels"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性は、すべてのレベルを表示するかどうかを定義する。"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" の場合、最後のレベルのみが表示される。")])], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-cascader :options=\"options\" :show-all-levels=\"false\"></el-cascader>\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'guide',\n          label: 'Guide',\n          children: [{\n            value: 'disciplines',\n            label: 'Disciplines',\n            children: [{\n              value: 'consistency',\n              label: 'Consistency'\n            }, {\n              value: 'feedback',\n              label: 'Feedback'\n            }, {\n              value: 'efficiency',\n              label: 'Efficiency'\n            }, {\n              value: 'controllability',\n              label: 'Controllability'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'side nav',\n              label: 'Side Navigation'\n            }, {\n              value: 'top nav',\n              label: 'Top Navigation'\n            }]\n          }]\n        }, {\n          value: 'component',\n          label: 'Component',\n          children: [{\n            value: 'basic',\n            label: 'Basic',\n            children: [{\n              value: 'layout',\n              label: 'Layout'\n            }, {\n              value: 'color',\n              label: 'Color'\n            }, {\n              value: 'typography',\n              label: 'Typography'\n            }, {\n              value: 'icon',\n              label: 'Icon'\n            }, {\n              value: 'button',\n              label: 'Button'\n            }]\n          }, {\n            value: 'form',\n            label: 'Form',\n            children: [{\n              value: 'radio',\n              label: 'Radio'\n            }, {\n              value: 'checkbox',\n              label: 'Checkbox'\n            }, {\n              value: 'input',\n              label: 'Input'\n            }, {\n              value: 'input-number',\n              label: 'InputNumber'\n            }, {\n              value: 'select',\n              label: 'Select'\n            }, {\n              value: 'cascader',\n              label: 'Cascader'\n            }, {\n              value: 'switch',\n              label: 'Switch'\n            }, {\n              value: 'slider',\n              label: 'Slider'\n            }, {\n              value: 'time-picker',\n              label: 'TimePicker'\n            }, {\n              value: 'date-picker',\n              label: 'DatePicker'\n            }, {\n              value: 'datetime-picker',\n              label: 'DateTimePicker'\n            }, {\n              value: 'upload',\n              label: 'Upload'\n            }, {\n              value: 'rate',\n              label: 'Rate'\n            }, {\n              value: 'form',\n              label: 'Form'\n            }]\n          }, {\n            value: 'data',\n            label: 'Data',\n            children: [{\n              value: 'table',\n              label: 'Table'\n            }, {\n              value: 'tag',\n              label: 'Tag'\n            }, {\n              value: 'progress',\n              label: 'Progress'\n            }, {\n              value: 'tree',\n              label: 'Tree'\n            }, {\n              value: 'pagination',\n              label: 'Pagination'\n            }, {\n              value: 'badge',\n              label: 'Badge'\n            }]\n          }, {\n            value: 'notice',\n            label: 'Notice',\n            children: [{\n              value: 'alert',\n              label: 'Alert'\n            }, {\n              value: 'loading',\n              label: 'Loading'\n            }, {\n              value: 'message',\n              label: 'Message'\n            }, {\n              value: 'message-box',\n              label: 'MessageBox'\n            }, {\n              value: 'notification',\n              label: 'Notification'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'menu',\n              label: 'NavMenu'\n            }, {\n              value: 'tabs',\n              label: 'Tabs'\n            }, {\n              value: 'breadcrumb',\n              label: 'Breadcrumb'\n            }, {\n              value: 'dropdown',\n              label: 'Dropdown'\n            }, {\n              value: 'steps',\n              label: 'Steps'\n            }]\n          }, {\n            value: 'others',\n            label: 'Others',\n            children: [{\n              value: 'dialog',\n              label: 'Dialog'\n            }, {\n              value: 'tooltip',\n              label: 'Tooltip'\n            }, {\n              value: 'popover',\n              label: 'Popover'\n            }, {\n              value: 'card',\n              label: 'Card'\n            }, {\n              value: 'carousel',\n              label: 'Carousel'\n            }, {\n              value: 'collapse',\n              label: 'Collapse'\n            }]\n          }]\n        }, {\n          value: 'resource',\n          label: 'Resource',\n          children: [{\n            value: 'axure',\n            label: 'Axure Components'\n          }, {\n            value: 'sketch',\n            label: 'Sketch Templates'\n          }, {\n            value: 'docs',\n            label: 'Design Documentation'\n          }]\n        }]\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      options: [\n        {\n          value: 'guide',\n          label: 'Guide',\n          children: [\n            {\n              value: 'disciplines',\n              label: 'Disciplines',\n              children: [\n                {\n                  value: 'consistency',\n                  label: 'Consistency',\n                },\n                {\n                  value: 'feedback',\n                  label: 'Feedback',\n                },\n                {\n                  value: 'efficiency',\n                  label: 'Efficiency',\n                },\n                {\n                  value: 'controllability',\n                  label: 'Controllability',\n                },\n              ],\n            },\n            {\n              value: 'navigation',\n              label: 'Navigation',\n              children: [\n                {\n                  value: 'side nav',\n                  label: 'Side Navigation',\n                },\n                {\n                  value: 'top nav',\n                  label: 'Top Navigation',\n                },\n              ],\n            },\n          ],\n        },\n        {\n          value: 'component',\n          label: 'Component',\n          children: [\n            {\n              value: 'basic',\n              label: 'Basic',\n              children: [\n                {\n                  value: 'layout',\n                  label: 'Layout',\n                },\n                {\n                  value: 'color',\n                  label: 'Color',\n                },\n                {\n                  value: 'typography',\n                  label: 'Typography',\n                },\n                {\n                  value: 'icon',\n                  label: 'Icon',\n                },\n                {\n                  value: 'button',\n                  label: 'Button',\n                },\n              ],\n            },\n            {\n              value: 'form',\n              label: 'Form',\n              children: [\n                {\n                  value: 'radio',\n                  label: 'Radio',\n                },\n                {\n                  value: 'checkbox',\n                  label: 'Checkbox',\n                },\n                {\n                  value: 'input',\n                  label: 'Input',\n                },\n                {\n                  value: 'input-number',\n                  label: 'InputNumber',\n                },\n                {\n                  value: 'select',\n                  label: 'Select',\n                },\n                {\n                  value: 'cascader',\n                  label: 'Cascader',\n                },\n                {\n                  value: 'switch',\n                  label: 'Switch',\n                },\n                {\n                  value: 'slider',\n                  label: 'Slider',\n                },\n                {\n                  value: 'time-picker',\n                  label: 'TimePicker',\n                },\n                {\n                  value: 'date-picker',\n                  label: 'DatePicker',\n                },\n                {\n                  value: 'datetime-picker',\n                  label: 'DateTimePicker',\n                },\n                {\n                  value: 'upload',\n                  label: 'Upload',\n                },\n                {\n                  value: 'rate',\n                  label: 'Rate',\n                },\n                {\n                  value: 'form',\n                  label: 'Form',\n                },\n              ],\n            },\n            {\n              value: 'data',\n              label: 'Data',\n              children: [\n                {\n                  value: 'table',\n                  label: 'Table',\n                },\n                {\n                  value: 'tag',\n                  label: 'Tag',\n                },\n                {\n                  value: 'progress',\n                  label: 'Progress',\n                },\n                {\n                  value: 'tree',\n                  label: 'Tree',\n                },\n                {\n                  value: 'pagination',\n                  label: 'Pagination',\n                },\n                {\n                  value: 'badge',\n                  label: 'Badge',\n                },\n              ],\n            },\n            {\n              value: 'notice',\n              label: 'Notice',\n              children: [\n                {\n                  value: 'alert',\n                  label: 'Alert',\n                },\n                {\n                  value: 'loading',\n                  label: 'Loading',\n                },\n                {\n                  value: 'message',\n                  label: 'Message',\n                },\n                {\n                  value: 'message-box',\n                  label: 'MessageBox',\n                },\n                {\n                  value: 'notification',\n                  label: 'Notification',\n                },\n              ],\n            },\n            {\n              value: 'navigation',\n              label: 'Navigation',\n              children: [\n                {\n                  value: 'menu',\n                  label: 'NavMenu',\n                },\n                {\n                  value: 'tabs',\n                  label: 'Tabs',\n                },\n                {\n                  value: 'breadcrumb',\n                  label: 'Breadcrumb',\n                },\n                {\n                  value: 'dropdown',\n                  label: 'Dropdown',\n                },\n                {\n                  value: 'steps',\n                  label: 'Steps',\n                },\n              ],\n            },\n            {\n              value: 'others',\n              label: 'Others',\n              children: [\n                {\n                  value: 'dialog',\n                  label: 'Dialog',\n                },\n                {\n                  value: 'tooltip',\n                  label: 'Tooltip',\n                },\n                {\n                  value: 'popover',\n                  label: 'Popover',\n                },\n                {\n                  value: 'card',\n                  label: 'Card',\n                },\n                {\n                  value: 'carousel',\n                  label: 'Carousel',\n                },\n                {\n                  value: 'collapse',\n                  label: 'Collapse',\n                },\n              ],\n            },\n          ],\n        },\n        {\n          value: 'resource',\n          label: 'Resource',\n          children: [\n            {\n              value: 'axure',\n              label: 'Axure Components',\n            },\n            {\n              value: 'sketch',\n              label: 'Sketch Templates',\n            },\n            {\n              value: 'docs',\n              label: 'Design Documentation',\n            },\n          ],\n        },\n      ],\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "fu-shu-xuan-ze"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#fu-shu-xuan-ze"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 複数選択")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("複数選択を使用するには "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "props.multiple = true"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を設定する。")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("複数選択の場合、デフォルトでは選択されたタグがすべて表示されます。選択したタグを折りたたむには、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "collapse-tags = true"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を設定することができます。")])], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">すべてのタグを表示する（デフォルト)</span>\n  <el-cascader\n    :options=\"options\"\n    :props=\"props\"\n    clearable></el-cascader>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">タグの折りたたみ</span>\n  <el-cascader\n    :options=\"options\"\n    :props=\"props\"\n    collapse-tags\n    clearable></el-cascader>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        props: { multiple: true },\n        options: [{\n          value: 1,\n          label: 'Asia',\n          children: [{\n            value: 2,\n            label: 'China',\n            children: [\n              { value: 3, label: 'Beijing' },\n              { value: 4, label: 'Shanghai' },\n              { value: 5, label: 'Hangzhou' }\n            ]\n          }, {\n            value: 6,\n            label: 'Japan',\n            children: [\n              { value: 7, label: 'Tokyo' },\n              { value: 8, label: 'Osaka' },\n              { value: 9, label: 'Kyoto' }\n            ]\n          }, {\n            value: 10,\n            label: 'Korea',\n            children: [\n              { value: 11, label: 'Seoul' },\n              { value: 12, label: 'Busan' },\n              { value: 13, label: 'Taegu' }\n            ]\n          }]\n        }, {\n          value: 14,\n          label: 'Europe',\n          children: [{\n            value: 15,\n            label: 'France',\n            children: [\n              { value: 16, label: 'Paris' },\n              { value: 17, label: 'Marseille' },\n              { value: 18, label: 'Lyon' }\n            ]\n          }, {\n            value: 19,\n            label: 'UK',\n            children: [\n              { value: 20, label: 'London' },\n              { value: 21, label: 'Birmingham' },\n              { value: 22, label: 'Manchester' }\n            ]\n          }]\n        }, {\n          value: 23,\n          label: 'North America',\n          children: [{\n            value: 24,\n            label: 'US',\n            children: [\n              { value: 25, label: 'New York' },\n              { value: 26, label: 'Los Angeles' },\n              { value: 27, label: 'Washington' }\n            ]\n          }, {\n            value: 28,\n            label: 'Canada',\n            children: [\n              { value: 29, label: 'Toronto' },\n              { value: 30, label: 'Montreal' },\n              { value: 31, label: 'Ottawa' }\n            ]\n          }]\n        }]\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      props: { multiple: true },\n      options: [\n        {\n          value: 1,\n          label: 'Asia',\n          children: [\n            {\n              value: 2,\n              label: 'China',\n              children: [\n                { value: 3, label: 'Beijing' },\n                { value: 4, label: 'Shanghai' },\n                { value: 5, label: 'Hangzhou' },\n              ],\n            },\n            {\n              value: 6,\n              label: 'Japan',\n              children: [\n                { value: 7, label: 'Tokyo' },\n                { value: 8, label: 'Osaka' },\n                { value: 9, label: 'Kyoto' },\n              ],\n            },\n            {\n              value: 10,\n              label: 'Korea',\n              children: [\n                { value: 11, label: 'Seoul' },\n                { value: 12, label: 'Busan' },\n                { value: 13, label: 'Taegu' },\n              ],\n            },\n          ],\n        },\n        {\n          value: 14,\n          label: 'Europe',\n          children: [\n            {\n              value: 15,\n              label: 'France',\n              children: [\n                { value: 16, label: 'Paris' },\n                { value: 17, label: 'Marseille' },\n                { value: 18, label: 'Lyon' },\n              ],\n            },\n            {\n              value: 19,\n              label: 'UK',\n              children: [\n                { value: 20, label: 'London' },\n                { value: 21, label: 'Birmingham' },\n                { value: 22, label: 'Manchester' },\n              ],\n            },\n          ],\n        },\n        {\n          value: 23,\n          label: 'North America',\n          children: [\n            {\n              value: 24,\n              label: 'US',\n              children: [\n                { value: 25, label: 'New York' },\n                { value: 26, label: 'Los Angeles' },\n                { value: 27, label: 'Washington' },\n              ],\n            },\n            {\n              value: 28,\n              label: 'Canada',\n              children: [\n                { value: 29, label: 'Toronto' },\n                { value: 30, label: 'Montreal' },\n                { value: 31, label: 'Ottawa' },\n              ],\n            },\n          ],\n        },\n      ],\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "opusiyonno-ren-yinoreberuwo-xuan-ze"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#opusiyonno-ren-yinoreberuwo-xuan-ze"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" オプションの任意のレベルを選択")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "単一選択の場合はリーフノードのみをチェックし、複数選択の場合は親ノードをチェックすることで最終的にリーフノードをチェックします。この機能を有効にすると、親ノードと子ノードのリンクを解除することができ、任意のレベルのオプションを選択することができます。", -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "props.checkStrictly = true"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を設定すると、チェックしたノードの状態が親ノードや子ノードに影響を与えないようにすることができ、任意のレベルのオプションを選択することができます。")])], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">任意のレベルのオプションを選択（単一選択)</span>\n  <el-cascader\n    :options=\"options\"\n    :props=\"{ checkStrictly: true }\"\n    clearable></el-cascader>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">任意のレベルのオプションを選択（複数選択)</span>\n  <el-cascader\n    :options=\"options\"\n    :props=\"{ multiple: true, checkStrictly: true }\"\n    clearable></el-cascader>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'guide',\n          label: 'Guide',\n          children: [{\n            value: 'disciplines',\n            label: 'Disciplines',\n            children: [{\n              value: 'consistency',\n              label: 'Consistency'\n            }, {\n              value: 'feedback',\n              label: 'Feedback'\n            }, {\n              value: 'efficiency',\n              label: 'Efficiency'\n            }, {\n              value: 'controllability',\n              label: 'Controllability'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'side nav',\n              label: 'Side Navigation'\n            }, {\n              value: 'top nav',\n              label: 'Top Navigation'\n            }]\n          }]\n        }, {\n          value: 'component',\n          label: 'Component',\n          children: [{\n            value: 'basic',\n            label: 'Basic',\n            children: [{\n              value: 'layout',\n              label: 'Layout'\n            }, {\n              value: 'color',\n              label: 'Color'\n            }, {\n              value: 'typography',\n              label: 'Typography'\n            }, {\n              value: 'icon',\n              label: 'Icon'\n            }, {\n              value: 'button',\n              label: 'Button'\n            }]\n          }, {\n            value: 'form',\n            label: 'Form',\n            children: [{\n              value: 'radio',\n              label: 'Radio'\n            }, {\n              value: 'checkbox',\n              label: 'Checkbox'\n            }, {\n              value: 'input',\n              label: 'Input'\n            }, {\n              value: 'input-number',\n              label: 'InputNumber'\n            }, {\n              value: 'select',\n              label: 'Select'\n            }, {\n              value: 'cascader',\n              label: 'Cascader'\n            }, {\n              value: 'switch',\n              label: 'Switch'\n            }, {\n              value: 'slider',\n              label: 'Slider'\n            }, {\n              value: 'time-picker',\n              label: 'TimePicker'\n            }, {\n              value: 'date-picker',\n              label: 'DatePicker'\n            }, {\n              value: 'datetime-picker',\n              label: 'DateTimePicker'\n            }, {\n              value: 'upload',\n              label: 'Upload'\n            }, {\n              value: 'rate',\n              label: 'Rate'\n            }, {\n              value: 'form',\n              label: 'Form'\n            }]\n          }, {\n            value: 'data',\n            label: 'Data',\n            children: [{\n              value: 'table',\n              label: 'Table'\n            }, {\n              value: 'tag',\n              label: 'Tag'\n            }, {\n              value: 'progress',\n              label: 'Progress'\n            }, {\n              value: 'tree',\n              label: 'Tree'\n            }, {\n              value: 'pagination',\n              label: 'Pagination'\n            }, {\n              value: 'badge',\n              label: 'Badge'\n            }]\n          }, {\n            value: 'notice',\n            label: 'Notice',\n            children: [{\n              value: 'alert',\n              label: 'Alert'\n            }, {\n              value: 'loading',\n              label: 'Loading'\n            }, {\n              value: 'message',\n              label: 'Message'\n            }, {\n              value: 'message-box',\n              label: 'MessageBox'\n            }, {\n              value: 'notification',\n              label: 'Notification'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'menu',\n              label: 'NavMenu'\n            }, {\n              value: 'tabs',\n              label: 'Tabs'\n            }, {\n              value: 'breadcrumb',\n              label: 'Breadcrumb'\n            }, {\n              value: 'dropdown',\n              label: 'Dropdown'\n            }, {\n              value: 'steps',\n              label: 'Steps'\n            }]\n          }, {\n            value: 'others',\n            label: 'Others',\n            children: [{\n              value: 'dialog',\n              label: 'Dialog'\n            }, {\n              value: 'tooltip',\n              label: 'Tooltip'\n            }, {\n              value: 'popover',\n              label: 'Popover'\n            }, {\n              value: 'card',\n              label: 'Card'\n            }, {\n              value: 'carousel',\n              label: 'Carousel'\n            }, {\n              value: 'collapse',\n              label: 'Collapse'\n            }]\n          }]\n        }, {\n          value: 'resource',\n          label: 'Resource',\n          children: [{\n            value: 'axure',\n            label: 'Axure Components'\n          }, {\n            value: 'sketch',\n            label: 'Sketch Templates'\n          }, {\n            value: 'docs',\n            label: 'Design Documentation'\n          }]\n        }]\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      options: [\n        {\n          value: 'guide',\n          label: 'Guide',\n          children: [\n            {\n              value: 'disciplines',\n              label: 'Disciplines',\n              children: [\n                {\n                  value: 'consistency',\n                  label: 'Consistency',\n                },\n                {\n                  value: 'feedback',\n                  label: 'Feedback',\n                },\n                {\n                  value: 'efficiency',\n                  label: 'Efficiency',\n                },\n                {\n                  value: 'controllability',\n                  label: 'Controllability',\n                },\n              ],\n            },\n            {\n              value: 'navigation',\n              label: 'Navigation',\n              children: [\n                {\n                  value: 'side nav',\n                  label: 'Side Navigation',\n                },\n                {\n                  value: 'top nav',\n                  label: 'Top Navigation',\n                },\n              ],\n            },\n          ],\n        },\n        {\n          value: 'component',\n          label: 'Component',\n          children: [\n            {\n              value: 'basic',\n              label: 'Basic',\n              children: [\n                {\n                  value: 'layout',\n                  label: 'Layout',\n                },\n                {\n                  value: 'color',\n                  label: 'Color',\n                },\n                {\n                  value: 'typography',\n                  label: 'Typography',\n                },\n                {\n                  value: 'icon',\n                  label: 'Icon',\n                },\n                {\n                  value: 'button',\n                  label: 'Button',\n                },\n              ],\n            },\n            {\n              value: 'form',\n              label: 'Form',\n              children: [\n                {\n                  value: 'radio',\n                  label: 'Radio',\n                },\n                {\n                  value: 'checkbox',\n                  label: 'Checkbox',\n                },\n                {\n                  value: 'input',\n                  label: 'Input',\n                },\n                {\n                  value: 'input-number',\n                  label: 'InputNumber',\n                },\n                {\n                  value: 'select',\n                  label: 'Select',\n                },\n                {\n                  value: 'cascader',\n                  label: 'Cascader',\n                },\n                {\n                  value: 'switch',\n                  label: 'Switch',\n                },\n                {\n                  value: 'slider',\n                  label: 'Slider',\n                },\n                {\n                  value: 'time-picker',\n                  label: 'TimePicker',\n                },\n                {\n                  value: 'date-picker',\n                  label: 'DatePicker',\n                },\n                {\n                  value: 'datetime-picker',\n                  label: 'DateTimePicker',\n                },\n                {\n                  value: 'upload',\n                  label: 'Upload',\n                },\n                {\n                  value: 'rate',\n                  label: 'Rate',\n                },\n                {\n                  value: 'form',\n                  label: 'Form',\n                },\n              ],\n            },\n            {\n              value: 'data',\n              label: 'Data',\n              children: [\n                {\n                  value: 'table',\n                  label: 'Table',\n                },\n                {\n                  value: 'tag',\n                  label: 'Tag',\n                },\n                {\n                  value: 'progress',\n                  label: 'Progress',\n                },\n                {\n                  value: 'tree',\n                  label: 'Tree',\n                },\n                {\n                  value: 'pagination',\n                  label: 'Pagination',\n                },\n                {\n                  value: 'badge',\n                  label: 'Badge',\n                },\n              ],\n            },\n            {\n              value: 'notice',\n              label: 'Notice',\n              children: [\n                {\n                  value: 'alert',\n                  label: 'Alert',\n                },\n                {\n                  value: 'loading',\n                  label: 'Loading',\n                },\n                {\n                  value: 'message',\n                  label: 'Message',\n                },\n                {\n                  value: 'message-box',\n                  label: 'MessageBox',\n                },\n                {\n                  value: 'notification',\n                  label: 'Notification',\n                },\n              ],\n            },\n            {\n              value: 'navigation',\n              label: 'Navigation',\n              children: [\n                {\n                  value: 'menu',\n                  label: 'NavMenu',\n                },\n                {\n                  value: 'tabs',\n                  label: 'Tabs',\n                },\n                {\n                  value: 'breadcrumb',\n                  label: 'Breadcrumb',\n                },\n                {\n                  value: 'dropdown',\n                  label: 'Dropdown',\n                },\n                {\n                  value: 'steps',\n                  label: 'Steps',\n                },\n              ],\n            },\n            {\n              value: 'others',\n              label: 'Others',\n              children: [\n                {\n                  value: 'dialog',\n                  label: 'Dialog',\n                },\n                {\n                  value: 'tooltip',\n                  label: 'Tooltip',\n                },\n                {\n                  value: 'popover',\n                  label: 'Popover',\n                },\n                {\n                  value: 'card',\n                  label: 'Card',\n                },\n                {\n                  value: 'carousel',\n                  label: 'Carousel',\n                },\n                {\n                  value: 'collapse',\n                  label: 'Collapse',\n                },\n              ],\n            },\n          ],\n        },\n        {\n          value: 'resource',\n          label: 'Resource',\n          children: [\n            {\n              value: 'axure',\n              label: 'Axure Components',\n            },\n            {\n              value: 'sketch',\n              label: 'Sketch Templates',\n            },\n            {\n              value: 'docs',\n              label: 'Design Documentation',\n            },\n          ],\n        },\n      ],\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "dong-derodeingu"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dong-derodeingu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 動的ローディング")], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "ノードをチェックすると、その子ノードを動的にロードします。", -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("動的ロードを利用するには "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "lazy = true"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を設定し、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "lazyload"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" でデータソースのロード方法を指定する必要があります。パラメータ "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "lazyload"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" には2つのパラメータがあり、最初のパラメータ "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "node"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" は現在クリックされているノード、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "resolve"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" はロードが完了したことを示すコールバックで、これを呼び出す必要があります。ノードの状態をより正確に表示するには、それがリーフノードであるかどうかを示すために "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "leaf"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" フィールドを追加します ( "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "props.leaf"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" で変更可能)。そうでない場合は、子ノードがあるかどうかで推測されます。")])], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-cascader :props=\"props\"></el-cascader>\n\n<script>\n  let id = 0;\n\n  export default {\n    data() {\n      return {\n        props: {\n          lazy: true,\n          lazyLoad (node, resolve) {\n            const { level } = node;\n            setTimeout(() => {\n              const nodes = Array.from({ length: level + 1 })\n                .map(item => ({\n                  value: ++id,\n                  label: `Option - ${id}`,\n                  leaf: level >= 2\n                }));\n              // Invoke `resolve` callback to return the child nodes data and indicate the loading is finished.\n              resolve(nodes);\n            }, 1000);\n          }\n        }\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nlet id = 0;\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      props: {\n        lazy: true,\n        lazyLoad(node, resolve) {\n          const { level } = node;\n          setTimeout(() => {\n            const nodes = Array.from({ length: level + 1 }).map((item) => ({\n              value: ++id,\n              label: `Option - ${id}`,\n              leaf: level >= 2,\n            }));\n            // Invoke `resolve` callback to return the child nodes data and indicate the loading is finished.\n            resolve(nodes);\n          }, 1000);\n        },\n      },\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "huirutaringu-ke-neng"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#huirutaringu-ke-neng"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" フィルタリング可能")], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "キーワードで検索してオプションを選択します。", -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-cascader"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" に "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を追加することでフィルタリングが可能になる。cascaderは、ラベルまたは親のラベル("), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "show-all-levels"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("による)に入力キーワードが含まれているノードにマッチするようになります。もちろん、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "filter-method"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("で検索ロジックをカスタマイズすることもできます。")])], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">Filterable (Single selection)</span>\n  <el-cascader\n    placeholder=\"Try searchingL Guide\"\n    :options=\"options\"\n    filterable></el-cascader>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">Filterable (Multiple selection)</span>\n  <el-cascader\n    placeholder=\"Try searchingL Guide\"\n    :options=\"options\"\n    :props=\"{ multiple: true }\"\n    filterable></el-cascader>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'guide',\n          label: 'Guide',\n          children: [{\n            value: 'disciplines',\n            label: 'Disciplines',\n            children: [{\n              value: 'consistency',\n              label: 'Consistency'\n            }, {\n              value: 'feedback',\n              label: 'Feedback'\n            }, {\n              value: 'efficiency',\n              label: 'Efficiency'\n            }, {\n              value: 'controllability',\n              label: 'Controllability'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'side nav',\n              label: 'Side Navigation'\n            }, {\n              value: 'top nav',\n              label: 'Top Navigation'\n            }]\n          }]\n        }, {\n          value: 'component',\n          label: 'Component',\n          children: [{\n            value: 'basic',\n            label: 'Basic',\n            children: [{\n              value: 'layout',\n              label: 'Layout'\n            }, {\n              value: 'color',\n              label: 'Color'\n            }, {\n              value: 'typography',\n              label: 'Typography'\n            }, {\n              value: 'icon',\n              label: 'Icon'\n            }, {\n              value: 'button',\n              label: 'Button'\n            }]\n          }, {\n            value: 'form',\n            label: 'Form',\n            children: [{\n              value: 'radio',\n              label: 'Radio'\n            }, {\n              value: 'checkbox',\n              label: 'Checkbox'\n            }, {\n              value: 'input',\n              label: 'Input'\n            }, {\n              value: 'input-number',\n              label: 'InputNumber'\n            }, {\n              value: 'select',\n              label: 'Select'\n            }, {\n              value: 'cascader',\n              label: 'Cascader'\n            }, {\n              value: 'switch',\n              label: 'Switch'\n            }, {\n              value: 'slider',\n              label: 'Slider'\n            }, {\n              value: 'time-picker',\n              label: 'TimePicker'\n            }, {\n              value: 'date-picker',\n              label: 'DatePicker'\n            }, {\n              value: 'datetime-picker',\n              label: 'DateTimePicker'\n            }, {\n              value: 'upload',\n              label: 'Upload'\n            }, {\n              value: 'rate',\n              label: 'Rate'\n            }, {\n              value: 'form',\n              label: 'Form'\n            }]\n          }, {\n            value: 'data',\n            label: 'Data',\n            children: [{\n              value: 'table',\n              label: 'Table'\n            }, {\n              value: 'tag',\n              label: 'Tag'\n            }, {\n              value: 'progress',\n              label: 'Progress'\n            }, {\n              value: 'tree',\n              label: 'Tree'\n            }, {\n              value: 'pagination',\n              label: 'Pagination'\n            }, {\n              value: 'badge',\n              label: 'Badge'\n            }]\n          }, {\n            value: 'notice',\n            label: 'Notice',\n            children: [{\n              value: 'alert',\n              label: 'Alert'\n            }, {\n              value: 'loading',\n              label: 'Loading'\n            }, {\n              value: 'message',\n              label: 'Message'\n            }, {\n              value: 'message-box',\n              label: 'MessageBox'\n            }, {\n              value: 'notification',\n              label: 'Notification'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'menu',\n              label: 'NavMenu'\n            }, {\n              value: 'tabs',\n              label: 'Tabs'\n            }, {\n              value: 'breadcrumb',\n              label: 'Breadcrumb'\n            }, {\n              value: 'dropdown',\n              label: 'Dropdown'\n            }, {\n              value: 'steps',\n              label: 'Steps'\n            }]\n          }, {\n            value: 'others',\n            label: 'Others',\n            children: [{\n              value: 'dialog',\n              label: 'Dialog'\n            }, {\n              value: 'tooltip',\n              label: 'Tooltip'\n            }, {\n              value: 'popover',\n              label: 'Popover'\n            }, {\n              value: 'card',\n              label: 'Card'\n            }, {\n              value: 'carousel',\n              label: 'Carousel'\n            }, {\n              value: 'collapse',\n              label: 'Collapse'\n            }]\n          }]\n        }, {\n          value: 'resource',\n          label: 'Resource',\n          children: [{\n            value: 'axure',\n            label: 'Axure Components'\n          }, {\n            value: 'sketch',\n            label: 'Sketch Templates'\n          }, {\n            value: 'docs',\n            label: 'Design Documentation'\n          }]\n        }]\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      options: [\n        {\n          value: 'guide',\n          label: 'Guide',\n          children: [\n            {\n              value: 'disciplines',\n              label: 'Disciplines',\n              children: [\n                {\n                  value: 'consistency',\n                  label: 'Consistency',\n                },\n                {\n                  value: 'feedback',\n                  label: 'Feedback',\n                },\n                {\n                  value: 'efficiency',\n                  label: 'Efficiency',\n                },\n                {\n                  value: 'controllability',\n                  label: 'Controllability',\n                },\n              ],\n            },\n            {\n              value: 'navigation',\n              label: 'Navigation',\n              children: [\n                {\n                  value: 'side nav',\n                  label: 'Side Navigation',\n                },\n                {\n                  value: 'top nav',\n                  label: 'Top Navigation',\n                },\n              ],\n            },\n          ],\n        },\n        {\n          value: 'component',\n          label: 'Component',\n          children: [\n            {\n              value: 'basic',\n              label: 'Basic',\n              children: [\n                {\n                  value: 'layout',\n                  label: 'Layout',\n                },\n                {\n                  value: 'color',\n                  label: 'Color',\n                },\n                {\n                  value: 'typography',\n                  label: 'Typography',\n                },\n                {\n                  value: 'icon',\n                  label: 'Icon',\n                },\n                {\n                  value: 'button',\n                  label: 'Button',\n                },\n              ],\n            },\n            {\n              value: 'form',\n              label: 'Form',\n              children: [\n                {\n                  value: 'radio',\n                  label: 'Radio',\n                },\n                {\n                  value: 'checkbox',\n                  label: 'Checkbox',\n                },\n                {\n                  value: 'input',\n                  label: 'Input',\n                },\n                {\n                  value: 'input-number',\n                  label: 'InputNumber',\n                },\n                {\n                  value: 'select',\n                  label: 'Select',\n                },\n                {\n                  value: 'cascader',\n                  label: 'Cascader',\n                },\n                {\n                  value: 'switch',\n                  label: 'Switch',\n                },\n                {\n                  value: 'slider',\n                  label: 'Slider',\n                },\n                {\n                  value: 'time-picker',\n                  label: 'TimePicker',\n                },\n                {\n                  value: 'date-picker',\n                  label: 'DatePicker',\n                },\n                {\n                  value: 'datetime-picker',\n                  label: 'DateTimePicker',\n                },\n                {\n                  value: 'upload',\n                  label: 'Upload',\n                },\n                {\n                  value: 'rate',\n                  label: 'Rate',\n                },\n                {\n                  value: 'form',\n                  label: 'Form',\n                },\n              ],\n            },\n            {\n              value: 'data',\n              label: 'Data',\n              children: [\n                {\n                  value: 'table',\n                  label: 'Table',\n                },\n                {\n                  value: 'tag',\n                  label: 'Tag',\n                },\n                {\n                  value: 'progress',\n                  label: 'Progress',\n                },\n                {\n                  value: 'tree',\n                  label: 'Tree',\n                },\n                {\n                  value: 'pagination',\n                  label: 'Pagination',\n                },\n                {\n                  value: 'badge',\n                  label: 'Badge',\n                },\n              ],\n            },\n            {\n              value: 'notice',\n              label: 'Notice',\n              children: [\n                {\n                  value: 'alert',\n                  label: 'Alert',\n                },\n                {\n                  value: 'loading',\n                  label: 'Loading',\n                },\n                {\n                  value: 'message',\n                  label: 'Message',\n                },\n                {\n                  value: 'message-box',\n                  label: 'MessageBox',\n                },\n                {\n                  value: 'notification',\n                  label: 'Notification',\n                },\n              ],\n            },\n            {\n              value: 'navigation',\n              label: 'Navigation',\n              children: [\n                {\n                  value: 'menu',\n                  label: 'NavMenu',\n                },\n                {\n                  value: 'tabs',\n                  label: 'Tabs',\n                },\n                {\n                  value: 'breadcrumb',\n                  label: 'Breadcrumb',\n                },\n                {\n                  value: 'dropdown',\n                  label: 'Dropdown',\n                },\n                {\n                  value: 'steps',\n                  label: 'Steps',\n                },\n              ],\n            },\n            {\n              value: 'others',\n              label: 'Others',\n              children: [\n                {\n                  value: 'dialog',\n                  label: 'Dialog',\n                },\n                {\n                  value: 'tooltip',\n                  label: 'Tooltip',\n                },\n                {\n                  value: 'popover',\n                  label: 'Popover',\n                },\n                {\n                  value: 'card',\n                  label: 'Card',\n                },\n                {\n                  value: 'carousel',\n                  label: 'Carousel',\n                },\n                {\n                  value: 'collapse',\n                  label: 'Collapse',\n                },\n              ],\n            },\n          ],\n        },\n        {\n          value: 'resource',\n          label: 'Resource',\n          children: [\n            {\n              value: 'axure',\n              label: 'Axure Components',\n            },\n            {\n              value: 'sketch',\n              label: 'Sketch Templates',\n            },\n            {\n              value: 'docs',\n              label: 'Design Documentation',\n            },\n          ],\n        },\n      ],\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "kasutamuopusiyonno-nei-rong"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kasutamuopusiyonno-nei-rong"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" カスタムオプションの内容")], -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "cascaderノードの内容をカスタマイズすることができます。", -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "scoped slot"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("によって、cascaderの内容をカスタマイズすることができます。スコープ内の "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "node"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" と "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "data"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" にアクセスすることができます。")])], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-cascader :options=\"options\">\n  <template slot-scope=\"{ node, data }\">\n    <span>{{ data.label }}</span>\n    <span v-if=\"!node.isLeaf\"> ({{ data.children.length }}) </span>\n  </template>\n</el-cascader>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'guide',\n          label: 'Guide',\n          children: [{\n            value: 'disciplines',\n            label: 'Disciplines',\n            children: [{\n              value: 'consistency',\n              label: 'Consistency'\n            }, {\n              value: 'feedback',\n              label: 'Feedback'\n            }, {\n              value: 'efficiency',\n              label: 'Efficiency'\n            }, {\n              value: 'controllability',\n              label: 'Controllability'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'side nav',\n              label: 'Side Navigation'\n            }, {\n              value: 'top nav',\n              label: 'Top Navigation'\n            }]\n          }]\n        }, {\n          value: 'component',\n          label: 'Component',\n          children: [{\n            value: 'basic',\n            label: 'Basic',\n            children: [{\n              value: 'layout',\n              label: 'Layout'\n            }, {\n              value: 'color',\n              label: 'Color'\n            }, {\n              value: 'typography',\n              label: 'Typography'\n            }, {\n              value: 'icon',\n              label: 'Icon'\n            }, {\n              value: 'button',\n              label: 'Button'\n            }]\n          }, {\n            value: 'form',\n            label: 'Form',\n            children: [{\n              value: 'radio',\n              label: 'Radio'\n            }, {\n              value: 'checkbox',\n              label: 'Checkbox'\n            }, {\n              value: 'input',\n              label: 'Input'\n            }, {\n              value: 'input-number',\n              label: 'InputNumber'\n            }, {\n              value: 'select',\n              label: 'Select'\n            }, {\n              value: 'cascader',\n              label: 'Cascader'\n            }, {\n              value: 'switch',\n              label: 'Switch'\n            }, {\n              value: 'slider',\n              label: 'Slider'\n            }, {\n              value: 'time-picker',\n              label: 'TimePicker'\n            }, {\n              value: 'date-picker',\n              label: 'DatePicker'\n            }, {\n              value: 'datetime-picker',\n              label: 'DateTimePicker'\n            }, {\n              value: 'upload',\n              label: 'Upload'\n            }, {\n              value: 'rate',\n              label: 'Rate'\n            }, {\n              value: 'form',\n              label: 'Form'\n            }]\n          }, {\n            value: 'data',\n            label: 'Data',\n            children: [{\n              value: 'table',\n              label: 'Table'\n            }, {\n              value: 'tag',\n              label: 'Tag'\n            }, {\n              value: 'progress',\n              label: 'Progress'\n            }, {\n              value: 'tree',\n              label: 'Tree'\n            }, {\n              value: 'pagination',\n              label: 'Pagination'\n            }, {\n              value: 'badge',\n              label: 'Badge'\n            }]\n          }, {\n            value: 'notice',\n            label: 'Notice',\n            children: [{\n              value: 'alert',\n              label: 'Alert'\n            }, {\n              value: 'loading',\n              label: 'Loading'\n            }, {\n              value: 'message',\n              label: 'Message'\n            }, {\n              value: 'message-box',\n              label: 'MessageBox'\n            }, {\n              value: 'notification',\n              label: 'Notification'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'menu',\n              label: 'NavMenu'\n            }, {\n              value: 'tabs',\n              label: 'Tabs'\n            }, {\n              value: 'breadcrumb',\n              label: 'Breadcrumb'\n            }, {\n              value: 'dropdown',\n              label: 'Dropdown'\n            }, {\n              value: 'steps',\n              label: 'Steps'\n            }]\n          }, {\n            value: 'others',\n            label: 'Others',\n            children: [{\n              value: 'dialog',\n              label: 'Dialog'\n            }, {\n              value: 'tooltip',\n              label: 'Tooltip'\n            }, {\n              value: 'popover',\n              label: 'Popover'\n            }, {\n              value: 'card',\n              label: 'Card'\n            }, {\n              value: 'carousel',\n              label: 'Carousel'\n            }, {\n              value: 'collapse',\n              label: 'Collapse'\n            }]\n          }]\n        }, {\n          value: 'resource',\n          label: 'Resource',\n          children: [{\n            value: 'axure',\n            label: 'Axure Components'\n          }, {\n            value: 'sketch',\n            label: 'Sketch Templates'\n          }, {\n            value: 'docs',\n            label: 'Design Documentation'\n          }]\n        }]\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        options: [\n          {\n            value: 'guide',\n            label: 'Guide',\n            children: [\n              {\n                value: 'disciplines',\n                label: 'Disciplines',\n                children: [\n                  {\n                    value: 'consistency',\n                    label: 'Consistency',\n                  },\n                  {\n                    value: 'feedback',\n                    label: 'Feedback',\n                  },\n                  {\n                    value: 'efficiency',\n                    label: 'Efficiency',\n                  },\n                  {\n                    value: 'controllability',\n                    label: 'Controllability',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'side nav',\n                    label: 'Side Navigation',\n                  },\n                  {\n                    value: 'top nav',\n                    label: 'Top Navigation',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'component',\n            label: 'Component',\n            children: [\n              {\n                value: 'basic',\n                label: 'Basic',\n                children: [\n                  {\n                    value: 'layout',\n                    label: 'Layout',\n                  },\n                  {\n                    value: 'color',\n                    label: 'Color',\n                  },\n                  {\n                    value: 'typography',\n                    label: 'Typography',\n                  },\n                  {\n                    value: 'icon',\n                    label: 'Icon',\n                  },\n                  {\n                    value: 'button',\n                    label: 'Button',\n                  },\n                ],\n              },\n              {\n                value: 'form',\n                label: 'Form',\n                children: [\n                  {\n                    value: 'radio',\n                    label: 'Radio',\n                  },\n                  {\n                    value: 'checkbox',\n                    label: 'Checkbox',\n                  },\n                  {\n                    value: 'input',\n                    label: 'Input',\n                  },\n                  {\n                    value: 'input-number',\n                    label: 'InputNumber',\n                  },\n                  {\n                    value: 'select',\n                    label: 'Select',\n                  },\n                  {\n                    value: 'cascader',\n                    label: 'Cascader',\n                  },\n                  {\n                    value: 'switch',\n                    label: 'Switch',\n                  },\n                  {\n                    value: 'slider',\n                    label: 'Slider',\n                  },\n                  {\n                    value: 'time-picker',\n                    label: 'TimePicker',\n                  },\n                  {\n                    value: 'date-picker',\n                    label: 'DatePicker',\n                  },\n                  {\n                    value: 'datetime-picker',\n                    label: 'DateTimePicker',\n                  },\n                  {\n                    value: 'upload',\n                    label: 'Upload',\n                  },\n                  {\n                    value: 'rate',\n                    label: 'Rate',\n                  },\n                  {\n                    value: 'form',\n                    label: 'Form',\n                  },\n                ],\n              },\n              {\n                value: 'data',\n                label: 'Data',\n                children: [\n                  {\n                    value: 'table',\n                    label: 'Table',\n                  },\n                  {\n                    value: 'tag',\n                    label: 'Tag',\n                  },\n                  {\n                    value: 'progress',\n                    label: 'Progress',\n                  },\n                  {\n                    value: 'tree',\n                    label: 'Tree',\n                  },\n                  {\n                    value: 'pagination',\n                    label: 'Pagination',\n                  },\n                  {\n                    value: 'badge',\n                    label: 'Badge',\n                  },\n                ],\n              },\n              {\n                value: 'notice',\n                label: 'Notice',\n                children: [\n                  {\n                    value: 'alert',\n                    label: 'Alert',\n                  },\n                  {\n                    value: 'loading',\n                    label: 'Loading',\n                  },\n                  {\n                    value: 'message',\n                    label: 'Message',\n                  },\n                  {\n                    value: 'message-box',\n                    label: 'MessageBox',\n                  },\n                  {\n                    value: 'notification',\n                    label: 'Notification',\n                  },\n                ],\n              },\n              {\n                value: 'navigation',\n                label: 'Navigation',\n                children: [\n                  {\n                    value: 'menu',\n                    label: 'NavMenu',\n                  },\n                  {\n                    value: 'tabs',\n                    label: 'Tabs',\n                  },\n                  {\n                    value: 'breadcrumb',\n                    label: 'Breadcrumb',\n                  },\n                  {\n                    value: 'dropdown',\n                    label: 'Dropdown',\n                  },\n                  {\n                    value: 'steps',\n                    label: 'Steps',\n                  },\n                ],\n              },\n              {\n                value: 'others',\n                label: 'Others',\n                children: [\n                  {\n                    value: 'dialog',\n                    label: 'Dialog',\n                  },\n                  {\n                    value: 'tooltip',\n                    label: 'Tooltip',\n                  },\n                  {\n                    value: 'popover',\n                    label: 'Popover',\n                  },\n                  {\n                    value: 'card',\n                    label: 'Card',\n                  },\n                  {\n                    value: 'carousel',\n                    label: 'Carousel',\n                  },\n                  {\n                    value: 'collapse',\n                    label: 'Collapse',\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            value: 'resource',\n            label: 'Resource',\n            children: [\n              {\n                value: 'axure',\n                label: 'Axure Components',\n              },\n              {\n                value: 'sketch',\n                label: 'Sketch Templates',\n              },\n              {\n                value: 'docs',\n                label: 'Design Documentation',\n              },\n            ],\n          },\n        ],\n      });\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "cascaderpaneru"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#cascaderpaneru"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" cascaderパネル")], -1);

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "CascaderPanel"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" は "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Cascader"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" のコアコンポーネントであり、単一選択、複数選択、動的読み込みなど様々な機能を持っています。")], -1);

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-cascader"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" と同様に、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "options"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" で代替オプションを設定したり、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "props"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" で他の機能を有効にしたりすることができます。")])], -1);

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-cascader-panel :options=\"options\"></el-cascader-panel>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'guide',\n          label: 'Guide',\n          children: [{\n            value: 'disciplines',\n            label: 'Disciplines',\n            children: [{\n              value: 'consistency',\n              label: 'Consistency'\n            }, {\n              value: 'feedback',\n              label: 'Feedback'\n            }, {\n              value: 'efficiency',\n              label: 'Efficiency'\n            }, {\n              value: 'controllability',\n              label: 'Controllability'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'side nav',\n              label: 'Side Navigation'\n            }, {\n              value: 'top nav',\n              label: 'Top Navigation'\n            }]\n          }]\n        }, {\n          value: 'component',\n          label: 'Component',\n          children: [{\n            value: 'basic',\n            label: 'Basic',\n            children: [{\n              value: 'layout',\n              label: 'Layout'\n            }, {\n              value: 'color',\n              label: 'Color'\n            }, {\n              value: 'typography',\n              label: 'Typography'\n            }, {\n              value: 'icon',\n              label: 'Icon'\n            }, {\n              value: 'button',\n              label: 'Button'\n            }]\n          }, {\n            value: 'form',\n            label: 'Form',\n            children: [{\n              value: 'radio',\n              label: 'Radio'\n            }, {\n              value: 'checkbox',\n              label: 'Checkbox'\n            }, {\n              value: 'input',\n              label: 'Input'\n            }, {\n              value: 'input-number',\n              label: 'InputNumber'\n            }, {\n              value: 'select',\n              label: 'Select'\n            }, {\n              value: 'cascader',\n              label: 'Cascader'\n            }, {\n              value: 'switch',\n              label: 'Switch'\n            }, {\n              value: 'slider',\n              label: 'Slider'\n            }, {\n              value: 'time-picker',\n              label: 'TimePicker'\n            }, {\n              value: 'date-picker',\n              label: 'DatePicker'\n            }, {\n              value: 'datetime-picker',\n              label: 'DateTimePicker'\n            }, {\n              value: 'upload',\n              label: 'Upload'\n            }, {\n              value: 'rate',\n              label: 'Rate'\n            }, {\n              value: 'form',\n              label: 'Form'\n            }]\n          }, {\n            value: 'data',\n            label: 'Data',\n            children: [{\n              value: 'table',\n              label: 'Table'\n            }, {\n              value: 'tag',\n              label: 'Tag'\n            }, {\n              value: 'progress',\n              label: 'Progress'\n            }, {\n              value: 'tree',\n              label: 'Tree'\n            }, {\n              value: 'pagination',\n              label: 'Pagination'\n            }, {\n              value: 'badge',\n              label: 'Badge'\n            }]\n          }, {\n            value: 'notice',\n            label: 'Notice',\n            children: [{\n              value: 'alert',\n              label: 'Alert'\n            }, {\n              value: 'loading',\n              label: 'Loading'\n            }, {\n              value: 'message',\n              label: 'Message'\n            }, {\n              value: 'message-box',\n              label: 'MessageBox'\n            }, {\n              value: 'notification',\n              label: 'Notification'\n            }]\n          }, {\n            value: 'navigation',\n            label: 'Navigation',\n            children: [{\n              value: 'menu',\n              label: 'NavMenu'\n            }, {\n              value: 'tabs',\n              label: 'Tabs'\n            }, {\n              value: 'breadcrumb',\n              label: 'Breadcrumb'\n            }, {\n              value: 'dropdown',\n              label: 'Dropdown'\n            }, {\n              value: 'steps',\n              label: 'Steps'\n            }]\n          }, {\n            value: 'others',\n            label: 'Others',\n            children: [{\n              value: 'dialog',\n              label: 'Dialog'\n            }, {\n              value: 'tooltip',\n              label: 'Tooltip'\n            }, {\n              value: 'popover',\n              label: 'Popover'\n            }, {\n              value: 'card',\n              label: 'Card'\n            }, {\n              value: 'carousel',\n              label: 'Carousel'\n            }, {\n              value: 'collapse',\n              label: 'Collapse'\n            }]\n          }]\n        }, {\n          value: 'resource',\n          label: 'Resource',\n          children: [{\n            value: 'axure',\n            label: 'Axure Components'\n          }, {\n            value: 'sketch',\n            label: 'Sketch Templates'\n          }, {\n            value: 'docs',\n            label: 'Design Documentation'\n          }]\n        }]\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\nimport { defineComponent, reactive, toRefs } from 'vue';\n\nexport default defineComponent({\n  setup() {\n    const state = reactive({\n      options: [\n        {\n          value: 'guide',\n          label: 'Guide',\n          children: [\n            {\n              value: 'disciplines',\n              label: 'Disciplines',\n              children: [\n                {\n                  value: 'consistency',\n                  label: 'Consistency',\n                },\n                {\n                  value: 'feedback',\n                  label: 'Feedback',\n                },\n                {\n                  value: 'efficiency',\n                  label: 'Efficiency',\n                },\n                {\n                  value: 'controllability',\n                  label: 'Controllability',\n                },\n              ],\n            },\n            {\n              value: 'navigation',\n              label: 'Navigation',\n              children: [\n                {\n                  value: 'side nav',\n                  label: 'Side Navigation',\n                },\n                {\n                  value: 'top nav',\n                  label: 'Top Navigation',\n                },\n              ],\n            },\n          ],\n        },\n        {\n          value: 'component',\n          label: 'Component',\n          children: [\n            {\n              value: 'basic',\n              label: 'Basic',\n              children: [\n                {\n                  value: 'layout',\n                  label: 'Layout',\n                },\n                {\n                  value: 'color',\n                  label: 'Color',\n                },\n                {\n                  value: 'typography',\n                  label: 'Typography',\n                },\n                {\n                  value: 'icon',\n                  label: 'Icon',\n                },\n                {\n                  value: 'button',\n                  label: 'Button',\n                },\n              ],\n            },\n            {\n              value: 'form',\n              label: 'Form',\n              children: [\n                {\n                  value: 'radio',\n                  label: 'Radio',\n                },\n                {\n                  value: 'checkbox',\n                  label: 'Checkbox',\n                },\n                {\n                  value: 'input',\n                  label: 'Input',\n                },\n                {\n                  value: 'input-number',\n                  label: 'InputNumber',\n                },\n                {\n                  value: 'select',\n                  label: 'Select',\n                },\n                {\n                  value: 'cascader',\n                  label: 'Cascader',\n                },\n                {\n                  value: 'switch',\n                  label: 'Switch',\n                },\n                {\n                  value: 'slider',\n                  label: 'Slider',\n                },\n                {\n                  value: 'time-picker',\n                  label: 'TimePicker',\n                },\n                {\n                  value: 'date-picker',\n                  label: 'DatePicker',\n                },\n                {\n                  value: 'datetime-picker',\n                  label: 'DateTimePicker',\n                },\n                {\n                  value: 'upload',\n                  label: 'Upload',\n                },\n                {\n                  value: 'rate',\n                  label: 'Rate',\n                },\n                {\n                  value: 'form',\n                  label: 'Form',\n                },\n              ],\n            },\n            {\n              value: 'data',\n              label: 'Data',\n              children: [\n                {\n                  value: 'table',\n                  label: 'Table',\n                },\n                {\n                  value: 'tag',\n                  label: 'Tag',\n                },\n                {\n                  value: 'progress',\n                  label: 'Progress',\n                },\n                {\n                  value: 'tree',\n                  label: 'Tree',\n                },\n                {\n                  value: 'pagination',\n                  label: 'Pagination',\n                },\n                {\n                  value: 'badge',\n                  label: 'Badge',\n                },\n              ],\n            },\n            {\n              value: 'notice',\n              label: 'Notice',\n              children: [\n                {\n                  value: 'alert',\n                  label: 'Alert',\n                },\n                {\n                  value: 'loading',\n                  label: 'Loading',\n                },\n                {\n                  value: 'message',\n                  label: 'Message',\n                },\n                {\n                  value: 'message-box',\n                  label: 'MessageBox',\n                },\n                {\n                  value: 'notification',\n                  label: 'Notification',\n                },\n              ],\n            },\n            {\n              value: 'navigation',\n              label: 'Navigation',\n              children: [\n                {\n                  value: 'menu',\n                  label: 'NavMenu',\n                },\n                {\n                  value: 'tabs',\n                  label: 'Tabs',\n                },\n                {\n                  value: 'breadcrumb',\n                  label: 'Breadcrumb',\n                },\n                {\n                  value: 'dropdown',\n                  label: 'Dropdown',\n                },\n                {\n                  value: 'steps',\n                  label: 'Steps',\n                },\n              ],\n            },\n            {\n              value: 'others',\n              label: 'Others',\n              children: [\n                {\n                  value: 'dialog',\n                  label: 'Dialog',\n                },\n                {\n                  value: 'tooltip',\n                  label: 'Tooltip',\n                },\n                {\n                  value: 'popover',\n                  label: 'Popover',\n                },\n                {\n                  value: 'card',\n                  label: 'Card',\n                },\n                {\n                  value: 'carousel',\n                  label: 'Carousel',\n                },\n                {\n                  value: 'collapse',\n                  label: 'Collapse',\n                },\n              ],\n            },\n          ],\n        },\n        {\n          value: 'resource',\n          label: 'Resource',\n          children: [\n            {\n              value: 'axure',\n              label: 'Axure Components',\n            },\n            {\n              value: 'sketch',\n              label: 'Sketch Templates',\n            },\n            {\n              value: 'docs',\n              label: 'Design Documentation',\n            },\n          ],\n        },\n      ],\n    });\n    return {\n      ...toRefs(state),\n    };\n  },\n});\n\n</setup>\n-->\n")], -1);

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h3 id=\"cascader-shu-xing\"><a class=\"header-anchor\" href=\"#cascader-shu-xing\">¶</a> Cascader 属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>バインディング値</td><td>-</td><td>—</td><td>—</td></tr><tr><td>options</td><td>オプションのデータ、<code>Props</code>によって <code>value</code> と <code>label</code> のキーをカスタマイズすることができます。</td><td>array</td><td>—</td><td>—</td></tr><tr><td>props</td><td>構成オプションについては、次の表を参照してください。</td><td>object</td><td>—</td><td>—</td></tr><tr><td>size</td><td>インプットサイズ</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>placeholder</td><td>インプットプレースホルダ</td><td>string</td><td>—</td><td>Select</td></tr><tr><td>disabled</td><td>cascaderが無効化されているかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>clearable</td><td>選択値をクリアできるかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-all-levels</td><td>選択された値のすべてのレベルを入力に表示するかどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>collapse-tags</td><td>複数選択モードでタグを折りたたむかどうか</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>separator</td><td>オプションラベルセパレーター</td><td>string</td><td>—</td><td>&#39; / &#39;</td></tr><tr><td>filterable</td><td>オプションを検索できるかどうか</td><td>boolean</td><td>—</td><td>—</td></tr><tr><td>filter-method</td><td>検索ロジックをカスタマイズ、最初のパラメータは <code>node</code>、2番目のパラメータは <code>keyword</code> で、ヒットしたかどうかを示すブール値を返す必要があります。</td><td>function(node, keyword)</td><td>-</td><td>-</td></tr><tr><td>debounce</td><td>フィルタキーワードを入力したときのデバウンスの遅延時間をミリ秒単位で指定します。</td><td>number</td><td>—</td><td>300</td></tr><tr><td>before-filter</td><td>フック関数を用いてフィルタリングを行う場合、フィルタリングしたい値をパラメータとしてフィルタリングを行う前に <code>false</code> を返します。<code>false</code> が返されるか、<code>Promise</code> が返され、拒否された場合、フィルタリングは中止されます。</td><td>function(value)</td><td>—</td><td>—</td></tr><tr><td>popper-class</td><td>cascaderロップダウンのカスタムクラス名</td><td>string</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"cascader-ibento\"><a class=\"header-anchor\" href=\"#cascader-ibento\">¶</a> Cascader イベント</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>バインディング値が変更された場合にトリガされます。</td><td>value</td></tr><tr><td>expand-change</td><td>拡張オプションが変更された場合のトリガー</td><td>an array of the expanding node&#39;s parent nodes</td></tr><tr><td>blur</td><td>cascaderがぼやけたときにトリガー</td><td>(event: Event)</td></tr><tr><td>focus</td><td>Cascaderがフォーカスしたときにトリガー</td><td>(event: Event)</td></tr><tr><td>visible-change</td><td>ドロップダウンが表示/非表示になったときにトリガされます。</td><td>true when it appears, and false otherwise</td></tr><tr><td>remove-tag</td><td>複数選択モードでタグを削除した場合のトリガー</td><td>the value of the tag which is removed</td></tr></tbody></table><h3 id=\"cascader-mesotudo\"><a class=\"header-anchor\" href=\"#cascader-mesotudo\">¶</a> Cascader メソッド</h3><table><thead><tr><th>Method Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>getCheckedNodes</td><td>現在選択されているノードの配列を取得します</td><td>(leafOnly) whether only return the leaf checked nodes, default is <code>false</code></td></tr></tbody></table><h3 id=\"cascader-surotuto\"><a class=\"header-anchor\" href=\"#cascader-surotuto\">¶</a> Cascader スロット</h3><table><thead><tr><th>Slot Name</th><th>Description</th></tr></thead><tbody><tr><td>-</td><td>cascaderノードのカスタムコンテンツ、パラメータは{ node, data }で、それぞれ現在のノードオブジェクトとノードデータです。</td></tr><tr><td>empty</td><td>マッチするオプションがない場合のコンテンツ</td></tr></tbody></table><h3 id=\"cascaderpanelno-shu-xing\"><a class=\"header-anchor\" href=\"#cascaderpanelno-shu-xing\">¶</a> CascaderPanelの属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>バインディング値</td><td>-</td><td>—</td><td>—</td></tr><tr><td>options</td><td>オプションのデータは、<code>Props</code>によって <code>value</code> と <code>label</code> のキーをカスタマイズすることができます。</td><td>array</td><td>—</td><td>—</td></tr><tr><td>props</td><td>構成オプションについては、Propsの表を参照してください。</td><td>object</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"cascaderpanel-ibento\"><a class=\"header-anchor\" href=\"#cascaderpanel-ibento\">¶</a> CascaderPanel イベント</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>バインディング値が変更されたときにトリガされます。</td><td>value</td></tr><tr><td>expand-change</td><td>拡張オプションが変更された場合のトリガー</td><td>an array of the expanding node&#39;s parent nodes</td></tr></tbody></table><h3 id=\"cascaderpanel-mesotudo\"><a class=\"header-anchor\" href=\"#cascaderpanel-mesotudo\">¶</a> CascaderPanel メソッド</h3><table><thead><tr><th>Method Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>getCheckedNodes</td><td>現在選択されているノードの配列を取得します</td><td>(leafOnly) whether only return the leaf checked nodes, default is <code>false</code></td></tr><tr><td>clearCheckedNodes</td><td>チェック済みノードをクリア</td><td>-</td></tr></tbody></table><h3 id=\"cascaderpanel-surotuto\"><a class=\"header-anchor\" href=\"#cascaderpanel-surotuto\">¶</a> CascaderPanel スロット</h3><table><thead><tr><th>Slot Name</th><th>Description</th></tr></thead><tbody><tr><td>-</td><td>パラメータは{ node, data }で、それぞれ現在のノードオブジェクトとノードデータです。</td></tr></tbody></table><h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>expandTrigger</td><td>オプション拡大トリガモード</td><td>string</td><td>click / hover</td><td>&#39;click&#39;</td></tr><tr><td>multiple</td><td>複数選択が可能かどうか</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>checkStrictly</td><td>ノードの状態が親子ノードに影響しないかどうかをチェックする</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>emitPath</td><td>チェックしたノードが変更された場合に、ノードのパスの配列を表示するかどうか、falseの場合はノードの値のみを表示します。</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>lazy</td><td>子ノードを動的にロードするかどうか、<code>lazyload</code> 属性と一緒に使用します。</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>lazyLoad</td><td>子ノードデータ読み込みメソッド、メソッドは <code>lazy</code> が真の場合にのみ動作します。</td><td>function(node, resolve)</td><td>-</td><td>-</td></tr><tr><td>value</td><td>ノードオブジェクトのどのキーをノードの値として使用するかを指定します。</td><td>string</td><td>—</td><td>&#39;value&#39;</td></tr><tr><td>label</td><td>ノードオブジェクトのどのキーをノードのラベルとして使用するかを指定します。</td><td>string</td><td>—</td><td>&#39;label&#39;</td></tr><tr><td>children</td><td>ノードオブジェクトのどのキーをノードの子として使用するかを指定します。</td><td>string</td><td>—</td><td>&#39;children&#39;</td></tr><tr><td>disabled</td><td>ノードオブジェクトのどのキーがノードの無効化されたキーとして使用されるかを指定します。</td><td>string</td><td>—</td><td>&#39;disabled&#39;</td></tr><tr><td>leaf</td><td>ノードオブジェクトのどのキーをノードのリーフフィールドとして使用するかを指定します。</td><td>string</td><td>—</td><td>&#39;leaf&#39;</td></tr></tbody></table>", 18);

function cascadervue_type_template_id_7f305fd4_render(_ctx, _cache, $props, $setup, $data, $options) {
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

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", cascadervue_type_template_id_7f305fd4_hoisted_1, [cascadervue_type_template_id_7f305fd4_hoisted_2, cascadervue_type_template_id_7f305fd4_hoisted_3, cascadervue_type_template_id_7f305fd4_hoisted_4, _hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
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
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_15, _hoisted_16, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_17];
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
  }), _hoisted_23, _hoisted_24, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    _: 1
  }), _hoisted_27, _hoisted_28, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_30];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_29];
    }),
    _: 1
  }), _hoisted_31, _hoisted_32, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo7)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_34];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_33];
    }),
    _: 1
  }), _hoisted_35, _hoisted_36, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo8)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_38];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_37];
    }),
    _: 1
  }), _hoisted_39, _hoisted_40, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo9)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_42];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_41];
    }),
    _: 1
  }), _hoisted_43, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/cascader.md?vue&type=template&id=7f305fd4

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/cascader.md?vue&type=script&lang=ts


/* harmony default export */ var cascadervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "クリックすると子オプションが展開される(デフォルト)", -1);

      var _hoisted_3 = {
        class: "block"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "ホバーすると子のオプションが拡張される", -1);

      function render(_ctx, _cache) {
        var _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_cascader, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          options: _ctx.options,
          onChange: _ctx.handleChange
        }, null, 8, ["modelValue", "options", "onChange"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_cascader, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value = $event;
          }),
          options: _ctx.options,
          props: {
            expandTrigger: 'hover'
          },
          onChange: _ctx.handleChange
        }, null, 8, ["modelValue", "options", "onChange"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: [],
            options: [{
              value: 'guide',
              label: 'Guide',
              children: [{
                value: 'disciplines',
                label: 'Disciplines',
                children: [{
                  value: 'consistency',
                  label: 'Consistency'
                }, {
                  value: 'feedback',
                  label: 'Feedback'
                }, {
                  value: 'efficiency',
                  label: 'Efficiency'
                }, {
                  value: 'controllability',
                  label: 'Controllability'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'side nav',
                  label: 'Side Navigation'
                }, {
                  value: 'top nav',
                  label: 'Top Navigation'
                }]
              }]
            }, {
              value: 'component',
              label: 'Component',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout'
                }, {
                  value: 'color',
                  label: 'Color'
                }, {
                  value: 'typography',
                  label: 'Typography'
                }, {
                  value: 'icon',
                  label: 'Icon'
                }, {
                  value: 'button',
                  label: 'Button'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox'
                }, {
                  value: 'input',
                  label: 'Input'
                }, {
                  value: 'input-number',
                  label: 'InputNumber'
                }, {
                  value: 'select',
                  label: 'Select'
                }, {
                  value: 'cascader',
                  label: 'Cascader'
                }, {
                  value: 'switch',
                  label: 'Switch'
                }, {
                  value: 'slider',
                  label: 'Slider'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker'
                }, {
                  value: 'upload',
                  label: 'Upload'
                }, {
                  value: 'rate',
                  label: 'Rate'
                }, {
                  value: 'form',
                  label: 'Form'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table'
                }, {
                  value: 'tag',
                  label: 'Tag'
                }, {
                  value: 'progress',
                  label: 'Progress'
                }, {
                  value: 'tree',
                  label: 'Tree'
                }, {
                  value: 'pagination',
                  label: 'Pagination'
                }, {
                  value: 'badge',
                  label: 'Badge'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert'
                }, {
                  value: 'loading',
                  label: 'Loading'
                }, {
                  value: 'message',
                  label: 'Message'
                }, {
                  value: 'message-box',
                  label: 'MessageBox'
                }, {
                  value: 'notification',
                  label: 'Notification'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu'
                }, {
                  value: 'tabs',
                  label: 'Tabs'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown'
                }, {
                  value: 'steps',
                  label: 'Steps'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip'
                }, {
                  value: 'popover',
                  label: 'Popover'
                }, {
                  value: 'card',
                  label: 'Card'
                }, {
                  value: 'carousel',
                  label: 'Carousel'
                }, {
                  value: 'collapse',
                  label: 'Collapse'
                }]
              }]
            }, {
              value: 'resource',
              label: 'Resource',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'docs',
                label: 'Design Documentation'
              }]
            }]
          };
        },
        methods: {
          handleChange: function handleChange(value) {
            console.log(value);
          }
        }
      };
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
        var _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_cascader, {
          options: _ctx.options
        }, null, 8, ["options"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: 'guide',
              label: 'Guide',
              disabled: true,
              children: [{
                value: 'disciplines',
                label: 'Disciplines',
                children: [{
                  value: 'consistency',
                  label: 'Consistency'
                }, {
                  value: 'feedback',
                  label: 'Feedback'
                }, {
                  value: 'efficiency',
                  label: 'Efficiency'
                }, {
                  value: 'controllability',
                  label: 'Controllability'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'side nav',
                  label: 'Side Navigation'
                }, {
                  value: 'top nav',
                  label: 'Top Navigation'
                }]
              }]
            }, {
              value: 'component',
              label: 'Component',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout'
                }, {
                  value: 'color',
                  label: 'Color'
                }, {
                  value: 'typography',
                  label: 'Typography'
                }, {
                  value: 'icon',
                  label: 'Icon'
                }, {
                  value: 'button',
                  label: 'Button'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox'
                }, {
                  value: 'input',
                  label: 'Input'
                }, {
                  value: 'input-number',
                  label: 'InputNumber'
                }, {
                  value: 'select',
                  label: 'Select'
                }, {
                  value: 'cascader',
                  label: 'Cascader'
                }, {
                  value: 'switch',
                  label: 'Switch'
                }, {
                  value: 'slider',
                  label: 'Slider'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker'
                }, {
                  value: 'upload',
                  label: 'Upload'
                }, {
                  value: 'rate',
                  label: 'Rate'
                }, {
                  value: 'form',
                  label: 'Form'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table'
                }, {
                  value: 'tag',
                  label: 'Tag'
                }, {
                  value: 'progress',
                  label: 'Progress'
                }, {
                  value: 'tree',
                  label: 'Tree'
                }, {
                  value: 'pagination',
                  label: 'Pagination'
                }, {
                  value: 'badge',
                  label: 'Badge'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert'
                }, {
                  value: 'loading',
                  label: 'Loading'
                }, {
                  value: 'message',
                  label: 'Message'
                }, {
                  value: 'message-box',
                  label: 'MessageBox'
                }, {
                  value: 'notification',
                  label: 'Notification'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu'
                }, {
                  value: 'tabs',
                  label: 'Tabs'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown'
                }, {
                  value: 'steps',
                  label: 'Steps'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip'
                }, {
                  value: 'popover',
                  label: 'Popover'
                }, {
                  value: 'card',
                  label: 'Card'
                }, {
                  value: 'carousel',
                  label: 'Carousel'
                }, {
                  value: 'collapse',
                  label: 'Collapse'
                }]
              }]
            }, {
              value: 'resource',
              label: 'Resource',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'docs',
                label: 'Design Documentation'
              }]
            }]
          };
        }
      };
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
        var _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_cascader, {
          options: _ctx.options,
          clearable: ""
        }, null, 8, ["options"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: 'guide',
              label: 'Guide',
              children: [{
                value: 'disciplines',
                label: 'Disciplines',
                children: [{
                  value: 'consistency',
                  label: 'Consistency'
                }, {
                  value: 'feedback',
                  label: 'Feedback'
                }, {
                  value: 'efficiency',
                  label: 'Efficiency'
                }, {
                  value: 'controllability',
                  label: 'Controllability'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'side nav',
                  label: 'Side Navigation'
                }, {
                  value: 'top nav',
                  label: 'Top Navigation'
                }]
              }]
            }, {
              value: 'component',
              label: 'Component',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout'
                }, {
                  value: 'color',
                  label: 'Color'
                }, {
                  value: 'typography',
                  label: 'Typography'
                }, {
                  value: 'icon',
                  label: 'Icon'
                }, {
                  value: 'button',
                  label: 'Button'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox'
                }, {
                  value: 'input',
                  label: 'Input'
                }, {
                  value: 'input-number',
                  label: 'InputNumber'
                }, {
                  value: 'select',
                  label: 'Select'
                }, {
                  value: 'cascader',
                  label: 'Cascader'
                }, {
                  value: 'switch',
                  label: 'Switch'
                }, {
                  value: 'slider',
                  label: 'Slider'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker'
                }, {
                  value: 'upload',
                  label: 'Upload'
                }, {
                  value: 'rate',
                  label: 'Rate'
                }, {
                  value: 'form',
                  label: 'Form'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table'
                }, {
                  value: 'tag',
                  label: 'Tag'
                }, {
                  value: 'progress',
                  label: 'Progress'
                }, {
                  value: 'tree',
                  label: 'Tree'
                }, {
                  value: 'pagination',
                  label: 'Pagination'
                }, {
                  value: 'badge',
                  label: 'Badge'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert'
                }, {
                  value: 'loading',
                  label: 'Loading'
                }, {
                  value: 'message',
                  label: 'Message'
                }, {
                  value: 'message-box',
                  label: 'MessageBox'
                }, {
                  value: 'notification',
                  label: 'Notification'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu'
                }, {
                  value: 'tabs',
                  label: 'Tabs'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown'
                }, {
                  value: 'steps',
                  label: 'Steps'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip'
                }, {
                  value: 'popover',
                  label: 'Popover'
                }, {
                  value: 'card',
                  label: 'Card'
                }, {
                  value: 'carousel',
                  label: 'Carousel'
                }, {
                  value: 'collapse',
                  label: 'Collapse'
                }]
              }]
            }, {
              value: 'resource',
              label: 'Resource',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'docs',
                label: 'Design Documentation'
              }]
            }]
          };
        }
      };
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
        var _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_cascader, {
          options: _ctx.options,
          "show-all-levels": false
        }, null, 8, ["options"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: 'guide',
              label: 'Guide',
              children: [{
                value: 'disciplines',
                label: 'Disciplines',
                children: [{
                  value: 'consistency',
                  label: 'Consistency'
                }, {
                  value: 'feedback',
                  label: 'Feedback'
                }, {
                  value: 'efficiency',
                  label: 'Efficiency'
                }, {
                  value: 'controllability',
                  label: 'Controllability'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'side nav',
                  label: 'Side Navigation'
                }, {
                  value: 'top nav',
                  label: 'Top Navigation'
                }]
              }]
            }, {
              value: 'component',
              label: 'Component',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout'
                }, {
                  value: 'color',
                  label: 'Color'
                }, {
                  value: 'typography',
                  label: 'Typography'
                }, {
                  value: 'icon',
                  label: 'Icon'
                }, {
                  value: 'button',
                  label: 'Button'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox'
                }, {
                  value: 'input',
                  label: 'Input'
                }, {
                  value: 'input-number',
                  label: 'InputNumber'
                }, {
                  value: 'select',
                  label: 'Select'
                }, {
                  value: 'cascader',
                  label: 'Cascader'
                }, {
                  value: 'switch',
                  label: 'Switch'
                }, {
                  value: 'slider',
                  label: 'Slider'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker'
                }, {
                  value: 'upload',
                  label: 'Upload'
                }, {
                  value: 'rate',
                  label: 'Rate'
                }, {
                  value: 'form',
                  label: 'Form'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table'
                }, {
                  value: 'tag',
                  label: 'Tag'
                }, {
                  value: 'progress',
                  label: 'Progress'
                }, {
                  value: 'tree',
                  label: 'Tree'
                }, {
                  value: 'pagination',
                  label: 'Pagination'
                }, {
                  value: 'badge',
                  label: 'Badge'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert'
                }, {
                  value: 'loading',
                  label: 'Loading'
                }, {
                  value: 'message',
                  label: 'Message'
                }, {
                  value: 'message-box',
                  label: 'MessageBox'
                }, {
                  value: 'notification',
                  label: 'Notification'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu'
                }, {
                  value: 'tabs',
                  label: 'Tabs'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown'
                }, {
                  value: 'steps',
                  label: 'Steps'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip'
                }, {
                  value: 'popover',
                  label: 'Popover'
                }, {
                  value: 'card',
                  label: 'Card'
                }, {
                  value: 'carousel',
                  label: 'Carousel'
                }, {
                  value: 'collapse',
                  label: 'Collapse'
                }]
              }]
            }, {
              value: 'resource',
              label: 'Resource',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'docs',
                label: 'Design Documentation'
              }]
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "すべてのタグを表示する（デフォルト)", -1);

      var _hoisted_3 = {
        class: "block"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "タグの折りたたみ", -1);

      function render(_ctx, _cache) {
        var _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_cascader, {
          options: _ctx.options,
          props: _ctx.props,
          clearable: ""
        }, null, 8, ["options", "props"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_cascader, {
          options: _ctx.options,
          props: _ctx.props,
          "collapse-tags": "",
          clearable: ""
        }, null, 8, ["options", "props"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            props: {
              multiple: true
            },
            options: [{
              value: 1,
              label: 'Asia',
              children: [{
                value: 2,
                label: 'China',
                children: [{
                  value: 3,
                  label: 'Beijing'
                }, {
                  value: 4,
                  label: 'Shanghai'
                }, {
                  value: 5,
                  label: 'Hangzhou'
                }]
              }, {
                value: 6,
                label: 'Japan',
                children: [{
                  value: 7,
                  label: 'Tokyo'
                }, {
                  value: 8,
                  label: 'Osaka'
                }, {
                  value: 9,
                  label: 'Kyoto'
                }]
              }, {
                value: 10,
                label: 'Korea',
                children: [{
                  value: 11,
                  label: 'Seoul'
                }, {
                  value: 12,
                  label: 'Busan'
                }, {
                  value: 13,
                  label: 'Taegu'
                }]
              }]
            }, {
              value: 14,
              label: 'Europe',
              children: [{
                value: 15,
                label: 'France',
                children: [{
                  value: 16,
                  label: 'Paris'
                }, {
                  value: 17,
                  label: 'Marseille'
                }, {
                  value: 18,
                  label: 'Lyon'
                }]
              }, {
                value: 19,
                label: 'UK',
                children: [{
                  value: 20,
                  label: 'London'
                }, {
                  value: 21,
                  label: 'Birmingham'
                }, {
                  value: 22,
                  label: 'Manchester'
                }]
              }]
            }, {
              value: 23,
              label: 'North America',
              children: [{
                value: 24,
                label: 'US',
                children: [{
                  value: 25,
                  label: 'New York'
                }, {
                  value: 26,
                  label: 'Los Angeles'
                }, {
                  value: 27,
                  label: 'Washington'
                }]
              }, {
                value: 28,
                label: 'Canada',
                children: [{
                  value: 29,
                  label: 'Toronto'
                }, {
                  value: 30,
                  label: 'Montreal'
                }, {
                  value: 31,
                  label: 'Ottawa'
                }]
              }]
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "任意のレベルのオプションを選択（単一選択)", -1);

      var _hoisted_3 = {
        class: "block"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "任意のレベルのオプションを選択（複数選択)", -1);

      function render(_ctx, _cache) {
        var _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_cascader, {
          options: _ctx.options,
          props: {
            checkStrictly: true
          },
          clearable: ""
        }, null, 8, ["options"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_cascader, {
          options: _ctx.options,
          props: {
            multiple: true,
            checkStrictly: true
          },
          clearable: ""
        }, null, 8, ["options"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: 'guide',
              label: 'Guide',
              children: [{
                value: 'disciplines',
                label: 'Disciplines',
                children: [{
                  value: 'consistency',
                  label: 'Consistency'
                }, {
                  value: 'feedback',
                  label: 'Feedback'
                }, {
                  value: 'efficiency',
                  label: 'Efficiency'
                }, {
                  value: 'controllability',
                  label: 'Controllability'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'side nav',
                  label: 'Side Navigation'
                }, {
                  value: 'top nav',
                  label: 'Top Navigation'
                }]
              }]
            }, {
              value: 'component',
              label: 'Component',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout'
                }, {
                  value: 'color',
                  label: 'Color'
                }, {
                  value: 'typography',
                  label: 'Typography'
                }, {
                  value: 'icon',
                  label: 'Icon'
                }, {
                  value: 'button',
                  label: 'Button'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox'
                }, {
                  value: 'input',
                  label: 'Input'
                }, {
                  value: 'input-number',
                  label: 'InputNumber'
                }, {
                  value: 'select',
                  label: 'Select'
                }, {
                  value: 'cascader',
                  label: 'Cascader'
                }, {
                  value: 'switch',
                  label: 'Switch'
                }, {
                  value: 'slider',
                  label: 'Slider'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker'
                }, {
                  value: 'upload',
                  label: 'Upload'
                }, {
                  value: 'rate',
                  label: 'Rate'
                }, {
                  value: 'form',
                  label: 'Form'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table'
                }, {
                  value: 'tag',
                  label: 'Tag'
                }, {
                  value: 'progress',
                  label: 'Progress'
                }, {
                  value: 'tree',
                  label: 'Tree'
                }, {
                  value: 'pagination',
                  label: 'Pagination'
                }, {
                  value: 'badge',
                  label: 'Badge'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert'
                }, {
                  value: 'loading',
                  label: 'Loading'
                }, {
                  value: 'message',
                  label: 'Message'
                }, {
                  value: 'message-box',
                  label: 'MessageBox'
                }, {
                  value: 'notification',
                  label: 'Notification'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu'
                }, {
                  value: 'tabs',
                  label: 'Tabs'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown'
                }, {
                  value: 'steps',
                  label: 'Steps'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip'
                }, {
                  value: 'popover',
                  label: 'Popover'
                }, {
                  value: 'card',
                  label: 'Card'
                }, {
                  value: 'carousel',
                  label: 'Carousel'
                }, {
                  value: 'collapse',
                  label: 'Collapse'
                }]
              }]
            }, {
              value: 'resource',
              label: 'Resource',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'docs',
                label: 'Design Documentation'
              }]
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_cascader, {
          props: _ctx.props
        }, null, 8, ["props"])]);
      }

      var id = 0;
      var democomponentExport = {
        data: function data() {
          return {
            props: {
              lazy: true,
              lazyLoad: function lazyLoad(node, resolve) {
                var level = node.level;
                setTimeout(function () {
                  var nodes = Array.from({
                    length: level + 1
                  }).map(function (item) {
                    return {
                      value: ++id,
                      label: "Option - " + id,
                      leaf: level >= 2
                    };
                  }); // Invoke `resolve` callback to return the child nodes data and indicate the loading is finished.

                  resolve(nodes);
                }, 1000);
              }
            }
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo7": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Filterable (Single selection)", -1);

      var _hoisted_3 = {
        class: "block"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Filterable (Multiple selection)", -1);

      function render(_ctx, _cache) {
        var _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_cascader, {
          placeholder: "Try searchingL Guide",
          options: _ctx.options,
          filterable: ""
        }, null, 8, ["options"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_cascader, {
          placeholder: "Try searchingL Guide",
          options: _ctx.options,
          props: {
            multiple: true
          },
          filterable: ""
        }, null, 8, ["options"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: 'guide',
              label: 'Guide',
              children: [{
                value: 'disciplines',
                label: 'Disciplines',
                children: [{
                  value: 'consistency',
                  label: 'Consistency'
                }, {
                  value: 'feedback',
                  label: 'Feedback'
                }, {
                  value: 'efficiency',
                  label: 'Efficiency'
                }, {
                  value: 'controllability',
                  label: 'Controllability'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'side nav',
                  label: 'Side Navigation'
                }, {
                  value: 'top nav',
                  label: 'Top Navigation'
                }]
              }]
            }, {
              value: 'component',
              label: 'Component',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout'
                }, {
                  value: 'color',
                  label: 'Color'
                }, {
                  value: 'typography',
                  label: 'Typography'
                }, {
                  value: 'icon',
                  label: 'Icon'
                }, {
                  value: 'button',
                  label: 'Button'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox'
                }, {
                  value: 'input',
                  label: 'Input'
                }, {
                  value: 'input-number',
                  label: 'InputNumber'
                }, {
                  value: 'select',
                  label: 'Select'
                }, {
                  value: 'cascader',
                  label: 'Cascader'
                }, {
                  value: 'switch',
                  label: 'Switch'
                }, {
                  value: 'slider',
                  label: 'Slider'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker'
                }, {
                  value: 'upload',
                  label: 'Upload'
                }, {
                  value: 'rate',
                  label: 'Rate'
                }, {
                  value: 'form',
                  label: 'Form'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table'
                }, {
                  value: 'tag',
                  label: 'Tag'
                }, {
                  value: 'progress',
                  label: 'Progress'
                }, {
                  value: 'tree',
                  label: 'Tree'
                }, {
                  value: 'pagination',
                  label: 'Pagination'
                }, {
                  value: 'badge',
                  label: 'Badge'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert'
                }, {
                  value: 'loading',
                  label: 'Loading'
                }, {
                  value: 'message',
                  label: 'Message'
                }, {
                  value: 'message-box',
                  label: 'MessageBox'
                }, {
                  value: 'notification',
                  label: 'Notification'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu'
                }, {
                  value: 'tabs',
                  label: 'Tabs'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown'
                }, {
                  value: 'steps',
                  label: 'Steps'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip'
                }, {
                  value: 'popover',
                  label: 'Popover'
                }, {
                  value: 'card',
                  label: 'Card'
                }, {
                  value: 'carousel',
                  label: 'Carousel'
                }, {
                  value: 'collapse',
                  label: 'Collapse'
                }]
              }]
            }, {
              value: 'resource',
              label: 'Resource',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'docs',
                label: 'Design Documentation'
              }]
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo8": function () {
      var _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _createCommentVNode = vue_esm_browser_prod["l" /* createCommentVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */];
      var _hoisted_1 = {
        "slot-scope": "{ node, data }"
      };
      var _hoisted_2 = {
        key: 0
      };

      function render(_ctx, _cache) {
        var _component_el_cascader = _resolveComponent("el-cascader");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_cascader, {
          options: _ctx.options
        }, {
          default: _withCtx(function () {
            return [_createVNode("template", _hoisted_1, [_createVNode("span", null, _toDisplayString(_ctx.data.label), 1), !_ctx.node.isLeaf ? (_openBlock(), _createBlock("span", _hoisted_2, " (" + _toDisplayString(_ctx.data.children.length) + ") ", 1)) : _createCommentVNode("", true)])];
          }),
          _: 1
        }, 8, ["options"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: 'guide',
              label: 'Guide',
              children: [{
                value: 'disciplines',
                label: 'Disciplines',
                children: [{
                  value: 'consistency',
                  label: 'Consistency'
                }, {
                  value: 'feedback',
                  label: 'Feedback'
                }, {
                  value: 'efficiency',
                  label: 'Efficiency'
                }, {
                  value: 'controllability',
                  label: 'Controllability'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'side nav',
                  label: 'Side Navigation'
                }, {
                  value: 'top nav',
                  label: 'Top Navigation'
                }]
              }]
            }, {
              value: 'component',
              label: 'Component',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout'
                }, {
                  value: 'color',
                  label: 'Color'
                }, {
                  value: 'typography',
                  label: 'Typography'
                }, {
                  value: 'icon',
                  label: 'Icon'
                }, {
                  value: 'button',
                  label: 'Button'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox'
                }, {
                  value: 'input',
                  label: 'Input'
                }, {
                  value: 'input-number',
                  label: 'InputNumber'
                }, {
                  value: 'select',
                  label: 'Select'
                }, {
                  value: 'cascader',
                  label: 'Cascader'
                }, {
                  value: 'switch',
                  label: 'Switch'
                }, {
                  value: 'slider',
                  label: 'Slider'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker'
                }, {
                  value: 'upload',
                  label: 'Upload'
                }, {
                  value: 'rate',
                  label: 'Rate'
                }, {
                  value: 'form',
                  label: 'Form'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table'
                }, {
                  value: 'tag',
                  label: 'Tag'
                }, {
                  value: 'progress',
                  label: 'Progress'
                }, {
                  value: 'tree',
                  label: 'Tree'
                }, {
                  value: 'pagination',
                  label: 'Pagination'
                }, {
                  value: 'badge',
                  label: 'Badge'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert'
                }, {
                  value: 'loading',
                  label: 'Loading'
                }, {
                  value: 'message',
                  label: 'Message'
                }, {
                  value: 'message-box',
                  label: 'MessageBox'
                }, {
                  value: 'notification',
                  label: 'Notification'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu'
                }, {
                  value: 'tabs',
                  label: 'Tabs'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown'
                }, {
                  value: 'steps',
                  label: 'Steps'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip'
                }, {
                  value: 'popover',
                  label: 'Popover'
                }, {
                  value: 'card',
                  label: 'Card'
                }, {
                  value: 'carousel',
                  label: 'Carousel'
                }, {
                  value: 'collapse',
                  label: 'Collapse'
                }]
              }]
            }, {
              value: 'resource',
              label: 'Resource',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'docs',
                label: 'Design Documentation'
              }]
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo9": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_cascader_panel = _resolveComponent("el-cascader-panel");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_cascader_panel, {
          options: _ctx.options
        }, null, 8, ["options"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options: [{
              value: 'guide',
              label: 'Guide',
              children: [{
                value: 'disciplines',
                label: 'Disciplines',
                children: [{
                  value: 'consistency',
                  label: 'Consistency'
                }, {
                  value: 'feedback',
                  label: 'Feedback'
                }, {
                  value: 'efficiency',
                  label: 'Efficiency'
                }, {
                  value: 'controllability',
                  label: 'Controllability'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'side nav',
                  label: 'Side Navigation'
                }, {
                  value: 'top nav',
                  label: 'Top Navigation'
                }]
              }]
            }, {
              value: 'component',
              label: 'Component',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout'
                }, {
                  value: 'color',
                  label: 'Color'
                }, {
                  value: 'typography',
                  label: 'Typography'
                }, {
                  value: 'icon',
                  label: 'Icon'
                }, {
                  value: 'button',
                  label: 'Button'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox'
                }, {
                  value: 'input',
                  label: 'Input'
                }, {
                  value: 'input-number',
                  label: 'InputNumber'
                }, {
                  value: 'select',
                  label: 'Select'
                }, {
                  value: 'cascader',
                  label: 'Cascader'
                }, {
                  value: 'switch',
                  label: 'Switch'
                }, {
                  value: 'slider',
                  label: 'Slider'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker'
                }, {
                  value: 'upload',
                  label: 'Upload'
                }, {
                  value: 'rate',
                  label: 'Rate'
                }, {
                  value: 'form',
                  label: 'Form'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table'
                }, {
                  value: 'tag',
                  label: 'Tag'
                }, {
                  value: 'progress',
                  label: 'Progress'
                }, {
                  value: 'tree',
                  label: 'Tree'
                }, {
                  value: 'pagination',
                  label: 'Pagination'
                }, {
                  value: 'badge',
                  label: 'Badge'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert'
                }, {
                  value: 'loading',
                  label: 'Loading'
                }, {
                  value: 'message',
                  label: 'Message'
                }, {
                  value: 'message-box',
                  label: 'MessageBox'
                }, {
                  value: 'notification',
                  label: 'Notification'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu'
                }, {
                  value: 'tabs',
                  label: 'Tabs'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown'
                }, {
                  value: 'steps',
                  label: 'Steps'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip'
                }, {
                  value: 'popover',
                  label: 'Popover'
                }, {
                  value: 'card',
                  label: 'Card'
                }, {
                  value: 'carousel',
                  label: 'Carousel'
                }, {
                  value: 'collapse',
                  label: 'Collapse'
                }]
              }]
            }, {
              value: 'resource',
              label: 'Resource',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'docs',
                label: 'Design Documentation'
              }]
            }]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/cascader.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/cascader.md



cascadervue_type_script_lang_ts.render = cascadervue_type_template_id_7f305fd4_render

/* harmony default export */ var cascader = __webpack_exports__["default"] = (cascadervue_type_script_lang_ts);

/***/ })

}]);