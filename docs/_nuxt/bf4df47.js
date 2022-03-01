(window.webpackJsonp=window.webpackJsonp||[]).push([[10,12,34],{479:function(t,e,n){var content=n(483);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("d6a8c4a0",content,!0,{sourceMap:!1})},480:function(t,e,n){"use strict";n(24);var r=n(31),l=n(227);e.a={mixins:[Object(l.a)({type:[String,Number],default:""})],props:{required:Boolean,disabled:Boolean,autofocus:Boolean,rules:{type:Array,default:function(){return[]}},min:Object(r.f)([String,Number]),max:Object(r.f)([String,Number])}}},481:function(t,e,n){"use strict";n.r(e);var r=n(79),l=(n(30),n(480)),o=n(31),c={name:"BaseTextField",mixins:[l.a],props:{label:o.d,type:{type:String,default:"text"}},computed:{getRules:function(){return this.required?[].concat(Object(r.a)(this.rules||[]),[function(t){return!!t||"Required"}]):this.rules||[]}},methods:{onChange:function(t){var e=this;this.$emit("change",t),void 0!==this.min&&(this.modelSync=Math.max(parseFloat(this.modelSync)||this.min,this.min)),this.$nextTick((function(){void 0!==e.max&&(e.modelSync=Math.min(parseFloat(e.modelSync),e.max))}))}}},d=(n(482),n(21)),m=n(22),f=n.n(m),x=n(645),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-text-field",t._g(t._b({attrs:{type:t.type,rules:t.getRules,label:t.label,required:t.required,autofocus:t.autofocus,outlined:""},on:{change:t.onChange},model:{value:t.modelSync,callback:function(e){t.modelSync=e},expression:"modelSync"}},"v-text-field",t.$attrs,!1),t.$listeners))}),[],!1,null,"44f7650c",null);e.default=component.exports;f()(component,{VTextField:x.a})},482:function(t,e,n){"use strict";n(479)},483:function(t,e,n){var r=n(28)((function(i){return i[1]}));r.push([t.i,".v-input[data-v-44f7650c] input[type=number]::-webkit-inner-spin-button,.v-input[data-v-44f7650c] input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.v-input[data-v-44f7650c] input[type=number]{-moz-appearance:textfield}#__nuxt .v-input[data-v-44f7650c],#__nuxt .v-input[data-v-44f7650c] input{color:var(--v-text-secondary-base)}",""]),r.locals={},t.exports=r},488:function(t,e,n){var content=n(496);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("bb635424",content,!0,{sourceMap:!1})},495:function(t,e,n){"use strict";n(488)},496:function(t,e,n){var r=n(28)((function(i){return i[1]}));r.push([t.i,".v-input[data-v-be3f8a54] .v-input__control,.v-input[data-v-be3f8a54] .v-input__slot{height:100%!important;width:100%!important;padding:0!important;min-height:100%!important}.v-input[data-v-be3f8a54] input{text-align:center}",""]),r.locals={},t.exports=r},503:function(t,e,n){"use strict";n.r(e);n(24);var r=n(227),l=n(31),o={name:"OrderQuantity",mixins:[Object(r.a)([Number,String])],props:{dense:Boolean,min:{type:Number,default:0},max:Object(l.c)(Number)},computed:{icons:function(){var t=this;return[["minus",this.modelSync<=this.min,function(){return t.modelSync=parseFloat(t.modelSync)-1}],["plus",this.modelSync>=this.max,function(){return t.modelSync=parseFloat(t.modelSync)+1}]]}}},c=(n(495),n(21)),d=n(22),m=n.n(d),f=n(452),x=n(451),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex space-x-8"},[t._l(t.icons,(function(e,r){var l=e[0],o=e[1],c=e[2];return[n("v-btn",{key:l,staticClass:"rounded p-0",class:{"min-h-[48px] min-w-[48px] h-[48px] max-w-[48px]":!t.dense,"min-h-[36px] min-w-[36px] h-[36px] max-w-[36px]":t.dense},attrs:{disabled:o,depressed:"",large:t.dense,title:l},on:{click:c}},[n("v-icon",{attrs:{color:o?void 0:"text-secondary"}},[t._v("\n        mdi-"+t._s(l)+"\n      ")])],1),t._v(" "),0===r?n("BaseTextField",{key:l+"icon",staticClass:"p-0",class:{"min-h-[48px] min-w-[48px] h-[48px] max-w-[48px]":!t.dense,"min-h-[36px] min-w-[36px] h-[36px] max-w-[36px]":t.dense},attrs:{dense:"",solo:"",flat:"",label:"Quantity",type:"number",min:t.min,max:t.max,"hide-details":""},model:{value:t.modelSync,callback:function(e){t.modelSync=e},expression:"modelSync"}}):t._e()]}))],2)}),[],!1,null,"be3f8a54",null);e.default=component.exports;m()(component,{BaseTextField:n(481).default}),m()(component,{VBtn:f.a,VIcon:x.a})},585:function(t,e,n){"use strict";n.r(e);var r={name:"AddToCartCard",data:function(){return{quantity:1}}},l=n(21),o=n(22),c=n.n(o),d=n(452),m=n(470),f=n(451),x=n(318),v=n(472),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"h-[652px] mr-[96px] primary",attrs:{cols:"6"}},[n("AnimateInView",{staticClass:"h-full w-full"},[n("v-img",{staticClass:"primary"})],1)],1),t._v(" "),n("v-col",[n("AnimateInView",{attrs:{delay:"100ms"}},[n("div",{staticClass:"grid gap-y-8 mb-[58px]"},[n("UiText",{attrs:{tag:"h2",variant:"h3",label:"Brit care"}}),t._v(" "),n("UiText",{attrs:{opacity:"secondary",variant:"h4",label:"Endurance Duck & Rice"}}),t._v(" "),n("UiText",{attrs:{opacity:"secondary",variant:"h4",label:"Dry dog food"}})],1),t._v(" "),n("UiText",{staticClass:"mb-[20px]",attrs:{variant:"h2",label:"200kn"}}),t._v(" "),n("div",{staticClass:"flex space-x-24"},[n("v-btn",{staticClass:"h-[48px]",attrs:{color:"primary",elevation:"2",large:""}},[n("v-icon",[t._v(" mdi-cart ")]),t._v("\n\n          Add to cart\n        ")],1),t._v(" "),n("OrderQuantity",{attrs:{max:100},model:{value:t.quantity,callback:function(e){t.quantity=e},expression:"quantity"}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{AnimateInView:n(320).default,UiText:n(137).default,OrderQuantity:n(503).default}),c()(component,{VBtn:d.a,VCol:m.a,VIcon:f.a,VImg:x.a,VRow:v.a})}}]);