(function(e){function t(t){for(var r,a,s=t[0],l=t[1],c=t[2],m=0,p=[];m<s.length;m++)a=s[m],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="vue-movies/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"4ea9":function(e,t,n){"use strict";n("4ec5")},"4ec5":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"small-container",attrs:{id:"app"}},[n("h1",[e._v("EMPLOYEES")]),n("employees-form",{on:{"add:employee":e.addEmployee}}),n("employee-table",{attrs:{employees:e.employees},on:{"delete:employee":e.deleteEmployee,"edit:employee":e.editEmployee}})],1)},i=[],a=n("2909"),s=n("1da1"),l=(n("96cf"),n("d3b7"),n("99af"),n("4de4"),n("d81d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"employees-form"}},[n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("label",[e._v("Employee name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.name,expression:"employee.name"}],ref:"first",class:{"has-error":e.submitting&&e.invalidName},attrs:{type:"text"},domProps:{value:e.employee.name},on:{focus:e.clearStatus,keypress:e.clearStatus,input:function(t){t.target.composing||e.$set(e.employee,"name",t.target.value)}}}),n("label",[e._v("Employee Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.email,expression:"employee.email"}],class:{"has-error":e.submitting&&e.invalidEmail},attrs:{type:"text"},domProps:{value:e.employee.email},on:{focus:e.clearStatus,input:function(t){t.target.composing||e.$set(e.employee,"email",t.target.value)}}}),e.error&&e.submitting?n("p",{staticClass:"error-message"},[e._v(" ❗Please fill out all required fields ")]):e._e(),e.success?n("p",{staticClass:"success-message"},[e._v(" ✅ Employee successfully added ")]):e._e(),n("button",[e._v("Add Employee")])])])}),c=[],u=(n("b0c0"),{name:"employees-form",data:function(){return{submitting:!1,error:!1,success:!1,employee:{name:"",email:""}}},methods:{handleSubmit:function(){this.submitting=!0,this.clearStatus(),this.invalidName||this.invalidEmail?this.error=!0:(this.$emit("add:employee",this.employee),this.$refs.first.focus(),this.employee={name:"",email:""},this.error=!1,this.success=!0,this.submitting=!1)},clearStatus:function(){this.success=!1,this.error=!1}},computed:{invalidName:function(){return""===this.employee.name},invalidEmail:function(){return""===this.employee.email}}}),m=u,p=(n("4ea9"),n("2877")),d=Object(p["a"])(m,l,c,!1,null,"02927403",null),f=d.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"employee-table"}},[0==e.employees.length?n("h3",{staticClass:"empty"},[e._v("No employees")]):n("table",[e._m(0),n("tbody",e._l(e.employees,(function(t){return n("tr",{key:t.id},[e.editing===t.id?n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"employee.name"}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(n){n.target.composing||e.$set(t,"name",n.target.value)}}})]):n("td",[e._v(e._s(t.name))]),e.editing===t.id?n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"employee.email"}],attrs:{type:"text"},domProps:{value:t.email},on:{input:function(n){n.target.composing||e.$set(t,"email",n.target.value)}}})]):n("td",[e._v(e._s(t.email))]),e.editing===t.id?n("td",[n("button",{staticClass:"round-button shadow",on:{click:function(n){return e.editEmployee(t)}}},[e._v(" Save ")]),n("button",{staticClass:"muted-button",on:{click:function(n){return e.cancelEdit(t)}}},[e._v(" Cancel ")])]):n("td",[n("button",{staticClass:"round-button warn shadow",on:{click:function(n){return e.editMode(t)}}},[e._v(" Edit ")]),n("button",{staticClass:"round-button error shadow",on:{click:function(n){return e.$emit("delete:employee",t.id)}}},[e._v(" Delete ")])])])})),0)])])},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("Employee name")]),n("th",[e._v("Employee email")])])])}],v={name:"employee-table",props:{employees:Array},data:function(){return{cachedEmployee:null,editing:null}},methods:{editMode:function(e){this.cachedEmployee=Object.assign({},e),this.editing=e.id},editEmployee:function(e){""!==e.name&&""!==e.email&&(this.$emit("edit:employee",e.id,e),this.editing=null)},cancelEdit:function(e){Object.assign(e,this.cachedEmployee),this.editing=null}}},b=v,g=(n("ac28"),Object(p["a"])(b,h,y,!1,null,"264f4968",null)),E=g.exports,_={name:"App",components:{EmployeeTable:E,EmployeesForm:f},data:function(){return{employees:[{id:1,name:"Richard Hendricks",email:"richard@piedpiper.com"},{id:2,name:"Bertram Gilfoyle",email:"gilfoyle@piedpiper.com"},{id:3,name:"Dinesh Chugtai",email:"dinesh@piedpiper.com"}]}},mounted:function(){this.getEmployees()},methods:{addEmployee:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://jsonplaceholder.typicode.com/users",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:return r=n.sent,n.next=6,r.json();case 6:o=n.sent,t.employees=[].concat(Object(a["a"])(t.employees),[o]),n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))()},deleteEmployee:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://jsonplaceholder.typicode.com/users/".concat(e),{method:"DELETE"});case 3:t.employees=t.employees.filter((function(t){return t.id!==e})),n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()},editEmployee:function(e,t){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("https://jsonplaceholder.typicode.com/users/".concat(e),{method:"PUT",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:o=r.sent,i=o.json(),n.employees.map((function(t){return t.id===e?i:t})),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},getEmployees:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,e.employees=r,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}},w=_,x=(n("034f"),Object(p["a"])(w,o,i,!1,null,null,null)),j=x.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(j)}}).$mount("#app")},"85ec":function(e,t,n){},ac28:function(e,t,n){"use strict";n("d6e6")},d6e6:function(e,t,n){}});
//# sourceMappingURL=app.46b27af4.js.map