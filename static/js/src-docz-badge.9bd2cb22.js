(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/docz/Badge.mdx":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/react/index.js"),o=t.n(r),a=t("./node_modules/@mdx-js/tag/dist/index.js"),c=t("./node_modules/@material-ui/core/index.es.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function s(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,n){return!n||"object"!==i(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var d=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),u(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}var t,a,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(n,r["Component"]),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.children,t=e.counter,r=e.color,a=e.limit,i=void 0===a?99:a,s=e.padding,u=e.margin,m=e.style,d=void 0===m?{}:m,f=p(e,["children","counter","color","limit","padding","margin","style"]);return Boolean(t)?o.a.createElement(c.c,Object.assign({badgeContent:t>i?"+".concat(i):t,color:r,style:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){l(e,n,t[n])})}return e}({padding:s,margin:u},d)},f),n):n}}])&&s(t.prototype,a),i&&s(t,i),n}();Object.defineProperty(d,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{color:"primary",limit:99}});var f=d;try{d.displayName="Badge",d.__docgenInfo={description:"",displayName:"Badge",props:{color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:'"default" | "primary" | "secondary" | "error"'}},counter:{defaultValue:null,description:"",name:"counter",required:!0,type:{name:"ReactText"}},limit:{defaultValue:{value:"99"},description:"",name:"limit",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"object"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"ReactText"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ReactText"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core/Badge.tsx#Badge"]={docgenInfo:d.__docgenInfo,name:"Badge",path:"src/core/Badge.tsx#Badge"})}catch(e){}var y=t("./src/core/Button.tsx"),g=t("./node_modules/docz/dist/index.m.js");function b(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.default=function(e){var n=e.components,t=b(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:n},o.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"badge"}},o.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#badge"}},o.a.createElement(a.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Badge"),o.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"properties"}},o.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#properties"}},o.a.createElement(a.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Properties"),o.a.createElement(g.e,{of:f}),o.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"normal"}},o.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#normal"}},o.a.createElement(a.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Normal"),o.a.createElement(g.d,{__position:1,__code:'<Badge color="secondary">Secondary color</Badge>',__scope:{props:t,Badge:f,Button:y.a}},o.a.createElement(f,{color:"secondary"},"Secondary color")),o.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"secondary-color-with-99-items"}},o.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#secondary-color-with-99-items"}},o.a.createElement(a.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Secondary color with +99 items"),o.a.createElement(g.d,{__position:2,__code:'<Badge counter={150}>\n  <Button variant="outlined">Try changing the counter to Zero</Button>\n</Badge>',__scope:{props:t,Badge:f,Button:y.a}},o.a.createElement(f,{counter:150},o.a.createElement(y.a,{variant:"outlined"},"Try changing the counter to Zero"))))}}}]);