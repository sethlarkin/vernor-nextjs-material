/*! For license information please see _app.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/0+H":function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(r("q1tI")),a=r("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,r=void 0!==e&&e,n=t.hybrid,o=void 0!==n&&n,a=t.hasQuery;return r||o&&(void 0!==a&&a)}e.isInAmpMode=i,e.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))}},0:function(t,e,r){r("cM/9"),t.exports=r("nOHt")},"1TCz":function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return D}));var n=r("o0o1"),o=r.n(n),a=r("1OyB"),i=r("vuIU"),c=r("Ji7U"),u=r("md7G"),s=r("foSv"),l=r("q1tI"),f=r.n(l),p=(r("i8i4"),r("8Bbg")),d=r.n(p),h=r("8Kt/"),v=r.n(h),m=(r("nOHt"),r("rePB")),y=r("R/WZ"),b=r("wx14"),g=r("Ff2n"),O=(r("17x9"),r("iuhU")),x=r("H2TA"),w=r("NqtD");function k(t){var e,r,n;return e=t,r=0,n=1,t=(Math.min(Math.max(r,e),n)-r)/(n-r),t=(t-=1)*t*t+1}var P=l.forwardRef((function(t,e){var r,n=t.classes,o=t.className,a=t.color,i=void 0===a?"primary":a,c=t.disableShrink,u=void 0!==c&&c,s=t.size,f=void 0===s?40:s,p=t.style,d=t.thickness,h=void 0===d?3.6:d,v=t.value,m=void 0===v?0:v,y=t.variant,x=void 0===y?"indeterminate":y,P=Object(g.a)(t,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),_={},j={},S={};if("determinate"===x||"static"===x){var C=2*Math.PI*((44-h)/2);_.strokeDasharray=C.toFixed(3),S["aria-valuenow"]=Math.round(m),"static"===x?(_.strokeDashoffset="".concat(((100-m)/100*C).toFixed(3),"px"),j.transform="rotate(-90deg)"):(_.strokeDashoffset="".concat((r=(100-m)/100,r*r*C).toFixed(3),"px"),j.transform="rotate(".concat((270*k(m/70)).toFixed(3),"deg)"))}return(l.createElement("div",Object(b.a)({className:Object(O.a)(n.root,o,"inherit"!==i&&n["color".concat(Object(w.a)(i))],{indeterminate:n.indeterminate,static:n.static}[x]),style:Object(b.a)(Object(b.a)({width:f,height:f},j),p),ref:e,role:"progressbar"},S,P),l.createElement("svg",{className:n.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},l.createElement("circle",{className:Object(O.a)(n.circle,u&&n.circleDisableShrink,{indeterminate:n.circleIndeterminate,static:n.circleStatic}[x]),style:_,cx:44,cy:44,r:(44-h)/2,fill:"none",strokeWidth:h}))))})),_=(Object(x.a)((function(t){return{root:{display:"inline-block"},static:{transition:t.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:t.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(P),r("eDSW"));f.a.createElement;function j(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}Object(y.a)({progress:{color:_.k,width:"6rem !important",height:"6rem !important"},wrapperDiv:{margin:"100px auto",padding:"0px",maxWidth:"360px",textAlign:"center",position:"relative",zIndex:"9999",top:"0"},iconWrapper:{display:"block"},title:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?j(Object(r),!0).forEach((function(e){Object(m.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},_.r,{color:"#FFFFFF"})});r("qAP/");var S=f.a.createElement;function C(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(s.a)(t);if(e){var o=Object(s.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(u.a)(this,r)}}var D=function(t){Object(c.a)(r,t);var e=C(r);function r(){return Object(a.a)(this,r),e.apply(this,arguments)}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var t=document.createComment("\n\n=========================================================\n* NextJS Material Kit v1.1.0 based on Material Kit Free - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit React v1.8.0\n=========================================================\n\n* Product Page: https://www.creative-tim.com/product/nextjs-material-kit\n* Copyright 2020 Creative Tim (https://www.creative-tim.com)\n* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-kit/blob/master/LICENSE.md)\n\n* Coded by Creative Tim\n\n=========================================================\n\n* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n");document.insertBefore(t,document.documentElement)}},{key:"render",value:function(){var t=this.props,e=t.Component,r=t.pageProps;return S(f.a.Fragment,null,S(v.a,null,S("title",null,"Vernor Surfboards")),S(e,r))}}],[{key:"getInitialProps",value:function(t){var e,r,n;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(e=t.Component,t.router,r=t.ctx,n={},!e.getInitialProps){a.next=6;break}return a.next=5,o.a.awrap(e.getInitialProps(r));case 5:n=a.sent;case 6:return a.abrupt("return",{pageProps:n});case 7:case"end":return a.stop()}}),null,null,null,Promise)}}]),r}(d.a)},"5fIB":function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}},"8Bbg":function(t,e,r){t.exports=r("B5Ud")},"8Kt/":function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(r("q1tI")),a=n(r("Xuae")),i=r("lwAK"),c=r("FYa8"),u=r("/0+H");function s(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=s;var f=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var r=o.default.Children.toArray(e.props.children);return t.concat(r)}),[]).reduce(l,[]).reverse().concat(s(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,r=new Set,n={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);t.has(i)?a=!1:t.add(i)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var s=f[c];if(o.props.hasOwnProperty(s))if("charSet"===s)r.has(s)?a=!1:r.add(s);else{var l=o.props[s],p=n[s]||new Set;p.has(l)?a=!1:(p.add(l),n[s]=p)}}}return a}}()).reverse().map((function(t,e){var r=t.key||e;return o.default.cloneElement(t,{key:r})}))}var d=a.default();function h(t){var e=t.children;return o.default.createElement(i.AmpStateContext.Consumer,null,(function(t){return o.default.createElement(c.HeadManagerContext.Consumer,null,(function(r){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:r,inAmpMode:u.isInAmpMode(t)},e)}))}))}h.rewind=d.rewind,e.default=h},B5Ud:function(t,e,r){"use strict";var n=r("/GRZ"),o=r("i2R6"),a=r("48fX"),i=r("tCBg"),c=r("T0f4"),u=r("vJKn");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=c(t);if(e){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return i(this,r)}}var l=r("AroE");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=v,e.default=void 0;var f=l(r("q1tI")),p=r("g/15");function d(t){var e,r,n;return u.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=t.Component,r=t.ctx,o.next=3,u.awrap((0,p.loadGetInitialProps)(e,r));case 3:return n=o.sent,o.abrupt("return",{pageProps:n});case 5:case"end":return o.stop()}}),null,null,null,Promise)}e.AppInitialProps=p.AppInitialProps;var h=function(t){a(r,t);var e=s(r);function r(){return n(this,r),e.apply(this,arguments)}return o(r,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,r=t.Component,n=t.pageProps,o=t.__N_SSG,a=t.__N_SSP;return f.default.createElement(r,Object.assign({},n,o||a?{}:{url:v(e)}))}}]),r}(f.default.Component);function v(t){var e=t.pathname,r=t.asPath,n=t.query;return{get query(){return n},get pathname(){return e},get asPath(){return r},back:function(){t.back()},push:function(e,r){return t.push(e,r)},pushTo:function(e,r){var n=r?e:"",o=r||e;return t.push(n,o)},replace:function(e,r){return t.replace(e,r)},replaceTo:function(e,r){var n=r?e:"",o=r||e;return t.replace(n,o)}}}e.default=h,h.origGetInitialProps=d,h.getInitialProps=d},FYa8:function(t,e,r){"use strict";var n=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=n(r("q1tI"));e.HeadManagerContext=o.createContext(null)},Ji7U:function(t,e,r){"use strict";function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}r.d(e,"a",(function(){return o}))},Xuae:function(t,e,r){"use strict";var n=r("/GRZ"),o=r("qXWd"),a=r("i2R6"),i=r("48fX"),c=r("tCBg"),u=r("T0f4"),s=r("mPvQ");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}Object.defineProperty(e,"__esModule",{value:!0});var f=r("q1tI"),p=!1;e.default=function(){var t,e=new Set;function r(r){t=r.props.reduceComponentsToState(s(e),r.props),r.props.handleStateChange&&r.props.handleStateChange(t)}return(function(c){i(s,c);var u=l(s);function s(t){var a;return n(this,s),a=u.call(this,t),p&&(e.add(o(a)),r(o(a))),a}return a(s,null,[{key:"rewind",value:function(){var r=t;return t=void 0,e.clear(),r}}]),a(s,[{key:"componentDidMount",value:function(){e.add(this),r(this)}},{key:"componentDidUpdate",value:function(){r(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),r(this)}},{key:"render",value:function(){return null}}]),s}(f.Component))}},"cM/9":function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("1TCz")}])},foSv:function(t,e,r){"use strict";function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.d(e,"a",(function(){return n}))},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(t,e,r){"use strict";var n=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=n(r("q1tI"));e.AmpStateContext=o.createContext({})},mPvQ:function(t,e,r){var n=r("5fIB"),o=r("rlHP"),a=r("kG2m");t.exports=function(t){return n(t)||o(t)||a()}},md7G:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("U8pU"),o=r("JX7q");function a(t,e){return!e||"object"!==Object(n.a)(e)&&"function"!==typeof e?Object(o.a)(t):e}},o0o1:function(t,e,r){t.exports=r("ls82")},rlHP:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}}},[[0,0,2,1,3,18]]]);