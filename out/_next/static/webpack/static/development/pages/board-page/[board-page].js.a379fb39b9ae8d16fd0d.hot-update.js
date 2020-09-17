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
      console.log("BOARD_PAGE" + element.name.toLowerCase().includes(id) + ' ' + typeof element.name);
      boardDetail = element; // console.log("boardDetail" + ' ' + JSON.stringify(boardDetail));
    } else {
      router;
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
    className: "jsx-3980566995",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3980566995",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: "white",
    brand: "NextJS Material Kit",
    rightLinks: __jsx(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 33
      }
    }),
    fixed: true
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }))), __jsx("div", {
    style: {
      padding: "120px"
    },
    className: "jsx-3980566995" + " " + (classnames__WEBPACK_IMPORTED_MODULE_5___default()(classes.main) || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "jsx-3980566995",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
    className: "jsx-3980566995",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }), __jsx("hr", {
    className: "jsx-3980566995",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-3980566995",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, __jsx("br", {
    className: "jsx-3980566995",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "jsx-3980566995",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, __jsx("strong", {
    className: "jsx-3980566995",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 24
    }
  }, boardDetail.description)), __jsx("hr", {
    className: "jsx-3980566995",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }), __jsx("h6", {
    className: "jsx-3980566995",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, "Size Range: ", boardDetail.dims.range), __jsx("h6", {
    className: "jsx-3980566995",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, "Nose: ", boardDetail.dims.Nose), __jsx("h6", {
    className: "jsx-3980566995",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, "Middle: ", boardDetail.dims.Middle), __jsx("h6", {
    className: "jsx-3980566995",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, "Tail: ", boardDetail.dims.Tail), __jsx("h6", {
    className: "jsx-3980566995",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }, "Thickness: ", boardDetail.dims.Thickness), __jsx("h6", {
    className: "jsx-3980566995",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, "Volume: ", boardDetail.dims.Volume))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2866129173",
    __self: this
  }, "h3.jsx-3980566995{font-weight:bold;text-align:center;}p.jsx-3980566995{text-align:center;}@media (min-width:600px){p.jsx-3980566995{text-align:left;}img.jsx-3980566995{float:left;padding-right:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXRobGFya2luL0Rlc2t0b3AvRGV2L1dlYi9uZXh0LmpzL3Zlcm5vci1uZXh0anMtbWF0ZXJpYWwvcGFnZXMvYm9hcmQtcGFnZS9bYm9hcmQtcGFnZV0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0d3QixBQUdxQyxBQUlDLEFBS0UsQUFHTCxXQUNRLEtBSHRCLENBVGlCLENBSXJCLFlBU0ksS0FaSiIsImZpbGUiOiIvVXNlcnMvc2V0aGxhcmtpbi9EZXNrdG9wL0Rldi9XZWIvbmV4dC5qcy92ZXJub3ItbmV4dGpzLW1hdGVyaWFsL3BhZ2VzL2JvYXJkLXBhZ2UvW2JvYXJkLXBhZ2VdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5cbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCJjb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcImNvbXBvbmVudHMvQ3VzdG9tQnV0dG9ucy9CdXR0b24uanNcIjtcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gXCJjb21wb25lbnRzL0dyaWQvR3JpZENvbnRhaW5lci5qc1wiO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gXCJjb21wb25lbnRzL0dyaWQvR3JpZEl0ZW0uanNcIjtcbmltcG9ydCBIZWFkZXJMaW5rcyBmcm9tIFwiY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyTGlua3MuanNcIjtcblxuXG5pbXBvcnQgcHJvZmlsZVBhZ2VTdHlsZXMgZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9wYWdlcy9wcm9maWxlUGFnZS5qc1wiO1xuaW1wb3J0IHsgY2FyZFRpdGxlIH0gZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC5qc1wiO1xuXG5pbXBvcnQgYm9hcmREYXRhIGZyb20gJ2xpYi9ib2FyZHMuanNvbic7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICAuLi5wcm9maWxlUGFnZVN0eWxlcyxcbiAgICBjYXJkVGl0bGUsXG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmRQYWdlKHsgcHJvcHMsIGFsbEJvYXJkc0RhdGEgfSkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IGlkID0gcm91dGVyLnF1ZXJ5Wydib2FyZC1wYWdlJ107XG5cbiAgICBsZXQgYm9hcmREZXRhaWwgPSB7fVxuICAgIGJvYXJkRGF0YS5ib2FyZHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudC5uYW1lLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaWQ6IFwiICsgaWQpO1xuICAgICAgICBpZiAoZWxlbWVudC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJPQVJEX1BBR0VcIiArIGVsZW1lbnQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlkKSArICcgJyArIHR5cGVvZiAoZWxlbWVudC5uYW1lKSk7XG4gICAgICAgICAgICBib2FyZERldGFpbCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImJvYXJkRGV0YWlsXCIgKyAnICcgKyBKU09OLnN0cmluZ2lmeShib2FyZERldGFpbCkpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb3V0ZXJcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coXCJib2FyZERldGFpbC5pbWFnZSBcIiArIGJvYXJkRGV0YWlsLmltZyk7XG5cbiAgICBpZiAoSlNPTi5zdHJpbmdpZnkoYm9hcmREZXRhaWwpID09PSBKU09OLnN0cmluZ2lmeSh7fSkpIHtcbiAgICAgICAgLy8gcm91dGVyLnB1c2goJy8nKVxuICAgIH1cblxuICAgIC8vIGJvYXJkRGF0YS5ib2FyZHNcbiAgICAvLyBjb25zb2xlLmxvZyhcInNhc2RzXCIgKyBib2FyZERhdGEuYm9hcmRzWzBdLm5hbWUpO1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAgIGNvbnN0IHsgLi4ucmVzdCB9ID0gcHJvcHM7XG4gICAgY29uc3QgaW1hZ2VDbGFzc2VzID0gY2xhc3NOYW1lcyhcbiAgICAgICAgY2xhc3Nlcy5pbWdSYWlzZWQsXG4gICAgICAgIGNsYXNzZXMuaW1nUm91bmRlZENpcmNsZSxcbiAgICAgICAgY2xhc3Nlcy5pbWdGbHVpZFxuICAgICk7XG4gICAgY29uc3QgbmF2SW1hZ2VDbGFzc2VzID0gY2xhc3NOYW1lcyhjbGFzc2VzLmltZ1JvdW5kZWQsIGNsYXNzZXMuaW1nR2FsbGVyeSk7XG5cbiAgICBjb25zb2xlLmxvZyhge2lkfWApXG4gICAgY29uc29sZS5sb2coXCJyb3V0ZXIucXVlcnk6IFwiICsgcm91dGVyLnF1ZXJ5Wydib2FyZC1wYWdlJ10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBicmFuZD1cIk5leHRKUyBNYXRlcmlhbCBLaXRcIlxuICAgICAgICAgICAgICAgICAgICByaWdodExpbmtzPXs8SGVhZGVyTGlua3MgLz59XG4gICAgICAgICAgICAgICAgICAgIGZpeGVkXG4gICAgICAgICAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLm1haW4pfSBzdHlsZT17eyBwYWRkaW5nOiBcIjEyMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgPGgzPntib2FyZERldGFpbC5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiNDAlXCIsIGRpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luTGVmdDogXCJhdXRvXCIsIG1hcmdpblJpZ2h0OiBcImF1dG9cIiB9fVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2JvYXJkRGV0YWlsLmltZ31cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiQmFycmFjQm9hcmQgSW1hZ2V1ZGFcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPntib2FyZERldGFpbC5kZXNjcmlwdGlvbn08L3N0cm9uZz48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgICAgICA8aDY+U2l6ZSBSYW5nZToge2JvYXJkRGV0YWlsLmRpbXMucmFuZ2V9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPGg2Pk5vc2U6IHtib2FyZERldGFpbC5kaW1zLk5vc2V9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPGg2Pk1pZGRsZToge2JvYXJkRGV0YWlsLmRpbXMuTWlkZGxlfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxoNj5UYWlsOiB7Ym9hcmREZXRhaWwuZGltcy5UYWlsfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxoNj5UaGlja25lc3M6IHtib2FyZERldGFpbC5kaW1zLlRoaWNrbmVzc308L2g2PlxuICAgICAgICAgICAgICAgICAgICA8aDY+Vm9sdW1lOiB7Ym9hcmREZXRhaWwuZGltcy5Wb2x1bWV9PC9oNj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmxvYXQ6cmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgICAgICAgIC8vIGJvZHkge1xuICAgICAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2ID5cbiAgICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/sethlarkin/Desktop/Dev/Web/next.js/vernor-nextjs-material/pages/board-page/[board-page].js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2539651407",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXRobGFya2luL0Rlc2t0b3AvRGV2L1dlYi9uZXh0LmpzL3Zlcm5vci1uZXh0anMtbWF0ZXJpYWwvcGFnZXMvYm9hcmQtcGFnZS9bYm9hcmQtcGFnZV0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUgrQiIsImZpbGUiOiIvVXNlcnMvc2V0aGxhcmtpbi9EZXNrdG9wL0Rldi9XZWIvbmV4dC5qcy92ZXJub3ItbmV4dGpzLW1hdGVyaWFsL3BhZ2VzL2JvYXJkLXBhZ2UvW2JvYXJkLXBhZ2VdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5cbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCJjb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcImNvbXBvbmVudHMvQ3VzdG9tQnV0dG9ucy9CdXR0b24uanNcIjtcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gXCJjb21wb25lbnRzL0dyaWQvR3JpZENvbnRhaW5lci5qc1wiO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gXCJjb21wb25lbnRzL0dyaWQvR3JpZEl0ZW0uanNcIjtcbmltcG9ydCBIZWFkZXJMaW5rcyBmcm9tIFwiY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyTGlua3MuanNcIjtcblxuXG5pbXBvcnQgcHJvZmlsZVBhZ2VTdHlsZXMgZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9wYWdlcy9wcm9maWxlUGFnZS5qc1wiO1xuaW1wb3J0IHsgY2FyZFRpdGxlIH0gZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC5qc1wiO1xuXG5pbXBvcnQgYm9hcmREYXRhIGZyb20gJ2xpYi9ib2FyZHMuanNvbic7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICAuLi5wcm9maWxlUGFnZVN0eWxlcyxcbiAgICBjYXJkVGl0bGUsXG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmRQYWdlKHsgcHJvcHMsIGFsbEJvYXJkc0RhdGEgfSkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IGlkID0gcm91dGVyLnF1ZXJ5Wydib2FyZC1wYWdlJ107XG5cbiAgICBsZXQgYm9hcmREZXRhaWwgPSB7fVxuICAgIGJvYXJkRGF0YS5ib2FyZHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudC5uYW1lLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaWQ6IFwiICsgaWQpO1xuICAgICAgICBpZiAoZWxlbWVudC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJPQVJEX1BBR0VcIiArIGVsZW1lbnQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlkKSArICcgJyArIHR5cGVvZiAoZWxlbWVudC5uYW1lKSk7XG4gICAgICAgICAgICBib2FyZERldGFpbCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImJvYXJkRGV0YWlsXCIgKyAnICcgKyBKU09OLnN0cmluZ2lmeShib2FyZERldGFpbCkpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb3V0ZXJcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coXCJib2FyZERldGFpbC5pbWFnZSBcIiArIGJvYXJkRGV0YWlsLmltZyk7XG5cbiAgICBpZiAoSlNPTi5zdHJpbmdpZnkoYm9hcmREZXRhaWwpID09PSBKU09OLnN0cmluZ2lmeSh7fSkpIHtcbiAgICAgICAgLy8gcm91dGVyLnB1c2goJy8nKVxuICAgIH1cblxuICAgIC8vIGJvYXJkRGF0YS5ib2FyZHNcbiAgICAvLyBjb25zb2xlLmxvZyhcInNhc2RzXCIgKyBib2FyZERhdGEuYm9hcmRzWzBdLm5hbWUpO1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAgIGNvbnN0IHsgLi4ucmVzdCB9ID0gcHJvcHM7XG4gICAgY29uc3QgaW1hZ2VDbGFzc2VzID0gY2xhc3NOYW1lcyhcbiAgICAgICAgY2xhc3Nlcy5pbWdSYWlzZWQsXG4gICAgICAgIGNsYXNzZXMuaW1nUm91bmRlZENpcmNsZSxcbiAgICAgICAgY2xhc3Nlcy5pbWdGbHVpZFxuICAgICk7XG4gICAgY29uc3QgbmF2SW1hZ2VDbGFzc2VzID0gY2xhc3NOYW1lcyhjbGFzc2VzLmltZ1JvdW5kZWQsIGNsYXNzZXMuaW1nR2FsbGVyeSk7XG5cbiAgICBjb25zb2xlLmxvZyhge2lkfWApXG4gICAgY29uc29sZS5sb2coXCJyb3V0ZXIucXVlcnk6IFwiICsgcm91dGVyLnF1ZXJ5Wydib2FyZC1wYWdlJ10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBicmFuZD1cIk5leHRKUyBNYXRlcmlhbCBLaXRcIlxuICAgICAgICAgICAgICAgICAgICByaWdodExpbmtzPXs8SGVhZGVyTGlua3MgLz59XG4gICAgICAgICAgICAgICAgICAgIGZpeGVkXG4gICAgICAgICAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLm1haW4pfSBzdHlsZT17eyBwYWRkaW5nOiBcIjEyMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgPGgzPntib2FyZERldGFpbC5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiNDAlXCIsIGRpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luTGVmdDogXCJhdXRvXCIsIG1hcmdpblJpZ2h0OiBcImF1dG9cIiB9fVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2JvYXJkRGV0YWlsLmltZ31cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiQmFycmFjQm9hcmQgSW1hZ2V1ZGFcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPntib2FyZERldGFpbC5kZXNjcmlwdGlvbn08L3N0cm9uZz48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgICAgICA8aDY+U2l6ZSBSYW5nZToge2JvYXJkRGV0YWlsLmRpbXMucmFuZ2V9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPGg2Pk5vc2U6IHtib2FyZERldGFpbC5kaW1zLk5vc2V9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPGg2Pk1pZGRsZToge2JvYXJkRGV0YWlsLmRpbXMuTWlkZGxlfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxoNj5UYWlsOiB7Ym9hcmREZXRhaWwuZGltcy5UYWlsfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxoNj5UaGlja25lc3M6IHtib2FyZERldGFpbC5kaW1zLlRoaWNrbmVzc308L2g2PlxuICAgICAgICAgICAgICAgICAgICA8aDY+Vm9sdW1lOiB7Ym9hcmREZXRhaWwuZGltcy5Wb2x1bWV9PC9oNj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmxvYXQ6cmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgICAgICAgIC8vIGJvZHkge1xuICAgICAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2ID5cbiAgICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/sethlarkin/Desktop/Dev/Web/next.js/vernor-nextjs-material/pages/board-page/[board-page].js */"));
}

/***/ })

})
//# sourceMappingURL=[board-page].js.a379fb39b9ae8d16fd0d.hot-update.js.map