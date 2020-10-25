webpackHotUpdate("static/development/pages/board-page/[board-page].js",{

/***/ "./pages/board-page/[board-page].js":
/*!******************************************!*\
  !*** ./pages/board-page/[board-page].js ***!
  \******************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
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
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./components/Header/HeaderLinks.js");
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-youtube */ "./node_modules/react-youtube/dist/index.esm.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pages_profilePage_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/profilePage.js */ "./assets/jss/nextjs-material-kit/pages/profilePage.js");
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");


var _jsxFileName = "/Users/sethlarkin/Dev/Web/next.js/vernor-nextjs-material/pages/board-page/[board-page].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // nodejs library that concatenates classes

 // @material-ui/core components

 // core components








var styles = _objectSpread({}, assets_jss_nextjs_material_kit_pages_profilePage_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
  cardTitle: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_12__["cardTitle"]
});

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(styles);
var __N_SSG = true;
function BoardPage(_ref) {
  var props = _ref.props,
      boardData = _ref.boardData;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var id = router.query['board-page'];
  var opts = {
    height: '220',
    width: '320',
    playerVars: {// https://developers.google.com/youtube/player_parameters
      // autoplay: 1,
    }
  };
  var boardDetail = {};
  boardData.boards.forEach(function (element) {
    if (element.model === id) {
      boardDetail = element;
    }
  });

  var video = __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  });

  if ('video' in boardDetail) {
    video = __jsx(react_youtube__WEBPACK_IMPORTED_MODULE_10__["default"], {
      videoId: boardDetail.video,
      opts: opts,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    });
  }

  var classes = useStyles();

  var rest = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props);

  return __jsx("div", {
    className: "jsx-318511535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-318511535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: "white",
    brand: "NextJS Material Kit",
    rightLinks: __jsx(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 33
      }
    }),
    fixed: true
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-318511535" + " " + (classnames__WEBPACK_IMPORTED_MODULE_5___default()(classes.main) || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-318511535" + " " + 'board-container',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-318511535" + " " + "column left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: "jsx-318511535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, boardDetail.name), __jsx("img", {
    style: {
      height: "100px",
      maxWidth: "20em",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
    },
    src: boardDetail.logo,
    alt: "Board Logo",
    className: "jsx-318511535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 25
    }
  }), __jsx("img", {
    style: {
      height: "40%",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
    },
    src: boardDetail.img,
    alt: "BarracBoard Imageuda",
    className: "jsx-318511535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  })), __jsx("hr", {
    className: "jsx-318511535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "jsx-318511535" + " " + "column right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-318511535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }, __jsx("br", {
    className: "jsx-318511535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 29
    }
  }), __jsx("p", {
    className: "jsx-318511535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 29
    }
  }, __jsx("strong", {
    className: "jsx-318511535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 32
    }
  }, boardDetail.description)), __jsx("hr", {
    className: "jsx-318511535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 29
    }
  }), __jsx("h6", {
    className: "jsx-318511535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 29
    }
  }, "Size Range: ", boardDetail.dims.range), __jsx("h6", {
    className: "jsx-318511535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 29
    }
  }, "Nose: ", boardDetail.dims.Nose), __jsx("h6", {
    className: "jsx-318511535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 29
    }
  }, "Middle: ", boardDetail.dims.Middle), __jsx("h6", {
    className: "jsx-318511535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 29
    }
  }, "Tail: ", boardDetail.dims.Tail), __jsx("h6", {
    className: "jsx-318511535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 29
    }
  }, "Thickness: ", boardDetail.dims.Thickness), __jsx("h6", {
    className: "jsx-318511535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  }, "Volume: ", boardDetail.dims.Volume), __jsx("p", {
    className: "jsx-318511535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 29
    }
  }, __jsx("strong", {
    className: "jsx-318511535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 32
    }
  }, "--------")), __jsx("h4", {
    className: "jsx-318511535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 29
    }
  }, __jsx("strong", {
    className: "jsx-318511535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }, "Prices:")), __jsx("h6", {
    className: "jsx-318511535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 29
    }
  }, "Epoxy: $", boardDetail.eps_price), __jsx("h6", {
    className: "jsx-318511535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 29
    }
  }, "Polyester: $", boardDetail.poly_price), __jsx("h6", {
    className: "jsx-318511535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 29
    }
  }, "With suspension: + $60"), __jsx("h6", {
    className: "jsx-318511535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 29
    }
  }, "Stringerless carbon strip flex deck!!!: + $30 (available in all models)"))), __jsx("br", {
    className: "jsx-318511535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "jsx-318511535" + " " + "video row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, video), __jsx("div", {
    className: "jsx-318511535" + " " + "footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, __jsx(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 39
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "318511535",
    __self: this
  }, "h3.jsx-318511535{font-weight:bold;text-align:center;}p.jsx-318511535{text-align:center;}.red.jsx-318511535{color:red;}.board-container.jsx-318511535{margin-top:50px;padding:5px;}.video.jsx-318511535{margin:0 5%;display:block;padding-top:15px;margin-left:10%;margin-right:10%;}@media (min-width:840px){.board-container.jsx-318511535{margin:100px 5px 5px 0px;min-height:40%;padding:5px;}.main.jsx-318511535{margin-top:70px;}p.jsx-318511535{text-align:left;}img.jsx-318511535{float:left;padding-right:20px;}.column.jsx-318511535{float:left;max-height:65%;}.left.jsx-318511535{width:25%;}.right.jsx-318511535{width:75%;}.footer.jsx-318511535{width:95%;textAlign:center;}.video.jsx-318511535{margin:auto;clear:both;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXRobGFya2luL0Rldi9XZWIvbmV4dC5qcy92ZXJub3ItbmV4dGpzLW1hdGVyaWFsL3BhZ2VzL2JvYXJkLXBhZ2UvW2JvYXJkLXBhZ2VdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBId0IsQUFHcUMsQUFJQyxBQUdQLEFBR00sQUFNSixBQVFpQixBQU1ULEFBSUQsQUFHTCxBQUlDLEFBS0QsQUFJQSxBQUdJLEFBSUYsVUFqRHBCLEFBd0NLLEFBQUMsQUFHQSxBQUd1QixDQWhCSCxBQUlKLENBekJKLEFBeUNDLElBOUNwQixBQW1CSyxBQUlBLENBbENpQixDQUlyQixLQXNEcUIsRUFqQ0UsQ0FSRixBQXlCZixDQVlBLENBM0NOLEVBMkJJLEtBckNKLEtBeUJvQixHQVJBLFNBU2hCLE9BUmlCLGlCQUNyQixxQkF1QytCLG1HQUNKLDZGQUMzQiIsImZpbGUiOiIvVXNlcnMvc2V0aGxhcmtpbi9EZXYvV2ViL25leHQuanMvdmVybm9yLW5leHRqcy1tYXRlcmlhbC9wYWdlcy9ib2FyZC1wYWdlL1tib2FyZC1wYWdlXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG4vLyBjb3JlIGNvbXBvbmVudHNcbmltcG9ydCBIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc1wiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzXCI7XG5pbXBvcnQgSGVhZGVyTGlua3MgZnJvbSBcImNvbXBvbmVudHMvSGVhZGVyL0hlYWRlckxpbmtzLmpzXCI7XG5pbXBvcnQgWW91VHViZSBmcm9tIFwicmVhY3QteW91dHViZVwiXG5cblxuaW1wb3J0IHByb2ZpbGVQYWdlU3R5bGVzIGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvcGFnZXMvcHJvZmlsZVBhZ2UuanNcIjtcbmltcG9ydCB7IGNhcmRUaXRsZSB9IGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQuanNcIjtcblxuaW1wb3J0IGJvYXJkRGF0YSBmcm9tICdsaWIvYm9hcmRzLmpzb24nO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgLi4ucHJvZmlsZVBhZ2VTdHlsZXMsXG4gICAgY2FyZFRpdGxlLFxufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkUGFnZSh7IHByb3BzLCBib2FyZERhdGEgfSkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IGlkID0gcm91dGVyLnF1ZXJ5Wydib2FyZC1wYWdlJ107XG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgICAgaGVpZ2h0OiAnMjIwJyxcbiAgICAgICAgd2lkdGg6ICczMjAnLFxuICAgICAgICBwbGF5ZXJWYXJzOiB7XG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3BsYXllcl9wYXJhbWV0ZXJzXG4gICAgICAgICAgICAvLyBhdXRvcGxheTogMSxcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgbGV0IGJvYXJkRGV0YWlsID0ge31cbiAgICBib2FyZERhdGEuYm9hcmRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50Lm1vZGVsID09PSBpZCkge1xuICAgICAgICAgICAgYm9hcmREZXRhaWwgPSBlbGVtZW50O1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgdmlkZW8gPSA8YnIgLz5cbiAgICBpZiAoJ3ZpZGVvJyBpbiBib2FyZERldGFpbCkge1xuICAgICAgICB2aWRlbyA9IDxZb3VUdWJlIHZpZGVvSWQ9e2JvYXJkRGV0YWlsLnZpZGVvfSBvcHRzPXtvcHRzfSAvPlxuICAgIH1cblxuXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAgIGNvbnN0IHsgLi4ucmVzdCB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEhlYWRlclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgYnJhbmQ9XCJOZXh0SlMgTWF0ZXJpYWwgS2l0XCJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRMaW5rcz17PEhlYWRlckxpbmtzIC8+fVxuICAgICAgICAgICAgICAgICAgICBmaXhlZFxuICAgICAgICAgICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5tYWluKX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvYXJkLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNvbHVtbiBsZWZ0XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntib2FyZERldGFpbC5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMHB4XCIsIG1heFdpZHRoOiBcIjIwZW1cIiwgZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW5MZWZ0OiBcImF1dG9cIiwgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtib2FyZERldGFpbC5sb2dvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkJvYXJkIExvZ29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiNDAlXCIsIGRpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luTGVmdDogXCJhdXRvXCIsIG1hcmdpblJpZ2h0OiBcImF1dG9cIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Ym9hcmREZXRhaWwuaW1nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkJhcnJhY0JvYXJkIEltYWdldWRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjb2x1bW4gcmlnaHRcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPntib2FyZERldGFpbC5kZXNjcmlwdGlvbn08L3N0cm9uZz48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlNpemUgUmFuZ2U6IHtib2FyZERldGFpbC5kaW1zLnJhbmdlfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pk5vc2U6IHtib2FyZERldGFpbC5kaW1zLk5vc2V9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+TWlkZGxlOiB7Ym9hcmREZXRhaWwuZGltcy5NaWRkbGV9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+VGFpbDoge2JvYXJkRGV0YWlsLmRpbXMuVGFpbH08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5UaGlja25lc3M6IHtib2FyZERldGFpbC5kaW1zLlRoaWNrbmVzc308L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5Wb2x1bWU6IHtib2FyZERldGFpbC5kaW1zLlZvbHVtZX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+LS0tLS0tLS08L3N0cm9uZz48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxzdHJvbmc+UHJpY2VzOjwvc3Ryb25nPjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkVwb3h5OiAke2JvYXJkRGV0YWlsLmVwc19wcmljZX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5Qb2x5ZXN0ZXI6ICR7Ym9hcmREZXRhaWwucG9seV9wcmljZX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5XaXRoIHN1c3BlbnNpb246ICsgJDYwPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+U3RyaW5nZXJsZXNzIGNhcmJvbiBzdHJpcCBmbGV4IGRlY2shISE6ICsgJDMwIChhdmFpbGFibGUgaW4gYWxsIG1vZGVscyk8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1NjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMxNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvZlBtcGxrMGFBQThcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvIHJvd1wiPlxuICAgICAgICAgICAgICAgIHt2aWRlb31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZm9vdGVyXCJ9PjxGb290ZXIgLz48L2Rpdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJlZCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ib2FyZC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjVweFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudmlkZW8ge1xuICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogNjQwcHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogNjY1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA1JTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDg0MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIC5ib2FyZC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMDBweCA1cHggNXB4IDBweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5tYWluIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmbG9hdDpyaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDo2NSU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIC5sZWZ0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC5yaWdodCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAudmlkZW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7IFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2ID5cbiAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgYm9hcmREYXRhXG4gICAgICAgIH0sXG4gICAgfVxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkIGF0IGJ1aWxkIHRpbWVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcblxuICAgIC8vIEdldCB0aGUgcGF0aHMgd2Ugd2FudCB0byBwcmUtcmVuZGVyIGJhc2VkIG9uIHBvc3RzXG4gICAgY29uc3QgcGF0aHMgPSBib2FyZERhdGEuYm9hcmRzLm1hcCgoYm9hcmQpID0+IGAvYm9hcmQtcGFnZS8ke2JvYXJkLm1vZGVsfWApXG5cbiAgICAvLyBXZSdsbCBwcmUtcmVuZGVyIG9ubHkgdGhlc2UgcGF0aHMgYXQgYnVpbGQgdGltZS5cbiAgICAvLyB7IGZhbGxiYWNrOiBmYWxzZSB9IG1lYW5zIG90aGVyIHJvdXRlcyBzaG91bGQgNDA0LlxuICAgIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfVxufVxuIl19 */\n/*@ sourceURL=/Users/sethlarkin/Dev/Web/next.js/vernor-nextjs-material/pages/board-page/[board-page].js */"));
}

/***/ })

})
//# sourceMappingURL=[board-page].js.c168c6b55669fc30e45e.hot-update.js.map