(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[4],{239:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));var o=n(3),r=(n(0),n(241)),a=n.n(r),c=n(1),i=function(e){var t=e.meta.error&&e.meta.touched,n=t?a.a.error:"",o=t&&e.meta.active?Object(c.jsx)("small",{className:a.a.errorMessage,children:e.meta.error}):"";return Object(c.jsxs)("div",{className:"".concat(a.a.container," ").concat(e.className," ").concat(n),children:[e.children,o]})},s=function(e){return Object(c.jsx)(i,Object(o.a)(Object(o.a)({},e),{},{children:Object(c.jsx)("textarea",Object(o.a)(Object(o.a)({},e.input),{},{className:a.a.input,placeholder:e.placeholder}))}))},l=function(e){var t=e.type||e.input.type||"text",n=e.placeholder||e.input.placeholder||"";return Object(c.jsx)(i,Object(o.a)(Object(o.a)({},e),{},{children:Object(c.jsx)("input",Object(o.a)(Object(o.a)(Object(o.a)({},e.input),{},{className:"".concat(a.a.input," ").concat(e.className)},e.attr),{},{placeholder:n,type:t}))}))}},240:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var o=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce((function(t,n){return t||n(e)}),void 0)}}},241:function(e,t,n){e.exports={container:"FormControls_container__ryctp",input:"FormControls_input__3y0ZE",error:"FormControls_error___xvwj",errorMessage:"FormControls_errorMessage__1RHf2"}},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n(3),r=n(61),a=n(62),c=n(63),i=n(65),s=n(0),l=n.n(s),u=n(7),j=n(18),b=n(1),f=function(e){return{isAuth:e.auth.isAuth}},d=function(e){var t=function(t){Object(c.a)(s,t);var n=Object(i.a)(s);function s(){return Object(r.a)(this,s),n.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return this.props.isAuth?Object(b.jsx)(e,Object(o.a)({},this.props)):Object(b.jsx)(u.a,{to:"/login"})}}]),s}(l.a.Component);return Object(j.b)(f)(t)}},245:function(e,t,n){e.exports={profileUser:"ProfileInfo_profileUser__Utabe",profileInfoBlock:"ProfileInfo_profileInfoBlock__JY7jC"}},263:function(e,t,n){e.exports={post:"Post_post__2eQ0e",likes:"Post_likes__QwPe3"}},313:function(e,t,n){e.exports={profileMainInfo:"ProfileMainInfo_profileMainInfo__3W7uM",profileAvatar:"ProfileMainInfo_profileAvatar__17WOn",profileStatus:"ProfileMainInfo_profileStatus__3Qr6x",profileId:"ProfileMainInfo_profileId__3sxi4",profileName:"ProfileMainInfo_profileName__1o5ia",profileDesc:"ProfileMainInfo_profileDesc__1DU5V",selectImgBtn:"ProfileMainInfo_selectImgBtn__23sL-",button:"ProfileMainInfo_button__1cQJc",profileNameWrap:"ProfileMainInfo_profileNameWrap__b-HPy"}},314:function(e,t,n){e.exports={profileImageWrap:"ProfileAvatar_profileImageWrap__YHurW",profileImage:"ProfileAvatar_profileImage__4BIyT",imgName:"ProfileAvatar_imgName__2Ilv-"}},315:function(e,t,n){e.exports={form:"ProfileDataForm_form__dSwIv",contactItem:"ProfileDataForm_contactItem__1sUUM",contactItemTitle:"ProfileDataForm_contactItemTitle__2TLCV",lookingForAJob:"ProfileDataForm_lookingForAJob__1KQYn",lookingForAJobCheckbox:"ProfileDataForm_lookingForAJobCheckbox__18SLh"}},316:function(e,t,n){e.exports={buttonEditMode:"Profile_buttonEditMode__3ax1I"}},317:function(e,t,n){e.exports={inputWrap:"Posts_inputWrap__2IdK2",textarea:"Posts_textarea__2leIl",addPostBtn:"Posts_addPostBtn__1nYww"}},323:function(e,t,n){"use strict";n.r(t);var o=n(3),r=n(11),a=n(5),c=n.n(a),i=n(0),s=n.n(i),l=n(265),u=n(35),j=n(245),b=n.n(j),f=n(313),d=n.n(f),p=n(14),h=n(18),O=n(64),m=n(266),x=n(239),_=n(1),g=function(e){return Object(_.jsx)(m.b,{initialValues:e.initialValues,onSubmit:e.deactivateEditMode,children:function(e){var t=e.handleSubmit,n=t,o={autoFocus:!0,onBlur:function(e){return n(e)}};return Object(_.jsx)("form",{onSubmit:t,children:Object(_.jsx)(m.a,{component:x.a,name:"status",attr:o,type:"text"})})}})},v=function(e){var t=!e.match.params.userId,n=Object(i.useState)(!1),o=Object(l.a)(n,2),r=o[0],a=o[1];return Object(_.jsx)("div",{children:r?Object(_.jsx)(g,{initialValues:{status:e.status},deactivateEditMode:function(t){a(!1),e.updateStatus(t.status)}}):t?Object(_.jsx)("div",{children:Object(_.jsx)("span",{onDoubleClick:function(){t&&a(!0)},children:e.status})}):Object(_.jsx)("div",{children:Object(_.jsx)("span",{children:e.status})})})},I=n(7),P=function(e){return e.profilePage},N=function(e){return e.profilePage.profile},k=function(e){return e.profilePage.isFetching},F=function(e){return e.profilePage.status},A={updateStatus:O.h},M=Object(p.d)(Object(h.b)((function(e){return{status:F(e)}}),A),I.g)(v),S=n(314),w=n.n(S),y=function(e){var t,n=e.photos,o=e.fullName;return t=n.large?Object(_.jsx)("img",{className:w.a.profileImage,src:n.large,alt:"avatar"}):n.small?Object(_.jsx)("img",{className:w.a.profileImage,src:n.small,alt:"avatar"}):Object(_.jsx)("span",{className:w.a.imgName,children:o.substr(0,1).toUpperCase()}),Object(_.jsx)("div",{className:w.a.profileImageWrap,children:t})},J=["photos","fullName","userId","isOwner"],C=function(e){var t=e.isOwner,n=e.savePhoto,o="Select your image";return t?Object(_.jsxs)("label",{className:d.a.selectImgBtn,children:[Object(_.jsx)("span",{className:d.a.button,children:o}),Object(_.jsx)("input",{type:"file",onChange:function(e){var t=e.target.files;t.length&&(n(t[0]),o=t[0])}})]}):""},D=function(e){var t=e.photos,n=e.fullName,o=e.userId,r=e.isOwner,a=Object(u.a)(e,J);return Object(_.jsxs)("div",{className:d.a.profileMainInfo,children:[Object(_.jsxs)("div",{className:d.a.profileAvatar,children:[Object(_.jsx)(y,{photos:t,fullName:n}),Object(_.jsx)(C,{isOwner:r,savePhoto:a.savePhoto})]}),Object(_.jsxs)("div",{className:d.a.profileNameWrap,children:[Object(_.jsxs)("div",{className:d.a.profileStatus,children:[Object(_.jsx)("div",{className:d.a.profileName,children:n}),Object(_.jsx)(M,{})]}),Object(_.jsx)("div",{className:d.a.profileId,children:o})]})]})},B=["aboutMe"],W=function(e){var t=e.aboutMe;Object(u.a)(e,B);return t?Object(_.jsxs)("div",{className:b.a.profileInfoBlock,children:[Object(_.jsx)("h2",{children:"About me"}),Object(_.jsx)("p",{children:t})]}):""},U=["lookingForAJob","lookingForAJobDescription"],E=function(e){var t=e.lookingForAJob,n=e.lookingForAJobDescription;Object(u.a)(e,U);return Object(_.jsxs)("div",{className:b.a.profileInfoBlock,children:[Object(_.jsx)("h2",{children:"Search for a job"}),Object(_.jsxs)("p",{children:[Object(_.jsx)("strong",{children:t?"Looking for a job.":"Not looking for a job."}),n]})]})},T=["contacts"],V=function(e){var t=e.contacts,n=(Object(u.a)(e,T),[]);for(var o in t)t[o]&&n.push(Object(_.jsx)("a",{href:"".concat(t[o]),children:o}));return n.length>0?Object(_.jsxs)("div",{className:b.a.profileInfoBlock,children:[Object(_.jsx)("h2",{children:"Contacts"}),Object(_.jsx)("div",{children:n})]}):""},L=["isOwner","profile"],Q=function(e){var t=e.isOwner,n=e.profile,o=Object(u.a)(e,L);return Object(_.jsx)("div",{children:Object(_.jsxs)("div",{className:b.a.profileUser,children:[Object(_.jsx)(D,{fullName:n.fullName,photos:n.photos,userId:n.userId,isOwner:t,savePhoto:o.savePhoto}),Object(_.jsx)(W,{aboutMe:n.aboutMe}),Object(_.jsx)(E,{lookingForAJob:n.lookingForAJob,lookingForAJobDescription:n.lookingForAJobDescription}),Object(_.jsx)(V,{contacts:n.contacts})]})})},Y=n(36),H=n(240),z=n(59),K=n(315),q=n.n(K),R=function(e){return Object(_.jsx)(m.b,{onSubmit:e.onSubmit,initialValues:e.initialValues,profile:e.profile,children:function(e){var t=e.handleSubmit,n=e.profile,o=e.error;return Object(_.jsxs)("form",{onSubmit:t,children:[Object(_.jsxs)("div",{className:q.a.form,children:[Object(_.jsxs)("label",{children:[Object(_.jsx)("h2",{children:"FullName"}),Object(_.jsx)(m.a,{placeholder:"FullName",name:"fullName",validate:Object(H.a)(H.c),component:x.a,type:"text"})]}),Object(_.jsxs)("label",{children:[Object(_.jsx)("h2",{children:"About Me"}),Object(_.jsx)(m.a,{placeholder:"About me",name:"aboutMe",component:x.b})]}),Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{className:q.a.lookingForAJob,children:[Object(_.jsxs)("label",{className:q.a.lookingForAJobCheckbox,children:[Object(_.jsx)("h2",{children:"Looking for a job?"}),Object(_.jsx)(m.a,{name:"lookingForAJob",component:x.a,type:"checkbox"})]}),Object(_.jsx)("label",{htmlFor:"lookingForAJobDescription",children:Object(_.jsx)("h2",{children:"Description for a looking job"})})]}),Object(_.jsx)(m.a,{placeholder:"Description for a looking job",name:"lookingForAJobDescription",component:x.b,id:"lookingForAJobDescription"})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("h2",{children:"Contacts"}),Object(_.jsx)("div",{children:Object.keys(n.contacts).map((function(e){return Object(_.jsxs)("label",{className:q.a.contactItem,children:[Object(_.jsx)("strong",{className:q.a.contactItemTitle,children:e}),Object(_.jsx)(m.a,{name:"contacts.".concat(e),component:x.a,type:"text",placeholder:"https://".concat(e,"/")})]},e)}))})]})]}),o?Object(_.jsx)("div",{children:o}):"",Object(_.jsx)(z.a,{children:"Save changes"})]})}})},Z=n(316),G=n.n(Z),X=n(263),$=n.n(X),ee=function(e){var t=e.message,n=e.likesCount;return Object(_.jsxs)("div",{className:$.a.post,children:[Object(_.jsx)("p",{children:t}),Object(_.jsxs)("div",{className:$.a.likes,children:[Object(_.jsx)("small",{children:"Like"}),Object(_.jsx)("small",{children:n})]})]})},te=n(317),ne=n.n(te),oe=n(117),re=n(118),ae=Object(H.b)(300),ce=s.a.memo((function(e){var t=e.addPostTC,n=e.profilePage.posts.map((function(e){return Object(_.jsx)(ee,{message:e.post,likesCount:e.likesCount},e.id)}));return Object(_.jsxs)("div",{children:[Object(_.jsx)("h2",{children:"My posts"}),Object(_.jsx)(ie,{onSubmit:function(e){t(e.newPost)}}),Object(_.jsx)("div",{children:n})]})})),ie=Object(re.a)({form:"postForm"})((function(e){return Object(_.jsxs)("form",{onSubmit:e.handleSubmit,className:ne.a.inputWrap,children:[Object(_.jsx)(oe.a,{component:x.b,name:"newPost",placeholder:"Type your post...",className:ne.a.textarea,validate:[H.c,ae]}),Object(_.jsx)(z.a,{className:ne.a.addPostBtn,children:"Add post"})]})})),se=ce,le={addPostTC:O.a},ue=Object(h.b)((function(e){return{profilePage:P(e)}}),le)(se),je=["isOwner","profile"],be=function(e){var t=e.isOwner,n=e.profile,o=Object(u.a)(e,je),r=Object(i.useState)(!1),a=Object(l.a)(r,2),c=a[0],s=a[1];return n?Object(_.jsxs)("div",{className:"component--wrap",children:[c?Object(_.jsx)(R,{onSubmit:function(e){o.updateProfile(e).then((function(){return s(!1)}))},profile:n,initialValues:n}):Object(_.jsx)(Q,{isOwner:t,profile:n,savePhoto:o.savePhoto,updateProfile:o.updateProfile}),!c&&t?Object(_.jsx)(z.a,{className:G.a.buttonEditMode,attr:{onClick:function(){t&&s(!0)}},children:"Edit profile"}):"",Object(_.jsx)(ue,{})]}):Object(_.jsx)(Y.a,{})},fe=n(243),de=n(50),pe=function(){var e=Object(r.a)(c.a.mark((function e(t,n,o,r,a){var i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t)||(i=n)||a.push("/login"),e.next=4,o(i);case 4:r(i);case 5:case"end":return e.stop()}}),e)})));return function(t,n,o,r,a){return e.apply(this,arguments)}}();t.default=Object(p.d)(Object(h.b)((function(e){return{profile:N(e),isFetching:k(e),authorizedUserId:Object(de.c)(e),isAuth:Object(de.d)(e)}}),{getProfile:O.c,updateProfile:O.g,getStatus:O.d,savePhoto:O.e,toggleIsFetching:O.f}),I.g,fe.a)((function(e){var t=e.match,n=e.authorizedUserId,r=e.getProfile,a=e.getStatus;return Object(i.useEffect)((function(){e.toggleIsFetching(!0),pe(t.params.userId,n,r,a,e.history).then((function(t){return e.toggleIsFetching(!1)}))}),[t.params.userId]),e.isFetching?Object(_.jsx)(Y.a,{flag:e.isFetching}):Object(_.jsx)(be,Object(o.a)({isOwner:!t.params.userId},e))}))}}]);
//# sourceMappingURL=4.837438e4.chunk.js.map