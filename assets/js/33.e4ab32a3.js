(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{401:function(t,o,e){},525:function(t,o,e){"use strict";var r=e(401);e.n(r).a},749:function(t,o,e){"use strict";e.r(o);var r={data:function(){return{colorAlert:"primary",titleAlert:"Alert",activeAlert:!1,valueInput:""}},methods:{openAlert:function(t){this.colorAlert=t||this.getColorRandom(),this.$vs.dialog({color:this.colorAlert,title:"Dialog - ".concat(this.colorAlert),text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",accept:this.acceptAlert})},acceptAlert:function(){this.$vs.notify({color:this.colorAlert,title:"Accept Selected",text:"Lorem ipsum dolor sit amet, consectetur"})},getColorRandom:function(){function t(t,o){return Math.floor(Math.random()*(o-t))+t}return"rgb(".concat(t(0,255),",").concat(t(0,255),",").concat(t(0,255),")")}}},n=(e(525),e(1)),c=Object(n.a)(r,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"centerx"},[e("vs-button",{attrs:{color:"primary","vs-type":"flat"},on:{click:function(o){t.openAlert("primary")}}},[t._v("Alert Primary")]),t._v(" "),e("vs-button",{attrs:{color:"success","vs-type":"flat"},on:{click:function(o){t.openAlert("success")}}},[t._v("Alert success")]),t._v(" "),e("vs-button",{attrs:{color:"danger","vs-type":"flat"},on:{click:function(o){t.openAlert("danger")}}},[t._v("Alert Danger")]),t._v(" "),e("vs-button",{attrs:{color:"warning","vs-type":"flat"},on:{click:function(o){t.openAlert("warning")}}},[t._v("Alert Warning")]),t._v(" "),e("vs-button",{attrs:{color:"dark","vs-type":"flat"},on:{click:function(o){t.openAlert("dark")}}},[t._v("Alert Dark")]),t._v(" "),e("vs-button",{attrs:{color:"primary","vs-type":"gradient"},on:{click:function(o){t.openAlert(null)}}},[t._v("Alert Color RGB | HEX")])],1)},[],!1,null,null,null);c.options.__file="Alert.vue";o.default=c.exports}}]);