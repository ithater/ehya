!function(e){function t(t){for(var n,a,u=t[0],c=t[1],l=t[2],p=0,d=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(s&&s(t);d.length;)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={0:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=c;i.push([124,1]),r()}({124:function(e,t,r){r(125),e.exports=r(314)},314:function(e,t,r){"use strict";r.r(t);r(311),r(312);var n=function(){var e=document.querySelector(".button-burger"),t=document.querySelector(".header-menu__button-close"),r=document.querySelector(".header-menu"),n=function(){return r.classList.remove("header-menu--active")},o=!1;document.addEventListener("click",(function(i){switch(i.target){case e:o=!0,r.classList.add("header-menu--active");break;case t:o=!1,n();break;default:o&&(o=!1,n())}}))},o=(r(313),r(318)),i=r(316),a=r(317);o.a.use([i.a,a.a]);var u=function(){new o.a(".reviews-slider__container",{direction:"horizontal",loop:!0,speed:400,pagination:{el:".reviews-slider-pagination",bulletClass:"reviews-slider-pagination__dot",bulletActiveClass:"reviews-slider-pagination__dot--active",clickable:!0},autoHeight:!0,autoplay:{delay:5e3}});var e=document.querySelector(".swiper-wrapper"),t=document.querySelector(".swiper-slide-active");setTimeout((function(){e.style.height=t.offsetHeight+"px"}),100)};n(),u()}});
//# sourceMappingURL=main.260cef1cd1014c6adf9d.js.map