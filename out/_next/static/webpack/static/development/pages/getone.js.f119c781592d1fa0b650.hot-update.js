webpackHotUpdate("static/development/pages/getone.js",{

/***/ "./lib/shopsBAK.json":
/*!***************************!*\
  !*** ./lib/shopsBAK.json ***!
  \***************************/
/*! exports provided: shops, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"shops\":{\"0\":{\"state\":\"california\",\"locations\":[{\"id\":1,\"name\":\"2 Mile Surf Shop\",\"address\":\"22 Brighton ave. Bolinas, CA\",\"phone\":\"415-868-0264\",\"site\":\"www.2milesurf.com\"},{\"id\":2,\"name\":\"Aqua Surf Shop\",\"address\":\"2830 Sloat Blvd., San Francisco, CA\",\"phone\":\"415-242-9283\",\"site\":\"www.aquasurfshop.com\"},{\"id\":3,\"name\":\"Live Water Surf Shop\",\"address\":\"3448 Shoreline Hwy, Stinson Beach, CA\",\"phone\":\"415-868-0333\",\"site\":\"www.livewatersurfshop.com\"},{\"id\":4,\"name\":\"On The Beach\",\"address\":\"693 Lighthouse Ave, Monterey, CA\",\"phone\":\"831-646-9283\",\"site\":\"onthebeachsurfshop.com\"},{\"id\":5,\"name\":\"Neighborhood Board Shop\",\"address\":\"685 11th St, Arcata, CA 95521\",\"phone\":\"707-822-7873\",\"site\":\"www.theneighborhoodhumboldt.com\"},{\"id\":6,\"name\":\"Sonlight Surf Shop\",\"address\":\"575 Crespi Dr # 1, Pacifica, CA\",\"phone\":\"(650) 359-5471\",\"site\":\"www.sonlightsurfshop.com\"},{\"id\":7,\"name\":\"Sunshine Freestyle\",\"address\":\"443 Lighthouse Avenue, Monterey, CA \",\"phone\":\"(831) 375-5015\",\"site\":\"www.sunshinefreestyle.com\"},{\"id\":7,\"name\":\"Sunshine Freestyle\",\"address\":\"443 Lighthouse Avenue, Monterey, CA \",\"phone\":\"(831) 375-5015\",\"site\":\"www.sunshinefreestyle.com\"}]},\"1\":{\"2\":{\"state\":\"North Carolina\",\"locations\":[{\"id\":1,\"name\":\"AB Surf Shop\",\"address\":\"515 West Fort Mason Road., Atlantic Beach NC\",\"phone\":\"252-726-9382\",\"site\":\"www.absurfshop.com\"},{\"id\":2,\"name\":\"Aussie Island\",\"address\":\"5101 Dunlea Ct., Wilmington, NC, 910-256-5454\",\"phone\":\"(910)256-5454\",\"site\":\"www.aussieisland.com\"},{\"id\":3,\"name\":\"Aussie Island\",\"address\":\"1 North Lumina Avenue, NC, 910-256-6789\",\"phone\":\"(910)256-6789\",\"site\":\"www.aussieisland.com\"},{\"id\":4,\"name\":\"CB Surf Shop\",\"address\":\"209 S. Lake Park Blvd., Carolina Beach, NC - 910-458-7005\",\"phone\":\"910-458-7005\",\"site\":\"cbsurfshop.blogspot.com/\"},{\"id\":5,\"name\":\"REAL Watersports\",\"address\":\"25706 North Carolina 12, Waves, NC 27982 - 252-987-6000\",\"phone\":\"(866) REAL-548 \",\"site\":\"www.realwatersports.com\"},{\"id\":6,\"name\":\"Whalebone Surf Shop\",\"address\":\"2214 S. Croatan Hwy, Nags Head, NC - 252-441-6747\",\"phone\":\"(877) 855-1975 \",\"site\":\"www.whalebonesurfshop.com\"}]},\"3\":{\"state\":\"South Carolina\",\"locations\":[{\"id\":1,\"name\":\"Parrot Surf Shop\",\"address\":\"811 Coleman Blvd Mt. Pleasant, SC\",\"phone\":\"843-884-1035\",\"site\":\"www.parrotsurfshop.com\"}]},\"4\":{\"state\":\"Texas\",\"locations\":[{\"id\":1,\"name\":\"DFW Surf\",\"address\":\"2500 Fairway Drive., Grapevine, TX\",\"phone\":\"214-497-7502\",\"site\":\"www.dfwsurf.com\"}]},\"state\":\"Maryland\",\"locations\":[{\"id\":1,\"name\":\"Chauncey's Surf Shop\",\"address\":\"2908 Coastal Highway, Ocean City, MD\",\"phone\":\"410-289-7405\",\"site\":\"www.chaunceyssurfshop.com\"},{\"id\":2,\"name\":\"Chauncey's Surf Shop\",\"address\":\"5309 Coastal Highway, Ocean City, MD\",\"phone\":\"410-524-6005\",\"site\":\"www.chaunceyssurfshop.com\"}]}}}");

/***/ }),

/***/ "./pages/getone.js":
/*!*************************!*\
  !*** ./pages/getone.js ***!
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
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Header/Header.js */ "./components/Header/Header.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./components/Header/HeaderLinks.js");
/* harmony import */ var components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Parallax/Parallax.js */ "./components/Parallax/Parallax.js");
/* harmony import */ var components_ShopCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/ShopCard */ "./components/ShopCard.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pages_profilePage_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/profilePage.js */ "./assets/jss/nextjs-material-kit/pages/profilePage.js");
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");
/* harmony import */ var _lib_shops_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/shops.json */ "./lib/shops.json");
var _lib_shops_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../lib/shops.json */ "./lib/shops.json", 1);
/* harmony import */ var _lib_shopsBAK_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lib/shopsBAK.json */ "./lib/shopsBAK.json");
var _lib_shopsBAK_json__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../lib/shopsBAK.json */ "./lib/shopsBAK.json", 1);


var _jsxFileName = "/Users/sethlarkin/Desktop/Dev/Web/next.js/vernor-nextjs-material/pages/getone.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // nodejs library that concatenates classes

 // @material-ui/core components

 // core components














var styles = _objectSpread({}, assets_jss_nextjs_material_kit_pages_profilePage_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
  cardTitle: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_14__["cardTitle"]
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
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: "transparent",
    brand: "NextJS Material Kit",
    rightLinks: __jsx(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
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
      lineNumber: 44,
      columnNumber: 7
    }
  })), __jsx(components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    small: true,
    filter: true,
    image: __webpack_require__(/*! assets/img/profile-bg.jpg */ "./assets/img/profile-bg.jpg"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.main),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, _lib_shopsBAK_json__WEBPACK_IMPORTED_MODULE_16__.shops.map(function (shop) {
    return __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      container: true,
      direction: "row",
      justify: "left",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 15
      }
    }, shop.locations.map(function (info) {
      return __jsx(components_ShopCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
        item: true,
        name: info.name,
        address: info.address,
        phone: info.phone,
        site: info.site,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 19
        }
      });
    }));
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "California"), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    direction: "row",
    justify: "left",
    alignItems: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, _lib_shops_json__WEBPACK_IMPORTED_MODULE_15__.shops.california.map(function (shop) {
    return __jsx(components_ShopCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
      item: true,
      name: shop.name,
      address: shop.address,
      phone: shop.phone,
      site: shop.site,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    });
  })), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, "Maryland"), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    direction: "row",
    justify: "left",
    alignItems: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, _lib_shops_json__WEBPACK_IMPORTED_MODULE_15__.shops.maryland.map(function (shop) {
    return __jsx(components_ShopCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
      name: shop.name,
      address: shop.address,
      phone: shop.phone,
      site: shop.site,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }
    });
  })), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, "North Carolina"), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    direction: "row",
    justify: "left",
    alignItems: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, _lib_shops_json__WEBPACK_IMPORTED_MODULE_15__.shops.north_carolina.map(function (shop) {
    return __jsx(components_ShopCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
      name: shop.name,
      address: shop.address,
      phone: shop.phone,
      site: shop.site,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }
    });
  })), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, "South Carolina"), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    direction: "row",
    justify: "left",
    alignItems: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, _lib_shops_json__WEBPACK_IMPORTED_MODULE_15__.shops.south_carolina.map(function (shop) {
    return __jsx(components_ShopCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
      name: shop.name,
      address: shop.address,
      phone: shop.phone,
      site: shop.site,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }
    });
  })), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }, "Texas"), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    direction: "row",
    justify: "left",
    alignItems: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }, _lib_shops_json__WEBPACK_IMPORTED_MODULE_15__.shops.texas.map(function (shop) {
    return __jsx(components_ShopCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
      name: shop.name,
      address: shop.address,
      phone: shop.phone,
      site: shop.site,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 17
      }
    });
  }))))), __jsx(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=getone.js.f119c781592d1fa0b650.hot-update.js.map