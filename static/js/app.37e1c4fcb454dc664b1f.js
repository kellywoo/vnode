webpackJsonp([14],{"+nFJ":function(n,e){},KpQp:function(n,e,t){"use strict";var r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"btn-box"},n._l(n.themes,function(e,r){return t("router-link",{key:r,staticClass:"btn-jump",attrs:{tag:"button",to:{name:e}}},[n._v(n._s(++r+". "+e))])})),n._v(" "),t("router-view")],1)},a=[],o={render:r,staticRenderFns:a};e.a=o},M93x:function(n,e,t){"use strict";var r=t("xJD8"),a=t("KpQp"),o=t("VU/8"),u=o(r.a,a.a,!1,null,null,null);e.a=u.exports},NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("7+uW"),a=t("M93x"),o=t("YaEn");!function(){new r.a({el:"#app",router:o.a,template:"<App/>",components:{App:a.a}})}()},YaEn:function(n,e,t){"use strict";function r(n,e){return function(){return t("mUJ2")("./"+n+"/"+e+".vue")}}var a=t("7+uW"),o=t("/ocq");a.a.use(o.a),e.a=new o.a({mode:"history",routes:[{path:"/render",name:"render",component:r("render","Parent")},{path:"/vnode",name:"vnode",component:r("vnode","Parent")},{path:"/snabbdom",name:"snabbdom",component:r("snab","Snab")},{path:"/s",name:"s",component:function(){return t.e(0).then(t.bind(null,"C4VY"))}},{path:"*",redirect:{name:"snabbdom"}}]})},mUJ2:function(n,e,t){function r(n){var e=a[n];return e?t.e(e[1]).then(function(){return t(e[0])}):Promise.reject(new Error("Cannot find module '"+n+"'."))}var a={"./Vnode.vue":["C4VY",0],"./VnodeChild.vue":["9n8i",12],"./render/Child.vue":["5IPE",5],"./render/ChildSlot.vue":["JzBi",11],"./render/GrandChild.vue":["/egy",10],"./render/Parent.vue":["RmEW",3],"./render/Sibling.vue":["TJY3",9],"./snab/Snab.vue":["we7O",1],"./vnode/Child.vue":["f5Mx",4],"./vnode/ChildSlot.vue":["SwE/",8],"./vnode/GrandChild.vue":["G0LP",7],"./vnode/Parent.vue":["+i53",2],"./vnode/Sibling.vue":["c15N",6]};r.keys=function(){return Object.keys(a)},r.id="mUJ2",n.exports=r},xJD8:function(n,e,t){"use strict";var r=t("+nFJ");t.n(r);e.a={name:"app",data:function(){return{items:[1],themes:["snabbdom","render","vnode"]}},methods:{say:function(){}}}}},["NHnr"]);