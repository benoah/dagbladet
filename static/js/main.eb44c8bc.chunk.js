(this.webpackJsonpdagbladet=this.webpackJsonpdagbladet||[]).push([[0],{20:function(e,t,n){e.exports=n(47)},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),l=n.n(c),u=n(1),i=n(7),o=n.n(i),s=n(8),m=n(3),f=(n(26),function(e){var t=e.url,n=void 0===t?"":t,c=e.title,l=void 0===c?"":c,u=e.imageUrl,i=void 0===u?"":u,o=e.width,s=void 0===o?"":o,f=e.editId,p=void 0===f?null:f,d=e.edit,b=void 0===d?function(){}:d,v=e.remove,E=void 0===v?function(){}:v,g=e.cancel,j=void 0===g?function(){}:g,O=e.save,N=void 0===O?function(){}:O,h=Object(a.useState)(l),w=Object(m.a)(h,2),k=w[0],y=w[1];return r.a.createElement("div",{className:"col-".concat(s)},r.a.createElement("figure",{className:"article-preview"},r.a.createElement("img",{className:"img-preview",src:i,alt:"article-preview"}),r.a.createElement("div",{className:"button-group"},r.a.createElement("button",{className:"btn btn-secondary first",onClick:function(){return b(n)}},"Edit"),r.a.createElement("button",{className:"btn btn-danger second",onClick:function(){return E(n)}},"Delete")),p===n?r.a.createElement("div",{className:"editModeWrapper"},r.a.createElement("input",{value:k,onChange:function(e){return function(e){var t=e.target;y(t.value)}(e)}}),r.a.createElement("div",{className:"btn-icon-group"},r.a.createElement("button",{className:"btn-icon btn-icon--first",onClick:function(){return N(n,k)}},r.a.createElement("span",{role:"img","aria-label":"apply"},"\u2705")),r.a.createElement("button",{className:"btn-icon btn-icon--second"},r.a.createElement("span",{role:"img","aria-label":"cancel",onClick:function(){return j()}},"\u274e")))):r.a.createElement("figcaption",{className:"title-preview"},l)))}),p=(n(27),function(e){var t=e.text,n=e.openModal,c=e.closeModal,l=e.restoreArticle,u=e.counter,i=e.setCounter;return Object(a.useEffect)((function(){0===u&&c();var e=u>0&&setInterval((function(){return i(u-1)}),1e3);return function(){clearInterval(e)}}),[c,u,i]),r.a.createElement(r.a.Fragment,null,n&&r.a.createElement("div",{className:"modalWindow"},r.a.createElement("p",{className:"message"},t),r.a.createElement("p",{className:"message"},"This window will disappear after: ",u),r.a.createElement("div",{className:"options"},r.a.createElement("button",{className:"button",onClick:function(){l(),c()}},"Yes"),r.a.createElement("button",{className:"button",onClick:function(){return c()}},"Cancel"))))}),d=n(9),b=(n(28),function(){return r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",{className:"nav-list"},r.a.createElement("li",{className:"nav-list-item nav-list-item--1"},r.a.createElement(d.b,{exact:!0,to:"/"},"Main")),r.a.createElement("li",{className:"nav-list-item nav-list-item--2"},r.a.createElement(d.b,{to:"/titles"},"Lite"))))}),v=function(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),l=Object(m.a)(c,2),u=l[0],i=l[1];return{loading:n,request:Object(a.useCallback)(function(){var e=Object(s.a)(o.a.mark((function e(t){var n,a,c,l,u,s=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:"GET",a=s.length>2&&void 0!==s[2]?s[2]:null,c=s.length>3&&void 0!==s[3]?s[3]:{},r(!0),e.prev=4,c["Content-Type"]="application/json;charset=utf-8",c.Accept="application/json","GET"!==n&&(a=JSON.stringify(a)),e.next=10,fetch(t,{method:n,headers:c,body:a});case 10:return l=e.sent,e.next=13,l.json();case 13:if(u=e.sent,401!==l.status){e.next=16;break}return e.abrupt("return",!1);case 16:return l.ok||i(u),e.abrupt("return",u);case 20:return e.prev=20,e.t0=e.catch(4),i(e.t0),e.abrupt("return","");case 24:return e.prev=24,r(!1),e.finish(24);case 27:case"end":return e.stop()}}),e,null,[[4,20,24,27]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:u,clearError:Object(a.useCallback)((function(){return i(null)}),[])}},E=n(10),g=n.n(E),j=(n(42),function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(null),u=Object(m.a)(l,2),i=u[0],d=u[1],E=Object(a.useState)(null),j=Object(m.a)(E,2),O=j[0],N=j[1],h=Object(a.useState)(null),w=Object(m.a)(h,2),k=w[0],y=w[1],C=Object(a.useState)(7),x=Object(m.a)(C,2),S=x[0],M=x[1],I=v().request,T=Object(a.useCallback)(Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I("https://storage.googleapis.com/aller-structure-task/test_data.json");case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)}))),[I]);Object(a.useEffect)((function(){T()}),[T]);var q=function(e){N(e)},A=function(){N(null)},J=function(e,t){var a=n[0].map((function(n){return{type:"Row",columns:n.columns.map((function(n){return n.url===e&&(n.title=t),n}))}}));c([a]),A()},W=function(e){d(n),c([n[0].map((function(t){return{type:"Row",columns:t.columns.filter((function(t){return t.url!==e}))}}))]),y(!0),M(7)};return r.a.createElement("div",{className:"container"},r.a.createElement(b,null),r.a.createElement(p,{text:"Would you want to restore deleted article?",openModal:k,closeModal:function(){y(!1)},restoreArticle:function(){c(i)},counter:S,setCounter:M}),n&&n.length&&n[0].map((function(e){return r.a.createElement("div",{className:"row",key:g.a.generate()},e.columns.map((function(e){return r.a.createElement(f,Object.assign({},e,{key:g.a.generate(),edit:q,cancel:A,save:J,editId:O,remove:W}))})))})))}),O=(n(43),function(e){e.url;var t=e.title,n=void 0===t?"":t;return r.a.createElement("div",{className:"lite-title-wrapper"},r.a.createElement("h2",{className:"lite-title title-preview"},n))}),N=(n(44),function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),n=t[0],c=t[1],l=v().request,u=Object(a.useCallback)(Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("https://storage.googleapis.com/aller-structure-task/test_data.json");case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)}))),[l]);return Object(a.useEffect)((function(){u()}),[u]),r.a.createElement("div",{className:"container"},r.a.createElement(b,null),n&&n.length&&n[0].map((function(e){return r.a.createElement("div",{className:"row justify-content-center",key:g.a.generate()},e.columns.map((function(e){return r.a.createElement(O,Object.assign({},e,{key:g.a.generate()}))})))})))}),h=function(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0},r.a.createElement(j,null)),r.a.createElement(u.a,{path:"/main",exact:!0},r.a.createElement(j,null)),r.a.createElement(u.a,{path:"/titles"},r.a.createElement(N,null)))};n(45),n(46);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,null,r.a.createElement(h,null))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.eb44c8bc.chunk.js.map