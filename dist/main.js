(()=>{"use strict";var e={757:(e,t,n)=>{e.exports=n.p+"27a7679c59dde6470f38.jpg"}},t={};function n(r){var c=t[r];if(void 0!==c)return c.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{const e=()=>{const e=document.createElement("div");return e.classList.add("nav-container","flex"),e.style.height="50px",e.style.backgroundColor="green",e.appendChild((e=>{const t=document.createElement("div"),n=document.createElement("h3");return t.classList.add("logo-container"),n.classList.add("logo-text"),n.innerText="P.F. Chang's",t.appendChild(n),t})()),e.appendChild((()=>{let e=!1;const t=document.createElement("div"),n=document.createElement("i");t.classList.add("nav-menu-container"),n.classList.add("fa-solid","fa-bars","pointer");const r=(()=>{const e=document.createElement("ul");return e.classList.add("menu-list-container","hidden"),["Home","Menu","Contact"].forEach((t=>{let n=document.createElement("li");n.innerText=t,e.appendChild(n)})),e})();return n.addEventListener("click",(()=>{e=!e,r.classList.toggle("hidden")})),t.appendChild(r),t.appendChild(n),t})()),e};n(757);document.getElementById("content").appendChild((()=>{const t=document.createElement("div");return t.appendChild((()=>{const t=document.createElement("header");return t.appendChild(e()),t})()),t})())})()})();