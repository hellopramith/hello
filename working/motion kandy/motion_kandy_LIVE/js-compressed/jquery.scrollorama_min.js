(function(i){i.scrollorama=function(d){function a(){var a=i(window).scrollTop(),d;d=0;var g;for(g=0;g<c.length;g++)c[g].top<=a-b.settings.offset&&(d=g);var l,f,j,k;for(g=0;g<c.length;g++)if(c[g].animations.length)for(l=0;l<c[g].animations.length;l++)if(f=c[g].animations[l],g>d?(d!==g-1&&"bottom"!==f.baseline&&e(f.element,f.property,f.startVal),c[g].pin&&c[g].block.css("position","absolute").css("top",c[g].top)):g<d&&(e(f.element,f.property,f.endVal),c[g].pin&&c[g].block.css("position","absolute").css("top",
c[g].top+c[g].pin)),g===d||d===g-1&&"bottom"===f.baseline)c[g].pin&&d===g&&c[g].block.css("position","fixed").css("top",0),j=c[g].top+f.delay,"bottom"===f.baseline&&(j-=i(window).height()),k=j+f.duration,a<j?e(f.element,f.property,f.startVal):a>k?(e(f.element,f.property,f.endVal),c[g].pin&&c[g].block.css("position","absolute").css("top",c[g].top+c[g].pin)):(j=(a-j)/f.duration,f.easing&&i.isFunction(i.easing[f.easing])&&(j=i.easing[f.easing](j,1E3*j,0,1,1E3)),j=f.startVal+j*(f.endVal-f.startVal),e(f.element,
f.property,j));b.blockIndex!==d&&(b.blockIndex=d,h())}function e(a,c,b){var e;if("rotate"===c||"zoom"===c||"scale"===c)if("rotate"===c)a.css(f+"transform","rotate("+b+"deg)");else{if("zoom"===c||"scale"===c)c="scale("+b+")","-ms-"!==f?a.css(f+"transform",c):a.css("zoom",c)}else"background-position-x"===c||"background-position-y"===c?(e=a.css("background-position").split(" "),"background-position-x"===c&&a.css("background-position",b+"px "+e[1]),"background-position-y"===c&&a.css("background-position",
e[0]+" "+b+"px")):"text-shadow"===c?a.css(c,"0px 0px "+b+"px #ffffff"):a.css(c,b)}var b=this,c=[],f="",h=function(){},k=!1,n=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)};b.settings=i.extend({},{offset:0,enablePin:!0},d);b.blockIndex=0;void 0===d.blocks&&alert("ERROR: Must assign blocks class selector to scrollorama plugin");b.animate=function(b){var e,
f,d,h,j;"string"===typeof b&&(b=i(b));for(h=0;h<c.length;h++)c[h].block.has(b).length&&(f=c[h],e=h);for(h=1;h<arguments.length;h++){d=arguments[h];if("top"===d.property||"left"===d.property||"bottom"===d.property||"right"===d.property)"static"===b.css("position")&&b.css("position","relative"),cssValue=parseInt(b.css(d.property),10),void 0===d.start?d.start=isNaN(cssValue)?0:cssValue:void 0===d.end&&(d.end=isNaN(cssValue)?0:cssValue);if("rotate"===d.property){if(void 0===d.start&&(d.start=0),void 0===
d.end)d.end=0}else if("zoom"===d.property||"scale"===d.property){if(void 0===d.start&&(d.start=1),void 0===d.end)d.end=1}else if("letter-spacing"===d.property&&b.css(d.property)&&(void 0===d.start&&(d.start=1),void 0===d.end))d.end=1;void 0===d.baseline&&(d.baseline=d.pin||f.pin||0===e?"top":"bottom");void 0===d.delay&&(d.delay=0);f.animations.push({element:b,delay:d.delay,duration:d.duration,property:d.property,startVal:void 0!==d.start?d.start:parseInt(b.css(d.property),10),endVal:void 0!==d.end?
d.end:parseInt(b.css(d.property),10),baseline:void 0!==d.baseline?d.baseline:"bottom",easing:d.easing});if(d.pin&&f.pin<d.duration+d.delay){d=d.duration+d.delay-f.pin;f.pin+=d;for(j=e+1;j<c.length;j++)c[j].top+=d,c[j].block.css("top",c[j].top)}}a()};b.onBlockChange=function(a){h=a};b.getScrollpoints=function(){var a=[],b,d,e;for(b=0;b<c.length;b++)if(a.push(c[b].top),c[b].animations.length&&0<c[b].pin)for(d=0;d<c[b].animations.length;d++)e=c[b].animations[d],a.push(c[b].top+e.delay+e.duration);a.sort(function(a,
b){return a-b});return a};var m;"string"===typeof b.settings.blocks&&(b.settings.blocks=i(b.settings.blocks));i.browser.mozilla&&(f="-moz-");i.browser.webkit&&(f="-webkit-");i.browser.opera&&(f="-o-");i.browser.msie&&(f="-ms-");i("body").css("position","relative");for(d=0;d<b.settings.blocks.length;d++)m=b.settings.blocks.eq(d),c.push({block:m,top:m.offset().top-parseInt(m.css("margin-top"),10),pin:0,animations:[]});if("true"===b.settings.enablePin.toString())for(d=0;d<c.length;d++)c[d].block.css("position",
"absolute").css("top",c[d].top);i("body").prepend('<div id="scroll-wrap"></div>');k=!1;i(window).scroll(function(){k||n(function(){a();k=false});k=true});return b};i.extend(i.easing,{def:"easeOutQuad",swing:function(d,a,e,b,c){return i.easing[i.easing.def](d,a,e,b,c)},easeInQuad:function(d,a,e,b,c){return b*(a/=c)*a+e},easeOutQuad:function(d,a,e,b,c){return-b*(a/=c)*(a-2)+e},easeInOutQuad:function(d,a,e,b,c){return 1>(a/=c/2)?b/2*a*a+e:-b/2*(--a*(a-2)-1)+e},easeInCubic:function(d,a,e,b,c){return b*
(a/=c)*a*a+e},easeOutCubic:function(d,a,e,b,c){return b*((a=a/c-1)*a*a+1)+e},easeInOutCubic:function(d,a,e,b,c){return 1>(a/=c/2)?b/2*a*a*a+e:b/2*((a-=2)*a*a+2)+e},easeInQuart:function(d,a,e,b,c){return b*(a/=c)*a*a*a+e},easeOutQuart:function(d,a,e,b,c){return-b*((a=a/c-1)*a*a*a-1)+e},easeInOutQuart:function(d,a,e,b,c){return 1>(a/=c/2)?b/2*a*a*a*a+e:-b/2*((a-=2)*a*a*a-2)+e},easeInQuint:function(d,a,e,b,c){return b*(a/=c)*a*a*a*a+e},easeOutQuint:function(d,a,e,b,c){return b*((a=a/c-1)*a*a*a*a+1)+
e},easeInOutQuint:function(d,a,e,b,c){return 1>(a/=c/2)?b/2*a*a*a*a*a+e:b/2*((a-=2)*a*a*a*a+2)+e},easeInSine:function(d,a,e,b,c){return-b*Math.cos(a/c*(Math.PI/2))+b+e},easeOutSine:function(d,a,e,b,c){return b*Math.sin(a/c*(Math.PI/2))+e},easeInOutSine:function(d,a,e,b,c){return-b/2*(Math.cos(Math.PI*a/c)-1)+e},easeInExpo:function(d,a,e,b,c){return 0===a?e:b*Math.pow(2,10*(a/c-1))+e},easeOutExpo:function(d,a,e,b,c){return a===c?e+b:b*(-Math.pow(2,-10*a/c)+1)+e},easeInOutExpo:function(d,a,e,b,c){return 0===
a?e:a===c?e+b:1>(a/=c/2)?b/2*Math.pow(2,10*(a-1))+e:b/2*(-Math.pow(2,-10*--a)+2)+e},easeInCirc:function(d,a,e,b,c){return-b*(Math.sqrt(1-(a/=c)*a)-1)+e},easeOutCirc:function(d,a,e,b,c){return b*Math.sqrt(1-(a=a/c-1)*a)+e},easeInOutCirc:function(d,a,e,b,c){return 1>(a/=c/2)?-b/2*(Math.sqrt(1-a*a)-1)+e:b/2*(Math.sqrt(1-(a-=2)*a)+1)+e},easeInElastic:function(d,a,e,b,c){var d=1.70158,f=0,h=b;if(0===a)return e;if(1===(a/=c))return e+b;f||(f=0.3*c);h<Math.abs(b)?(h=b,d=f/4):d=f/(2*Math.PI)*Math.asin(b/
h);return-(h*Math.pow(2,10*(a-=1))*Math.sin((a*c-d)*2*Math.PI/f))+e},easeOutElastic:function(d,a,e,b,c){var d=1.70158,f=0,h=b;if(0===a)return e;if(1===(a/=c))return e+b;f||(f=0.3*c);h<Math.abs(b)?(h=b,d=f/4):d=f/(2*Math.PI)*Math.asin(b/h);return h*Math.pow(2,-10*a)*Math.sin((a*c-d)*2*Math.PI/f)+b+e},easeInOutElastic:function(d,a,e,b,c){var d=1.70158,f=0,h=b;if(0===a)return e;if(2===(a/=c/2))return e+b;f||(f=c*0.3*1.5);h<Math.abs(b)?(h=b,d=f/4):d=f/(2*Math.PI)*Math.asin(b/h);return 1>a?-0.5*h*Math.pow(2,
10*(a-=1))*Math.sin((a*c-d)*2*Math.PI/f)+e:0.5*h*Math.pow(2,-10*(a-=1))*Math.sin((a*c-d)*2*Math.PI/f)+b+e},easeInBack:function(d,a,e,b,c,f){void 0===f&&(f=1.70158);return b*(a/=c)*a*((f+1)*a-f)+e},easeOutBack:function(d,a,e,b,c,f){void 0===f&&(f=1.70158);return b*((a=a/c-1)*a*((f+1)*a+f)+1)+e},easeInOutBack:function(d,a,e,b,c,f){void 0===f&&(f=1.70158);return 1>(a/=c/2)?b/2*a*a*(((f*=1.525)+1)*a-f)+e:b/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+e},easeInBounce:function(d,a,e,b,c){return b-i.easing.easeOutBounce(d,
c-a,0,b,c)+e},easeOutBounce:function(d,a,e,b,c){return(a/=c)<1/2.75?b*7.5625*a*a+e:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+0.75)+e:a<2.5/2.75?b*(7.5625*(a-=2.25/2.75)*a+0.9375)+e:b*(7.5625*(a-=2.625/2.75)*a+0.984375)+e},easeInOutBounce:function(d,a,e,b,c){return a<c/2?0.5*i.easing.easeInBounce(d,2*a,0,b,c)+e:0.5*i.easing.easeOutBounce(d,2*a-c,0,b,c)+0.5*b+e}})})(jQuery);