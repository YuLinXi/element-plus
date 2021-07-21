(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[155],{

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/avatar.md?vue&type=template&id=1c617944

var avatarvue_type_template_id_1c617944_hoisted_1 = {
  class: "content element-doc"
};

var avatarvue_type_template_id_1c617944_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h2", {
  id: "avatar-avatar"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#avatar-avatar"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Avatar avatar")], -1);

var avatarvue_type_template_id_1c617944_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Avatars can be used to represent people or objects. It supports images, Icons, or characters. Les avatars peuvent être utilisés pour représenter des personnes ou des objets. Les images, icônes et les caractères sont supportés.", -1);

var avatarvue_type_template_id_1c617944_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "basic"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#basic"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Basic")], -1);

var avatarvue_type_template_id_1c617944_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("utilisez les prop "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "shape"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" et"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, " size"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" pour définir la forme et la taille de l'avatar")], -1);

var avatarvue_type_template_id_1c617944_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-row class=\"demo-avatar demo-basic\">\n    <el-col :span=\"12\">\n      <div class=\"sub-title\">cercle</div>\n      <div class=\"demo-basic--circle\">\n        <div class=\"block\"><el-avatar :size=\"50\" :src=\"circleUrl\"></el-avatar></div>\n        <div class=\"block\" v-for=\"size in sizeList\" :key=\"size\">\n          <el-avatar :size=\"size\" :src=\"circleUrl\"></el-avatar>\n        </div>\n      </div>\n    </el-col>  \n    <el-col :span=\"12\">\n      <div class=\"sub-title\">carré</div>\n      <div class=\"demo-basic--circle\">\n        <div class=\"block\"><el-avatar shape=\"square\" :size=\"50\" :src=\"squareUrl\"></el-avatar></div>\n        <div class=\"block\" v-for=\"size in sizeList\" :key=\"size\">\n          <el-avatar shape=\"square\" :size=\"size\" :src=\"squareUrl\"></el-avatar>\n        </div>\n      </div>\n    </el-col>\n  </el-row>\n</template>\n<script>\n  export default {\n    data () {\n      return {\n        circleUrl: \"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png\",\n        squareUrl: \"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png\",\n        sizeList: [\"large\", \"medium\", \"small\"]\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',\n        squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',\n        sizeList: ['large', 'medium', 'small'],\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "types"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#types"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Types")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Les images, icônes et les caractères sont supportés.", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"demo-type\">\n    <div>\n      <el-avatar icon=\"el-icon-user-solid\"></el-avatar>\n    </div>\n    <div>\n      <el-avatar src=\"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png\"></el-avatar>\n    </div>\n    <div>\n      <el-avatar> user </el-avatar>\n    </div>\n  </div>\n</template>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "fallback-en-cas-d-erreur-de-chargement-d-image"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#fallback-en-cas-d-erreur-de-chargement-d-image"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" fallback en cas d'erreur de chargement d'image")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "fallback en cas d'erreur de chargement d'image", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"demo-type\">\n    <el-avatar :size=\"60\" src=\"https://empty\" @error=\"errorHandler\">\n      <img src=\"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png\"/>\n      </el-avatar>\n  </div>\n</template>\n<script>\n  export default {\n    methods: {\n      errorHandler() {\n        return true\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n  import { defineComponent } from 'vue'\n  export default defineComponent({\n    setup() {\n      const errorHandler = () => true;\n      return {\n        errorHandler,\n      };\n    },\n  });\n</setup>\n-->\n\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "comment-l-image-s-adapte-a-son-conteneur"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#comment-l-image-s-adapte-a-son-conteneur"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" Comment l'image s'adapte à son conteneur")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Défini comment l'image s'adapte à son conteneur, pareil que "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  href: "https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"
}, "object-fit"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"demo-fit\">\n    <div class=\"block\" v-for=\"fit in fits\" :key=\"fit\">\n        <span class=\"title\">{{ fit }}</span>\n        <el-avatar shape=\"square\" :size=\"100\" :fit=\"fit\" :src=\"url\"></el-avatar>\n    </div>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],\n        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],\n        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n</setup>\n-->\n\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Default</th></tr></thead><tbody><tr><td>icon</td><td>Défini le type de représentation sur Icon, plus d’informations sur le composant Icon</td><td>string</td><td></td><td></td></tr><tr><td>size</td><td>Défini la taille de l&#39;avatar</td><td>number/string</td><td>number / large / medium / small</td><td>large</td></tr><tr><td>shape</td><td>Défini la forme de l&#39;avatar</td><td>string</td><td>circle / square</td><td>circle</td></tr><tr><td>src</td><td>L&#39;adresse de l&#39;image pour un avatar image</td><td>string</td><td></td><td></td></tr><tr><td>srcSet</td><td>Une liste d&#39;un ou plusieurs string séparés par des virgules indiquant un ensemble de sources d&#39;images possibles que le user agent peut utiliser</td><td>string</td><td></td><td></td></tr><tr><td>alt</td><td>Cet attribut définit une description textuelle alternative de l&#39;image</td><td>string</td><td></td><td></td></tr><tr><td>fit</td><td>Défini comment l&#39;image s&#39;adapte à son conteneur</td><td>string</td><td>fill / contain / cover / none / scale-down</td><td>cover</td></tr></tbody></table><h3 id=\"evenements\"><a class=\"header-anchor\" href=\"#evenements\">¶</a> Évènements</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>error</td><td>handler en cas d&#39;erreur de chargement de l&#39;image, renvoie false pour éviter le fallback par défaut</td><td>(e: Event)</td></tr></tbody></table><h3 id=\"slot\"><a class=\"header-anchor\" href=\"#slot\">¶</a> Slot</h3><p>| Slot Name | Description | | default | personnalise le contenu de l&#39;avatar |</p>", 6);

function avatarvue_type_template_id_1c617944_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", avatarvue_type_template_id_1c617944_hoisted_1, [avatarvue_type_template_id_1c617944_hoisted_2, avatarvue_type_template_id_1c617944_hoisted_3, avatarvue_type_template_id_1c617944_hoisted_4, avatarvue_type_template_id_1c617944_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [avatarvue_type_template_id_1c617944_hoisted_6];
    }),
    _: 1
  }), _hoisted_7, _hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
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
  }), _hoisted_13, _hoisted_14, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/avatar.md?vue&type=template&id=1c617944

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/avatar.md?vue&type=script&lang=ts


/* harmony default export */ var avatarvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "sub-title"
      }, "cercle", -1);

      var _hoisted_2 = {
        class: "demo-basic--circle"
      };
      var _hoisted_3 = {
        class: "block"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
        class: "sub-title"
      }, "carré", -1);

      var _hoisted_5 = {
        class: "demo-basic--circle"
      };
      var _hoisted_6 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        var _component_el_avatar = _resolveComponent("el-avatar");

        var _component_el_col = _resolveComponent("el-col");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          class: "demo-avatar demo-basic"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode("div", _hoisted_2, [_createVNode("div", _hoisted_3, [_createVNode(_component_el_avatar, {
                  size: 50,
                  src: _ctx.circleUrl
                }, null, 8, ["src"])]), (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.sizeList, function (size) {
                  return _openBlock(), _createBlock("div", {
                    class: "block",
                    key: size
                  }, [_createVNode(_component_el_avatar, {
                    size: size,
                    src: _ctx.circleUrl
                  }, null, 8, ["size", "src"])]);
                }), 128))])];
              }),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_4, _createVNode("div", _hoisted_5, [_createVNode("div", _hoisted_6, [_createVNode(_component_el_avatar, {
                  shape: "square",
                  size: 50,
                  src: _ctx.squareUrl
                }, null, 8, ["src"])]), (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.sizeList, function (size) {
                  return _openBlock(), _createBlock("div", {
                    class: "block",
                    key: size
                  }, [_createVNode(_component_el_avatar, {
                    shape: "square",
                    size: size,
                    src: _ctx.squareUrl
                  }, null, 8, ["size", "src"])]);
                }), 128))])];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
            sizeList: ["large", "medium", "small"]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
      var _hoisted_1 = {
        class: "demo-type"
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" user ");

      function render(_ctx, _cache) {
        var _component_el_avatar = _resolveComponent("el-avatar");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode("div", null, [_createVNode(_component_el_avatar, {
          icon: "el-icon-user-solid"
        })]), _createVNode("div", null, [_createVNode(_component_el_avatar, {
          src: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        })]), _createVNode("div", null, [_createVNode(_component_el_avatar, null, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        })])])]);
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
      var _hoisted_1 = {
        class: "demo-type"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("img", {
        src: "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_el_avatar = _resolveComponent("el-avatar");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_avatar, {
          size: 60,
          src: "https://empty",
          onError: _ctx.errorHandler
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["onError"])])]);
      }

      var democomponentExport = {
        methods: {
          errorHandler: function errorHandler() {
            return true;
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */];
      var _hoisted_1 = {
        class: "demo-fit"
      };
      var _hoisted_2 = {
        class: "title"
      };

      function render(_ctx, _cache) {
        var _component_el_avatar = _resolveComponent("el-avatar");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.fits, function (fit) {
          return _openBlock(), _createBlock("div", {
            class: "block",
            key: fit
          }, [_createVNode("span", _hoisted_2, _toDisplayString(fit), 1), _createVNode(_component_el_avatar, {
            shape: "square",
            size: 100,
            fit: fit,
            src: _ctx.url
          }, null, 8, ["fit", "src"])]);
        }), 128))])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/fr-FR/avatar.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/avatar.md



avatarvue_type_script_lang_ts.render = avatarvue_type_template_id_1c617944_render

/* harmony default export */ var avatar = __webpack_exports__["default"] = (avatarvue_type_script_lang_ts);

/***/ })

}]);