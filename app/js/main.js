!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".js-slider"),t=document.querySelector(".js-slider-lecture"),n=document.querySelector(".js-slider-price"),r=document.querySelector(".js-slider-price-2"),a=window.innerWidth<767;e&&new Swiper(e,{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"fraction"},breakpoints:{767:{slidesPerView:1.3,spaceBetween:16}}}),a&&t&&new Swiper(t,{centeredSlides:!0,slidesPerView:1,spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"fraction"}}),a&&n&&new Swiper(n,{centeredSlides:!0,spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"fraction"}}),a&&r&&new Swiper(r,{centeredSlides:!0,spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"fraction"}});var i=document.querySelector(".js-page"),s=document.querySelector(".js-nav-button"),o=document.querySelector(".js-header");s.addEventListener("click",(function(e){e.preventDefault(),s.classList.toggle("header__nav-trigger--active"),!s.classList.contains("header__nav-trigger--active")&&window.pageYOffset<40?o.classList.add("header--transparent"):o.classList.remove("header--transparent")})),function(){for(var e=document.querySelectorAll('button[data-modal="open"]'),t=document.querySelector(".js-modal"),n=t.querySelector(".js-sign-up-lesson"),r=t.querySelector(".js-success"),a=t.querySelector(".js-request"),s=t.querySelectorAll('button[data-modal="close"]'),o=function(e){e.addEventListener("click",(function(s){s.preventDefault();var o=e.getAttribute("data-value");switch(t.classList.add("hidden"),i.classList.remove("page--unscrollable"),o){case"request":a.classList.add("hidden");break;case"sign-up-lesson":n.classList.add("hidden");break;case"success":r.classList.add("hidden");break;default:return}}))},c=function(e){e.addEventListener("click",(function(r){r.preventDefault();var s=e.getAttribute("data-value");switch(t.classList.remove("hidden"),i.classList.add("page--unscrollable"),s){case"request":a.classList.remove("hidden");break;case"sign-up-lesson":n.classList.remove("hidden");break;default:return}}))},l=0;l<e.length;l++)c(e[l]);for(var d=0;d<s.length;d++)o(s[d])}(),function(){var e=document.querySelector(".js-tab-price");if(e)for(var t=e.querySelectorAll(".js-tab-button"),n=e.querySelectorAll(".js-tab-item"),r=function(e,r){e.addEventListener("click",(function(a){a.preventDefault();for(var i=0;i<t.length;i++)t[i].classList.remove("price-section__button--active"),n[i].classList.add("hidden");e.classList.add("price-section__button--active"),r.classList.remove("hidden")}))},a=0;a<t.length;a++)r(t[a],n[a])}(),function(){var e=document.querySelector(".js-teacher-tabs");if(e)for(var t=e.querySelectorAll(".js-teacher-tab-button"),n=e.querySelectorAll(".js-teacher-tab-item"),r=function(e,r){e.addEventListener("click",(function(a){a.preventDefault();for(var i=0;i<t.length;i++)t[i].classList.remove("teacher-section__button--active"),n[i].classList.add("hidden");e.classList.add("teacher-section__button--active"),r.classList.remove("hidden")}))},a=0;a<t.length;a++)r(t[a],n[a])}(),window.addEventListener("scroll",(function(){window.pageYOffset>40?o.classList.remove("header--transparent"):o.classList.add("header--transparent")}))}))}]);