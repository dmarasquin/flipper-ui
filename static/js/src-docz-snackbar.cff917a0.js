(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"./src/docz/Snackbar.mdx":function(e,n,a){"use strict";a.r(n);var r=a("./node_modules/react/index.js"),o=a.n(r),t=a("./node_modules/@mdx-js/tag/dist/index.js"),s=a("./node_modules/@material-ui/core/index.es.js"),i=a("./node_modules/@material-ui/core/colors/index.js"),c=a("./node_modules/@material-ui/core/styles/index.js"),m=a("./node_modules/@material-ui/icons/index.es.js");function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function p(e,n){if(null==e)return{};var a,r,o=function(e,n){if(null==e)return{};var a,r,o={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d={error:{color:i.red[700],icon:m.e},info:{color:i.blue[500],icon:m.f},success:{color:i.green[700],icon:m.c},warning:{color:i.amber[700],icon:m.k}},g=Object(c.withStyles)(function(e){return{icon:{fontSize:20,marginRight:e.spacing.unit,opacity:.9},message:{alignItems:"center",display:"flex"}}})(function(e){var n=e.anchorOrigin,a=(e.autoHide,e.classes),r=e.message,t=e.onClose,i=e.open,c=e.padding,g=e.margin,h=e.style,u=e.variant,b=void 0===u?"info":u,f=e.className,w=p(e,["anchorOrigin","autoHide","classes","message","onClose","open","padding","margin","style","variant","className"]),E=d[b].icon;return o.a.createElement(s.x,{anchorOrigin:n,open:i,autoHideDuration:6e3,style:function(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(n){l(e,n,a[n])})}return e}({padding:c,margin:g},h),className:f,onClose:t},o.a.createElement(s.y,Object.assign({style:{backgroundColor:d[b].color},"aria-describedby":"client-snackbar",message:o.a.createElement("span",{id:"client-snackbar",className:a.message},o.a.createElement(E,{className:a.icon}),r),action:[o.a.createElement(s.k,{key:"close","aria-label":"Close",color:"inherit",onClick:t},o.a.createElement(m.d,null))]},w)))}),h=a("./node_modules/docz/dist/index.m.js");function u(e,n){if(null==e)return{};var a,r,o=function(e,n){if(null==e)return{};var a,r,o={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}n.default=function(e){var n=e.components,a=u(e,["components"]);return o.a.createElement(t.MDXTag,{name:"wrapper",components:n},o.a.createElement(t.MDXTag,{name:"h1",components:n,props:{id:"snackbar"}},o.a.createElement(t.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#snackbar"}},o.a.createElement(t.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Snackbar"),o.a.createElement(t.MDXTag,{name:"h2",components:n,props:{id:"properties"}},o.a.createElement(t.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#properties"}},o.a.createElement(t.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Properties"),o.a.createElement(h.e,{of:g}),o.a.createElement(t.MDXTag,{name:"h2",components:n,props:{id:"info"}},o.a.createElement(t.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#info"}},o.a.createElement(t.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Info"),o.a.createElement(h.d,{__position:1,__code:"<Snackbar\n  open={false}\n  anchorOrigin={{\n    horizontal: 'right',\n    vertical: 'bottom',\n  }}\n  message=\"In the town where I was born, Lived a man who sailed to sea\"\n/>",__scope:{props:a,Snackbar:g}},o.a.createElement(g,{open:!1,anchorOrigin:{horizontal:"right",vertical:"bottom"},message:"In the town where I was born, Lived a man who sailed to sea"})),o.a.createElement(t.MDXTag,{name:"h2",components:n,props:{id:"info-1"}},o.a.createElement(t.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#info-1"}},o.a.createElement(t.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Info"),o.a.createElement(h.d,{__position:2,__code:'<Snackbar\n  open={false}\n  variant="success"\n  message="In the town where I was born, Lived a man who sailed to sea"\n/>',__scope:{props:a,Snackbar:g}},o.a.createElement(g,{open:!1,variant:"success",message:"In the town where I was born, Lived a man who sailed to sea"})),o.a.createElement(t.MDXTag,{name:"h2",components:n,props:{id:"warning"}},o.a.createElement(t.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#warning"}},o.a.createElement(t.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Warning"),o.a.createElement(h.d,{__position:3,__code:'<Snackbar\n  open={false}\n  variant="warning"\n  message="In the town where I was born, Lived a man who sailed to sea"\n/>',__scope:{props:a,Snackbar:g}},o.a.createElement(g,{open:!1,variant:"warning",message:"In the town where I was born, Lived a man who sailed to sea"})),o.a.createElement(t.MDXTag,{name:"h2",components:n,props:{id:"error"}},o.a.createElement(t.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#error"}},o.a.createElement(t.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Error"),o.a.createElement(h.d,{__position:4,__code:'<Snackbar\n  open={false}\n  variant="error"\n  message="In the town where I was born, Lived a man who sailed to sea"\n/>',__scope:{props:a,Snackbar:g}},o.a.createElement(g,{open:!1,variant:"error",message:"In the town where I was born, Lived a man who sailed to sea"})))}}}]);