(()=>{"use strict";var e={940:(e,t,r)=>{e.exports=r.p+"images/image.png"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e=r(940);const t=document.createElement("header");t.innerHTML="this is webpack demo",t.classList.add("info"),document.body.appendChild(t);const n=document.createElement("img");n.src=e,n.style.width="50px",n.style.height="50px",t.appendChild(n),document.body.appendChild(function(){const e=document.createElement("div");return e.innerHTML="and it is cool happy to try it\n    and I wish I can use it more ",e.classList.add("myDiv"),e}()),console.log("hello world "),document.write("<h1>Hello from Hello world commponent</h1>")})()})();