(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"3JFx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n("NOtv")),o=s(n("t0y4")),a=s(n("s/rx")),i=s(n("4Y/j"));function s(e){return e&&e.__esModule?e:{default:e}}var u=(0,r.default)("youtube-player"),c={proxyEvents:function(e){var t={},n=function(n){var r="on"+n.slice(0,1).toUpperCase()+n.slice(1);t[r]=function(t){u('event "%s"',r,t),e.trigger(n,t)}},r=!0,o=!1,i=void 0;try{for(var s,c=a.default[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){n(s.value)}}catch(l){o=!0,i=l}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},r=function(r){t&&i.default[r]?n[r]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.then((function(e){var t=i.default[r],o=e.getPlayerState(),a=e[r].apply(e,n);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(o)?new Promise((function(n){e.addEventListener("onStateChange",(function r(){var o=e.getPlayerState(),a=void 0;"number"===typeof t.timeout&&(a=setTimeout((function(){e.removeEventListener("onStateChange",r),n()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(o)&&(e.removeEventListener("onStateChange",r),clearTimeout(a),n())}))})).then((function(){return a})):a}))}:n[r]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.then((function(e){return e[r].apply(e,n)}))}},a=!0,s=!1,u=void 0;try{for(var c,l=o.default[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var f=c.value;r(f)}}catch(p){s=!0,u=p}finally{try{!a&&l.return&&l.return()}finally{if(s)throw u}}return n}};t.default=c,e.exports=t.default},"4Y/j":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("u6sg"),a=(r=o)&&r.__esModule?r:{default:r};t.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},"D+Oc":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=s(n("MEFE")),a=s(n("MIx2")),i=s(n("3JFx"));function s(e){return e&&e.__esModule?e:{default:e}}var u=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=(0,o.default)();if(u||(u=(0,a.default)(s)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"===typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=i.default.proxyEvents(s);var c=new Promise((function(n){"object"===("undefined"===typeof e?"undefined":r(e))&&e.playVideo instanceof Function?n(e):u.then((function(r){var o=new r.Player(e,t);return s.on("ready",(function(){n(o)})),null}))})),l=i.default.promisifyPlayer(c,n);return l.on=s.on,l.off=s.off,l},e.exports=t.default},FGiv:function(e,t){var n=1e3,r=6e4,o=60*r,a=24*o,i=365.25*a;function s(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var u,c=typeof e;if("string"===c&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var s=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*i;case"days":case"day":case"d":return s*a;case"hours":case"hour":case"hrs":case"hr":case"h":return s*o;case"minutes":case"minute":case"mins":case"min":case"m":return s*r;case"seconds":case"second":case"secs":case"sec":case"s":return s*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(e);if("number"===c&&!1===isNaN(e))return t.long?s(u=e,a,"day")||s(u,o,"hour")||s(u,r,"minute")||s(u,n,"second")||u+" ms":function(e){if(e>=a)return Math.round(e/a)+"d";if(e>=o)return Math.round(e/o)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},Ilpk:function(e,t,n){"use strict";t.a={imgFluid:{maxWidth:"100%",height:"auto"},imgRounded:{borderRadius:"6px !important"},imgRoundedCircle:{borderRadius:"50% !important"},imgRaised:{boxShadow:"0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"},imgGallery:{width:"100%",marginBottom:"2.142rem"},imgCardTop:{width:"100%",borderTopLeftRadius:"calc(.25rem - 1px)",borderTopRightRadius:"calc(.25rem - 1px)"},imgCardBottom:{width:"100%",borderBottomLeftRadius:"calc(.25rem - 1px)",borderBottomRightRadius:"calc(.25rem - 1px)"},imgCard:{width:"100%",borderRadius:"calc(.25rem - 1px)"},imgCardOverlay:{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",padding:"1.25rem"}}},MEFE:function(e,t,n){"use strict";var r;r=function(){var e={},t={};return e.on=function(e,n){var r={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(r),r},e.off=function(e){var n=t[e.name].indexOf(e);-1!==n&&t[e.name].splice(n,1)},e.trigger=function(e,n){var r,o=t[e];if(o)for(r=o.length;r--;)o[r].handler(n)},e},e.exports=r},MIx2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("MuZe"),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var n="http:"===window.location.protocol?"http:":"https:";(0,a.default)(n+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var r=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){r&&r(),t(window.YT)}}}))},e.exports=t.default},MuZe:function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"===typeof t&&(o=t,t={}),t=t||{},o=o||function(){},i.type=t.type||"text/javascript",i.charset=t.charset||"utf8",i.async=!("async"in t)||!!t.async,i.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,t.attrs),t.text&&(i.text=""+t.text),("onload"in i?n:r)(i,o),i.onload||n(i,o),a.appendChild(i)}},NOtv:function(e,t,n){(function(r){function o(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!==typeof r&&"env"in r&&(e=r.env.DEBUG),e}(t=e.exports=n("lv48")).log=function(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))})),e.splice(a,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=o,t.useColors=function(){if("undefined"!==typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(o())}).call(this,n("8oxB"))},aUsF:function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,o,a;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!==o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!==o--;)if(!Object.prototype.hasOwnProperty.call(n,a[o]))return!1;for(o=r;0!==o--;){var i=a[o];if(!e(t[i],n[i]))return!1}return!0}return t!==t&&n!==n}},lv48:function(e,t,n){var r;function o(e){function n(){if(n.enabled){var e=n,o=+new Date,a=o-(r||o);e.diff=a,e.prev=r,e.curr=o,r=o;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=t.coerce(i[0]),"string"!==typeof i[0]&&i.unshift("%O");var u=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;u++;var o=t.formatters[r];if("function"===typeof o){var a=i[u];n=o.call(e,a),i.splice(u,1),u--}return n})),t.formatArgs.call(e,i);var c=n.log||t.log||console.log.bind(console);c.apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"===typeof t.init&&t.init(n),n}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"===typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&("-"===(e=n[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n("FGiv"),t.names=[],t.skips=[],t.formatters={}},pVhd:function(e,t,n){"use strict";var r=n("17x9"),o=n.n(r),a=n("q1tI"),i=n.n(a),s=n("aUsF"),u=n.n(s),c=n("D+Oc"),l=n.n(c);function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){return v(v({},e),{},{height:0,width:0,playerVars:v(v({},e.playerVars),{},{autoplay:0,start:0,end:0})})}var x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(a,e);var t,n,r,o=y(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),P(h(t=o.call(this,e)),"onPlayerReady",(function(e){return t.props.onReady(e)})),P(h(t),"onPlayerError",(function(e){return t.props.onError(e)})),P(h(t),"onPlayerStateChange",(function(e){switch(t.props.onStateChange(e),e.data){case a.PlayerState.ENDED:t.props.onEnd(e);break;case a.PlayerState.PLAYING:t.props.onPlay(e);break;case a.PlayerState.PAUSED:t.props.onPause(e)}})),P(h(t),"onPlayerPlaybackRateChange",(function(e){return t.props.onPlaybackRateChange(e)})),P(h(t),"onPlayerPlaybackQualityChange",(function(e){return t.props.onPlaybackQualityChange(e)})),P(h(t),"createPlayer",(function(){if("undefined"!==typeof document){var e=v(v({},t.props.opts),{},{videoId:t.props.videoId});t.internalPlayer=l()(t.container,e),t.internalPlayer.on("ready",t.onPlayerReady),t.internalPlayer.on("error",t.onPlayerError),t.internalPlayer.on("stateChange",t.onPlayerStateChange),t.internalPlayer.on("playbackRateChange",t.onPlayerPlaybackRateChange),t.internalPlayer.on("playbackQualityChange",t.onPlayerPlaybackQualityChange)}})),P(h(t),"resetPlayer",(function(){return t.internalPlayer.destroy().then(t.createPlayer)})),P(h(t),"updatePlayer",(function(){t.internalPlayer.getIframe().then((function(e){t.props.id?e.setAttribute("id",t.props.id):e.removeAttribute("id"),t.props.className?e.setAttribute("class",t.props.className):e.removeAttribute("class"),t.props.opts&&t.props.opts.width?e.setAttribute("width",t.props.opts.width):e.removeAttribute("width"),t.props.opts&&t.props.opts.height?e.setAttribute("height",t.props.opts.height):e.removeAttribute("height"),"string"===typeof t.props.title?e.setAttribute("title",t.props.title):e.setAttribute("title","YouTube video player")}))})),P(h(t),"getInternalPlayer",(function(){return t.internalPlayer})),P(h(t),"updateVideo",(function(){if("undefined"!==typeof t.props.videoId&&null!==t.props.videoId){var e=!1,n={videoId:t.props.videoId};"playerVars"in t.props.opts&&(e=1===t.props.opts.playerVars.autoplay,"start"in t.props.opts.playerVars&&(n.startSeconds=t.props.opts.playerVars.start),"end"in t.props.opts.playerVars&&(n.endSeconds=t.props.opts.playerVars.end)),e?t.internalPlayer.loadVideoById(n):t.internalPlayer.cueVideoById(n)}else t.internalPlayer.stopVideo()})),P(h(t),"refContainer",(function(e){t.container=e})),t.container=null,t.internalPlayer=null,t}return t=a,(n=[{key:"componentDidMount",value:function(){this.createPlayer()}},{key:"componentDidUpdate",value:function(e){(function(e,t){return e.id!==t.id||e.className!==t.className||e.opts.width!==t.opts.width||e.opts.height!==t.opts.height||e.title!==t.title})(e,this.props)&&this.updatePlayer(),function(e,t){return e.videoId!==t.videoId||!u()(w(e.opts),w(t.opts))}(e,this.props)&&this.resetPlayer(),function(e,t){if(e.videoId!==t.videoId)return!0;var n=e.opts.playerVars||{},r=t.opts.playerVars||{};return n.start!==r.start||n.end!==r.end}(e,this.props)&&this.updateVideo()}},{key:"componentWillUnmount",value:function(){this.internalPlayer.destroy()}},{key:"render",value:function(){return i.a.createElement("div",{className:this.props.containerClassName},i.a.createElement("div",{id:this.props.id,className:this.props.className,ref:this.refContainer,loading:this.props.loading}))}}])&&p(t.prototype,n),r&&p(t,r),a}(i.a.Component);P(x,"PlayerState",{UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5}),x.propTypes={videoId:o.a.string,id:o.a.string,className:o.a.string,containerClassName:o.a.string,title:o.a.string,loading:o.a.oneOf(["lazy","eager","auto"]),opts:o.a.objectOf(o.a.any),onReady:o.a.func,onError:o.a.func,onPlay:o.a.func,onPause:o.a.func,onEnd:o.a.func,onStateChange:o.a.func,onPlaybackRateChange:o.a.func,onPlaybackQualityChange:o.a.func},x.defaultProps={videoId:null,id:null,className:null,loading:null,opts:{},containerClassName:"",onReady:function(){},onError:function(){},onPlay:function(){},onPause:function(){},onEnd:function(){},onStateChange:function(){},onPlaybackRateChange:function(){},onPlaybackQualityChange:function(){},title:null},t.a=x},"s/rx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},t0y4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},u6sg:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},uU2H:function(e,t,n){"use strict";var r=n("rePB"),o=n("eDSW"),a=n("Ilpk");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=s(s({container:o.c,profile:{textAlign:"center","& img":{maxWidth:"160px",width:"100%",margin:"0 auto",transform:"translate3d(0, -50%, 0)"}},description:{margin:"1.071rem auto 0",maxWidth:"600px",color:"#999",textAlign:"center !important"},name:{marginTop:"-80px"}},a.a),{},{main:{background:"#FFFFFF",position:"relative",zIndex:"3"},mainRaised:{margin:"-60px 30px 0px",borderRadius:"6px",boxShadow:"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"},title:s(s({},o.r),{},{display:"inline-block",position:"relative",marginTop:"30px",minHeight:"32px",textDecoration:"none"}),socials:{marginTop:"0",width:"100%",transform:"none",left:"0",top:"0",height:"100%",lineHeight:"41px",fontSize:"20px",color:"#999"},navWrapper:{margin:"20px auto 50px auto",textAlign:"center"}});t.a=u}}]);