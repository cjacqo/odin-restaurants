(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(81),r=n.n(i),o=n(645),a=n.n(o)()(r());a.push([e.id,"*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n}\n\nhtml {\n    /* overflow-y: scroll; */\n}\n\nbody {\n    overflow: hidden;\n}\n\nul {\n    list-style: none;\n}\n\n.flex {\n    display: flex;\n}\n\n.pointer {\n    cursor: pointer;\n}\n\nheader {\n    overflow:hidden;\n}\n\n.nav-container {\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 1rem;\n}\n\n.menu-list-container {\n    position: absolute;\n    top: 50px;\n    right: 0;\n    width: 100vw;\n    background-color: red;\n    transition: width 1000ms ease-in-out;\n}\n\n.menu-list-container.hidden {\n    width: 0;\n    transition: width 1000ms ease-in-out;\n}",""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);i&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var o={},a=[],s=0;s<e.length;s++){var c=e[s],d=i.base?c[0]+i.base:c[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=r(m,i);i.byIndex=s,t.splice(s,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=i(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var s=n(o[a]);t[s].references--}for(var c=i(e,r),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},925:(e,t,n)=>{e.exports=n.p+"f9f2b65b41947e0816f4.jpeg"},132:(e,t,n)=>{e.exports=n.p+"5b317de5551d818b0b0e.jpg"},211:(e,t,n)=>{e.exports=n.p+"c717dce0c8a80f9ff19f.jpeg"},495:(e,t,n)=>{e.exports=n.p+"3243a5309d087cc270e2.jpg"},767:(e,t,n)=>{e.exports=n.p+"3a5a854d93696c970993.jpeg"},642:(e,t,n)=>{e.exports=n.p+"556048c144b3b2a89451.jpg"},884:(e,t,n)=>{e.exports=n.p+"73510d6e37c4df7cacc0.jpeg"},387:(e,t,n)=>{e.exports=n.p+"c26c549c7523c89b4e9f.jpeg"},904:(e,t,n)=>{e.exports=n.p+"d82953ec88f54f092f59.jpg"},223:(e,t,n)=>{e.exports=n.p+"b27816c161eba4b2d626.jpg"}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={id:i,exports:{}};return e[i](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),i=n(795),r=n.n(i),o=n(569),a=n.n(o),s=n(565),c=n.n(s),d=n(216),l=n.n(d),p=n(589),u=n.n(p),m=n(28),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=(e,t)=>{const n=document.createElement("div");n.classList.add("text-container");const i=document.createElement("h1"),r=document.createElement("h6");return i.classList.add("title-text"),r.classList.add("sub-title-text"),i.innerText=e,n.appendChild(i),t&&(r.innerText=t,n.appendChild(r)),n},g=e=>{const{title:t,subtitle:n,button:i}=e,r=document.createElement("section");r.classList.add("home-section");const o=document.createElement("div");o.classList.add("section-container","container");const a=f(t,n),s=(e=>{const t=document.createElement("div");t.classList.add("button-container");const n=document.createElement("button");return n.classList.add("primary-btn"),n.innerText=e,t.appendChild(n),t})(i);return o.appendChild(a),o.appendChild(s),r.appendChild(o),r},v=()=>{const e=document.getElementById("content"),t=document.createElement("main");t.classList.add("main-grid"),t.setAttribute("id","homeMain");const n=g({title:"Celebrate with a toast",subtitle:"New Iwai of the Tiger cocktail",button:"Make a Reservation"}),i=g({title:"Your favorites, brought home",subtitle:"with Delivery, Curbside Pickup & Takeout",button:"Order Online"}),r=g({title:"Introducing the official shop",subtitle:"Exclusive apparel, accessories & cookware",button:"Shop Now"});t.appendChild(n),t.appendChild(i),t.appendChild(r),e.appendChild(t)},b=()=>{const e=document.getElementById("content"),t=document.createElement("main");t.classList.add("main-flex"),t.setAttribute("id","menuMain");const n=(e=>{const{title:t,subtitle:n}=e,i=document.createElement("header");i.classList.add("page-header");const r=document.createElement("div");r.classList.add("content-container","container");const o=f(t,n);return r.appendChild(o),i.appendChild(r),i})({title:"Main Menu",subtitle:"We make all our food from scratch in each restaurant, every day."});t.appendChild(n),e.appendChild(t)},y=[{section:"Appetizers",header_img:n(223),items:[{title:"Chang's Lettuce Wraps",description:"A secret family recipe and our signature dish. Enough said.",spicy:!1,vegetarian:!0,gfo:!0,options:"Protein options: Chicken GFO, Vegetarian",img:n(642)},{title:"BBQ Pork Spare Ribs",description:"Slow braised pork ribs with a tangy Asian barbecue sauce, smoked tableside",spicy:!1,vegetarian:!1,gfo:!1,options:null,img:n(387)},{title:"Northern-Style Pork Spare Ribs",description:"Slow-braised pork ribs with dry rub five-spice seasoning, smoked tableside",spicy:!1,vegetarian:!1,gfo:!1,options:null,img:n(884)},{title:"Crispy Green Beans",description:"Tempura-battered, signature spicy dipping sauce",spicy:!1,vegetarian:!1,gfo:!1,options:null,img:n(132)},{title:"Edamame",description:"Steamed to order, tossed with kosher salt",spicy:!1,vegetarian:!0,gfo:!1,options:null,img:n(495)},{title:"Tempura Calamari",description:"Crisp calamari, hunan salt, wasabi aioli dipping sauce",spicy:!1,vegetarian:!1,gfo:!1,options:null,img:n(904)},{title:"Chili-Garlic Green Beans",description:"Fiery red chili sauce, fresh garlic, Sichuan preserves",spicy:!0,vegetarian:!0,gfo:!1,options:null,img:n(925)},{title:"Kung Pao Brussels Sprouts",description:"Wok-charred Brussels sprouts, peanuts, chili pods, Kung Pao sauce",spicy:!0,vegetarian:!1,gfo:!1,options:null,img:n(767)},{title:"Dynamite Shrimp",description:"Tempura-battered, tossed with a sriracha aioli",spicy:!0,vegetarian:!1,gfo:!1,options:null,img:n(211)}]}];function x(e){e.classList.toggle("hidden")}const w=()=>{const e=document.createElement("div"),t=document.createElement("i");e.classList.add("nav-menu-container"),t.classList.add("fa-solid","fa-bars","pointer");const n=(()=>{const e=document.createElement("ul");return e.classList.add("menu-list-container","hidden"),["Home","Menu","About"].forEach((t=>{let n=document.createElement("li");n.innerText=t,n.addEventListener("click",(n=>{n.stopImmediatePropagation(),x(e),(e=>{const t=document.getElementById("content");for(;t.children.length>1;)t.children[1].remove();switch(e){case"Home":default:return void v();case"Menu":console.log(y),b()}})(t)}),!0),e.appendChild(n)})),e})();return t.addEventListener("click",(()=>{x(n)})),e.appendChild(n),e.appendChild(t),e};!function(){const e=document.getElementById("content"),t=(()=>{const e=document.createElement("div");return e.classList.add("nav-container","flex"),e.style.height="50px",e.style.backgroundColor="green",e.appendChild((e=>{const t=document.createElement("div"),n=document.createElement("h3");return t.classList.add("logo-container"),n.classList.add("logo-text"),n.innerText="P.F. Chang's",t.appendChild(n),t})()),e.appendChild(w()),e})();e.appendChild(t),v()}()})()})();