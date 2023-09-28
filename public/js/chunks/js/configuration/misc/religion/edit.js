(self.webpackChunkInstiKit=self.webpackChunkInstiKit||[]).push([[1393],{44574:(t,i,s)=>{"use strict";s.r(i),s.d(i,{default:()=>n});const e={components:{religionForm:s(48224).Z},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}};const n=(0,s(51900).Z)(e,(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("misc.edit_religion")))])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"action-buttons pull-right"},[s("button",{staticClass:"btn btn-info btn-sm",on:{click:function(i){return t.$router.push("/configuration/misc/religion")}}},[s("i",{staticClass:"fas fa-list"}),t._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("misc.religion")))])])])])])]),t._v(" "),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body p-t-20"},[s("religion-form",{attrs:{id:t.id}})],1)])])])}),[],!1,null,null,null).exports},48224:(t,i,s)=>{"use strict";s.d(i,{Z:()=>n});const e={data:function(){return{religionForm:new Form({name:"",description:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var t=this,i=this.$loading.show();this.religionForm.post("/api/misc/religion").then((function(s){toastr.success(s.message),t.$emit("completed"),i.hide()})).catch((function(t){i.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,i=this.$loading.show();axios.get("/api/misc/religion/"+this.id).then((function(s){t.religionForm.name=s.name,t.religionForm.description=s.description,i.hide()})).catch((function(s){i.hide(),helper.showErrorMsg(s),t.$router.push("/configuration/misc/religion")}))},update:function(){var t=this,i=this.$loading.show();this.religionForm.patch("/api/misc/religion/"+this.id).then((function(s){toastr.success(s.message),i.hide(),t.$router.push("/configuration/misc/religion")})).catch((function(t){i.hide(),helper.showErrorMsg(t)}))}}};const n=(0,s(51900).Z)(e,(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("form",{on:{submit:function(i){return i.preventDefault(),t.proceed.apply(null,arguments)},keydown:function(i){return t.religionForm.errors.clear(i.target.name)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("misc.religion_name")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.religionForm.name,expression:"religionForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("misc.religion_name")},domProps:{value:t.religionForm.name},on:{input:function(i){i.target.composing||t.$set(t.religionForm,"name",i.target.value)}}}),t._v(" "),s("show-error",{attrs:{"form-name":t.religionForm,"prop-name":"name"}})],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("misc.religion_description")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.religionForm.description,expression:"religionForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:t.trans("misc.religion_description")},domProps:{value:t.religionForm.description},on:{input:function(i){i.target.composing||t.$set(t.religionForm,"description",i.target.value)}}}),t._v(" "),s("show-error",{attrs:{"form-name":t.religionForm,"prop-name":"description"}})],1)])]),t._v(" "),s("div",{staticClass:"card-footer text-right"},[s("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/misc/religion"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():s("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(i){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?s("span",[t._v(t._s(t.trans("general.update")))]):s("span",[t._v(t._s(t.trans("general.save")))])])],1)])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=edit.js.map?id=6285775ea960a36eb3bf