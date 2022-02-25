(window.webpackJsonp=window.webpackJsonp||[]).push([[17,12,19],{475:function(e,n,t){var content=t(479);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(30).default)("d6a8c4a0",content,!0,{sourceMap:!1})},476:function(e,n,t){"use strict";t(24);var o=t(32),r=t(225);n.a={mixins:[Object(r.a)({type:[String,Number],default:""})],props:{required:Boolean,disabled:Boolean,autofocus:Boolean,rules:{type:Array,default:function(){return[]}},min:Object(o.f)([String,Number]),max:Object(o.f)([String,Number])}}},477:function(e,n,t){"use strict";t.r(n);var o=t(79),r=(t(31),t(476)),l=t(32),c={name:"BaseTextField",mixins:[r.a],props:{label:l.d,type:{type:String,default:"text"}},computed:{getRules:function(){return this.required?[].concat(Object(o.a)(this.rules||[]),[function(e){return!!e||"Required"}]):this.rules||[]}},methods:{onChange:function(e){var n=this;this.$emit("change",e),void 0!==this.min&&(this.modelSync=Math.max(parseFloat(this.modelSync)||this.min,this.min)),this.$nextTick((function(){void 0!==n.max&&(n.modelSync=Math.min(parseFloat(n.modelSync),n.max))}))}}},d=(t(478),t(21)),v=t(22),h=t.n(v),f=t(641),component=Object(d.a)(c,(function(){var e=this,n=e.$createElement;return(e._self._c||n)("v-text-field",e._g(e._b({attrs:{type:e.type,rules:e.getRules,label:e.label,required:e.required,autofocus:e.autofocus,outlined:""},on:{change:e.onChange},model:{value:e.modelSync,callback:function(n){e.modelSync=n},expression:"modelSync"}},"v-text-field",e.$attrs,!1),e.$listeners))}),[],!1,null,"44f7650c",null);n.default=component.exports;h()(component,{VTextField:f.a})},478:function(e,n,t){"use strict";t(475)},479:function(e,n,t){var o=t(29)((function(i){return i[1]}));o.push([e.i,".v-input[data-v-44f7650c] input[type=number]::-webkit-inner-spin-button,.v-input[data-v-44f7650c] input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.v-input[data-v-44f7650c] input[type=number]{-moz-appearance:textfield}#__nuxt .v-input[data-v-44f7650c],#__nuxt .v-input[data-v-44f7650c] input{color:var(--v-text-secondary-base)}",""]),o.locals={},e.exports=o},482:function(e,n,t){"use strict";var o=t(6),r=t(119).findIndex,l=t(118),c="findIndex",d=!0;c in[]&&Array(1).findIndex((function(){d=!1})),o({target:"Array",proto:!0,forced:d},{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),l(c)},487:function(e,n,t){"use strict";var o=t(2),r=t(1);n.a=o.a.extend({name:"comparable",props:{valueComparator:{type:Function,default:r.k}}})},495:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));t(9),t(8),t(16),t(17);var o=t(0),r=(t(24),t(12),t(3),t(317),t(10),t(45),t(103),t(482),t(508),t(487)),l=t(232),c=t(48),d=t(14),v=t(15);function h(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}var f=Object(d.a)(r.a,l.a,c.a).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(n){Object(o.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var e=this;return this.items.filter((function(n,t){return e.toggleMethod(e.getValue(n,t))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var e=this;if(!this.multiple)return function(n){return e.valueComparator(e.internalValue,n)};var n=this.internalValue;return Array.isArray(n)?function(t){return n.some((function(n){return e.valueComparator(n,t)}))}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(v.c)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(e,i){return void 0===e.value?i:e.value},onClick:function(e){this.updateInternalValue(this.getValue(e,this.items.indexOf(e)))},register:function(e){var n=this,t=this.items.push(e)-1;e.$on("change",(function(){return n.onClick(e)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(e,t)},unregister:function(e){if(!this._isDestroyed){var n=this.items.indexOf(e),t=this.getValue(e,n);if(this.items.splice(n,1),!(this.selectedValues.indexOf(t)<0)){if(!this.mandatory)return this.updateInternalValue(t);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(e){return e!==t})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(e,n){var t=this.getValue(e,n);e.isActive=this.toggleMethod(t)},updateItemsState:function(){var e=this;this.$nextTick((function(){if(e.mandatory&&!e.selectedItems.length)return e.updateMandatory();e.items.forEach(e.updateItem)}))},updateInternalValue:function(e){this.multiple?this.updateMultiple(e):this.updateSingle(e)},updateMandatory:function(e){if(this.items.length){var n=this.items.slice();e&&n.reverse();var t=n.find((function(e){return!e.disabled}));if(t){var o=this.items.indexOf(t);this.updateInternalValue(this.getValue(t,o))}}},updateMultiple:function(e){var n=(Array.isArray(this.internalValue)?this.internalValue:[]).slice(),t=n.findIndex((function(n){return n===e}));this.mandatory&&t>-1&&n.length-1<1||null!=this.max&&t<0&&n.length+1>this.max||(t>-1?n.splice(t,1):n.push(e),this.internalValue=n)},updateSingle:function(e){var n=e===this.internalValue;this.mandatory&&n||(this.internalValue=n?void 0:e)}},render:function(e){return e(this.tag,this.genData(),this.$slots.default)}});f.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},496:function(e,n,t){var content=t(519);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(30).default)("0fdd82b9",content,!0,{sourceMap:!1})},500:function(e,n,t){"use strict";t.r(n);var o={name:"CategoryPageFilterPanelHeader",props:{label:t(32).d}},r=t(21),l=t(22),c=t.n(l),d=t(594),v=t(447),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-expansion-panel-header",{staticClass:"pb-0",scopedSlots:e._u([{key:"actions",fn:function(){return[t("v-icon",{attrs:{color:"black"}},[e._v(" mdi-chevron-down ")])]},proxy:!0}])},[t("UiText",{attrs:{opacity:"black",variant:"button",label:e.label}})],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{UiText:t(136).default}),c()(component,{VExpansionPanelHeader:d.a,VIcon:v.a})},508:function(e,n,t){var content=t(509);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(30).default)("56a43580",content,!0,{sourceMap:!1})},509:function(e,n,t){var o=t(29)((function(i){return i[1]}));o.push([e.i,".v-item-group{flex:0 1 auto;position:relative;max-width:100%;transition:.3s cubic-bezier(.25,.8,.5,1)}",""]),o.locals={},e.exports=o},518:function(e,n,t){"use strict";t(496)},519:function(e,n,t){var o=t(29)((function(i){return i[1]}));o.push([e.i,".v-input__slider[data-v-6777f3cc] .v-slider__track-container{height:8px}.v-input__slider[data-v-6777f3cc] .v-slider__track-fill{border-radius:10px 0 0 10px}.v-input__slider[data-v-6777f3cc] .v-slider__track-background{border-radius:0 10px 10px 0}.v-input__slider[data-v-6777f3cc] .v-slider__thumb{width:20px;height:20px;box-shadow:0 2px 8px rgba(0,0,0,.12);border:1px solid rgba(0,0,0,.12);cursor:pointer}.v-input__slider[data-v-6777f3cc] .v-slider__thumb:after,.v-input__slider[data-v-6777f3cc] .v-slider__thumb:before{display:none}.v-input[data-v-6777f3cc] input[type=number]{text-align:right}",""]),o.locals={},e.exports=o},533:function(e,n,t){"use strict";t.r(n);var o={name:"CategoryPageFilterPrice",data:function(){return{price:100,min:0,max:100}},computed:{priceSync:{get:function(){return"".concat(this.price," kn")},set:function(e){e<this.min||e>this.max||(this.price=parseFloat(e))}}}},r=(t(518),t(21)),l=t(22),c=t.n(l),d=t(645),v=t(646),h=t(647),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-expansion-panel",[t("CategoryPageFilterPanelHeader",{attrs:{label:"price"}}),e._v(" "),t("v-expansion-panel-content",[t("div",{staticClass:"grid mt-[12px]"},[t("v-slider",{attrs:{min:"0",max:"100","track-color":"rgba(0,0,0,0.26)","track-fill-color":"primary-darken-1","thumb-color":"white"},model:{value:e.price,callback:function(n){e.price=n},expression:"price"}}),e._v(" "),t("BaseTextField",{staticClass:"w-[78px] justify-self-end",attrs:{dense:"",solo:"",flat:"",label:"Price",type:"number",suffix:"kn","hide-details":""},model:{value:e.price,callback:function(n){e.price=n},expression:"price"}})],1)])],1)}),[],!1,null,"6777f3cc",null);n.default=component.exports;c()(component,{CategoryPageFilterPanelHeader:t(500).default,BaseTextField:t(477).default}),c()(component,{VExpansionPanel:d.a,VExpansionPanelContent:v.a,VSlider:h.a})},548:function(e,n,t){var content=t(549);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(30).default)("0259a57b",content,!0,{sourceMap:!1})},549:function(e,n,t){var o=t(29)((function(i){return i[1]}));o.push([e.i,'.theme--light.v-expansion-panels .v-expansion-panel{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-expansion-panels .v-expansion-panel--disabled{color:rgba(0,0,0,.38)}.theme--light.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:rgba(0,0,0,.12)}.theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:rgba(0,0,0,.54)}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.04}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.12}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.16}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:hover:before{opacity:.04}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:before,.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:hover:before,.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:focus:before{opacity:.12}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:focus:before{opacity:.16}.theme--dark.v-expansion-panels .v-expansion-panel{background-color:#1e1e1e;color:#fff}.theme--dark.v-expansion-panels .v-expansion-panel--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:#fff}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.08}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.24}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.32}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:hover:before{opacity:.08}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:before,.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:hover:before,.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:focus:before{opacity:.24}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:focus:before{opacity:.32}.v-expansion-panels{border-radius:4px;display:flex;flex-wrap:wrap;justify-content:center;list-style-type:none;padding:0;width:100%;z-index:1}.v-expansion-panels>*{cursor:auto}.v-expansion-panels>:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.v-expansion-panels>:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active{border-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active+.v-expansion-panel{border-top-left-radius:4px;border-top-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active .v-expansion-panel-header{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panel{flex:1 0 100%;max-width:100%;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel:before{border-radius:inherit;bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:-1;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-expansion-panel:not(:first-child):after{border-top:thin solid;content:"";left:0;position:absolute;right:0;top:0;transition:border-color .2s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1)}.v-expansion-panel--disabled .v-expansion-panel-header{pointer-events:none}.v-expansion-panel--active+.v-expansion-panel,.v-expansion-panel--active:not(:first-child){margin-top:16px}.v-expansion-panel--active+.v-expansion-panel:after,.v-expansion-panel--active:not(:first-child):after{opacity:0}.v-expansion-panel--active>.v-expansion-panel-header{min-height:64px}.v-expansion-panel--active>.v-expansion-panel-header--active .v-expansion-panel-header__icon:not(.v-expansion-panel-header__icon--disable-rotate) .v-icon{transform:rotate(-180deg)}.v-expansion-panel-header__icon{display:inline-flex;margin-bottom:-4px;margin-top:-4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-expansion-panel-header__icon{margin-left:auto}.v-application--is-rtl .v-expansion-panel-header__icon{margin-right:auto}.v-expansion-panel-header{align-items:center;border-top-left-radius:inherit;border-top-right-radius:inherit;display:flex;font-size:.9375rem;line-height:1;min-height:48px;outline:none;padding:16px 24px;position:relative;transition:min-height .3s cubic-bezier(.25,.8,.5,1);width:100%}.v-application--is-ltr .v-expansion-panel-header{text-align:left}.v-application--is-rtl .v-expansion-panel-header{text-align:right}.v-expansion-panel-header:not(.v-expansion-panel-header--mousedown):focus:before{opacity:.12}.v-expansion-panel-header:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel-header>:not(.v-expansion-panel-header__icon){flex:1 1 auto}.v-expansion-panel-content{display:flex}.v-expansion-panel-content__wrap{padding:0 24px 16px;flex:1 1 auto;max-width:100%}.v-expansion-panels--accordion>.v-expansion-panel{margin-top:0}.v-expansion-panels--accordion>.v-expansion-panel:after{opacity:1}.v-expansion-panels--popout>.v-expansion-panel{max-width:calc(100% - 32px)}.v-expansion-panels--popout>.v-expansion-panel--active{max-width:calc(100% + 16px)}.v-expansion-panels--inset>.v-expansion-panel{max-width:100%}.v-expansion-panels--inset>.v-expansion-panel--active{max-width:calc(100% - 32px)}.v-expansion-panels--flat>.v-expansion-panel:after{border-top:none}.v-expansion-panels--flat>.v-expansion-panel:before{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-expansion-panels--tile,.v-expansion-panels--tile>.v-expansion-panel:before{border-radius:0}',""]),o.locals={},e.exports=o},579:function(e,n,t){"use strict";t.r(n);t(55),t(35);var o=Array.from({length:10},(function(e,i){return{title:"Category ".concat(i+1),count:"(".concat(Math.floor(50*Math.random()),")")}})),r=Array.from({length:6},(function(e,i){return{title:"Brand ".concat(i+1),count:"(".concat(Math.floor(10*Math.random()),")")}})),l={name:"CategoryPageFilter",data:function(){return{panel:[0,1,2],price:100,brands:r,category:o}},computed:{brandsAndCategory:function(){return[{title:"Brands",content:this.brands},{title:"Category",content:this.category}]}}},c=t(21),d=t(22),v=t.n(d),h=t(466),f=t(645),x=t(646),m=t(597),y=t(468),_=t(138),O=t.n(_),k=t(102),component=Object(c.a)(l,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("AnimateInView",{attrs:{"appear-from":"opacity-0 -translate-x-12"}},[t("v-row",{staticClass:"max-w-[278px]"},[t("v-col",[t("v-expansion-panels",{attrs:{multiple:"",flat:""},model:{value:e.panel,callback:function(n){e.panel=n},expression:"panel"}},[t("CategoryPageFilterPrice"),e._v(" "),e._l(e.brandsAndCategory,(function(filter){return t("v-expansion-panel",{key:filter.title},[t("CategoryPageFilterPanelHeader",{attrs:{label:filter.title}}),e._v(" "),t("v-expansion-panel-content",[t("ul",{staticClass:"pl-0 grid gap-y-[8px]"},e._l(filter.content,(function(content){return t("li",{directives:[{name:"ripple",rawName:"v-ripple"}],key:content.title,staticClass:"outline-none flex justify-between items-center relative cursor-pointer group",attrs:{tabindex:"0"},on:{keydown:function(n){if(!n.type.indexOf("key")&&e._k(n.keyCode,"space",32,n.key,[" ","Spacebar"]))return null;n.preventDefault()}}},[t("UiText",{staticClass:"truncate relative inline-block after:border-b-[2px] border-[#000] after:opacity-[0.26] after:scale-0 after:transform-gpu group-focus:after:scale-100 after:origin-left after:transition-transform after:w-full after:h-full after:absolute after:inset-0",attrs:{opacity:"secondary",label:content.title}}),e._v(" "),t("UiText",{attrs:{opacity:"secondary",label:content.count}})],1)})),0)])],1)}))],2)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;v()(component,{CategoryPageFilterPrice:t(533).default,CategoryPageFilterPanelHeader:t(500).default,UiText:t(136).default,AnimateInView:t(316).default}),v()(component,{VCol:h.a,VExpansionPanel:f.a,VExpansionPanelContent:x.a,VExpansionPanels:m.a,VRow:y.a}),O()(component,{Ripple:k.a})},597:function(e,n,t){"use strict";t(9),t(8),t(12),t(3),t(16),t(10),t(17);var o=t(0),r=(t(229),t(230),t(548),t(495)),l=t(15);function c(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(n){Object(o.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}n.a=r.a.extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return d(d({},r.a.options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(l.a)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"==typeof this.value[0]&&Object(l.a)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,n){var t=this.getValue(e,n),o=this.getValue(e,n+1);e.isActive=this.toggleMethod(t),e.nextIsActive=this.toggleMethod(o)}}})}}]);