(function(win,doc,callback){callback=callback||function(){};function detach(){if(doc.addEventListener)doc.removeEventListener("DOMContentLoaded",completed);else doc.detachEvent("onreadystatechange",completed)}function completed(){if(doc.addEventListener||event.type==="load"||doc.readyState==="complete"){detach();callback(window,window.jQuery)}}function init(){if(doc.addEventListener)doc.addEventListener("DOMContentLoaded",completed);else doc.attachEvent("onreadystatechange",completed)}init()})(window,
document,function(win,$){!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n():"function"==typeof define&&define.amd?define(n):n()}(0,function(){function e(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,t=arguments[2],r=void 0,o=void 0,u=void 0,l=void 0,f=void 0,d=function(){u=this;for(var d=arguments.length,a=Array(d),s=0;s<d;s++)a[s]=arguments[s];o=a,l=Date.now();var c=t&&!r;return r||(r=setTimeout(n,i)),c&&(f=e.apply(u,o),u=null,o=null),f};function n(){var d=
Date.now()-l;d<i&&d>=0?r=setTimeout(n,i-d):(r=null,t||(f=e.apply(u,o),u=null,o=null))}return d.clear=function(){r&&(clearTimeout(r),r=null)},d.flush=function(){r&&(f=e.apply(u,o),u=null,o=null,clearTimeout(r),r=null)},d}var n=window.jQuery;if(!n)throw new Error("resizeend require jQuery");n.event.special.resizeend={setup:function(){var i=n(this);i.on("resize.resizeend",e.call(null,function(e){e.type="resizeend",i.trigger("resizeend",e)},250))},teardown:function(){n(this).off("resize.resizeend")}}});
$(document).ready(function(){mbs_tabNav__fixed();nav_slick();var slideNo=3;$(".nav-inner").slick("slickGoTo",slideNo)})});
