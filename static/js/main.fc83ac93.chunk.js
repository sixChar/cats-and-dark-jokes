(this["webpackJsonpdark-joke-generator"]=this["webpackJsonpdark-joke-generator"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(3),i=n.n(o),j=(n(9),n(4)),s=(n.p,n(10),n(0));function a(e){var t=e.joke;return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:t.setup}),Object(s.jsx)("p",{children:t.delivery})]})}function u(e){var t=e.joke;return Object(s.jsx)("div",{children:t.joke})}function d(e){return Object(s.jsx)("div",{children:"Loading..."})}function h(){var e=Object(c.useState)(0),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){fetch("https://v2.jokeapi.dev/joke/Dark").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),n?"single"==n.type?Object(s.jsx)(u,{joke:n}):Object(s.jsx)(a,{joke:n}):Object(s.jsx)(d,{})}function b(e){var t=192+Math.floor(128*Math.random());console.log(t);var n="http://placekitten.com/".concat(t,"/").concat(t);return Object(s.jsx)("div",{children:Object(s.jsx)("img",{width:"256",height:"256",src:n,style:{borderRadius:"40px"}})})}var f=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(b,{}),Object(s.jsx)(h,{})]})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),o(e),i(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),l()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.fc83ac93.chunk.js.map