(function(e){function t(t){for(var a,r,s=t[0],l=t[1],c=t[2],d=0,u=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(u.length)u.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],a=!0,r=1;r<i.length;r++){var l=i[r];0!==o[l]&&(a=!1)}a&&(n.splice(t--,1),e=s(s.s=i[0]))}return e}var a={},o={app:0},n=[];function r(e){return s.p+"js/"+({Destination:"Destination"}[e]||e)+"."+{Destination:"ecd859c3","chunk-3f8473f8":"18e28842","chunk-6c40bb8f":"8fd54d03"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.e=function(e){var t=[],i=o[e];if(0!==i)if(i)t.push(i[2]);else{var a=new Promise((function(t,a){i=o[e]=[t,a]}));t.push(i[2]=a);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=r(e);var c=new Error;n=function(t){l.onerror=l.onload=null,clearTimeout(d);var i=o[e];if(0!==i){if(i){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",c.name="ChunkLoadError",c.type=a,c.request=n,i[1](c)}o[e]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(i,a,function(t){return e[t]}.bind(null,a));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/staging-adis/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=c;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view",{key:e.$route.path})],1)},n=[],r={components:{}},s=r,l=(i("5c0b"),i("2877")),c=Object(l["a"])(s,o,n,!1,null,null,null),d=c.exports,p=(i("d3b7"),i("3ca3"),i("ddb0"),i("8c4f")),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[e._m(0),a("div",{staticClass:"main-content--wrapper"},[a("div",{staticClass:"animated-background-box"},[a("div",{staticClass:"animated-background-box__text"},[e._v("Do you have a situation where you may be considering RWE? If yes, click below to enter the tool.")]),e._l(e.destinations,(function(t){return a("div",{key:t.slug,staticClass:"primary-button"},[a("router-link",{attrs:{to:{name:"Destination",params:{slug:t.slug}}}},[e._v(" Start now ")])],1)})),e._m(1)],2)]),a("div",{staticClass:"main-image"},[a("img",{attrs:{src:i("b5a0")}})])])},f=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"intro"},[i("h1",{staticClass:"intro__title"},[e._v("RWE for Regulatory Use Decision Aid")]),i("div",{staticClass:"intro__text"},[e._v("The interactive Decision Aid aims to help identify potential areas of opportunity for RWE to support regulatory strategies and clinical development plans, by matching regulatory objectives of interest and corresponding RW study design types with real-life case examples.")]),i("h3",[e._v("What the tool will cover")]),i("div",{staticClass:"intro-boxes"},[i("div",{staticClass:"intro-box"},[i("div",{staticClass:"intro-box__icon"},[e._v("1")]),i("div",{staticClass:"intro-box__text"},[e._v("Regulatory objective")])]),i("div",{staticClass:"intro-box"},[i("div",{staticClass:"intro-box__icon"},[e._v("2")]),i("div",{staticClass:"intro-box__text"},[e._v("RWE Study Design Type")])]),i("div",{staticClass:"intro-box"},[i("div",{staticClass:"intro-box__icon"},[e._v("3")]),i("div",{staticClass:"intro-box__text"},[e._v("Applicable Preceedents")])])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"blobs"},[i("div",{staticClass:"blob-one"}),i("div",{staticClass:"blob-two"})])}],g=i("c0d6"),m={name:"home",components:{},data:function(){return{destinations:g["a"].destinations}}},h=m,b=Object(l["a"])(h,u,f,!1,null,null,null),v=b.exports;a["a"].use(p["a"]);var w=new p["a"]({mode:"history",linkExactActiveClass:"vue-school-active-class",routes:[{path:"/",name:"home",component:v,props:!0},{path:"/destination/:slug",name:"Destination",props:!0,component:function(){return i.e("Destination").then(i.bind(null,"9fdb"))}},{path:"/destination/option/:slug",name:"OptionCard",props:!0,component:function(){return i.e("chunk-6c40bb8f").then(i.bind(null,"a4ee"))}},{path:"/destination/option/tier/:slug",name:"TierTwo",props:!0,component:function(){return i.e("chunk-3f8473f8").then(i.bind(null,"2e60"))}}]});a["a"].config.productionTip=!1,new a["a"]({router:w,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";i("9c0c")},"9c0c":function(e,t,i){},b5a0:function(e,t,i){e.exports=i.p+"img/illustration.71c082fe.png"},c0d6:function(e,t,i){"use strict";t["a"]={destinations:[{slug:"1",title:"First, some general consslugerations:",teaser:"RWE has been consslugered as supportive data, or in select cases as a central evslugence in achieving a regulatory objective. For example, in situations with:",listItems:["Rare diseases","High magnitude of treatment effect","Randomized clinical trial (RCT) not feasible","Real world data (RWD) available or can be generated"],optionCardIntro:"Sound similar to your situation? If so, what is your regulatory objective? Click one of the following categories:",optionCards:[{option:"Option 1",title:"New product approval",teaser:"This is option card one",image:"new.png",listItems:["Rare diseases","High magnitude of treatment effect","Randomized clinical trial (RCT) not feasible","Real world data (RWD) available or can be generated"],TierTwo:{slug:"1.1",title:"You chose External Control. Here is a list of relevant regulatory precedents that successfully achieved a Labeling Expansion supported by data from an external control.",teaser:"This is Option 1, Tier 2",listItems:["Rare diseases","High magnitude of treatment effect","Randomized clinical trial (RCT) not feasible","Real world data (RWD) available or can be generated"],optionCardIntro:"Click on one to learn more:",optionCards:{OptionOne:{option:"Option 1",details:"Details of this card here",TierThree:{optionCards:{OptionOne:{0:"Case 1",1:"Case name and details",caseStudy:"case study 1"}}}},OptionTwo:{option:"Option 2",details:"Details of this card here"}}}},{option:"Option 2",title:"New product approval",teaser:"This is option card two",image:"new.png",listItems:["Rare diseases","High magnitude of treatment effect","Randomized clinical trial (RCT) not feasible","Real world data (RWD) available or can be generated"],TierTwo:{slug:"1.2",title:"Option 1, Option 2",teaser:"Some kind of a description",listItems:["Rare diseases","High magnitude of treatment effect","Randomized clinical trial (RCT) not feasible","Real world data (RWD) available or can be generated"],optionCardIntro:"Intro to option card choices",optionCards:{OptionOne:{option:"Option 1",details:"Details of this card here",image:"new.png"},OptionTwo:{option:"Option 2",details:"Details of this card here",image:"new.png"}}}},{option:"Option 3",title:"New product approval",teaser:"This is option card three",image:"new.png",listItems:["Rare diseases","High magnitude of treatment effect","Randomized clinical trial (RCT) not feasible","Real world data (RWD) available or can be generated"],TierTwo:{slug:"1.2",title:"Option 1, Option 2",teaser:"Some kind of a description",listItems:["Rare diseases","High magnitude of treatment effect","Randomized clinical trial (RCT) not feasible","Real world data (RWD) available or can be generated"],optionCardIntro:"Intro to option card choices",optionCards:{OptionOne:{option:"Option 1",details:"Details of this card here",image:"new.png"},OptionTwo:{option:"Option 2",details:"Details of this card here",image:"new.png"}}}}]},{slug:"2",title:"First, some general consslugerations:",teaser:"RWE has been consslugered as supportive data, or in select cases as a central evslugence in achieving a regulatory objective. For example, in situations with:",listItems:["Rare diseases","High magnitude of treatment effect","Randomized clinical trial (RCT) not feasible","Real world data (RWD) available or can be generated"],optionCardIntro:"Sound similar to your situation? If so, what is your regulatory objective? Click one of the following categories:",optionCards:[{option:"Option 1",title:"New product approval",image:"new.png",TierTwo:{image:"iguacu-falls.jpg",slug:"2.1",title:"You chose External Control. Here is a list of relevant regulatory precedents that successfully achieved a Labeling Expansion supported by data from an external control.",teaser:"",optionCardIntro:"Click on one to learn more:",optionCards:{OptionOne:{option:"Option 1",details:"Details of this card here",TierThree:{optionCards:{OptionOne:{0:"Case 1",1:"Case name and details",caseStudy:"case study 1"}}}},OptionTwo:{option:"Option 2",details:"Details of this card here"}}}},{option:"Option 2",title:"Label expansion (new indication or additional clinical data)",image:"expansion.png",TierTwo:{slug:"2.2",title:"Option 1, Option 2",teaser:"Some kind of a description",listItems:["Rare diseases","High magnitude of treatment effect","Randomized clinical trial (RCT) not feasible","Real world data (RWD) available or can be generated"],optionCardIntro:"Intro to option card choices",optionCards:{OptionOne:{option:"Option 1",details:"Details of this card here",image:"new.png"},OptionTwo:{option:"Option 2",details:"Details of this card here",image:"new.png"}}}},{option:"Option 3",title:"Label expansion (new indication or additional clinical data)",image:"expansion.png",TierTwo:{slug:"2.3",title:"Option 1, Option 2",teaser:"Some kind of a description",listItems:["Rare diseases","High magnitude of treatment effect","Randomized clinical trial (RCT) not feasible","Real world data (RWD) available or can be generated"],optionCardIntro:"Intro to option card choices",optionCards:{OptionOne:{option:"Option 1",details:"Details of this card here",image:"new.png"},OptionTwo:{option:"Option 2",details:"Details of this card here",image:"new.png"}}}}]},{slug:"3",title:"First, some general consslugerations:",teaser:"RWE has been consslugered as supportive data, or in select cases as a central evslugence in achieving a regulatory objective. For example, in situations with:",listItems:["Rare diseases","High magnitude of treatment effect","Randomized clinical trial (RCT) not feasible","Real world data (RWD) available or can be generated"],optionCardIntro:"Sound similar to your situation? If so, what is your regulatory objective? Click one of the following categories:",optionCards:[{option:"Option 1",title:"New product approval",image:"new.png",TierTwo:{image:"iguacu-falls.jpg",slug:"3.1",title:"You chose External Control. Here is a list of relevant regulatory precedents that successfully achieved a Labeling Expansion supported by data from an external control.",teaser:"",optionCardIntro:"Click on one to learn more:",optionCards:{OptionOne:{option:"Option 1",details:"Details of this card here",TierThree:{optionCards:{OptionOne:{0:"Case 1",1:"Case name and details",caseStudy:"case study 1"}}}},OptionTwo:{option:"Option 2",details:"Details of this card here"}}}},{option:"Option 2",title:"Label expansion (new indication or additional clinical data)",image:"expansion.png",TierTwo:{slug:"3.2",title:"Option 1, Option 2",teaser:"Some kind of a description",listItems:["Rare diseases","High magnitude of treatment effect","Randomized clinical trial (RCT) not feasible","Real world data (RWD) available or can be generated"],optionCardIntro:"Intro to option card choices",optionCards:{OptionOne:{option:"Option 1",details:"Details of this card here",image:"new.png"},OptionTwo:{option:"Option 2",details:"Details of this card here",image:"new.png"}}}},{option:"Option 3",title:"Label expansion (new indication or additional clinical data)",image:"expansion.png",TierTwo:{slug:"3.3",title:"Option 1, Option 2",teaser:"Some kind of a description",listItems:["Rare diseases","High magnitude of treatment effect","Randomized clinical trial (RCT) not feasible","Real world data (RWD) available or can be generated"],optionCardIntro:"Intro to option card choices",optionCards:{OptionOne:{option:"Option 1",details:"Details of this card here",image:"new.png"},OptionTwo:{option:"Option 2",details:"Details of this card here",image:"new.png"}}}}]}]}}});
//# sourceMappingURL=app.a7621a87.js.map