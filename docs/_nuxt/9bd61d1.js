(window.webpackJsonp=window.webpackJsonp||[]).push([[15,16,36],{497:function(t,e,n){var content=n(521);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("71bdc098",content,!0,{sourceMap:!1})},515:function(t,e,n){"use strict";n.r(e);n(24);var r=n(32),o={name:"ProductCard",props:{uuid:r.d,title:r.d,image:r.d,brandTitle:{type:String,default:""},price:Object(r.c)(Number),showAddToCart:Boolean}},l=n(21),c=n(22),v=n.n(c),d=n(448),h=n(469),f=n(531),m=n(447),x=n(138),y=n.n(x),_=n(102),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[n("v-card",t._g(t._b({directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"rounded-[6px] inline-block transition-shadow relative px-[34px] pt-[40px] pb-[30px] isolate w-fit",attrs:{tag:"figure",title:t.title,elevation:r?1:0}},"v-card",t.$attrs,!1),t.$listeners),[n("ApiImg",{staticClass:"mb-[16px]",attrs:{uuid:t.image,alt:t.title+" image",height:"220",width:"220"}}),t._v(" "),n("UiText",{staticClass:"text-inherit text-20 max-w-fit",attrs:{tag:"h3",variant:"custom",underline:"","line-clamp":"1",label:t.title}}),t._v(" "),n("UiText",{attrs:{tag:"figcaption",variant:"subtitle-1","line-clamp":"1",opacity:"secondary",label:t.brandTitle}}),t._v(" "),n("UiText",{attrs:{tag:"h4",label:t.price+" kn",variant:"h6",weight:500}}),t._v(" "),t.showAddToCart?n("v-btn",{staticClass:"mt-[10px] h-[30px] z-1",attrs:{depressed:"",color:"primary"},on:{click:function(t){t.stopPropagation()}}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-cart ")]),t._v("\n\n      Add to cart\n    ")],1):t._e(),t._v(" "),n("NuxtLink",{staticClass:"absolute inset-0 text-transparent",attrs:{"aria-label":t.title,to:"/product/"+t.uuid}})],1)]}}])})}),[],!1,null,null,null);e.default=component.exports;v()(component,{ApiImg:n(318).default,UiText:n(136).default}),v()(component,{VBtn:d.a,VCard:h.a,VHover:f.a,VIcon:m.a}),y()(component,{Ripple:_.a})},520:function(t,e,n){"use strict";n(497)},521:function(t,e,n){var r=n(29)((function(i){return i[1]}));r.push([t.i,".pagination[data-v-41113c8b] button{box-shadow:none;width:40px;height:40px}",""]),r.locals={},t.exports=r},522:function(t,e,n){var content=n(523);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("3df17726",content,!0,{sourceMap:!1})},523:function(t,e,n){var r=n(29)((function(i){return i[1]}));r.push([t.i,".theme--light.v-pagination .v-pagination__item{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--dark.v-pagination .v-pagination__item{background:#1e1e1e;color:#fff}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#1e1e1e}.v-pagination{align-items:center;display:inline-flex;list-style-type:none;justify-content:center;margin:0;max-width:100%;width:100%}.v-pagination.v-pagination{padding-left:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{pointer-events:none;opacity:.6}.v-pagination__item{background:transparent;border-radius:4px;font-size:1rem;height:34px;margin:.3rem;min-width:34px;padding:0 5px;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1);width:auto;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:4px;display:inline-flex;justify-content:center;align-items:center;text-decoration:none;height:32px;width:32px;margin:.3rem 10px}.v-pagination__navigation .v-icon{transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{margin:.3rem;display:inline-flex;align-items:flex-end;justify-content:center;height:32px;width:32px}",""]),r.locals={},t.exports=r},531:function(t,e,n){"use strict";var r=n(139),o=n(66),l=n(14),c=n(15);e.a=Object(l.a)(r.a,o.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},534:function(t,e,n){"use strict";n.r(e);var r={name:"CategoryPageContentPagination",data:function(){return{page:1,itemsPerPage:[5,10,15,20,25,50]}}},o=(n(520),n(21)),l=n(22),c=n.n(l),v=n(466),d=n(570),h=n(468),f=n(572),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-pagination",{staticClass:"pagination",attrs:{length:4,circle:""},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"flex items-center justify-center"},[n("UiText",{attrs:{tag:"span",variant:"body-2",opacity:"secondary",label:"Items per page:"}}),t._v(" "),n("div",{staticClass:"ml-[4px] mr-[8px] w-[64px]"},[n("v-select",{staticClass:"text-sm h-[38px]",attrs:{items:t.itemsPerPage,flat:"",dense:"",solo:""}})],1),t._v(" "),n("UiText",{attrs:{tag:"span",variant:"body-2",opacity:"secondary",label:"1 to 15 of 1240"}})],1)])],1)}),[],!1,null,"41113c8b",null);e.default=component.exports;c()(component,{UiText:n(136).default}),c()(component,{VCol:v.a,VPagination:d.a,VRow:h.a,VSelect:f.a})},570:function(t,e,n){"use strict";n(9),n(8),n(12),n(16),n(10),n(17);var r=n(79),o=n(0),l=(n(24),n(31),n(65),n(3),n(96),n(53),n(522),n(315)),c=n(503),v=n(54),d=n(529),h=n(48),f=n(14);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(f.a)(v.a,Object(d.a)({onVisible:["init"]}),h.a).extend({name:"v-pagination",directives:{Resize:c.a},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1==0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var n=e%2==0?1:0,o=Math.floor(e/2),l=this.length-o+1+n;if(this.value>o&&this.value<l){var c=this.length,v=this.value-o+2,d=this.value+o-2-n,h=d+1===c-1?d+1:"...";return[1,v-1==2?2:"..."].concat(Object(r.a)(this.range(v,d)),[h,this.length])}if(this.value===o){var f=this.value+o-1-n;return[].concat(Object(r.a)(this.range(1,f)),["...",this.length])}if(this.value===l){var m=this.value-o+1;return[1,"..."].concat(Object(r.a)(this.range(m,this.length)))}return[].concat(Object(r.a)(this.range(1,o)),["..."],Object(r.a)(this.range(l,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){for(var n=[],i=t=t>0?t:1;i<=e;i++)n.push(i);return n},genIcon:function(t,e,n,r,label){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{disabled:n,type:"button","aria-label":label},on:n?{}:{click:r}},[t(l.a,[e])])])},genItem:function(t,i){var e=this,n=i===this.value&&(this.color||"primary"),r=i===this.value,o=r?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":i===this.value},attrs:{type:"button","aria-current":r,"aria-label":this.$vuetify.lang.t(o,i)},on:{click:function(){return e.$emit("input",i)}}}),[i.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,n){return t("li",{key:n},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})},580:function(t,e,n){"use strict";n.r(e);n(55),n(35);var r=Array.from({length:15},(function(t,i){return{title:"Brit care endurance ".concat(i+1),caption:"Animonda",to:"/product/400",weight:200}})),o={name:"CategoryPageContent",data:function(){return{products:r}}},l=n(21),c=n(22),v=n.n(c),d=n(466),h=n(468),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[t._l(t.products,(function(e){return n("v-col",{key:e.title,staticClass:"mb-[56px]",attrs:{cols:"12",md:"6",lg:"4"}},[n("AnimateInView",{attrs:{"appear-from":"opacity-0"}},[n("ProductCard",t._b({attrs:{"show-add-to-cart":""}},"ProductCard",e,!1))],1)],1)})),t._v(" "),n("v-col",{staticClass:"mb-[130px]"},[n("CategoryPageContentPagination")],1)],2)}),[],!1,null,null,null);e.default=component.exports;v()(component,{ProductCard:n(515).default,AnimateInView:n(316).default,CategoryPageContentPagination:n(534).default}),v()(component,{VCol:d.a,VRow:h.a})}}]);