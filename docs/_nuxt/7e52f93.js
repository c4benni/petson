(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{533:function(e,n,t){"use strict";t.r(n);var r=t(5),o=(t(32),t(31)),c=(t(3),t(37),t(43),t(564),t(321),function(e){var n,t=((n=document.createElement("a")).href=e,n.download="invoice.pdf",n.classList.add("sr-only"),n.title="Download order invoice",n);document.body.append(t),t.click(),URL.revokeObjectURL(e),Object(o.b)((function(){return t.remove()}))});function d(e){return l.apply(this,arguments)}function l(){return(l=Object(r.a)(regeneratorRuntime.mark((function e(n){var t,data,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$axios.$get("order/".concat(n,"/download"));case 3:return t=e.sent,data=t.data,r=new File([data],"invoice.pdf"),o=URL.createObjectURL(r),c(o),e.abrupt("return",{data:1});case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",{error:e.t0});case 14:case"end":return e.stop()}}),e,this,[[0,11]])})))).apply(this,arguments)}var f={name:"UserSettingsDataTableInvoice",props:{item:Object(o.c)(Object),loading:Boolean},data:function(){return{fetchingLink:!1}},methods:{downloadOrder:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.blobUrl=null,e.fetchingLink=!0,n.next=4,d.call(e,e.item.uuid);case 4:t=n.sent,(r=t.error)&&e.$notify.open("".concat(r.message),1500),e.fetchingLink=!1;case 8:case"end":return n.stop()}}),n)})))()}}},v=t(20),m=t(21),w=t.n(m),h=t(449),k=t(448),component=Object(v.a)(f,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-btn",{staticClass:"rounded grey-300 text-secondary--text mr-[12px]",attrs:{icon:"",tile:"",disabled:e.loading,loading:e.fetchingLink},on:{click:e.downloadOrder}},[t("v-icon",[e._v("mdi-tray-arrow-down")])],1)}),[],!1,null,null,null);n.default=component.exports;w()(component,{VBtn:h.a,VIcon:k.a})}}]);