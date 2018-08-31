(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"./src/docz/Sidebar.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/react-icons/md/index.mjs"),c=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),l=t("./src/colors.ts"),p=t("./src/components/Button.tsx"),s=h(["\n    display: block;\n    position: relative;\n    width: ","px;\n    ",": 0;\n"]),m=h(["\n    position: ",";\n    width: ","px;\n    height: 100%;\n    top: ","px;\n    text-align: center;\n    bottom: 0;\n    background: ",";\n    ",": 0;\n"]),u=h(["\n    flex-direction: ",";\n    display: flex;\n"]);function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e,n){return!n||"object"!==d(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function g(e,n){return(g=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function h(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var y={button:{alignSelf:"right",margin:4,padding:"0 0.25em"},icon:{fontSize:"24px"}},E=c.a.div(s,function(e){return e.width},function(e){return e.place}),_=c.a.div(m,function(e){return e.position},function(e){return e.width},function(e){return e.top||0},l.a.normal,function(e){return e.place}),S=c.a.div(u,function(e){return"left"===e.place?"row-reverse":"row"}),T=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),b(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}var t,r,c;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&g(e,n)}(n,a["Component"]),t=n,(r=[{key:"render",value:function(){var e=this.props,n=e.open,t=e.place,a=e.position,r=e.top,c=n?200:72,l="left"===t&&n||"right"===t&&!n;return o.a.createElement(E,{place:t,width:c},o.a.createElement(_,{top:r,place:t,width:c,position:a},o.a.createElement(S,{place:t},o.a.createElement(p.a,{style:y.button,onClick:this.props.onToggle},l?o.a.createElement(i.c,{style:y.icon}):o.a.createElement(i.d,{style:y.icon}))),this.props.children))}}])&&f(t.prototype,r),c&&f(t,c),n}();Object.defineProperty(T,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{place:"left",position:"relative"}});var v=T;try{T.displayName="Sidebar",T.__docgenInfo={description:"",displayName:"Sidebar",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"number"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},place:{defaultValue:{value:"left"},description:"",name:"place",required:!1,type:{name:"string"}},position:{defaultValue:{value:"relative"},description:"",name:"position",required:!1,type:{name:"string"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!0,type:{name:"() => {}"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Sidebar.tsx#Sidebar"]={docgenInfo:T.__docgenInfo,name:"Sidebar",path:"src/components/Sidebar.tsx#Sidebar"})}catch(e){}var I=t("./src/components/Container.tsx"),w=t("./src/components/List.tsx"),O=t("./src/components/ListItem.tsx"),k=t("./node_modules/@material-ui/icons/Backup.js"),x=t.n(k),L=t("./node_modules/docz/dist/index.m.js");function j(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.default=function(e){var n=e.components,t=j(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"sidebar"}},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#sidebar"}},o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Sidebar"),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"properties"}},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#properties"}},o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Properties"),o.a.createElement(L.e,{of:v}),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"normal"}},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#normal"}},o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Normal"),o.a.createElement(L.d,{__position:1,__code:"<Container style={{ height: 256 }}>\n  <Sidebar onToggle={() => alert('Toogle sidebar')}>\n    <List>\n      <ListItem iconOnly icon={<IconBackup />} />\n      <ListItem iconOnly icon={<IconBackup />} />\n    </List>\n  </Sidebar>\n</Container>",__scope:{props:t,Sidebar:v,Container:I.a,List:w.a,ListItem:O.a,IconBackup:x.a,MdBackup:i.a}},o.a.createElement(I.a,{style:{height:256}},o.a.createElement(v,{onToggle:function(){return alert("Toogle sidebar")}},o.a.createElement(w.a,null,o.a.createElement(O.a,{iconOnly:!0,icon:o.a.createElement(x.a,null)}),o.a.createElement(O.a,{iconOnly:!0,icon:o.a.createElement(x.a,null)}))))),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"right-sidebar"}},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#right-sidebar"}},o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Right Sidebar"),o.a.createElement(L.d,{__position:2,__code:'<Container\n  style={{\n    margin: \'24px\',\n    flexDirection: \'row-reverse\',\n    height: 256,\n  }}\n>\n  <Sidebar\n    open\n    place="right"\n    position="relative"\n    onToggle={() => alert(\'Toogle sidebar\')}\n  >\n    <List>\n      <ListItem icon={<IconBackup />} title="Item 1" />\n      <ListItem icon={<IconBackup />} title="Item 2" />\n    </List>\n  </Sidebar>\n</Container>',__scope:{props:t,Sidebar:v,Container:I.a,List:w.a,ListItem:O.a,IconBackup:x.a,MdBackup:i.a}},o.a.createElement(I.a,{style:{margin:"24px",flexDirection:"row-reverse",height:256}},o.a.createElement(v,{open:!0,place:"right",position:"relative",onToggle:function(){return alert("Toogle sidebar")}},o.a.createElement(w.a,null,o.a.createElement(O.a,{icon:o.a.createElement(x.a,null),title:"Item 1"}),o.a.createElement(O.a,{icon:o.a.createElement(x.a,null),title:"Item 2"}))))),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"opened-sidebar"}},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#opened-sidebar"}},o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Opened Sidebar"),o.a.createElement(L.d,{__position:3,__code:'<Container style={{ height: 256 }}>\n  <Sidebar open onToggle={() => alert(\'Toogle sidebar\')}>\n    <List>\n      <ListItem icon={<IconBackup />} title="Item 1" />\n      <ListItem icon={<IconBackup />} title="Item 2" />\n    </List>\n  </Sidebar>\n</Container>',__scope:{props:t,Sidebar:v,Container:I.a,List:w.a,ListItem:O.a,IconBackup:x.a,MdBackup:i.a}},o.a.createElement(I.a,{style:{height:256}},o.a.createElement(v,{open:!0,onToggle:function(){return alert("Toogle sidebar")}},o.a.createElement(w.a,null,o.a.createElement(O.a,{icon:o.a.createElement(x.a,null),title:"Item 1"}),o.a.createElement(O.a,{icon:o.a.createElement(x.a,null),title:"Item 2"}))))))}}}]);