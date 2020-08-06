(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{70:function(e,t,n){e.exports=n(88)},75:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),o=n.n(r),l=(n(75),n(36)),s=n(8),i=n(28),u=n(30),p=n(16),m=n(22),d=n.n(m),f=n(40),h=n(21),b=Object(a.createContext)({fetchPeople:function(){return[]},addPerson:function(){},updatePerson:function(){},deletePerson:function(){},loaded:!1,loading:!1,error:null,people:[]}),E=function(e){var t=Object(a.useState)([]),n=Object(h.a)(t,2),r=n[0],o=n[1],l=Object(a.useState)(!1),s=Object(h.a)(l,2),m=s[0],E=s[1],v=Object(a.useState)(!1),O=Object(h.a)(v,2),j=O[0],x=O[1],g=Object(a.useState)(null),k=Object(h.a)(g,2),w=k[0],N=k[1],y=Object(i.useToasts)().addToast,P=function(){var e=Object(f.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(m||j||w)){e.next=4;break}return e.abrupt("return");case 4:E(!0);case 5:return e.prev=5,e.next=8,fetch("/api/v1/people");case 8:if(200===(t=e.sent).status){e.next=11;break}throw t;case 11:return e.next=13,t.json();case 13:n=e.sent,o(n),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(5),N(e.t0.message||e.t0.statusText);case 20:return e.prev=20,E(!1),x("true"),e.finish(20);case 24:case"end":return e.stop()}}),e,null,[[5,17,20,24]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(f.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/v1/people",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:if(201===(n=e.sent).status){e.next=6;break}throw n;case 6:return e.next=8,n.json();case 8:a=e.sent,console.log("got data",a),o([].concat(Object(p.a)(r),[a])),y("Saved ".concat(a.firstName," ").concat(a.lastName),{appearance:"success"}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0),y("Error ".concat(e.t0.message||e.t0.statusText),{appearance:"error"});case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(f.a)(d.a.mark((function e(t,n){var a,c,l,s,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null,e.prev=1,e.next=4,fetch("/api/v1/people/".concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:if(200===(c=e.sent).status){e.next=7;break}throw c;case 7:l=r.findIndex((function(e){return e._id===t})),s=r[l],a=Object(u.a)(Object(u.a)({},s),n),i=[].concat(Object(p.a)(r.slice(0,l)),[a],Object(p.a)(r.slice(l+1))),o(i),y("Updated ".concat(a.firstName," ").concat(a.lastName),{appearance:"success"}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0),y("Error: Failed to update ".concat(a.firstName," ").concat(a.lastName),{appearance:"error"});case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(f.a)(d.a.mark((function e(t){var n,a,c,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,e.next=4,fetch("/api/v1/people/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 4:if(204===(a=e.sent).status){e.next=7;break}throw a;case 7:c=r.findIndex((function(e){return e._id===t})),n=r[c],l=[].concat(Object(p.a)(r.slice(0,c)),Object(p.a)(r.slice(c+1))),o(l),y("Deleted ".concat(n.firstName," ").concat(n.lastName),{appearance:"success"}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),y("Error: Failed to update ".concat(n.firstName," ").concat(n.lastName),{appearance:"error"});case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(b.Provider,{value:{people:r,loading:m,error:w,fetchPeople:P,addPerson:T,updatePerson:B,deletePerson:C}},e.children)},v=Object(a.createContext)({getBooks:function(){return[]},addBook:function(){return[]},updateBook:function(){return[]},deleteBook:function(){return[]},books:[]}),O=function(e){var t=Object(a.useState)([]),n=Object(h.a)(t,2),r=n[0],o=n[1],l=Object(i.useToasts)().addToast;return c.a.createElement(v.Provider,{value:{books:r,getBooks:function(e){o(e)},addBook:function(e){o([].concat(Object(p.a)(r),[e]))},updateBook:function(e,t){var n,a=r.findIndex((function(t){return t._id===e})),c=r[a];console.log("here",c),n=Object(u.a)(Object(u.a)({},c),t);var s=[].concat(Object(p.a)(r.slice(0,a)),[n],Object(p.a)(r.slice(a+1)));o(s),l("Updated ".concat(n.title),{appearance:"success"})},deleteBook:function(e){var t,n=r.findIndex((function(t){return t.id===e}));t=r[n];var a=[].concat(Object(p.a)(r.slice(0,n)),Object(p.a)(r.slice(n+1)));o(a),l("Deleted ".concat(t.title),{appearance:"success"})}}},e.children)},j=Object(a.createContext)({menu:{isOpen:!1,open:function(){},close:function(){},toggle:function(){}}}),x=function(e){var t=Object(a.useState)(!1),n=Object(h.a)(t,2),r=n[0],o=n[1];return c.a.createElement(j.Provider,{value:{isOpen:r,open:function(){return o(!0)},close:function(){return o(!1)},toggle:function(){o(!r)}}},e.children)},g=n(31),k=n(122),w=n(123),N=n(124),y=n(47),P=n(117),T=n(26),B=n(63),C=n.n(B),S=n(127),A=n(120),I=n(128),D=n(121),L=Object(P.a)({list:{width:250}}),U=function(){var e=L(),t=Object(a.useContext)(j),n=t.isOpen,r=t.toggle,o=function(){return function(e){("keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&r()}};return c.a.createElement(S.a,{anchor:"left",open:n,onClose:o()},c.a.createElement("div",{className:e.list,role:"presentation",onClick:o(),onKeyDown:o()},c.a.createElement(A.a,null,[{text:"Home",to:"/"},{text:"People",to:"/people"},{text:"Add People",to:"/people/add"},{text:"Books",to:"/books"},{text:"Add Books",to:"/books/add"}].map((function(e){var t=e.text,n=e.to;return c.a.createElement(I.a,{button:!0,component:l.b,to:n,key:t},c.a.createElement(D.a,null,t))})))))},F=Object(P.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:"-50px"},title:Object(g.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(g.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(T.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(T.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(g.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),J=function(){var e=F(),t=Object(a.useContext)(j).toggle;return c.a.createElement("div",{className:e.root},c.a.createElement(U,null),c.a.createElement(k.a,{position:"static"},c.a.createElement(w.a,null,c.a.createElement(N.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",onClick:t},c.a.createElement(C.a,null)),c.a.createElement(y.a,{className:e.title,variant:"h6",noWrap:!0},"Todos Full-Stack App"))))},R=n(125),W=n(126),G=Object(P.a)((function(e){return{root:{flexGrow:1},paper:{height:140,width:100},control:{padding:e.spacing(2)}}})),_=function(e){var t=G();Object(s.f)();return c.a.createElement(R.a,{maxWidth:"lg"},c.a.createElement(W.a,{container:!0,className:t.root,spacing:2},c.a.createElement(W.a,{item:!0,xs:12},e.children)))},H=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(J,null),c.a.createElement("main",null,c.a.createElement(_,null,c.a.createElement("h1",null,"Homepage"))))},K=function(e){return c.a.createElement("div",{className:"App"},c.a.createElement(J,null),c.a.createElement("main",null,c.a.createElement(_,null,c.a.createElement("h1",null,"People"))))},M=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(J,null),c.a.createElement("main",null,c.a.createElement(_,null,c.a.createElement("h1",null,"Todos"))))},$=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(J,null),c.a.createElement(_,null,c.a.createElement("h1",null,"404 Not Found")))},q=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(J,null),c.a.createElement("main",null,c.a.createElement(_,null,c.a.createElement("h1",null,"People"))))},z=function(e){return c.a.createElement("div",null,"UPDATE PEOPLE")},Q=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(J,null),c.a.createElement("main",null,c.a.createElement(_,null,c.a.createElement("h1",null,"Add Books"))))},V=function(e){return c.a.createElement("div",{className:"App"},c.a.createElement(J,null),c.a.createElement("main",null,c.a.createElement(_,null,c.a.createElement("h1",null,"Update Books"))))};var X=function(){return c.a.createElement(i.ToastProvider,{autoDismiss:!0},c.a.createElement(E,null,c.a.createElement(O,null,c.a.createElement(x,null,c.a.createElement(l.a,null,c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/",component:H}),c.a.createElement(s.a,{exact:!0,path:"/people",component:K}),c.a.createElement(s.a,{exact:!0,path:"/people/add",component:q}),c.a.createElement(s.a,{exact:!0,path:"/people/update/:id",component:z}),c.a.createElement(s.a,{exact:!0,path:"/books",component:M}),c.a.createElement(s.a,{exact:!0,path:"/books/add",component:Q}),c.a.createElement(s.a,{exact:!0,path:"/books/update/:id",component:V}),c.a.createElement(s.a,{path:"*",component:$})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[70,1,2]]]);
//# sourceMappingURL=main.331a166f.chunk.js.map