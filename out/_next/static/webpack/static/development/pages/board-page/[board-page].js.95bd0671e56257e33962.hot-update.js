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
    className: "jsx-2602553950",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2602553950",
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
    className: "jsx-2602553950" + " " + (classnames__WEBPACK_IMPORTED_MODULE_5___default()(classes.main) || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "jsx-2602553950",
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
    className: "jsx-2602553950",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-2602553950",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "jsx-2602553950",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, __jsx("strong", {
    className: "jsx-2602553950",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 24
    }
  }, boardDetail.description)), __jsx("h6", {
    className: "jsx-2602553950",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, "Size Range: ", boardDetail.dims.range), __jsx("h6", {
    className: "jsx-2602553950",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, "Nose: ", boardDetail.dims.Nose), __jsx("h6", {
    className: "jsx-2602553950",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }, "Middle: ", boardDetail.dims.Middle), __jsx("h6", {
    className: "jsx-2602553950",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, "Tail: ", boardDetail.dims.Tail), __jsx("h6", {
    className: "jsx-2602553950",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, "Thickness: ", boardDetail.dims.Thickness), __jsx("h6", {
    className: "jsx-2602553950",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, "Volume: ", boardDetail.dims.Volume))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3837960250",
    __self: this
  }, ".Description.jsx-2602553950 p.jsx-2602553950{color:blue;text-align:center;}@media (min-width:600px){img.jsx-2602553950{float:left;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXRobGFya2luL0Rlc2t0b3AvRGV2L1dlYi9uZXh0LmpzL3Zlcm5vci1uZXh0anMtbWF0ZXJpYWwvcGFnZXMvYm9hcmQtcGFnZS9bYm9hcmQtcGFnZV0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0Z3QixBQUlnQyxBQVNHLFdBUkcsQUFTakIsa0JBUkoiLCJmaWxlIjoiL1VzZXJzL3NldGhsYXJraW4vRGVza3RvcC9EZXYvV2ViL25leHQuanMvdmVybm9yLW5leHRqcy1tYXRlcmlhbC9wYWdlcy9ib2FyZC1wYWdlL1tib2FyZC1wYWdlXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc1wiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJjb21wb25lbnRzL0N1c3RvbUJ1dHRvbnMvQnV0dG9uLmpzXCI7XG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tIFwiY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXIuanNcIjtcbmltcG9ydCBHcmlkSXRlbSBmcm9tIFwiY29tcG9uZW50cy9HcmlkL0dyaWRJdGVtLmpzXCI7XG5pbXBvcnQgSGVhZGVyTGlua3MgZnJvbSBcImNvbXBvbmVudHMvSGVhZGVyL0hlYWRlckxpbmtzLmpzXCI7XG5cblxuaW1wb3J0IHByb2ZpbGVQYWdlU3R5bGVzIGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvcGFnZXMvcHJvZmlsZVBhZ2UuanNcIjtcbmltcG9ydCB7IGNhcmRUaXRsZSB9IGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQuanNcIjtcblxuaW1wb3J0IGJvYXJkRGF0YSBmcm9tICdsaWIvYm9hcmRzLmpzb24nO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgLi4ucHJvZmlsZVBhZ2VTdHlsZXMsXG4gICAgY2FyZFRpdGxlLFxufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkUGFnZSh7IHByb3BzLCBhbGxCb2FyZHNEYXRhIH0pIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeVsnYm9hcmQtcGFnZSddO1xuXG4gICAgbGV0IGJvYXJkRGV0YWlsID0ge31cbiAgICBib2FyZERhdGEuYm9hcmRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnQubmFtZS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlkOiBcIiArIGlkKTtcbiAgICAgICAgaWYgKGVsZW1lbnQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlkKSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaWQpICsgJyAnICsgdHlwZW9mIChlbGVtZW50Lm5hbWUpKTtcbiAgICAgICAgICAgIGJvYXJkRGV0YWlsID0gZWxlbWVudDtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYm9hcmREZXRhaWxcIiArICcgJyArIEpTT04uc3RyaW5naWZ5KGJvYXJkRGV0YWlsKSk7XG5cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coXCJib2FyZERldGFpbC5pbWFnZSBcIiArIGJvYXJkRGV0YWlsLmltZyk7XG5cbiAgICBpZiAoSlNPTi5zdHJpbmdpZnkoYm9hcmREZXRhaWwpID09PSBKU09OLnN0cmluZ2lmeSh7fSkpIHtcbiAgICAgICAgLy8gcm91dGVyLnB1c2goJy8nKVxuICAgIH1cblxuICAgIC8vIGJvYXJkRGF0YS5ib2FyZHNcbiAgICAvLyBjb25zb2xlLmxvZyhcInNhc2RzXCIgKyBib2FyZERhdGEuYm9hcmRzWzBdLm5hbWUpO1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAgIGNvbnN0IHsgLi4ucmVzdCB9ID0gcHJvcHM7XG4gICAgY29uc3QgaW1hZ2VDbGFzc2VzID0gY2xhc3NOYW1lcyhcbiAgICAgICAgY2xhc3Nlcy5pbWdSYWlzZWQsXG4gICAgICAgIGNsYXNzZXMuaW1nUm91bmRlZENpcmNsZSxcbiAgICAgICAgY2xhc3Nlcy5pbWdGbHVpZFxuICAgICk7XG4gICAgY29uc3QgbmF2SW1hZ2VDbGFzc2VzID0gY2xhc3NOYW1lcyhjbGFzc2VzLmltZ1JvdW5kZWQsIGNsYXNzZXMuaW1nR2FsbGVyeSk7XG5cbiAgICBjb25zb2xlLmxvZyhge2lkfWApXG4gICAgY29uc29sZS5sb2coXCJyb3V0ZXIucXVlcnk6IFwiICsgcm91dGVyLnF1ZXJ5Wydib2FyZC1wYWdlJ10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBicmFuZD1cIk5leHRKUyBNYXRlcmlhbCBLaXRcIlxuICAgICAgICAgICAgICAgICAgICByaWdodExpbmtzPXs8SGVhZGVyTGlua3MgLz59XG4gICAgICAgICAgICAgICAgICAgIGZpeGVkXG4gICAgICAgICAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLm1haW4pfSBzdHlsZT17eyBwYWRkaW5nOiBcIjEyMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgPGgzPntib2FyZERldGFpbC5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiNDAlXCIsIGRpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luTGVmdDogXCJhdXRvXCIsIG1hcmdpblJpZ2h0OiBcImF1dG9cIiB9fVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2JvYXJkRGV0YWlsLmltZ31cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiQmFycmFjQm9hcmQgSW1hZ2V1ZGFcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz57Ym9hcmREZXRhaWwuZGVzY3JpcHRpb259PC9zdHJvbmc+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8aDY+U2l6ZSBSYW5nZToge2JvYXJkRGV0YWlsLmRpbXMucmFuZ2V9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPGg2Pk5vc2U6IHtib2FyZERldGFpbC5kaW1zLk5vc2V9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPGg2Pk1pZGRsZToge2JvYXJkRGV0YWlsLmRpbXMuTWlkZGxlfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxoNj5UYWlsOiB7Ym9hcmREZXRhaWwuZGltcy5UYWlsfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxoNj5UaGlja25lc3M6IHtib2FyZERldGFpbC5kaW1zLlRoaWNrbmVzc308L2g2PlxuICAgICAgICAgICAgICAgICAgICA8aDY+Vm9sdW1lOiB7Ym9hcmREZXRhaWwuZGltcy5Wb2x1bWV9PC9oNj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5EZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2RpdiA+XG4gICAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/sethlarkin/Desktop/Dev/Web/next.js/vernor-nextjs-material/pages/board-page/[board-page].js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1654298029",
    __self: this
  }, "body{background:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXRobGFya2luL0Rlc2t0b3AvRGV2L1dlYi9uZXh0LmpzL3Zlcm5vci1uZXh0anMtbWF0ZXJpYWwvcGFnZXMvYm9hcmQtcGFnZS9bYm9hcmQtcGFnZV0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0crQixBQUdzQyxpQkFDckIiLCJmaWxlIjoiL1VzZXJzL3NldGhsYXJraW4vRGVza3RvcC9EZXYvV2ViL25leHQuanMvdmVybm9yLW5leHRqcy1tYXRlcmlhbC9wYWdlcy9ib2FyZC1wYWdlL1tib2FyZC1wYWdlXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc1wiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJjb21wb25lbnRzL0N1c3RvbUJ1dHRvbnMvQnV0dG9uLmpzXCI7XG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tIFwiY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXIuanNcIjtcbmltcG9ydCBHcmlkSXRlbSBmcm9tIFwiY29tcG9uZW50cy9HcmlkL0dyaWRJdGVtLmpzXCI7XG5pbXBvcnQgSGVhZGVyTGlua3MgZnJvbSBcImNvbXBvbmVudHMvSGVhZGVyL0hlYWRlckxpbmtzLmpzXCI7XG5cblxuaW1wb3J0IHByb2ZpbGVQYWdlU3R5bGVzIGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvcGFnZXMvcHJvZmlsZVBhZ2UuanNcIjtcbmltcG9ydCB7IGNhcmRUaXRsZSB9IGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQuanNcIjtcblxuaW1wb3J0IGJvYXJkRGF0YSBmcm9tICdsaWIvYm9hcmRzLmpzb24nO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgLi4ucHJvZmlsZVBhZ2VTdHlsZXMsXG4gICAgY2FyZFRpdGxlLFxufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkUGFnZSh7IHByb3BzLCBhbGxCb2FyZHNEYXRhIH0pIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeVsnYm9hcmQtcGFnZSddO1xuXG4gICAgbGV0IGJvYXJkRGV0YWlsID0ge31cbiAgICBib2FyZERhdGEuYm9hcmRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnQubmFtZS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlkOiBcIiArIGlkKTtcbiAgICAgICAgaWYgKGVsZW1lbnQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlkKSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaWQpICsgJyAnICsgdHlwZW9mIChlbGVtZW50Lm5hbWUpKTtcbiAgICAgICAgICAgIGJvYXJkRGV0YWlsID0gZWxlbWVudDtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYm9hcmREZXRhaWxcIiArICcgJyArIEpTT04uc3RyaW5naWZ5KGJvYXJkRGV0YWlsKSk7XG5cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coXCJib2FyZERldGFpbC5pbWFnZSBcIiArIGJvYXJkRGV0YWlsLmltZyk7XG5cbiAgICBpZiAoSlNPTi5zdHJpbmdpZnkoYm9hcmREZXRhaWwpID09PSBKU09OLnN0cmluZ2lmeSh7fSkpIHtcbiAgICAgICAgLy8gcm91dGVyLnB1c2goJy8nKVxuICAgIH1cblxuICAgIC8vIGJvYXJkRGF0YS5ib2FyZHNcbiAgICAvLyBjb25zb2xlLmxvZyhcInNhc2RzXCIgKyBib2FyZERhdGEuYm9hcmRzWzBdLm5hbWUpO1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAgIGNvbnN0IHsgLi4ucmVzdCB9ID0gcHJvcHM7XG4gICAgY29uc3QgaW1hZ2VDbGFzc2VzID0gY2xhc3NOYW1lcyhcbiAgICAgICAgY2xhc3Nlcy5pbWdSYWlzZWQsXG4gICAgICAgIGNsYXNzZXMuaW1nUm91bmRlZENpcmNsZSxcbiAgICAgICAgY2xhc3Nlcy5pbWdGbHVpZFxuICAgICk7XG4gICAgY29uc3QgbmF2SW1hZ2VDbGFzc2VzID0gY2xhc3NOYW1lcyhjbGFzc2VzLmltZ1JvdW5kZWQsIGNsYXNzZXMuaW1nR2FsbGVyeSk7XG5cbiAgICBjb25zb2xlLmxvZyhge2lkfWApXG4gICAgY29uc29sZS5sb2coXCJyb3V0ZXIucXVlcnk6IFwiICsgcm91dGVyLnF1ZXJ5Wydib2FyZC1wYWdlJ10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBicmFuZD1cIk5leHRKUyBNYXRlcmlhbCBLaXRcIlxuICAgICAgICAgICAgICAgICAgICByaWdodExpbmtzPXs8SGVhZGVyTGlua3MgLz59XG4gICAgICAgICAgICAgICAgICAgIGZpeGVkXG4gICAgICAgICAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLm1haW4pfSBzdHlsZT17eyBwYWRkaW5nOiBcIjEyMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgPGgzPntib2FyZERldGFpbC5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiNDAlXCIsIGRpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luTGVmdDogXCJhdXRvXCIsIG1hcmdpblJpZ2h0OiBcImF1dG9cIiB9fVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2JvYXJkRGV0YWlsLmltZ31cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiQmFycmFjQm9hcmQgSW1hZ2V1ZGFcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz57Ym9hcmREZXRhaWwuZGVzY3JpcHRpb259PC9zdHJvbmc+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8aDY+U2l6ZSBSYW5nZToge2JvYXJkRGV0YWlsLmRpbXMucmFuZ2V9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPGg2Pk5vc2U6IHtib2FyZERldGFpbC5kaW1zLk5vc2V9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPGg2Pk1pZGRsZToge2JvYXJkRGV0YWlsLmRpbXMuTWlkZGxlfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxoNj5UYWlsOiB7Ym9hcmREZXRhaWwuZGltcy5UYWlsfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxoNj5UaGlja25lc3M6IHtib2FyZERldGFpbC5kaW1zLlRoaWNrbmVzc308L2g2PlxuICAgICAgICAgICAgICAgICAgICA8aDY+Vm9sdW1lOiB7Ym9hcmREZXRhaWwuZGltcy5Wb2x1bWV9PC9oNj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5EZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2RpdiA+XG4gICAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/sethlarkin/Desktop/Dev/Web/next.js/vernor-nextjs-material/pages/board-page/[board-page].js */"));
}

/***/ })

})
//# sourceMappingURL=[board-page].js.95bd0671e56257e33962.hot-update.js.map