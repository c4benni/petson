(window.webpackJsonp=window.webpackJsonp||[]).push([[28,31],{511:function(t,e,n){"use strict";n.r(e);var l={name:"MainPageContainer"},r=n(20),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"px-[52px]"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},586:function(t,e,n){"use strict";n.r(e);n(42);var l=n(31),r={name:"MainPageBlogPost",props:{imagePosition:{type:String,default:"left",validator:function(t){return["left","right"].includes(Object(l.e)(t))}},title:l.d,uuid:l.d,image:l.d}},o=n(20),c=n(21),d=n.n(c),m=n(449),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("MainPageContainer",[n("AnimateInView",[n("div",{staticClass:"flex items-center"},[n("ApiImg",{staticClass:"flex-shrink-1 min-w-[550px]",class:{"mr-[58px]":"left"===t.imagePosition,"ml-[58px] order-2":"right"===t.imagePosition},attrs:{uuid:t.image,alt:t.title+" blog image",height:400}}),t._v(" "),n("div",[n("UiText",{staticClass:"mb-[16px]",attrs:{tag:"h2",label:t.title,title:""}}),t._v(" "),n("v-btn",{staticClass:"text-decoration-underline h-[40px] px-[13px] py-[4px] normal-case text-20",attrs:{to:"blog/"+t.uuid,depressed:"",color:"primary",nuxt:"",tile:""}},[t._v("\n          Read our blog\n        ")])],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{ApiImg:n(319).default,UiText:n(136).default,AnimateInView:n(317).default,MainPageContainer:n(511).default}),d()(component,{VBtn:m.a})}}]);