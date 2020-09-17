webpackHotUpdate("static/development/pages/board-page/[board-page].js",{

/***/ "./pages/board-page/[board-page].js":
/*!******************************************!*\
  !*** ./pages/board-page/[board-page].js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BoardPage; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Header/Header.js */ "./components/Header/Header.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./components/Header/HeaderLinks.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pages_profilePage_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/profilePage.js */ "./assets/jss/nextjs-material-kit/pages/profilePage.js");
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");
/* harmony import */ var lib_boards_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lib/boards.json */ "./lib/boards.json");
var lib_boards_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! lib/boards.json */ "./lib/boards.json", 1);


var _jsxFileName = "/Users/sethlarkin/Desktop/Dev/Web/next.js/vernor-nextjs-material/pages/board-page/[board-page].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // nodejs library that concatenates classes

 // @material-ui/core components

 // core components











var styles = _objectSpread({}, assets_jss_nextjs_material_kit_pages_profilePage_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
  cardTitle: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_14__["cardTitle"]
});

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(styles);
function BoardPage(_ref) {
  var props = _ref.props,
      allBoardsData = _ref.allBoardsData;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var id = router.query['board-page'];
  var boardDetail = {};
  lib_boards_json__WEBPACK_IMPORTED_MODULE_15__.boards.forEach(function (element) {
    // console.log(element.name.toLowerCase())
    // console.log("id: " + id);
    if (element.name.toLowerCase().includes(id)) {
      // console.log(element.name.toLowerCase().includes(id) + ' ' + typeof (element.name));
      boardDetail = element; // console.log("boardDetail" + ' ' + JSON.stringify(boardDetail));
    }
  });
  console.log("boardDetail.image " + boardDetail.img);

  if (JSON.stringify(boardDetail) === JSON.stringify({})) {// router.push('/')
  } // boardData.boards
  // console.log("sasds" + boardData.boards[0].name);


  var classes = useStyles();

  var rest = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props);

  var imageClasses = classnames__WEBPACK_IMPORTED_MODULE_5___default()(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  var navImageClasses = classnames__WEBPACK_IMPORTED_MODULE_5___default()(classes.imgRounded, classes.imgGallery);
  console.log("{id}");
  console.log("router.query: " + router.query['board-page']);
  return __jsx("div", {
    className: "jsx-1699322295",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1699322295",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: "white",
    brand: "NextJS Material Kit",
    rightLinks: __jsx(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 33
      }
    }),
    fixed: true
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }))), __jsx("div", {
    style: {
      padding: "120px"
    },
    className: "jsx-1699322295" + " " + (classnames__WEBPACK_IMPORTED_MODULE_5___default()(classes.main) || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "jsx-1699322295",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, boardDetail.name), __jsx("img", {
    style: {
      height: "40%",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
    },
    src: boardDetail.img,
    alt: "BarracBoard Imageuda",
    className: "jsx-1699322295",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-1699322295",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "jsx-1699322295",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, __jsx("strong", {
    className: "jsx-1699322295",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 24
    }
  }, boardDetail.description)), __jsx("h6", {
    className: "jsx-1699322295",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, "Size Range: ", boardDetail.dims.range), __jsx("h6", {
    className: "jsx-1699322295",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, "Nose: ", boardDetail.dims.Nose), __jsx("h6", {
    className: "jsx-1699322295",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }, "Middle: ", boardDetail.dims.Middle), __jsx("h6", {
    className: "jsx-1699322295",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, "Tail: ", boardDetail.dims.Tail), __jsx("h6", {
    className: "jsx-1699322295",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, "Thickness: ", boardDetail.dims.Thickness), __jsx("h6", {
    className: "jsx-1699322295",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, "Volume: ", boardDetail.dims.Volume))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "956145905",
    __self: this
  }, "h3.jsx-1699322295{font-weight:bold;text-align:center;}p.jsx-1699322295{text-align:center;}@media (min-width:600px){p.jsx-1699322295{float:right;text-align:center;}img.jsx-1699322295{float:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXRobGFya2luL0Rlc2t0b3AvRGV2L1dlYi9uZXh0LmpzL3Zlcm5vci1uZXh0anMtbWF0ZXJpYWwvcGFnZXMvYm9hcmQtcGFnZS9bYm9hcmQtcGFnZV0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0Z3QixBQUdxQyxBQUlDLEFBUUYsQUFJRCxXQUNkLENBSnFCLEtBWkosQ0FJckIsWUFTSSxLQVpKIiwiZmlsZSI6Ii9Vc2Vycy9zZXRobGFya2luL0Rlc2t0b3AvRGV2L1dlYi9uZXh0LmpzL3Zlcm5vci1uZXh0anMtbWF0ZXJpYWwvcGFnZXMvYm9hcmQtcGFnZS9bYm9hcmQtcGFnZV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanNcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcImNvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9DdXN0b21CdXR0b25zL0J1dHRvbi5qc1wiO1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSBcImNvbXBvbmVudHMvR3JpZC9HcmlkQ29udGFpbmVyLmpzXCI7XG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSBcImNvbXBvbmVudHMvR3JpZC9HcmlkSXRlbS5qc1wiO1xuaW1wb3J0IEhlYWRlckxpbmtzIGZyb20gXCJjb21wb25lbnRzL0hlYWRlci9IZWFkZXJMaW5rcy5qc1wiO1xuXG5cbmltcG9ydCBwcm9maWxlUGFnZVN0eWxlcyBmcm9tIFwiYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L3BhZ2VzL3Byb2ZpbGVQYWdlLmpzXCI7XG5pbXBvcnQgeyBjYXJkVGl0bGUgfSBmcm9tIFwiYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0LmpzXCI7XG5cbmltcG9ydCBib2FyZERhdGEgZnJvbSAnbGliL2JvYXJkcy5qc29uJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIC4uLnByb2ZpbGVQYWdlU3R5bGVzLFxuICAgIGNhcmRUaXRsZSxcbn1cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZFBhZ2UoeyBwcm9wcywgYWxsQm9hcmRzRGF0YSB9KSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgaWQgPSByb3V0ZXIucXVlcnlbJ2JvYXJkLXBhZ2UnXTtcblxuICAgIGxldCBib2FyZERldGFpbCA9IHt9XG4gICAgYm9hcmREYXRhLmJvYXJkcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50Lm5hbWUudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpZDogXCIgKyBpZCk7XG4gICAgICAgIGlmIChlbGVtZW50Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpZCkpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlkKSArICcgJyArIHR5cGVvZiAoZWxlbWVudC5uYW1lKSk7XG4gICAgICAgICAgICBib2FyZERldGFpbCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImJvYXJkRGV0YWlsXCIgKyAnICcgKyBKU09OLnN0cmluZ2lmeShib2FyZERldGFpbCkpO1xuXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKFwiYm9hcmREZXRhaWwuaW1hZ2UgXCIgKyBib2FyZERldGFpbC5pbWcpO1xuXG4gICAgaWYgKEpTT04uc3RyaW5naWZ5KGJvYXJkRGV0YWlsKSA9PT0gSlNPTi5zdHJpbmdpZnkoe30pKSB7XG4gICAgICAgIC8vIHJvdXRlci5wdXNoKCcvJylcbiAgICB9XG5cbiAgICAvLyBib2FyZERhdGEuYm9hcmRzXG4gICAgLy8gY29uc29sZS5sb2coXCJzYXNkc1wiICsgYm9hcmREYXRhLmJvYXJkc1swXS5uYW1lKTtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgICBjb25zdCB7IC4uLnJlc3QgfSA9IHByb3BzO1xuICAgIGNvbnN0IGltYWdlQ2xhc3NlcyA9IGNsYXNzTmFtZXMoXG4gICAgICAgIGNsYXNzZXMuaW1nUmFpc2VkLFxuICAgICAgICBjbGFzc2VzLmltZ1JvdW5kZWRDaXJjbGUsXG4gICAgICAgIGNsYXNzZXMuaW1nRmx1aWRcbiAgICApO1xuICAgIGNvbnN0IG5hdkltYWdlQ2xhc3NlcyA9IGNsYXNzTmFtZXMoY2xhc3Nlcy5pbWdSb3VuZGVkLCBjbGFzc2VzLmltZ0dhbGxlcnkpO1xuXG4gICAgY29uc29sZS5sb2coYHtpZH1gKVxuICAgIGNvbnNvbGUubG9nKFwicm91dGVyLnF1ZXJ5OiBcIiArIHJvdXRlci5xdWVyeVsnYm9hcmQtcGFnZSddKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEhlYWRlclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgYnJhbmQ9XCJOZXh0SlMgTWF0ZXJpYWwgS2l0XCJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRMaW5rcz17PEhlYWRlckxpbmtzIC8+fVxuICAgICAgICAgICAgICAgICAgICBmaXhlZFxuICAgICAgICAgICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5tYWluKX0gc3R5bGU9e3sgcGFkZGluZzogXCIxMjBweFwiIH19PlxuICAgICAgICAgICAgICAgIDxoMz57Ym9hcmREZXRhaWwubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjQwJVwiLCBkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLCBtYXJnaW5SaWdodDogXCJhdXRvXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgc3JjPXtib2FyZERldGFpbC5pbWd9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkJhcnJhY0JvYXJkIEltYWdldWRhXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPntib2FyZERldGFpbC5kZXNjcmlwdGlvbn08L3N0cm9uZz48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxoNj5TaXplIFJhbmdlOiB7Ym9hcmREZXRhaWwuZGltcy5yYW5nZX08L2g2PlxuICAgICAgICAgICAgICAgICAgICA8aDY+Tm9zZToge2JvYXJkRGV0YWlsLmRpbXMuTm9zZX08L2g2PlxuICAgICAgICAgICAgICAgICAgICA8aDY+TWlkZGxlOiB7Ym9hcmREZXRhaWwuZGltcy5NaWRkbGV9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPGg2PlRhaWw6IHtib2FyZERldGFpbC5kaW1zLlRhaWx9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPGg2PlRoaWNrbmVzczoge2JvYXJkRGV0YWlsLmRpbXMuVGhpY2tuZXNzfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxoNj5Wb2x1bWU6IHtib2FyZERldGFpbC5kaW1zLlZvbHVtZX08L2g2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OnJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgICAgICAgIC8vIGJvZHkge1xuICAgICAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2ID5cbiAgICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/sethlarkin/Desktop/Dev/Web/next.js/vernor-nextjs-material/pages/board-page/[board-page].js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2539651407",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXRobGFya2luL0Rlc2t0b3AvRGV2L1dlYi9uZXh0LmpzL3Zlcm5vci1uZXh0anMtbWF0ZXJpYWwvcGFnZXMvYm9hcmQtcGFnZS9bYm9hcmQtcGFnZV0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUgrQiIsImZpbGUiOiIvVXNlcnMvc2V0aGxhcmtpbi9EZXNrdG9wL0Rldi9XZWIvbmV4dC5qcy92ZXJub3ItbmV4dGpzLW1hdGVyaWFsL3BhZ2VzL2JvYXJkLXBhZ2UvW2JvYXJkLXBhZ2VdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5cbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCJjb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcImNvbXBvbmVudHMvQ3VzdG9tQnV0dG9ucy9CdXR0b24uanNcIjtcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gXCJjb21wb25lbnRzL0dyaWQvR3JpZENvbnRhaW5lci5qc1wiO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gXCJjb21wb25lbnRzL0dyaWQvR3JpZEl0ZW0uanNcIjtcbmltcG9ydCBIZWFkZXJMaW5rcyBmcm9tIFwiY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyTGlua3MuanNcIjtcblxuXG5pbXBvcnQgcHJvZmlsZVBhZ2VTdHlsZXMgZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9wYWdlcy9wcm9maWxlUGFnZS5qc1wiO1xuaW1wb3J0IHsgY2FyZFRpdGxlIH0gZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC5qc1wiO1xuXG5pbXBvcnQgYm9hcmREYXRhIGZyb20gJ2xpYi9ib2FyZHMuanNvbic7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICAuLi5wcm9maWxlUGFnZVN0eWxlcyxcbiAgICBjYXJkVGl0bGUsXG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmRQYWdlKHsgcHJvcHMsIGFsbEJvYXJkc0RhdGEgfSkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IGlkID0gcm91dGVyLnF1ZXJ5Wydib2FyZC1wYWdlJ107XG5cbiAgICBsZXQgYm9hcmREZXRhaWwgPSB7fVxuICAgIGJvYXJkRGF0YS5ib2FyZHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudC5uYW1lLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaWQ6IFwiICsgaWQpO1xuICAgICAgICBpZiAoZWxlbWVudC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpZCkgKyAnICcgKyB0eXBlb2YgKGVsZW1lbnQubmFtZSkpO1xuICAgICAgICAgICAgYm9hcmREZXRhaWwgPSBlbGVtZW50O1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJib2FyZERldGFpbFwiICsgJyAnICsgSlNPTi5zdHJpbmdpZnkoYm9hcmREZXRhaWwpKTtcblxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhcImJvYXJkRGV0YWlsLmltYWdlIFwiICsgYm9hcmREZXRhaWwuaW1nKTtcblxuICAgIGlmIChKU09OLnN0cmluZ2lmeShib2FyZERldGFpbCkgPT09IEpTT04uc3RyaW5naWZ5KHt9KSkge1xuICAgICAgICAvLyByb3V0ZXIucHVzaCgnLycpXG4gICAgfVxuXG4gICAgLy8gYm9hcmREYXRhLmJvYXJkc1xuICAgIC8vIGNvbnNvbGUubG9nKFwic2FzZHNcIiArIGJvYXJkRGF0YS5ib2FyZHNbMF0ubmFtZSk7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gICAgY29uc3QgeyAuLi5yZXN0IH0gPSBwcm9wcztcbiAgICBjb25zdCBpbWFnZUNsYXNzZXMgPSBjbGFzc05hbWVzKFxuICAgICAgICBjbGFzc2VzLmltZ1JhaXNlZCxcbiAgICAgICAgY2xhc3Nlcy5pbWdSb3VuZGVkQ2lyY2xlLFxuICAgICAgICBjbGFzc2VzLmltZ0ZsdWlkXG4gICAgKTtcbiAgICBjb25zdCBuYXZJbWFnZUNsYXNzZXMgPSBjbGFzc05hbWVzKGNsYXNzZXMuaW1nUm91bmRlZCwgY2xhc3Nlcy5pbWdHYWxsZXJ5KTtcblxuICAgIGNvbnNvbGUubG9nKGB7aWR9YClcbiAgICBjb25zb2xlLmxvZyhcInJvdXRlci5xdWVyeTogXCIgKyByb3V0ZXIucXVlcnlbJ2JvYXJkLXBhZ2UnXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIGJyYW5kPVwiTmV4dEpTIE1hdGVyaWFsIEtpdFwiXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0TGlua3M9ezxIZWFkZXJMaW5rcyAvPn1cbiAgICAgICAgICAgICAgICAgICAgZml4ZWRcbiAgICAgICAgICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMubWFpbil9IHN0eWxlPXt7IHBhZGRpbmc6IFwiMTIwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICA8aDM+e2JvYXJkRGV0YWlsLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI0MCVcIiwgZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW5MZWZ0OiBcImF1dG9cIiwgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiIH19XG4gICAgICAgICAgICAgICAgICAgIHNyYz17Ym9hcmREZXRhaWwuaW1nfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJCYXJyYWNCb2FyZCBJbWFnZXVkYVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz57Ym9hcmREZXRhaWwuZGVzY3JpcHRpb259PC9zdHJvbmc+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8aDY+U2l6ZSBSYW5nZToge2JvYXJkRGV0YWlsLmRpbXMucmFuZ2V9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPGg2Pk5vc2U6IHtib2FyZERldGFpbC5kaW1zLk5vc2V9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPGg2Pk1pZGRsZToge2JvYXJkRGV0YWlsLmRpbXMuTWlkZGxlfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxoNj5UYWlsOiB7Ym9hcmREZXRhaWwuZGltcy5UYWlsfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxoNj5UaGlja25lc3M6IHtib2FyZERldGFpbC5kaW1zLlRoaWNrbmVzc308L2g2PlxuICAgICAgICAgICAgICAgICAgICA8aDY+Vm9sdW1lOiB7Ym9hcmREZXRhaWwuZGltcy5Wb2x1bWV9PC9oNj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDpyaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICAgICAgICAvLyBib2R5IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2RpdiA+XG4gICAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/sethlarkin/Desktop/Dev/Web/next.js/vernor-nextjs-material/pages/board-page/[board-page].js */"));
}

/***/ })

})
//# sourceMappingURL=[board-page].js.92bc64536b7219780c79.hot-update.js.map