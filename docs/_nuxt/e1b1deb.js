(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{553:function(t,e,r){"use strict";r(9),r(8),r(12),r(3),r(16),r(10),r(17);var n=r(0),o=(r(554),r(49));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},554:function(t,e,r){var content=r(555);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("47e749e6",content,!0,{sourceMap:!1})},555:function(t,e,r){var n=r(28)((function(i){return i[1]}));n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),n.locals={},t.exports=n},587:function(t,e,r){"use strict";r.r(e);r(9),r(8),r(12),r(3),r(16),r(10),r(17);var n=r(0),o=r(47);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)("user",["userSettings"]))},v=l,d=r(20),h=r(21),f=r.n(h),O=r(467),w=r(553),y=r(469),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{tag:"section","aria-label":"Profile information","no-gutters":""}},[r("v-col",{staticClass:"flex-grow-0"},[r("Avatar",{attrs:{size:"141",variant:"h3"}})],1),t._v(" "),r("v-divider",{staticClass:"mx-[56px]",attrs:{vertical:""}}),t._v(" "),r("v-col",[r("v-row",t._l(t.userSettings,(function(e,n){return r("v-col",{key:n,attrs:{tag:"section",cols:"4"}},[r("UiText",{attrs:{tag:"h3",opacity:"secondary",variant:"caption",label:n}}),t._v(" "),r("UiText",{attrs:{tag:"h4",label:e}})],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{Avatar:r(325).default,UiText:r(136).default}),f()(component,{VCol:O.a,VDivider:w.a,VRow:y.a})}}]);