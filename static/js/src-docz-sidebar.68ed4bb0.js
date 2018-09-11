(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"./src/docz/Sidebar.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),r=t.n(a),o=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/@material-ui/core/Drawer/index.js"),c=t.n(i),l=t("./node_modules/@material-ui/core/styles/index.js"),s=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),p=t("./src/icons/index.ts"),m=t("./src/core/Button.tsx"),u=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    flex-direction: ",";\n    display: flex;\n"]);function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e,n){return!n||"object"!==d(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function h(e,n){return(h=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var y=s.a.div(u,function(e){return"left"===e.anchor?"row-reverse":"row"}),g=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),b(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}var t,o,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&h(e,n)}(n,a["Component"]),t=n,(o=[{key:"renderAction",value:function(){var e=this.props,n=e.expanded,t=e.anchor,a=e.color,o=e.classes,i="left"===t&&n||"right"===t&&!n;return r.a.createElement(y,{anchor:t},r.a.createElement(m.a,{color:a,variant:"contained",className:o.button,onClick:this.props.onToggle},i?r.a.createElement(p.d,{className:o.icon}):r.a.createElement(p.e,{className:o.icon})))}},{key:"render",value:function(){var e=this.props,n=e.anchor,t=e.className,a=e.classes,o=e.color,i=void 0===o?"default":o,l=e.open,s=e.showButton,p=e.variant;return r.a.createElement(c.a,{open:l,anchor:n,variant:p,className:t,PaperProps:{className:a[i]}},s&&this.renderAction(),this.props.children)}}])&&f(t.prototype,o),i&&f(t,i),n}();Object.defineProperty(g,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{anchor:"left",color:"default",expanded:!0,onToggle:function(){return null},showButton:!0,variant:"permanent"}});var E=Object(l.withStyles)(function(e){return{button:{"&:active":{boxShadow:"none"},alignSelf:"right",backgroundColor:"transparent",boxShadow:"none",margin:4,padding:"0 0.25em"},default:{backgroundColor:e.palette.background.default,color:e.palette.background.contrastText},icon:{fontSize:"24px"},inherit:{backgroundColor:"inherit",color:"inherit"},primary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},secondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText}}})(g),_=t("./src/core/Container.tsx"),w=t("./src/core/List.tsx"),v=t("./src/core/ListItem.tsx"),x=t("./node_modules/docz/dist/index.m.js");function k(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}n.default=function(e){var n=e.components,t=k(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:n},r.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"sidebar"}},r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#sidebar"}},r.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Sidebar"),r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"properties"}},r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#properties"}},r.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Properties"),r.a.createElement(x.e,{of:E}),r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"normal"}},r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#normal"}},r.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Normal"),r.a.createElement(x.d,{__position:1,__code:"<Container style={{ height: 256 }}>\n  <Sidebar>\n    <List>\n      <ListItem iconOnly icon={<IconBackup />} />\n      <ListItem iconOnly icon={<IconBackup />} />\n    </List>\n  </Sidebar>\n</Container>",__scope:{props:t,Sidebar:E,Container:_.a,List:w.a,ListItem:v.a,IconBackup:p.b}},r.a.createElement(_.a,{style:{height:256}},r.a.createElement(E,null,r.a.createElement(w.a,null,r.a.createElement(v.a,{iconOnly:!0,icon:r.a.createElement(p.b,null)}),r.a.createElement(v.a,{iconOnly:!0,icon:r.a.createElement(p.b,null)}))))),r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"right-sidebar"}},r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#right-sidebar"}},r.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Right Sidebar"),r.a.createElement(x.d,{__position:2,__code:'<Container\n  style={{\n    margin: \'24px\',\n    flexDirection: \'row-reverse\',\n    height: 256,\n  }}\n>\n  <Sidebar open anchor="right">\n    <List>\n      <ListItem icon={<IconBackup />} title="Item 1" />\n      <ListItem icon={<IconBackup />} title="Item 2" />\n    </List>\n  </Sidebar>\n</Container>',__scope:{props:t,Sidebar:E,Container:_.a,List:w.a,ListItem:v.a,IconBackup:p.b}},r.a.createElement(_.a,{style:{margin:"24px",flexDirection:"row-reverse",height:256}},r.a.createElement(E,{open:!0,anchor:"right"},r.a.createElement(w.a,null,r.a.createElement(v.a,{icon:r.a.createElement(p.b,null),title:"Item 1"}),r.a.createElement(v.a,{icon:r.a.createElement(p.b,null),title:"Item 2"}))))),r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"opened-sidebar"}},r.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#opened-sidebar"}},r.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Opened Sidebar"),r.a.createElement(x.d,{__position:3,__code:'<Container style={{ height: 256 }}>\n  <Sidebar open>\n    <List>\n      <ListItem icon={<IconBackup />} title="Item 1" />\n      <ListItem icon={<IconBackup />} title="Item 2" />\n    </List>\n  </Sidebar>\n</Container>',__scope:{props:t,Sidebar:E,Container:_.a,List:w.a,ListItem:v.a,IconBackup:p.b}},r.a.createElement(_.a,{style:{height:256}},r.a.createElement(E,{open:!0},r.a.createElement(w.a,null,r.a.createElement(v.a,{icon:r.a.createElement(p.b,null),title:"Item 1"}),r.a.createElement(v.a,{icon:r.a.createElement(p.b,null),title:"Item 2"}))))))}}}]);