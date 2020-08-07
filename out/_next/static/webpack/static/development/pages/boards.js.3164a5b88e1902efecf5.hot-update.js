webpackHotUpdate("static/development/pages/boards.js",{

/***/ "./pages/boards.js":
/*!*************************!*\
  !*** ./pages/boards.js ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProfilePage; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Camera */ "./node_modules/@material-ui/icons/Camera.js");
/* harmony import */ var _material_ui_icons_Camera__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Camera__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Palette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Palette */ "./node_modules/@material-ui/icons/Palette.js");
/* harmony import */ var _material_ui_icons_Palette__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Palette__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Header/Header.js */ "./components/Header/Header.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./components/Header/HeaderLinks.js");
/* harmony import */ var components_NavPills_NavPills_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/NavPills/NavPills.js */ "./components/NavPills/NavPills.js");
/* harmony import */ var components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/Parallax/Parallax.js */ "./components/Parallax/Parallax.js");
/* harmony import */ var components_BoardCardSection_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/BoardCardSection.js */ "./components/BoardCardSection.js");
/* harmony import */ var components_NewBoardCardSection_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/NewBoardCardSection.js */ "./components/NewBoardCardSection.js");
/* harmony import */ var components_BoardCard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/BoardCard */ "./components/BoardCard.js");
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! components/Card/Card.js */ "./components/Card/Card.js");
/* harmony import */ var components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! components/Card/CardBody.js */ "./components/Card/CardBody.js");
/* harmony import */ var assets_img_faces_christian_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! assets/img/faces/christian.jpg */ "./assets/img/faces/christian.jpg");
/* harmony import */ var assets_img_faces_christian_jpg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(assets_img_faces_christian_jpg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var assets_img_examples_studio_1_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! assets/img/examples/studio-1.jpg */ "./assets/img/examples/studio-1.jpg");
/* harmony import */ var assets_img_examples_studio_1_jpg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(assets_img_examples_studio_1_jpg__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var assets_img_examples_studio_2_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! assets/img/examples/studio-2.jpg */ "./assets/img/examples/studio-2.jpg");
/* harmony import */ var assets_img_examples_studio_2_jpg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(assets_img_examples_studio_2_jpg__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var assets_img_examples_studio_3_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! assets/img/examples/studio-3.jpg */ "./assets/img/examples/studio-3.jpg");
/* harmony import */ var assets_img_examples_studio_3_jpg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(assets_img_examples_studio_3_jpg__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var assets_img_examples_studio_4_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! assets/img/examples/studio-4.jpg */ "./assets/img/examples/studio-4.jpg");
/* harmony import */ var assets_img_examples_studio_4_jpg__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(assets_img_examples_studio_4_jpg__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var assets_img_examples_studio_5_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! assets/img/examples/studio-5.jpg */ "./assets/img/examples/studio-5.jpg");
/* harmony import */ var assets_img_examples_studio_5_jpg__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(assets_img_examples_studio_5_jpg__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var assets_img_examples_olu_eletu_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! assets/img/examples/olu-eletu.jpg */ "./assets/img/examples/olu-eletu.jpg");
/* harmony import */ var assets_img_examples_olu_eletu_jpg__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(assets_img_examples_olu_eletu_jpg__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var assets_img_examples_clem_onojeghuo_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! assets/img/examples/clem-onojeghuo.jpg */ "./assets/img/examples/clem-onojeghuo.jpg");
/* harmony import */ var assets_img_examples_clem_onojeghuo_jpg__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(assets_img_examples_clem_onojeghuo_jpg__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var assets_img_examples_cynthia_del_rio_jpg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! assets/img/examples/cynthia-del-rio.jpg */ "./assets/img/examples/cynthia-del-rio.jpg");
/* harmony import */ var assets_img_examples_cynthia_del_rio_jpg__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(assets_img_examples_cynthia_del_rio_jpg__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var assets_img_examples_mariya_georgieva_jpg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! assets/img/examples/mariya-georgieva.jpg */ "./assets/img/examples/mariya-georgieva.jpg");
/* harmony import */ var assets_img_examples_mariya_georgieva_jpg__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(assets_img_examples_mariya_georgieva_jpg__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var assets_img_examples_clem_onojegaw_jpg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! assets/img/examples/clem-onojegaw.jpg */ "./assets/img/examples/clem-onojegaw.jpg");
/* harmony import */ var assets_img_examples_clem_onojegaw_jpg__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(assets_img_examples_clem_onojegaw_jpg__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var assets_jss_nextjs_material_kit_pages_profilePage_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/profilePage.js */ "./assets/jss/nextjs-material-kit/pages/profilePage.js");
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");
/* harmony import */ var _lib_boards_json__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../lib/boards.json */ "./lib/boards.json");
var _lib_boards_json__WEBPACK_IMPORTED_MODULE_34___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../lib/boards.json */ "./lib/boards.json", 1);


var _jsxFileName = "/Users/sethlarkin/Desktop/Dev/Web/next.js/vernor-nextjs-material/pages/boards.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // nodejs library that concatenates classes

 // @material-ui/core components

 // @material-ui/icons



 // core components





























var styles = _objectSpread({}, assets_jss_nextjs_material_kit_pages_profilePage_js__WEBPACK_IMPORTED_MODULE_32__["default"], {
  cardTitle: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_33__["cardTitle"]
});

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(styles);
var __N_SSG = true;
function ProfilePage(_ref) {
  var _this = this;

  var props = _ref.props,
      allBoardsData = _ref.allBoardsData;
  var classes = useStyles();

  var rest = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props);

  var imageClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  var navImageClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.imgRounded, classes.imgGallery);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: "transparent",
    brand: "NextJS Material Kit",
    rightLinks: __jsx(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 21
      }
    }),
    fixed: true,
    changeColorOnScroll: {
      height: 200,
      color: "white"
    }
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  })), __jsx(components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    small: true,
    filter: true,
    image: __webpack_require__(/*! assets/img/profile-bg.jpg */ "./assets/img/profile-bg.jpg"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, _lib_boards_json__WEBPACK_IMPORTED_MODULE_34__.boards[0].dims), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, _lib_boards_json__WEBPACK_IMPORTED_MODULE_34__.boards.map(function (_ref2) {
    var name = _ref2.name;
    return __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }
    }, name);
  })), __jsx(components_BoardCard__WEBPACK_IMPORTED_MODULE_18__["default"], {
    name: _lib_boards_json__WEBPACK_IMPORTED_MODULE_34__.boards[0].name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.main),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx(components_NewBoardCardSection_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    direction: "row",
    justify: "center",
    alignItems: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx(components_BoardCardSection_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }))))), __jsx(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=boards.js.3164a5b88e1902efecf5.hot-update.js.map