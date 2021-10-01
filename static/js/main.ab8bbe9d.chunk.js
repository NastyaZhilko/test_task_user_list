(this.webpackJsonptest_task_user_list=this.webpackJsonptest_task_user_list||[]).push([[0],{12:function(e,t,s){e.exports={container:"User_container__3OyUC",block:"User_block__3fj-1",form:"User_form__2UMsP"}},35:function(e,t,s){},36:function(e,t,s){},6:function(e,t,s){e.exports={container:"Users_container__3PVfb",usersPanel:"Users_usersPanel__i8a1I",usersGetBox:"Users_usersGetBox__1MVkx",usersSetBox:"Users_usersSetBox__3W2p2",box:"Users_box__2OgQA"}},62:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s.n(c),a=s(9),r=s.n(a),i=(s(35),s(36),s(11)),o=s(3),d=s(6),l=s.n(d),u=s(12),j=s.n(u),h=s(7),b=s.n(h),O=s(19),x=s(30),m=s(4),p=s(28),_=s.n(p).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),f=function(){return _.get("/users")},v={error:null,users:[],inputValueSearch:""},g=function(e){return{type:"APP/ERROR_DETECTED",payload:{error:e}}},E=function(){return function(){var e=Object(O.a)(b.a.mark((function e(t){var s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:s=e.sent,t({type:"APP/SET_USERS",payload:{users:s.data}}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t(g(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},P=s(8),S=s.n(P),y=s(1),C=function(e){var t=e.modal,s=e.setModal,c=e.children,n="".concat(S.a.modal," ").concat(t?S.a.active:""),a="".concat(S.a.modal_content," ").concat(t?S.a.active:"");return Object(y.jsx)("div",{className:n,onClick:function(){return s(!1)},children:Object(y.jsx)("div",{className:a,onClick:function(e){return e.stopPropagation()},children:c})})},U=s(13),T=s.n(U),N=n.a.memo((function(e){var t=Object(c.useState)(!1),s=Object(i.a)(t,2),n=s[0],a=s[1],r=Object(o.b)();return Object(y.jsxs)("div",{className:j.a.container,children:[Object(y.jsxs)("div",{className:j.a.block,onClick:function(){a(!0)},children:[Object(y.jsxs)("div",{children:[" Name: ",Object(y.jsx)(T.a,{highlightClassName:"highlight",searchWords:[e.searchText],autoEscape:!0,textToHighlight:e.name}),"  "]}),Object(y.jsxs)("div",{children:[" UserName: ",Object(y.jsx)(T.a,{highlightClassName:"highlight",searchWords:[e.searchText],autoEscape:!0,textToHighlight:e.username})," "]}),Object(y.jsxs)("div",{children:[" Email: ",Object(y.jsx)(T.a,{highlightClassName:"highlight",searchWords:[e.searchText],autoEscape:!0,textToHighlight:e.email})," "]}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{onClick:function(){r({type:"APP/DELETE_USER",payload:{userId:e.id}})},children:"Delete"})})]}),Object(y.jsx)(C,{modal:n,setModal:a,children:Object(y.jsxs)("div",{className:j.a.form,children:[Object(y.jsx)("h3",{children:"Company:"}),Object(y.jsxs)("div",{children:[" Name: ",e.company.name,"  "]}),Object(y.jsxs)("div",{children:[" BS: ",e.company.bs,"  "]}),Object(y.jsxs)("div",{children:[" Catch Phrase: ",e.company.catchPhrase,"  "]}),Object(y.jsx)("h3",{children:"Address"}),Object(y.jsxs)("div",{children:[" City: ",e.address.city," "]}),Object(y.jsxs)("div",{children:[" Geo: ",e.address.geo.lat,", ",e.address.geo.lng," "]}),Object(y.jsxs)("div",{children:[" Street: ",e.address.street," "]}),Object(y.jsxs)("div",{children:[" Suite: ",e.address.suite," "]}),Object(y.jsxs)("div",{children:[" Zipcode: ",e.address.zipcode," "]})]})})]})})),k=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.users.users})),s=Object(c.useState)(""),n=Object(i.a)(s,2),a=n[0],r=n[1];Object(c.useEffect)((function(){e(E())}),[e]);return Object(y.jsxs)("div",{className:l.a.container,children:[Object(y.jsx)("h2",{children:"Users"}),Object(y.jsx)("input",{type:"search",placeholder:"\u0418\u0441\u043a\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",value:a,onChange:function(e){r(e.target.value)}}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{onClick:function(){e(E()),r("")},children:"Reset"})}),Object(y.jsx)("div",{className:l.a.usersPanel,children:Object(y.jsx)("div",{className:l.a.usersSetBox})}),Object(y.jsx)("div",{className:l.a.box,children:t.map((function(e){return Object(y.jsx)(N,{id:e.id,name:e.name,username:e.username,email:e.email,address:e.address,phone:e.phone,website:e.website,company:e.company,searchText:a},e.id)}))})]})};var R=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(k,{})})},A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,63)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),c(e),n(e),a(e),r(e)}))},D=s(14),B=s(29),w=Object(D.b)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/ERROR_DETECTED":case"APP/SET_USERS":return Object(m.a)(Object(m.a)({},e),t.payload);case"APP/DELETE_USER":return Object(m.a)(Object(m.a)({},e),{},{users:Object(x.a)(e.users.filter((function(e){return e.id!==t.payload.userId})))});case"APP/SEARCHED-USERS":return Object(m.a)(Object(m.a)({},e),{},{users:t.filteredUsers,inputValueSearch:t.inputValueSearch});default:return e}}}),M=Object(D.c)(w,Object(D.a)(B.a));r.a.render(Object(y.jsx)(o.a,{store:M,children:Object(y.jsx)(R,{})}),document.getElementById("root")),A()},8:function(e,t,s){e.exports={modal:"Modal_modal__9HOZm",modal_content:"Modal_modal_content__c7OUC",active:"Modal_active__3nfCP"}}},[[62,1,2]]]);
//# sourceMappingURL=main.ab8bbe9d.chunk.js.map