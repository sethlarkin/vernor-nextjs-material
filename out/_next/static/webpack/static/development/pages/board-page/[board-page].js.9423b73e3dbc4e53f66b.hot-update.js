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
    className: "jsx-2862584230",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2862584230",
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
    className: "jsx-2862584230" + " " + (classnames__WEBPACK_IMPORTED_MODULE_5___default()(classes.main) || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2862584230" + " " + 'board-container',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-2862584230" + " " + "column left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: "jsx-2862584230",
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
    className: "jsx-2862584230",
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
    className: "jsx-2862584230",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  })), __jsx("hr", {
    className: "jsx-2862584230",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "jsx-2862584230" + " " + "column right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-2862584230",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }, __jsx("br", {
    className: "jsx-2862584230",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 29
    }
  }), __jsx("p", {
    className: "jsx-2862584230",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 29
    }
  }, __jsx("strong", {
    className: "jsx-2862584230",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 32
    }
  }, boardDetail.description)), __jsx("hr", {
    className: "jsx-2862584230",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 29
    }
  }), __jsx("h6", {
    className: "jsx-2862584230",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 29
    }
  }, "Size Range: ", boardDetail.dims.range), __jsx("h6", {
    className: "jsx-2862584230",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 29
    }
  }, "Nose: ", boardDetail.dims.Nose), __jsx("h6", {
    className: "jsx-2862584230",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 29
    }
  }, "Middle: ", boardDetail.dims.Middle), __jsx("h6", {
    className: "jsx-2862584230",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 29
    }
  }, "Tail: ", boardDetail.dims.Tail), __jsx("h6", {
    className: "jsx-2862584230",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 29
    }
  }, "Thickness: ", boardDetail.dims.Thickness), __jsx("h6", {
    className: "jsx-2862584230",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  }, "Volume: ", boardDetail.dims.Volume), __jsx("p", {
    className: "jsx-2862584230",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 29
    }
  }, __jsx("strong", {
    className: "jsx-2862584230",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 32
    }
  }, "--------")), __jsx("h4", {
    className: "jsx-2862584230",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 29
    }
  }, __jsx("strong", {
    className: "jsx-2862584230",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }, "Prices:")), __jsx("h6", {
    className: "jsx-2862584230",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 29
    }
  }, "Epoxy: $", boardDetail.eps_price), __jsx("h6", {
    className: "jsx-2862584230",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 29
    }
  }, "Polyester: $", boardDetail.poly_price), __jsx("h6", {
    className: "jsx-2862584230",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 29
    }
  }, "With suspension: + $60"), __jsx("h6", {
    className: "jsx-2862584230",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 29
    }
  }, "Stringerless carbon strip flex deck!!!: + $30 (available in all models)"))), __jsx("br", {
    className: "jsx-2862584230",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "jsx-2862584230" + " " + "video",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, video), __jsx("div", {
    className: "jsx-2862584230" + " " + "footer",
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
    id: "765858848",
    __self: this
  }, "h3.jsx-2862584230{font-weight:bold;text-align:center;}p.jsx-2862584230{text-align:center;}.red.jsx-2862584230{color:red;}.board-container.jsx-2862584230{margin-top:50px;padding:5px;}.video.jsx-2862584230{margin:0 5%;display:block;padding-top:15px;margin-left:10%;margin-right:10%;}@media (min-width:840px){.board-container.jsx-2862584230{margin:100px 5px 5px 0px;min-height:40%;padding:5px;}.main.jsx-2862584230{margin-top:70px;}p.jsx-2862584230{text-align:left;}img.jsx-2862584230{float:left;padding-right:20px;}.column.jsx-2862584230{float:left;max-height:65%;}.left.jsx-2862584230{width:25%;}.right.jsx-2862584230{width:75%;}.footer.jsx-2862584230{width:95%;textAlign:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXRobGFya2luL0Rldi9XZWIvbmV4dC5qcy92ZXJub3ItbmV4dGpzLW1hdGVyaWFsL3BhZ2VzL2JvYXJkLXBhZ2UvW2JvYXJkLXBhZ2VdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBId0IsQUFHcUMsQUFJQyxBQUdQLEFBR00sQUFNSixBQVFpQixBQU1ULEFBSUQsQUFHTCxBQUlDLEFBS0QsQUFLQSxBQUtJLFVBaER0QixBQXdDTSxBQUlBLEFBT3VCLENBckJILEFBSUosQ0F6QkosSUFMbkIsQUFtQkssQUFJQSxDQWxDaUIsQ0FJckIsT0FxQnVCLENBUkYsQUF5QmYsQ0FpQkEsQ0FoRE4sRUEyQkksS0FyQ0osS0F5Qm9CLEdBUkEsU0FTaEIsT0FSaUIsaUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9zZXRobGFya2luL0Rldi9XZWIvbmV4dC5qcy92ZXJub3ItbmV4dGpzLW1hdGVyaWFsL3BhZ2VzL2JvYXJkLXBhZ2UvW2JvYXJkLXBhZ2VdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5cbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCJjb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanNcIjtcbmltcG9ydCBIZWFkZXJMaW5rcyBmcm9tIFwiY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyTGlua3MuanNcIjtcbmltcG9ydCBZb3VUdWJlIGZyb20gXCJyZWFjdC15b3V0dWJlXCJcblxuXG5pbXBvcnQgcHJvZmlsZVBhZ2VTdHlsZXMgZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9wYWdlcy9wcm9maWxlUGFnZS5qc1wiO1xuaW1wb3J0IHsgY2FyZFRpdGxlIH0gZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC5qc1wiO1xuXG5pbXBvcnQgYm9hcmREYXRhIGZyb20gJ2xpYi9ib2FyZHMuanNvbic7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICAuLi5wcm9maWxlUGFnZVN0eWxlcyxcbiAgICBjYXJkVGl0bGUsXG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmRQYWdlKHsgcHJvcHMsIGJvYXJkRGF0YSB9KSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgaWQgPSByb3V0ZXIucXVlcnlbJ2JvYXJkLXBhZ2UnXTtcbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgICBoZWlnaHQ6ICcyMjAnLFxuICAgICAgICB3aWR0aDogJzMyMCcsXG4gICAgICAgIHBsYXllclZhcnM6IHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvcGxheWVyX3BhcmFtZXRlcnNcbiAgICAgICAgICAgIC8vIGF1dG9wbGF5OiAxLFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBsZXQgYm9hcmREZXRhaWwgPSB7fVxuICAgIGJvYXJkRGF0YS5ib2FyZHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQubW9kZWwgPT09IGlkKSB7XG4gICAgICAgICAgICBib2FyZERldGFpbCA9IGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCB2aWRlbyA9IDxiciAvPlxuICAgIGlmICgndmlkZW8nIGluIGJvYXJkRGV0YWlsKSB7XG4gICAgICAgIHZpZGVvID0gPFlvdVR1YmUgdmlkZW9JZD17Ym9hcmREZXRhaWwudmlkZW99IG9wdHM9e29wdHN9IC8+XG4gICAgfVxuXG5cbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gICAgY29uc3QgeyAuLi5yZXN0IH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBicmFuZD1cIk5leHRKUyBNYXRlcmlhbCBLaXRcIlxuICAgICAgICAgICAgICAgICAgICByaWdodExpbmtzPXs8SGVhZGVyTGlua3MgLz59XG4gICAgICAgICAgICAgICAgICAgIGZpeGVkXG4gICAgICAgICAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLm1haW4pfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9hcmQtY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY29sdW1uIGxlZnRcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2JvYXJkRGV0YWlsLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwcHhcIiwgbWF4V2lkdGg6IFwiMjBlbVwiLCBkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLCBtYXJnaW5SaWdodDogXCJhdXRvXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2JvYXJkRGV0YWlsLmxvZ299XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQm9hcmQgTG9nb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI0MCVcIiwgZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW5MZWZ0OiBcImF1dG9cIiwgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtib2FyZERldGFpbC5pbWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQmFycmFjQm9hcmQgSW1hZ2V1ZGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNvbHVtbiByaWdodFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+e2JvYXJkRGV0YWlsLmRlc2NyaXB0aW9ufTwvc3Ryb25nPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+U2l6ZSBSYW5nZToge2JvYXJkRGV0YWlsLmRpbXMucmFuZ2V9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+Tm9zZToge2JvYXJkRGV0YWlsLmRpbXMuTm9zZX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5NaWRkbGU6IHtib2FyZERldGFpbC5kaW1zLk1pZGRsZX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5UYWlsOiB7Ym9hcmREZXRhaWwuZGltcy5UYWlsfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlRoaWNrbmVzczoge2JvYXJkRGV0YWlsLmRpbXMuVGhpY2tuZXNzfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlZvbHVtZToge2JvYXJkRGV0YWlsLmRpbXMuVm9sdW1lfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz4tLS0tLS0tLTwvc3Ryb25nPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+PHN0cm9uZz5QcmljZXM6PC9zdHJvbmc+PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+RXBveHk6ICR7Ym9hcmREZXRhaWwuZXBzX3ByaWNlfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlBvbHllc3RlcjogJHtib2FyZERldGFpbC5wb2x5X3ByaWNlfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PldpdGggc3VzcGVuc2lvbjogKyAkNjA8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5TdHJpbmdlcmxlc3MgY2FyYm9uIHN0cmlwIGZsZXggZGVjayEhITogKyAkMzAgKGF2YWlsYWJsZSBpbiBhbGwgbW9kZWxzKTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjU2MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzE1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9mUG1wbGswYUFBOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaWZyYW1lPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW9cIj5cbiAgICAgICAgICAgICAgICB7dmlkZW99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImZvb3RlclwifT48Rm9vdGVyIC8+PC9kaXY+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yZWQge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYm9hcmQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzo1cHhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnZpZGVvIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDY0MHB4O1xuICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDY2NXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgNSU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4NDBweCkge1xuICAgICAgICAgICAgICAgICAgICAuYm9hcmQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTAwcHggNXB4IDVweCAwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubWFpbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmxvYXQ6cmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6NjUlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAubGVmdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIC5yaWdodCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogMTAwcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgICAgICAgIC8vIGJvZHkge1xuICAgICAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgPC9kaXYgPlxuICAgICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBib2FyZERhdGFcbiAgICAgICAgfSxcbiAgICB9XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgYXQgYnVpbGQgdGltZVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuXG4gICAgLy8gR2V0IHRoZSBwYXRocyB3ZSB3YW50IHRvIHByZS1yZW5kZXIgYmFzZWQgb24gcG9zdHNcbiAgICBjb25zdCBwYXRocyA9IGJvYXJkRGF0YS5ib2FyZHMubWFwKChib2FyZCkgPT4gYC9ib2FyZC1wYWdlLyR7Ym9hcmQubW9kZWx9YClcblxuICAgIC8vIFdlJ2xsIHByZS1yZW5kZXIgb25seSB0aGVzZSBwYXRocyBhdCBidWlsZCB0aW1lLlxuICAgIC8vIHsgZmFsbGJhY2s6IGZhbHNlIH0gbWVhbnMgb3RoZXIgcm91dGVzIHNob3VsZCA0MDQuXG4gICAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/sethlarkin/Dev/Web/next.js/vernor-nextjs-material/pages/board-page/[board-page].js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2539651407",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXRobGFya2luL0Rldi9XZWIvbmV4dC5qcy92ZXJub3ItbmV4dGpzLW1hdGVyaWFsL3BhZ2VzL2JvYXJkLXBhZ2UvW2JvYXJkLXBhZ2VdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRMK0IiLCJmaWxlIjoiL1VzZXJzL3NldGhsYXJraW4vRGV2L1dlYi9uZXh0LmpzL3Zlcm5vci1uZXh0anMtbWF0ZXJpYWwvcGFnZXMvYm9hcmQtcGFnZS9bYm9hcmQtcGFnZV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcblxuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanNcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcImNvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc1wiO1xuaW1wb3J0IEhlYWRlckxpbmtzIGZyb20gXCJjb21wb25lbnRzL0hlYWRlci9IZWFkZXJMaW5rcy5qc1wiO1xuaW1wb3J0IFlvdVR1YmUgZnJvbSBcInJlYWN0LXlvdXR1YmVcIlxuXG5cbmltcG9ydCBwcm9maWxlUGFnZVN0eWxlcyBmcm9tIFwiYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L3BhZ2VzL3Byb2ZpbGVQYWdlLmpzXCI7XG5pbXBvcnQgeyBjYXJkVGl0bGUgfSBmcm9tIFwiYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0LmpzXCI7XG5cbmltcG9ydCBib2FyZERhdGEgZnJvbSAnbGliL2JvYXJkcy5qc29uJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIC4uLnByb2ZpbGVQYWdlU3R5bGVzLFxuICAgIGNhcmRUaXRsZSxcbn1cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZFBhZ2UoeyBwcm9wcywgYm9hcmREYXRhIH0pIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeVsnYm9hcmQtcGFnZSddO1xuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICAgIGhlaWdodDogJzIyMCcsXG4gICAgICAgIHdpZHRoOiAnMzIwJyxcbiAgICAgICAgcGxheWVyVmFyczoge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS9wbGF5ZXJfcGFyYW1ldGVyc1xuICAgICAgICAgICAgLy8gYXV0b3BsYXk6IDEsXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGxldCBib2FyZERldGFpbCA9IHt9XG4gICAgYm9hcmREYXRhLmJvYXJkcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5tb2RlbCA9PT0gaWQpIHtcbiAgICAgICAgICAgIGJvYXJkRGV0YWlsID0gZWxlbWVudDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IHZpZGVvID0gPGJyIC8+XG4gICAgaWYgKCd2aWRlbycgaW4gYm9hcmREZXRhaWwpIHtcbiAgICAgICAgdmlkZW8gPSA8WW91VHViZSB2aWRlb0lkPXtib2FyZERldGFpbC52aWRlb30gb3B0cz17b3B0c30gLz5cbiAgICB9XG5cblxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgICBjb25zdCB7IC4uLnJlc3QgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIGJyYW5kPVwiTmV4dEpTIE1hdGVyaWFsIEtpdFwiXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0TGlua3M9ezxIZWFkZXJMaW5rcyAvPn1cbiAgICAgICAgICAgICAgICAgICAgZml4ZWRcbiAgICAgICAgICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMubWFpbil9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib2FyZC1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjb2x1bW4gbGVmdFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57Ym9hcmREZXRhaWwubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIxMDBweFwiLCBtYXhXaWR0aDogXCIyMGVtXCIsIGRpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luTGVmdDogXCJhdXRvXCIsIG1hcmdpblJpZ2h0OiBcImF1dG9cIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Ym9hcmREZXRhaWwubG9nb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJCb2FyZCBMb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjQwJVwiLCBkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLCBtYXJnaW5SaWdodDogXCJhdXRvXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2JvYXJkRGV0YWlsLmltZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJCYXJyYWNCb2FyZCBJbWFnZXVkYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY29sdW1uIHJpZ2h0XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz57Ym9hcmREZXRhaWwuZGVzY3JpcHRpb259PC9zdHJvbmc+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5TaXplIFJhbmdlOiB7Ym9hcmREZXRhaWwuZGltcy5yYW5nZX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5Ob3NlOiB7Ym9hcmREZXRhaWwuZGltcy5Ob3NlfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pk1pZGRsZToge2JvYXJkRGV0YWlsLmRpbXMuTWlkZGxlfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlRhaWw6IHtib2FyZERldGFpbC5kaW1zLlRhaWx9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+VGhpY2tuZXNzOiB7Ym9hcmREZXRhaWwuZGltcy5UaGlja25lc3N9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+Vm9sdW1lOiB7Ym9hcmREZXRhaWwuZGltcy5Wb2x1bWV9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPi0tLS0tLS0tPC9zdHJvbmc+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND48c3Ryb25nPlByaWNlczo8L3N0cm9uZz48L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5FcG94eTogJHtib2FyZERldGFpbC5lcHNfcHJpY2V9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+UG9seWVzdGVyOiAke2JvYXJkRGV0YWlsLnBvbHlfcHJpY2V9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+V2l0aCBzdXNwZW5zaW9uOiArICQ2MDwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlN0cmluZ2VybGVzcyBjYXJib24gc3RyaXAgZmxleCBkZWNrISEhOiArICQzMCAoYXZhaWxhYmxlIGluIGFsbCBtb2RlbHMpPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTYwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2ZQbXBsazBhQUE4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pZnJhbWU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb1wiPlxuICAgICAgICAgICAgICAgIHt2aWRlb31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZm9vdGVyXCJ9PjxGb290ZXIgLz48L2Rpdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJlZCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ib2FyZC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjVweFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudmlkZW8ge1xuICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogNjQwcHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogNjY1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA1JTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDg0MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIC5ib2FyZC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMDBweCA1cHggNXB4IDBweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5tYWluIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmbG9hdDpyaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDo2NSU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIC5sZWZ0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgLnJpZ2h0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiAxMDBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgICAgICAgLy8gYm9keSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICA8L2RpdiA+XG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGJvYXJkRGF0YVxuICAgICAgICB9LFxuICAgIH1cbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBnZXRzIGNhbGxlZCBhdCBidWlsZCB0aW1lXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG5cbiAgICAvLyBHZXQgdGhlIHBhdGhzIHdlIHdhbnQgdG8gcHJlLXJlbmRlciBiYXNlZCBvbiBwb3N0c1xuICAgIGNvbnN0IHBhdGhzID0gYm9hcmREYXRhLmJvYXJkcy5tYXAoKGJvYXJkKSA9PiBgL2JvYXJkLXBhZ2UvJHtib2FyZC5tb2RlbH1gKVxuXG4gICAgLy8gV2UnbGwgcHJlLXJlbmRlciBvbmx5IHRoZXNlIHBhdGhzIGF0IGJ1aWxkIHRpbWUuXG4gICAgLy8geyBmYWxsYmFjazogZmFsc2UgfSBtZWFucyBvdGhlciByb3V0ZXMgc2hvdWxkIDQwNC5cbiAgICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/sethlarkin/Dev/Web/next.js/vernor-nextjs-material/pages/board-page/[board-page].js */"));
}

/***/ })

})
//# sourceMappingURL=[board-page].js.9423b73e3dbc4e53f66b.hot-update.js.map