webpackJsonp([12],{"9n8i":function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=o("NETy"),d=o("VU/8"),s=d(t.a,null,!1,null,null,null);n.default=s.exports},NETy:function(e,n,o){"use strict";n.a={data:function(){return{r:1}},render:function(e){var n=this;return console.log("%c vnodechildrender","color:#f00"),e("section",{attrs:{id:"sec"},class:{"render-dom":!0,"data-added-class":this.r<3},on:{click:function(){n.r+=1}}},[this.$slots.default,this.r,e("br")])},updated:function(){console.log(this,this.$vnode)},mounted:function(){var e=this;console.log("*******childmounted",e===e.$vnode.componentInstance),console.log(e.$vnode===e.$options._parentVnode,e.$vnode),console.log("-----------------------------------------------------"),console.dir(e.$el);var n=document.createElement("span");n.textContent="appended span",document.querySelector(".render-dom").appendChild(n),setTimeout(function(){document.querySelector(".render-dom").classList.add("auto-added-class")},3e3)}}}});