(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5073bce6"],{"60eb":function(t,s,e){},8418:function(t,s,e){"use strict";var a=e("c04e"),i=e("9bf2"),n=e("5c6c");t.exports=function(t,s,e){var c=a(s);c in t?i.f(t,c,n(0,e)):t[c]=e}},a434:function(t,s,e){"use strict";var a=e("23e7"),i=e("23cb"),n=e("a691"),c=e("50c4"),r=e("7b0b"),l=e("65f0"),o=e("8418"),u=e("1dde"),f=e("ae40"),d=u("splice"),v=f("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,h=Math.min,C=9007199254740991,_="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!d||!v},{splice:function(t,s){var e,a,u,f,d,v,m=r(this),b=c(m.length),g=i(t,b),w=arguments.length;if(0===w?e=a=0:1===w?(e=0,a=b-g):(e=w-2,a=h(p(n(s),0),b-g)),b+e-a>C)throw TypeError(_);for(u=l(m,a),f=0;f<a;f++)d=g+f,d in m&&o(u,f,m[d]);if(u.length=a,e<a){for(f=g;f<b-a;f++)d=f+a,v=f+e,d in m?m[v]=m[d]:delete m[v];for(f=b;f>b-a+e;f--)delete m[f-1]}else if(e>a)for(f=b-a;f>g;f--)d=f+a-1,v=f+e-1,d in m?m[v]=m[d]:delete m[v];for(f=0;f<e;f++)m[f+g]=arguments[f+2];return m.length=b-a+e,u}})},ade3:function(t,s,e){"use strict";function a(t,s,e){return s in t?Object.defineProperty(t,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[s]=e,t}e.d(s,"a",(function(){return a}))},ae57:function(t,s,e){"use strict";e("60eb")},e25b:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"header"},[e("div",{staticClass:"cm-header"},[e("span",{staticClass:"cm-header-icon",on:{click:function(s){return t.$router.back(-1)}}},[e("i",{staticClass:"icon-back"})]),e("h1",{staticClass:"cm-page-title"},[t._v("车票预订")])])]),t._m(0),t._m(1),t._m(2),e("div",{staticClass:"bottom",on:{click:function(s){return t.buy()}}},[0==t.$store.state.status?e("span",[t._v("立即预订")]):e("span",[t._v("确认改签")])])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"view"},[e("div",[e("ul",{staticClass:"train-book-modify"},[e("li",{staticClass:"from"},[e("strong",[t._v("杭州")]),e("span",[t._v("22:00")])]),e("li",{staticClass:"to"},[e("strong",[t._v("衢州")]),e("span",[t._v("23:20")])]),e("li",{staticClass:"mid"},[e("span",{staticClass:"jt-info"}),e("span",{staticClass:"train-name"},[t._v("G7383")])])]),e("div",{staticClass:"seat"},[e("span",{staticClass:"type"},[t._v("二等座")]),e("span",{staticClass:"price"},[t._v("￥77")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("div",{staticClass:"add"},[e("span",{staticClass:"text"},[t._v("新增乘客")]),e("i",{staticClass:"icon"})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"passenger-list"},[e("ul",[e("li",[e("div",{staticClass:"icon"},[e("i")]),e("div",{staticClass:"list"},[e("div",{staticClass:"left"},[e("p",{staticClass:"passenger"},[e("span",{staticClass:"name"},[t._v("黄大哒")]),e("span",{staticClass:"type"},[t._v("成人")])]),e("p",{staticClass:"card"},[t._v("434702199305671315")])]),e("div",{staticClass:"delete"},[t._v("删除")])])])])])}],n=(e("a434"),e("ade3")),c={data:function(){return Object(n["a"])({count:0,remind:!1,showDelete:""},"count",0)},methods:{buy:function(){1==this.$store.state.status?this.$notify.success("改签成功"):this.$notify.success("购票成功"),this.$router.push("/order")},deletePassenger:function(t){this.$store.state.passengerList.splice(t,1)},show:function(t){this.$set(t,"change",!t.change)}}},r=c,l=(e("ae57"),e("2877")),o=Object(l["a"])(r,a,i,!1,null,"44e91697",null);s["default"]=o.exports}}]);
//# sourceMappingURL=chunk-5073bce6.63b4a694.js.map