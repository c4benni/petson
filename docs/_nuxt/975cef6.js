(window.webpackJsonp=window.webpackJsonp||[]).push([[49,12,24,39,40],{447:function(t,e,r){"use strict";var n=r(449);e.a=n.a},476:function(t,e,r){var content=r(480);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("d6a8c4a0",content,!0,{sourceMap:!1})},477:function(t,e,r){"use strict";r(24);var n=r(31),o=r(225);e.a={mixins:[Object(o.a)({type:[String,Number],default:""})],props:{required:Boolean,disabled:Boolean,autofocus:Boolean,rules:{type:Array,default:function(){return[]}},min:Object(n.f)([String,Number]),max:Object(n.f)([String,Number])}}},478:function(t,e,r){"use strict";r.r(e);var n=r(78),o=(r(30),r(477)),l=r(31),c={name:"BaseTextField",mixins:[o.a],props:{label:l.d,type:{type:String,default:"text"}},computed:{getRules:function(){return this.required?[].concat(Object(n.a)(this.rules||[]),[function(t){return!!t||"Required"}]):this.rules||[]}},methods:{onChange:function(t){var e=this;this.$emit("change",t),void 0!==this.min&&(this.modelSync=Math.max(parseFloat(this.modelSync)||this.min,this.min)),this.$nextTick((function(){void 0!==e.max&&(e.modelSync=Math.min(parseFloat(e.modelSync),e.max))}))}}},d=(r(479),r(20)),f=r(21),h=r.n(f),v=r(642),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-text-field",t._g(t._b({attrs:{type:t.type,rules:t.getRules,label:t.label,required:t.required,autofocus:t.autofocus,outlined:""},on:{change:t.onChange},model:{value:t.modelSync,callback:function(e){t.modelSync=e},expression:"modelSync"}},"v-text-field",t.$attrs,!1),t.$listeners))}),[],!1,null,"44f7650c",null);e.default=component.exports;h()(component,{VTextField:v.a})},479:function(t,e,r){"use strict";r(476)},480:function(t,e,r){var n=r(28)((function(i){return i[1]}));n.push([t.i,".v-input[data-v-44f7650c] input[type=number]::-webkit-inner-spin-button,.v-input[data-v-44f7650c] input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.v-input[data-v-44f7650c] input[type=number]{-moz-appearance:textfield}#__nuxt .v-input[data-v-44f7650c],#__nuxt .v-input[data-v-44f7650c] input{color:var(--v-text-secondary-base)}",""]),n.locals={},t.exports=n},486:function(t,e,r){"use strict";r.r(e);var n={name:"TextFieldPassword",mixins:[r(477).a],props:{label:{type:String,default:"Password *"}},data:function(){return{show:!1}},computed:{appendIcon:function(){var t;if(null!==(t=this.modelSync)&&void 0!==t&&t.length)return this.show?"mdi-eye-off":"mdi-eye"}},methods:{onFocus:function(){this.modelSync||(this.show=!1)}}},o=r(20),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("BaseTextField",{attrs:{type:t.show?"text":"password",label:t.label,"append-icon":t.appendIcon,autofocus:t.autofocus,required:"",rules:t.rules},on:{"click:append":function(e){t.show=!t.show},focus:t.onFocus},model:{value:t.modelSync,callback:function(e){t.modelSync=e},expression:"modelSync"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseTextField:r(478).default})},489:function(t,e,r){"use strict";r.r(e);var n=r(31),o={name:"FormAlert",props:{error:Object(n.f)(Object)}},l=r(20),c=r(21),d=r.n(c),f=r(540),h=r(97),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-fade-transition",[t.error?r("v-alert",{staticClass:"mb-[36px]",attrs:{text:"",type:"error",color:"error"}},[r("UiText",{staticClass:"error-text--text",attrs:{label:t.error.message,variant:"subtitle-1",opacity:"custom"}}),t._v(" "),t.error.errors?t._l(t.error.errors,(function(e,n){return r("ul",{key:n,attrs:{"aria-label":n+" error"}},t._l(e,(function(t,e){return r("UiText",{key:e,staticClass:"list-disc",attrs:{tag:"li",variant:"caption",opacity:"secondary",label:t}})})),1)})):t._e()],2):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{UiText:r(136).default}),d()(component,{VAlert:f.a,VFadeTransition:h.c})},494:function(t,e,r){var content=r(495);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("760481b0",content,!0,{sourceMap:!1})},495:function(t,e,r){var n=r(28)((function(i){return i[1]}));n.push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),n.locals={},t.exports=n},508:function(t,e,r){"use strict";var n=r(5);r(32);e.a={data:function(){return{valid:!0,loading:!1}},methods:{submit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=t.$refs.form)&&r.validate(),e.next=4,t.$nextTick();case 4:if(!t.valid){e.next=9;break}return t.loading=!0,e.next=8,t.apiCall("on-submit",t.submitPayload);case 8:t.loading=!1;case 9:case"end":return e.stop()}}),e)})))()}}}},515:function(t,e,r){"use strict";r.r(e);var n=r(78),o=(r(30),r(31)),l={name:"TextFieldConfirmPassword",mixins:[r(477).a],props:{label:{type:String,default:"Confirm password *"},password:o.d},computed:{selfRules:function(){var t=this;return[].concat(Object(n.a)(this.rules),[function(e){return e===t.password||"Passwords must match"}])}}},c=r(20),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("TextFieldPassword",{attrs:{label:t.label,rules:t.selfRules},model:{value:t.modelSync,callback:function(e){t.modelSync=e},expression:"modelSync"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TextFieldPassword:r(486).default})},531:function(t,e,r){"use strict";var n=r(0),o=(r(42),r(66),r(228),r(12),r(3),r(10),r(64),r(103),r(9),r(8),r(16),r(17),r(14)),l=r(137),c=r(226);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},540:function(t,e,r){"use strict";r(9),r(8),r(12),r(3),r(16),r(10),r(17);var n=r(0),o=(r(42),r(494),r(104)),l=r(447),c=r(316),d=r(65),f=r(49),h=r(2).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),v=r(14),m=r(15);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(v.a)(o.a,d.a,h).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(n.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(c.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=x(x({},o.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||f.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(m.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},578:function(t,e,r){"use strict";r.r(e);var n={name:"ChangePasswordForm",mixins:[r(508).a],data:function(){return{password:"",confirmPassword:""}},computed:{submitPayload:function(){return{password:this.password,confirmPassword:this.confirmPassword}}},methods:{resetForm:function(){this.password="",this.confirmPassword="",this.$refs.form.resetValidation()}}},o=r(20),l=r(21),c=r.n(l),d=r(449),f=r(467),h=r(531),v=r(469),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{ref:"form",attrs:{"lazy-validation":"",disabled:t.loading},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("TextFieldPassword",{attrs:{label:"New password",autofocus:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("TextFieldConfirmPassword",{attrs:{password:t.password,label:"Re-enter your new password"},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1),t._v(" "),r("v-col",[r("v-btn",{attrs:{elevation:"1",color:"primary",block:"",loading:t.loading},on:{click:t.submit}},[t._v("\n        Change password\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{TextFieldPassword:r(486).default,TextFieldConfirmPassword:r(515).default}),c()(component,{VBtn:d.a,VCol:f.a,VForm:h.a,VRow:v.a})},650:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(5),l=(r(32),r(22),r(50),r(9),r(8),r(12),r(3),r(16),r(10),r(17),r(18)),c=r(41);function d(t){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,o,d,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("object"!==Object(l.a)(e)){t.next=14;break}return r=e.token,n=e.email,o=e.password,d=e.confirmPassword,t.prev=2,t.next=5,this.$axios.$post("user/reset-password-token",{token:r,email:n,password:o,password_confirmation:d});case 5:return f=t.sent,t.abrupt("return",Object(c.b)(f));case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",Object(c.a)(t.t0));case 12:t.next=15;break;case 14:return t.abrupt("return",c.c.call(this));case 15:case"end":return t.stop()}}),t,this,[[2,9]])})))).apply(this,arguments)}function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"ChangePasswordPage",data:function(){return{loading:!1,error:null}},head:{title:"Change password"},methods:{changePassword:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var n,o,l,c,data,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=e.$route.query,o=n.email,l=n.token,o&&l){r.next=5;break}return r.next=4,e.$notify.open("Please request for another token.",3e3);case 4:return r.abrupt("return",e.$router.replace("/forgot-password"));case 5:return e.loading=!0,e.error=null,r.next=9,e.$nextTick();case 9:return r.next=11,d.call(e,v(v({},t),{},{email:o,token:l}));case 11:if(c=r.sent,data=c.data,f=c.error,e.error=f,!f){r.next=19;break}scrollTo({left:0,top:0,behavior:"smooth"}),r.next=22;break;case 19:if(!data){r.next=22;break}return r.next=22,e.$notify.open("Password successfully changed!",3e3);case 22:e.$refs.form.resetForm(),e.loading=!1;case 24:case"end":return r.stop()}}),r)})))()}}},_=r(20),x=r(21),w=r.n(x),y=r(467),O=r(469),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Page",[r("v-row",{staticClass:"w-[402px] h-full mx-auto mt-[89px] content-start",attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("UiText",{staticClass:"text-center mb-[20px]",attrs:{tag:"h2",label:"Change password",variant:"h5"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("UiText",{staticClass:"mb-[8px]",attrs:{tag:"h3",label:"Your new password must be different from previous passwords.",opacity:"secondary"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("FormAlert",{attrs:{error:t.error}}),t._v(" "),r("FormChangePassword",{ref:"form",on:{"on-submit":t.changePassword}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;w()(component,{UiText:r(136).default,FormAlert:r(489).default,FormChangePassword:r(578).default,Page:r(320).default}),w()(component,{VCol:y.a,VRow:O.a})}}]);