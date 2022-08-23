"use strict";function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _createForOfIteratorHelper(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}$(function(){function t(t,e){$(t).on("click",function(){$("html, body").animate({scrollTop:$(e).offset().top-100},700)})}$(".intro .hi-text").fitText(.3),$(".main-header .toggle-navbar").on("click",function(){$(this).toggleClass("active"),$(this).parents(".main-header").toggleClass("active"),$("nav").toggleClass("active"),$(".page-content").toggleClass("active")}),$("nav li").each(function(){$(this).on("click",function(){var t=$(this).data("section");$(this).addClass("active").siblings().removeClass("active"),$("html, body").animate({scrollTop:$("."+t).offset().top-100},700)})}),t(".intro .go-to-about",".about"),t(".intro .go-to-portfolio",".portfolio"),$(window).on("scroll",function(){var t=$(this);$("section").each(function(){t.scrollTop()>=$(this).offset().top-200&&$(this).attr("class").split(" ").forEach(function(t){$("nav li").each(function(){$(this).data("section")==t&&$(this).addClass("active").siblings().removeClass("active")})})})}),$(".main-header .full-screen").on("click",function(){$(this).toggleClass("full-screen-mode"),$(this).hasClass("full-screen-mode")?($(this).find(".full-screen-icon").attr("name","scan-outline"),document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen?document.documentElement.webkitRequestFullscreen():document.documentElement.msRequestFullscreen&&document.documentElement.msRequestFullscreen()):($(this).find(".full-screen-icon").attr("name","resize-outline"),document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen())}),$(".main-header .mode .theme-mode").on("click",function(){$(this).toggleClass("dark-mode"),$(this).hasClass("dark-mode")?($(this).find(".icon-mode").attr("name","sunny-outline"),$(this).find("span").text("light")):($(this).find(".icon-mode").attr("name","moon-outline"),$(this).find("span").text("dark")),$(".main-header").toggleClass("dark-theme-header"),$(".page-content").toggleClass("dark-theme-site")}),$(".intro").on("mousemove",function(t){var e=t.pageX/12,n=t.pageY/12;$(this).find(".dots-img").css({top:n,left:e})}),$(".about .stats-carousel").flickity({prevNextButtons:!1,pageDots:!1,arrows:!1,wrapAround:!0,autoPlay:!0,initialIndex:1}),axios.get("https://5f7cc9f3834b5c0016b0595b.mockapi.io/works").then(function(t){var e,n=t.data,o=$(".portfolio .items"),r=n.map(function(t){return t.tab}),a={},i=_createForOfIteratorHelper(r);try{for(i.s();!(e=i.n()).done;){var l=e.value;a[l]?a[l]+=1:a[l]=1}}catch(t){i.e(t)}finally{i.f()}var s=_toConsumableArray(new Set(r)).sort();s.forEach(function(t){o.html(o.html()+'\n\n                <div class="'.concat(t,'-projects single-project">\n\n                    <div class="project-title-wrapper">\n                        <h6 class="projects-title float-right">').concat(t," ").concat(a[t],"</h6>\n                    </div>\n\n                    <div class=projects-wrapper>\n                        <div class=portfolio-carousel id=").concat(t,">\n\n                        </div>\n                    </div>\n\n                </div>\n\n            "))});for(var c=function(t){var e=s.find(function(e){return e==n[t].tab});$(".portfolio .portfolio-carousel").each(function(){$(this).attr("id")==e&&$(this).html($(this).html()+'\n\n                        <div class="carousel-cell">\n                            <div class="my-single-work">\n                                <img src='.concat(n[t].img,' alt="').concat(n[t].name,'" class="img-fluid">\n\n                                <div class="single-work-body">\n\n                                    <div class="project-details">\n                                        <h4 class="text">').concat(n[t].name,'</h4>\n                                    </div>\n\n                                    <div class="project-link">\n                                        ').concat(n[t].link?"<a href="+n[t].link+" target='_blank' class='my-btn'>visit<ion-icon name='arrow-forward-outline' class='icon'></ion-icon></a>":"<button class='my-btn'>img only</button>","\n                                    </div>\n\n                                </div>\n                            </div>\n                        </div>\n                        \n\n                    "))})},u=0;u<n.length;u++)c(u);$(".portfolio-carousel").flickity({pageDots:!1,wrapAround:!0,autoPlay:!0,initialIndex:1})})});

var name = true ; 
var myName = document.querySelector(".fEWHYW") ;
while ( name == true ){
    console.log("ehba")
    if (myName.innerHTML != "Ehab Barakat"){
        myName.innerHTML = "Ehab Barakat"
        name = false
    }
}

