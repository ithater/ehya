!function(e){function t(t){for(var r,o,s=t[0],u=t[1],l=t[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(c&&c(t);f.length;)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={0:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;a.push([124,1]),n()}({124:function(e,t,n){n(125),e.exports=n(314)},314:function(e,t,n){"use strict";n.r(t);n(311),n(312);var r=function(){var e=document.querySelector(".button-burger"),t=document.querySelector(".header-menu__button-close"),n=document.querySelector(".header-menu"),r=function(){return n.classList.remove("header-menu--active")},i=!1;document.addEventListener("click",(function(a){switch(a.target){case e:i=!0,n.classList.add("header-menu--active");break;case t:i=!1,r();break;default:i&&(i=!1,r())}}))},i=(n(313),n(318)),a=n(316),o=n(317);i.a.use([a.a,o.a]);var s=function(){new i.a(".reviews-slider__container",{direction:"horizontal",loop:!0,speed:400,pagination:{el:".reviews-slider-pagination",bulletClass:"reviews-slider-pagination__dot",bulletActiveClass:"reviews-slider-pagination__dot--active",clickable:!0},autoHeight:!0,autoplay:{delay:5e3}});var e=document.querySelector(".swiper-wrapper"),t=document.querySelector(".swiper-slide-active");setTimeout((function(){e.style.height=t.offsetHeight+"px"}),100)};function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){var n=t.formId,r=t.submit;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.form=document.getElementById(n),this.submit=r.bind(this)}var t,n,r;return t=e,(n=[{key:"init",value:function(){this.form.addEventListener("submit",this.submit)}}])&&u(t.prototype,n),r&&u(t,r),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t){var n=t.inputs,r=t.formId,i=t.errorClass;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.inputs=n,this.$form=document.getElementById(r),this.errorClass=i,this.init()}var t,n,r;return t=e,(n=[{key:"init",value:function(){var e=this;this.inputs=this.inputs.map((function(t){var n=document.createElement("label");return n.setAttribute("for",t.inputId),n.className=e.errorClass,{input:document.getElementById(t.inputId),inputId:t.inputId,messages:t.messages,validationFunc:t.validationFunc,isValid:!1,$error:n,isDisplayed:!1}}));var t=this;this.$form.addEventListener("submit",(function e(n){return t.onSubmitHandler(n,e)}))}},{key:"validate",value:function(){var e=this;this.inputs.forEach((function(t){var n=t.input.value;return""===n.trim()?(t.isValid=!1,void e.showRequireMessage(t)):t.validationFunc(n)?(e.hideMessage(t),void(t.isValid=!0)):(t.isValid=!1,void e.showFuncMessage(t))}))}},{key:"hideMessage",value:function(e){e.isDisplayed&&(e.$error.remove(),e.isDisplayed=!1)}},{key:"showRequireMessage",value:function(e){e.isDisplayed?e.$error.textContent=e.messages.require:(e.$error.textContent=e.messages.require,e.input.insertAdjacentElement("afterend",e.$error),e.isDisplayed=!0)}},{key:"showFuncMessage",value:function(e){e.isDisplayed?e.$error.textContent=e.messages.func:(e.$error.textContent=e.messages.func,e.input.insertAdjacentElement("afterend",e.$error),e.isDisplayed=!0)}},{key:"onSubmitHandler",value:function(e,t){e.preventDefault(),this.validate(),this.$form.addEventListener("input",this.onInputHandler.bind(this)),this.$form.removeEventListener("submit",t)}},{key:"onInputHandler",value:function(e){e.preventDefault(),this.validate()}},{key:"isValid",get:function(){return this.inputs.every((function(e){return e.isValid}))}}])&&c(t.prototype,n),r&&c(t,r),e}(),f=function(){var e=new d({formId:"subscribe-form",inputs:[{inputId:"subscribe-form-email",messages:{require:"Данное поле должно быть заполнено",func:"Введите корректный email адресс"},validationFunc:function(e){return/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(e)}}],errorClass:"invalid-input"});new l({formId:"subscribe-form",submit:function(t){if(t.preventDefault(),!1!==e.isValid){var n=new FormData(this.form);fetch("./assets/php/send.php",{method:"POST",body:n}).catch((function(e){return console.error(e)}))}}}).init()};r(),s(),f()}});
//# sourceMappingURL=main.e9df60824ff32f291404.js.map