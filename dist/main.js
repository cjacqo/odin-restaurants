(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n}\n\nhtml {\n    /* overflow-y: scroll; */\n}\n\nbody {\n    overflow: hidden;\n}\n\nul {\n    list-style: none;\n}\n\n.flex {\n    display: flex;\n}\n\n.pointer {\n    cursor: pointer;\n}\n\nheader {\n    overflow:hidden;\n}\n\n.nav-container {\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 1rem;\n}\n\n.menu-list-container {\n    position: absolute;\n    top: 50px;\n    right: 0;\n    width: 100vw;\n    background-color: red;\n    transition: width 1000ms ease-in-out;\n}\n\n.menu-list-container.hidden {\n    width: 0;\n    transition: width 1000ms ease-in-out;\n}",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=n(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var h=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},925:(e,t,n)=>{e.exports=n.p+"f9f2b65b41947e0816f4.jpeg"},132:(e,t,n)=>{e.exports=n.p+"5b317de5551d818b0b0e.jpg"},211:(e,t,n)=>{e.exports=n.p+"c717dce0c8a80f9ff19f.jpeg"},495:(e,t,n)=>{e.exports=n.p+"3243a5309d087cc270e2.jpg"},767:(e,t,n)=>{e.exports=n.p+"3a5a854d93696c970993.jpeg"},642:(e,t,n)=>{e.exports=n.p+"556048c144b3b2a89451.jpg"},884:(e,t,n)=>{e.exports=n.p+"73510d6e37c4df7cacc0.jpeg"},387:(e,t,n)=>{e.exports=n.p+"c26c549c7523c89b4e9f.jpeg"},904:(e,t,n)=>{e.exports=n.p+"d82953ec88f54f092f59.jpg"},223:(e,t,n)=>{e.exports=n.p+"b27816c161eba4b2d626.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{const e=e=>{const{title:t,subtitle:n}=e,r=document.createElement("section");r.classList.add("home-section");const o=document.createElement("div");o.classList.add("section-container");const a=((e,t)=>{const n=document.createElement("div");n.classList.add("text-container");const r=document.createElement("h1"),o=document.createElement("h6");return r.classList.add("title-text"),o.classList.add("sub-title-text"),r.innerText=e,n.appendChild(r),t&&(o.innerText=t,n.appendChild(o)),n})(t,n);return o.appendChild(a),r.appendChild(o),r},t=()=>{const t=document.getElementById("content"),n=document.createElement("main");n.classList.add("main-grid"),n.setAttribute("id","homeMain");const r=e({title:"Celebrate with a toast",subtitle:"New Iwai of the Tiger cocktail"}),o=e({title:"Your favorites, brought home",subtitle:"with Delivery, Curbside Pickup & Takeout"}),a=e({title:"Introducing the official shop",subtitle:"Exclusive apparel, accessories & cookware"});n.appendChild(r),n.appendChild(o),n.appendChild(a),t.appendChild(n)},r=e=>{const n=document.getElementById("content");for(;n.children.length>1;)n.children[1].remove();switch(e){case"Home":default:return void t();case"Menu":return void console.log("MainMenu")}};function o(e){e.classList.toggle("hidden")}const a=()=>{const e=document.createElement("div");return e.classList.add("nav-container","flex"),e.style.height="50px",e.style.backgroundColor="green",e.appendChild((e=>{const t=document.createElement("div"),n=document.createElement("h3");return t.classList.add("logo-container"),n.classList.add("logo-text"),n.innerText="P.F. Chang's",t.appendChild(n),t})()),e.appendChild((()=>{const e=document.createElement("div"),t=document.createElement("i");e.classList.add("nav-menu-container"),t.classList.add("fa-solid","fa-bars","pointer");const n=(()=>{const e=document.createElement("ul");return e.classList.add("menu-list-container","hidden"),["Home","Menu","About"].forEach((t=>{let n=document.createElement("li");n.innerText=t,n.addEventListener("click",(n=>{n.stopImmediatePropagation(),o(e),r(t)}),!0),e.appendChild(n)})),e})();return t.addEventListener("click",(()=>{o(n)})),e.appendChild(n),e.appendChild(t),e})()),e};var i=n(379),c=n.n(i),s=n(795),d=n.n(s),l=n(569),p=n.n(l),u=n(565),f=n.n(u),h=n(216),m=n.n(h),v=n(589),g=n.n(v),b=n(28),y={};y.styleTagTransform=g(),y.setAttributes=f(),y.insert=p().bind(null,"head"),y.domAPI=d(),y.insertStyleElement=m(),c()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals,n(223),n(642),n(387),n(884),n(132),n(495),n(904),n(925),n(767),n(211),function(){const e=document.getElementById("content"),n=a();e.appendChild(n),t()}()})()})();