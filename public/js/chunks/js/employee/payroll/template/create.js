(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[703],{43012:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});const o={components:{payrollTemplateForm:a(77057).Z},data:function(){return{ruuid:this.$route.params.uuid}},mounted:function(){helper.hasPermission("manage-payroll-template")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}};const l=(0,a(51900).Z)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"page-titles"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("employee.payroll_template")))])]),e._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"action-buttons pull-right"},[a("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){return e.$router.push("/employee/payroll/template")}}},[a("i",{staticClass:"fas fa-list"}),e._v(" "),a("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("employee.payroll_template")))])])])])])]),e._v(" "),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"card card-form"},[a("div",{staticClass:"card-body"},[a("payroll-template-form")],1)])])])}),[],!1,null,null,null).exports},77057:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});const o={components:{},props:["uuid"],data:function(){return{payrollTemplateForm:new Form({name:"",is_active:"",description:"",pay_heads:[]}),pay_heads:[],attendance_types:[],categories:[{text:i18n.employee.pay_head_category_not_applicable,value:"not_applicable"},{text:i18n.employee.pay_head_category_attendance,value:"attendance"},{text:i18n.employee.pay_head_category_flat_rate,value:"flat_rate"},{text:i18n.employee.pay_head_category_user_defined,value:"user_defined"},{text:i18n.employee.pay_head_category_computation,value:"computation"},{text:i18n.employee.pay_head_category_production,value:"production"}]}},mounted:function(){this.getPreRequisite()},methods:{hasPermission:function(e){return helper.hasPermission(e)},getPayHeadNameWithAlias:function(e){return helper.getPayHeadNameWithAlias(e)},getCategoryName:function(e){return"pay_head_category_"+e},getComputationName:function(e){return"pay_head_computation_"+e},getAttendanceTypeName:function(e){return"attendance_type_"+e},populatePayHeads:function(){var e=this;this.pay_heads.forEach((function(t){e.payrollTemplateForm.pay_heads.push({id:t.id,name:t.name,alias:t.alias,type:t.type,category:null,attendance_type_id:null,computation:""})}))},getPreRequisite:function(){var e=this,t=this.$loading.show();axios.get("/api/employee/payroll/template/pre-requisite").then((function(a){t.hide(),e.pay_heads=a.pay_heads,e.attendance_types=a.attendance_types,e.payrollTemplateForm.pay_heads=[],e.uuid?e.get():e.populatePayHeads()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},proceed:function(){this.uuid?this.update():this.store()},store:function(){var e=this,t=this.$loading.show();this.payrollTemplateForm.post("/api/employee/payroll/template").then((function(a){toastr.success(a.message),e.payrollTemplateForm.pay_heads=[],e.populatePayHeads(),t.hide(),e.$emit("completed")})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},get:function(){var e=this,t=this.$loading.show();axios.get("/api/employee/payroll/template/"+this.uuid).then((function(a){var o=a.payroll_template;e.payrollTemplateForm.name=o.name,e.payrollTemplateForm.is_active=o.is_active,e.payrollTemplateForm.description=o.description,o.payroll_template_details.forEach((function(t){e.payrollTemplateForm.pay_heads.push({id:t.pay_head.id,name:t.pay_head.name,alias:t.pay_head.alias,type:t.pay_head.type,category:t.category,computation:t.computation,attendance_type_id:t.employee_attendance_type_id})})),e.pay_heads.forEach((function(t){void 0===e.payrollTemplateForm.pay_heads.find((function(e){return e.id==t.id}))&&e.payrollTemplateForm.pay_heads.push({id:t.id,name:t.name,alias:t.alias,type:t.type,category:null,computation:"",attendance_type_id:null})})),t.hide()})).catch((function(a){t.hide(),helper.showErrorMsg(a),e.$router.push("/employee/payroll/template")}))},update:function(){var e=this,t=this.$loading.show();this.payrollTemplateForm.patch("/api/employee/payroll/template/"+this.uuid).then((function(a){toastr.success(a.message),t.hide(),e.$router.push("/employee/payroll/template")})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))}}};const l=(0,a(51900).Z)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"p-t-20"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.proceed.apply(null,arguments)},keydown:function(t){return e.payrollTemplateForm.errors.clear(t.target.name)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.payroll_template_name")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.payrollTemplateForm.name,expression:"payrollTemplateForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:e.trans("employee.payroll_template_name")},domProps:{value:e.payrollTemplateForm.name},on:{input:function(t){t.target.composing||e.$set(e.payrollTemplateForm,"name",t.target.value)}}}),e._v(" "),a("show-error",{attrs:{"form-name":e.payrollTemplateForm,"prop-name":"name"}})],1)]),e._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.payroll_template_is_active")))]),e._v(" "),a("br"),e._v(" "),a("switches",{attrs:{theme:"bootstrap",color:"success"},model:{value:e.payrollTemplateForm.is_active,callback:function(t){e.$set(e.payrollTemplateForm,"is_active",t)},expression:"payrollTemplateForm.is_active"}})],1)]),e._v(" "),a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.payroll_template_description")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.payrollTemplateForm.description,expression:"payrollTemplateForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:e.trans("employee.payroll_template_description")},domProps:{value:e.payrollTemplateForm.description},on:{input:function(t){t.target.composing||e.$set(e.payrollTemplateForm,"description",t.target.value)}}}),e._v(" "),a("show-error",{attrs:{"form-name":e.payrollTemplateForm,"prop-name":"description"}})],1)])]),e._v(" "),a("draggable",{staticClass:"list-group",on:{start:function(t){e.drag=!0},end:function(t){e.drag=!1}},model:{value:e.payrollTemplateForm.pay_heads,callback:function(t){e.$set(e.payrollTemplateForm,"pay_heads",t)},expression:"payrollTemplateForm.pay_heads"}},e._l(e.payrollTemplateForm.pay_heads,(function(t,o){return a("div",{key:t.id,staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-3"},[a("i",{staticClass:"fas fa-arrows-alt pointer m-r-20"}),e._v(" "),a("span",{class:"earning"==t.type?"text-success":"text-danger"},[e._v(e._s(e.getPayHeadNameWithAlias(t)))])]),e._v(" "),a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"pay_head.category"}],staticClass:"custom-select col-12",attrs:{name:e.getCategoryName(o)},on:{change:[function(a){var o=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(t,"category",a.target.multiple?o:o[0])},function(t){e.payrollTemplateForm.errors.clear(e.getCategoryName(o))}]}},[a("option",{attrs:{value:"null"}},[e._v(e._s(e.trans("general.select_one")))]),e._v(" "),e._l(e.categories,(function(t){return a("option",{domProps:{value:t.value}},[e._v("\n                            "+e._s(t.text)+"\n                          ")])}))],2),e._v(" "),a("show-error",{attrs:{"form-name":e.payrollTemplateForm,"prop-name":e.getCategoryName(o)}})],1)]),e._v(" "),"production"==t.category?a("div",{staticClass:"col-12 col-sm-4"},[a("div",{staticClass:"form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.attendance_type_id,expression:"pay_head.attendance_type_id"}],staticClass:"custom-select col-12",attrs:{name:e.getAttendanceTypeName(o)},on:{change:[function(a){var o=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(t,"attendance_type_id",a.target.multiple?o:o[0])},function(t){e.payrollTemplateForm.errors.clear(e.getAttendanceTypeName(o))}]}},[a("option",{attrs:{value:"null"}},[e._v(e._s(e.trans("employee.select_attendance_type")))]),e._v(" "),e._l(e.attendance_types,(function(t){return a("option",{domProps:{value:t.id}},[e._v("\n                            "+e._s(t.name)+" ("+e._s(t.unit)+")\n                          ")])}))],2),e._v(" "),a("show-error",{attrs:{"form-name":e.payrollTemplateForm,"prop-name":e.getAttendanceTypeName(o)}})],1)]):e._e(),e._v(" "),"computation"==t.category?a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.computation,expression:"pay_head.computation"}],staticClass:"form-control",attrs:{type:"text",name:e.getComputationName(o),placeholder:e.trans("employee.pay_head_computation")},domProps:{value:t.computation},on:{input:function(a){a.target.composing||e.$set(t,"computation",a.target.value)}}}),e._v(" "),a("show-error",{attrs:{"form-name":e.payrollTemplateForm,"prop-name":e.getComputationName(o)}})],1)]):e._e()])})),0),e._v(" "),a("div",{staticClass:"card-footer"},[a("div",{staticClass:"text-right"},[a("router-link",{directives:[{name:"show",rawName:"v-show",value:e.uuid,expression:"uuid"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/employee/payroll/template"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),a("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e._v(e._s(e.trans("general.save")))])],1)])],1)])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=create.js.map?id=e5e37f7c524e0feb9256