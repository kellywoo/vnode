webpackJsonp([14],{"+nFJ":function(e,n){},KpQp:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"btn-box"},e._l(e.themes,function(n,r){return t("router-link",{key:r,staticClass:"btn-jump",attrs:{tag:"button",to:{name:n}}},[e._v(e._s(++r+". "+n))])})),e._v(" "),t("keep-alive",[t("router-view")],1)],1)},a=[],o={render:r,staticRenderFns:a};n.a=o},M93x:function(e,n,t){"use strict";var r=t("xJD8"),a=t("KpQp"),o=t("VU/8"),u=o(r.a,a.a,!1,null,null,null);n.a=u.exports},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("7+uW"),a=t("M93x"),o=t("YaEn");!function(){new r.a({el:"#app",router:o.a,template:"<App/>",components:{App:a.a}})}()},YaEn:function(e,n,t){"use strict";function r(e,n){return function(){return t("mUJ2")("./"+e+"/"+n+".vue")}}var a=t("7+uW"),o=t("/ocq");a.a.use(o.a),n.a=new o.a({mode:"history",routes:[{path:"./render",name:"render",component:r("render","Parent")},{path:"./vnode",name:"vnode",component:r("vnode","Parent")},{path:"./snabbdom",name:"snabbdom",component:r("snab","Snab")},{path:"./m",name:"s",component:function(){return t.e(0).then(t.bind(null,"C4VY"))}},{path:"*",redirect:{name:"snabbdom"}}]})},mUJ2:function(e,n,t){function r(e){var n=a[e];return n?t.e(n[1]).then(function(){return t(n[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var a={"./Vnode.vue":["C4VY",0],"./VnodeChild.vue":["9n8i",12],"./render/Child.vue":["5IPE",5],"./render/ChildSlot.vue":["JzBi",11],"./render/GrandChild.vue":["/egy",10],"./render/Parent.vue":["RmEW",3],"./render/Sibling.vue":["TJY3",9],"./snab/Snab.vue":["we7O",1],"./vnode/Child.vue":["f5Mx",4],"./vnode/ChildSlot.vue":["SwE/",8],"./vnode/GrandChild.vue":["G0LP",7],"./vnode/Parent.vue":["+i53",2],"./vnode/Sibling.vue":["c15N",6]};r.keys=function(){return Object.keys(a)},r.id="mUJ2",e.exports=r},xJD8:function(e,n,t){"use strict";var r=t("+nFJ");t.n(r);n.a={name:"app",data:function(){return{items:[1],themes:["snabbdom","render","vnode"]}},methods:{say:function(){}}}}},["NHnr"]);