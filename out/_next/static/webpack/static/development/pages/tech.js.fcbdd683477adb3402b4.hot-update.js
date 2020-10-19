webpackHotUpdate("static/development/pages/tech.js",{

/***/ "./pages/tech.js":
/*!***********************!*\
  !*** ./pages/tech.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProfilePage; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Header/Header.js */ "./components/Header/Header.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./components/Header/HeaderLinks.js");
/* harmony import */ var pages_sections_Components_Sections_TechPills_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pages-sections/Components-Sections/TechPills.js */ "./pages-sections/Components-Sections/TechPills.js");
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-youtube */ "./node_modules/react-youtube/dist/index.esm.js");
/* harmony import */ var assets_img_suspension_diamond_quad_bottom_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/img/suspension-diamond-quad-bottom.jpg */ "./assets/img/suspension-diamond-quad-bottom.jpg");
/* harmony import */ var assets_img_suspension_diamond_quad_bottom_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_img_suspension_diamond_quad_bottom_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var assets_jss_nextjs_material_kit_pages_profilePage_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/profilePage.js */ "./assets/jss/nextjs-material-kit/pages/profilePage.js");

var _jsxFileName = "/Users/sethlarkin/Desktop/Dev/Web/next.js/vernor-nextjs-material/pages/tech.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 // nodejs library that concatenates classes

 // @material-ui/core components

 // @material-ui/icons
// core components








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_nextjs_material_kit_pages_profilePage_js__WEBPACK_IMPORTED_MODULE_11__["default"]);
function ProfilePage(props) {
  var classes = useStyles();

  var rest = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props);

  var opts = {
    height: '390',
    width: '3',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  return __jsx("div", {
    className: "jsx-1401619160",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: "white",
    brand: "NextJS Material Kit",
    rightLinks: __jsx(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }),
    fixed: true
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: "jsx-1401619160" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.main) || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("p", {
    style: {
      align: "center"
    },
    className: "jsx-1401619160",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: assets_img_suspension_diamond_quad_bottom_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "Suspension Board",
    style: {
      width: "70%",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "70px",
      paddingTop: "75px"
    },
    className: "jsx-1401619160",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1401619160" + " " + "video",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx(react_youtube__WEBPACK_IMPORTED_MODULE_9__["default"], {
    videoId: "cjbQZXyZ2SI",
    opts: opts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  })), __jsx(pages_sections_Components_Sections_TechPills_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), __jsx(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1401619160",
    __self: this
  }, ".video.jsx-1401619160{width:640px;margin:0 5%;display:block;padding-top:25px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXRobGFya2luL0Rlc2t0b3AvRGV2L1dlYi9uZXh0LmpzL3Zlcm5vci1uZXh0anMtbWF0ZXJpYWwvcGFnZXMvdGVjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRGtCLEFBR3lCLFlBQ0EsWUFDRSxjQUNHLGlCQUNyQiIsImZpbGUiOiIvVXNlcnMvc2V0aGxhcmtpbi9EZXNrdG9wL0Rldi9XZWIvbmV4dC5qcy92ZXJub3ItbmV4dGpzLW1hdGVyaWFsL3BhZ2VzL3RlY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanNcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcImNvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc1wiO1xuaW1wb3J0IEhlYWRlckxpbmtzIGZyb20gXCJjb21wb25lbnRzL0hlYWRlci9IZWFkZXJMaW5rcy5qc1wiO1xuaW1wb3J0IFRlY2hQaWxscyBmcm9tIFwicGFnZXMtc2VjdGlvbnMvQ29tcG9uZW50cy1TZWN0aW9ucy9UZWNoUGlsbHMuanNcIjtcbmltcG9ydCBZb3VUdWJlIGZyb20gXCJyZWFjdC15b3V0dWJlXCJcblxuXG5pbXBvcnQgU3VzcGVuc2lvbkJvYXJkIGZyb20gXCJhc3NldHMvaW1nL3N1c3BlbnNpb24tZGlhbW9uZC1xdWFkLWJvdHRvbS5qcGdcIlxuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvcGFnZXMvcHJvZmlsZVBhZ2UuanNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlUGFnZShwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHsgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIGNvbnN0IG9wdHMgPSB7XG4gICAgaGVpZ2h0OiAnMzkwJyxcbiAgICB3aWR0aDogJzMnLFxuICAgIHBsYXllclZhcnM6IHtcbiAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvcGxheWVyX3BhcmFtZXRlcnNcbiAgICAgIGF1dG9wbGF5OiAxLFxuICAgIH0sXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXJcbiAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIGJyYW5kPVwiTmV4dEpTIE1hdGVyaWFsIEtpdFwiXG4gICAgICAgIHJpZ2h0TGlua3M9ezxIZWFkZXJMaW5rcyAvPn1cbiAgICAgICAgZml4ZWRcblxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLm1haW4pfT5cbiAgICAgICAgPHAgc3R5bGU9e3sgYWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgPGltZyBzcmM9e1N1c3BlbnNpb25Cb2FyZH0gYWx0PVwiU3VzcGVuc2lvbiBCb2FyZFwiIHN0eWxlPXt7IHdpZHRoOiBcIjcwJVwiLCBkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLCBtYXJnaW5SaWdodDogXCJhdXRvXCIsIG1hcmdpblRvcDogXCI3MHB4XCIsIHBhZGRpbmdUb3A6IFwiNzVweFwiIH19IC8+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb1wiPlxuICAgICAgICAgIDxZb3VUdWJlIHZpZGVvSWQ9J2NqYlFaWHlaMlNJJyBvcHRzPXtvcHRzfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8VGVjaFBpbGxzIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2AgXG4gICAgICAgIC52aWRlbyB7XG4gICAgICAgICAgICB3aWR0aDogNjQwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgNSU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgICAgICB9LFxuICAgICAgICAucmVkIHtcbiAgICAgICAgICAvLyB3aWR0aDogMjAwJVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/sethlarkin/Desktop/Dev/Web/next.js/vernor-nextjs-material/pages/tech.js */"));
}

/***/ })

})
//# sourceMappingURL=tech.js.fcbdd683477adb3402b4.hot-update.js.map