(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[6],{145:function(e,n,t){"use strict";n.a=t.p+"static/media/user.e5ee284b.png"},163:function(e,n,t){e.exports={usersWrap:"Users_usersWrap__sjm5u",user:"Users_user__368nO",userInfo:"Users_userInfo__3kGu8",userAvatar:"Users_userAvatar__1Gi9N",avatarImage:"Users_avatarImage__PwDnn",avatarButton:"Users_avatarButton__3DU5C",infoName:"Users_infoName__2r06Y",infoStatus:"Users_infoStatus__9S093",followBtnMobile:"Users_followBtnMobile___Eq9j"}},209:function(e,n,t){e.exports={pagination:"Paginator_pagination__i2R9_",paginationWrap:"Paginator_paginationWrap__3tQkM",paginationNums:"Paginator_paginationNums__1ul1b",span:"Paginator_span__369Uw",paginationActive:"Paginator_paginationActive__3cku0",paginationControls:"Paginator_paginationControls__3xSGx"}},356:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t(0),s=t(13),u=t(54),o=t(22),i=t(209),c=t.n(i),l=t(1),f=["currentNumber","currentPage","pageSize"],g=function(e,n,t,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=e<1?1:e;a&&s>a&&(s=a),t(s),r(s,n)},p=function(e){var n=e.currentNumber,t=e.currentPage,r=e.pageSize,a=Object(o.a)(e,f),s=t===n||"number"===typeof a.item&&t===a.item?c.a.paginationActive:"",u=s?"".concat(s," ").concat(c.a.span):c.a.span;return Object(l.jsx)("span",{onClick:function(){return g(n,r,a.setCurrentPage,a.getUsers)},className:u,children:a.item?a.item:n},n)},j=function(e){var n=e.pagesCount,t=e.getUsers,r=e.setCurrentPage,a=e.pageSize,s=e.currentPage;return Object(l.jsxs)("div",{className:c.a.paginationControls,children:[Object(l.jsx)("span",{className:c.a.span,onClick:function(){return g(s-1,a,r,t)},children:"<"}),Object(l.jsx)("span",{className:c.a.span,children:s}),Object(l.jsx)("span",{className:c.a.span,onClick:function(){return g(s+1,a,r,t,n)},children:">"})]})},v=function(e,n,t,r,a){for(var s=[],u=1;u<=a;u++)s.push(u);return s.length>6?s.map((function(a,s,u){if(a>=1&&a<=3||a>u.length-3&&a<=u.length)return Object(l.jsx)(p,{currentNumber:a,currentPage:n,pageSize:e,setCurrentPage:t,getUsers:r})})):s.map((function(a){return Object(l.jsx)(p,{currentNumber:a,currentPage:n,pageSize:e,setCurrentPage:t,getUsers:r})}))},b=function(e){var n=e.totalUsersCount,t=e.pageSize,r=e.currentPage,a=e.setCurrentPage,s=e.getUsers,u=Math.ceil(n/t);return Object(l.jsx)("div",{className:c.a.pagination,children:Object(l.jsxs)("div",{className:c.a.paginationWrap,children:[Object(l.jsx)("div",{className:c.a.paginationNums,children:v(t,r,a,s,u)}),Object(l.jsx)(j,{currentPage:r,pageSize:t,setCurrentPage:a,getUsers:s,pagesCount:u})]})})},m=t(163),h=t.n(m),d=(t(145),t(7)),_=function(e){var n=e.img,t=e.name;e.userId;return Object(l.jsx)("div",{className:h.a.avatarImage,children:n?Object(l.jsx)("img",{src:n,alt:"avatar"}):t.substr(0,1).toUpperCase()})},O=function(e){var n;return Object(l.jsx)("button",{disabled:e.followingInProgress.some((function(n){return n===e.user.id})),className:"".concat(e.className),onClick:function(n){return function(n,t,r){return r.preventDefault(),e.isAuth||e.history.push("/login"),n?e.unfollow(t):e.follow(t)}(e.user.followed,e.user.id,n)},children:(n=e.user.followed,n?"Unfollow":"Follow")})},w=function(e){return Object(l.jsxs)("div",{className:h.a.userAvatar,children:[Object(l.jsx)(_,{img:e.user.photos.small,name:e.user.name,userId:e.user.id}),Object(l.jsx)(O,Object(r.a)(Object(r.a)({},e),{},{className:h.a.avatarButton}))]})},P=function(e){var n=e.user;return Object(l.jsxs)("div",{className:h.a.userInfo,children:[Object(l.jsx)("div",{className:h.a.infoName,children:n.name}),Object(l.jsx)("div",{className:h.a.infoStatus,children:n.status})]})},x=function(e){return Object(l.jsxs)(d.b,{to:"/profile/".concat(e.user.id),className:h.a.user,children:[Object(l.jsx)(w,{user:e.user,unfollow:e.unfollow,follow:e.follow,followingInProgress:e.followingInProgress,isAuth:e.isAuth,history:e.history}),Object(l.jsx)(P,{user:e.user}),Object(l.jsx)(O,{className:h.a.followBtnMobile,user:e.user,unfollow:e.unfollow,follow:e.follow,followingInProgress:e.followingInProgress,isAuth:e.isAuth,history:e.history})]})},y=t(25),N=function(e){return Object(l.jsxs)("div",{className:"".concat(h.a.usersWrap," component--wrap"),children:[Object(l.jsx)(y.a,{flag:e.isFetching}),e.users.map((function(n){return Object(l.jsx)(x,Object(r.a)({user:n},e),n.id)})),Object(l.jsx)(b,Object(r.a)({},e))]})},C=t(11),U="NOT_FOUND";var A=function(e,n){return e===n};function S(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,a=void 0===r?A:r,s=t.maxSize,u=void 0===s?1:s,o=t.resultEqualityCheck,i=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}}(a),c=1===u?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:U},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(i):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return U}return{get:r,put:function(n,a){r(n)===U&&(t.unshift({key:n,value:a}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(u,i);function l(){var n=c.get(arguments);if(n===U){if(n=e.apply(null,arguments),o){var t=c.getEntries(),r=t.find((function(e){return o(e.value,n)}));r&&(n=r.value)}c.put(arguments,n)}return n}return l.clearCache=function(){return c.clear()},l}function k(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function I(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var s,u=0,o={memoizeOptions:void 0},i=r.pop();if("object"===typeof i&&(o=i,i=r.pop()),"function"!==typeof i)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof i+"]");var c=o,l=c.memoizeOptions,f=void 0===l?t:l,g=Array.isArray(f)?f:[f],p=k(r),j=e.apply(void 0,[function(){return u++,i.apply(null,arguments)}].concat(g)),v=e((function(){for(var e=[],n=p.length,t=0;t<n;t++)e.push(p[t].apply(null,arguments));return s=j.apply(null,e)}));return Object.assign(v,{resultFunc:i,memoizedResultFunc:j,dependencies:p,lastResult:function(){return s},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),v};return a}var z=I(S),E=z((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),F=function(e){return e.usersPage.pageSize},B=function(e){return e.usersPage.totalUsersCount},W=function(e){return e.usersPage.currentPage},M=function(e){return e.usersPage.isFetching},q=function(e){return e.usersPage.followingInProgress},D=t(31);n.default=Object(C.c)(Object(s.b)((function(e){return{users:E(e),pageSize:F(e),totalUsersCount:B(e),currentPage:W(e),isFetching:M(e),followingInProgress:q(e),isAuth:Object(D.b)(e)}}),{follow:u.b,unfollow:u.f,setCurrentPage:u.d,toggleFollowingProgress:u.e,getUsers:u.c}))((function(e){return Object(a.useEffect)((function(){var n=e.currentPage,t=e.pageSize;e.getUsers(n,t)}),[e.currentPage]),Object(l.jsx)(N,Object(r.a)({},e))}))}}]);
//# sourceMappingURL=6.33186424.chunk.js.map