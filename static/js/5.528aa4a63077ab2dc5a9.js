webpackJsonp([5,10],{"/egy":function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var c=n("NFEy"),l=n("VU/8"),t=l(c.a,null,!1,null,null,null);o.default=t.exports},"52dQ":function(e,o,n){"use strict";var c=n("/egy"),l=0;o.a={props:{tag:{default:"div"}},beforeCreate:function(){console.log("%c 2. child:beforecreate","font-size: 20px;color:#f00")},data:function(){return{clickedNumber:l,msgp:"paragraph",rendered:0}},created:function(){console.log("%c 2. child:created","font-size: 20px;color:#f00")},beforeMount:function(){console.log("%c 2. child:beforemount","font-size: 20px;color:#f00")},mounted:function(){console.log("%c 2. child:mounted","font-size: 20px;color:#f00")},beforeDestroy:function(){console.log("%c 2. child:beforedestroy","font-size: 20px;color:#f00")},destroyed:function(){console.log("%c 2. child:destroyed","font-size: 20px;color:#f00")},render:function(e){++l,console.log("%c 2. child:render","font-size: 20px;color:#f00");var o=this;return e(this.tag,{class:["child"],is:this.tag},[e("h1","child called: "+l),e("button",{style:{textAlign:"center",width:"100%",padding:"20px 10px",color:"#fff",border:"1px solid rgba(255,255,255,0.2)",backgroundColor:"deepskyblue",fontSize:"18px",cursor:"pointer",marginBottom:"10px"},on:{click:function(){++o.clickedNumber,console.log("clickedNumber: ",o.clickedNumber)}}},"click"),e("grand-child",{nativeOn:{click:function(){alert("called nativeOn(event attaching to component)")}}})])},components:{"grand-child":c.default},beforeUpdate:function(){console.log("%c 2. child: beforeupdate","font-size: 20px;color:#f00")},updated:function(){console.log("%c 2. child: updated","font-size: 20px;color:#f00")}}},"5IPE":function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var c=n("52dQ"),l=n("VU/8"),t=l(c.a,null,!1,null,null,null);o.default=t.exports},NFEy:function(e,o,n){"use strict";var c=0;o.a={props:{num:{}},beforecreate:function(){console.log("grandChild:beforecreate")},created:function(){console.log("grandChild:created")},beforeMount:function(){console.log("grandChild:beforemount")},mounted:function(){console.log("grandChild:mounted")},render:function(e){return e("div",{class:["grand-child"]},[e("h1","grand-child called: "+ ++c)])}}}});
//# sourceMappingURL=5.528aa4a63077ab2dc5a9.js.map