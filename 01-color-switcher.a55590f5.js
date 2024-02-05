const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let o;const r=t=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`};t.addEventListener("click",(()=>{o=setInterval(r,1e3)})),e.addEventListener("click",(()=>{clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.a55590f5.js.map
