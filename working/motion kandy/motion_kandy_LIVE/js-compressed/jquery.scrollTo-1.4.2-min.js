(function(c){function h(b){return"object"==typeof b?b:{top:b,left:b}}var l=c.scrollTo=function(b,d,a){c(window).scrollTo(b,d,a)};l.defaults={axis:"xy",duration:1.3<=parseFloat(c.fn.jquery)?0:1};l.window=function(){return c(window)._scrollable()};c.fn._scrollable=function(){return this.map(function(){if(this.nodeName&&-1==c.inArray(this.nodeName.toLowerCase(),["iframe","#document","html","body"]))return this;var b=(this.contentWindow||this).document||this.ownerDocument||this;return c.browser.safari||
"BackCompat"==b.compatMode?b.body:b.documentElement})};c.fn.scrollTo=function(b,d,a){"object"==typeof d&&(a=d,d=0);"function"==typeof a&&(a={onAfter:a});"max"==b&&(b=9E9);a=c.extend({},l.defaults,a);d=d||a.speed||a.duration;a.queue=a.queue&&1<a.axis.length;a.queue&&(d/=2);a.offset=h(a.offset);a.over=h(a.over);return this._scrollable().each(function(){function n(c){i.animate(e,d,a.easing,c&&function(){c.call(this,b,a)})}var j=this,i=c(j),g=b,m,e={},p=i.is("html,body");switch(typeof g){case "number":case "string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(g)){g=
h(g);break}g=c(g,this);case "object":if(g.is||g.style)m=(g=c(g)).offset()}c.each(a.axis.split(""),function(b,c){var d=c=="x"?"Left":"Top",k=d.toLowerCase(),f="scroll"+d,h=j[f],o=l.max(j,c);if(m){e[f]=m[k]+(p?0:h-i.offset()[k]);if(a.margin){e[f]=e[f]-(parseInt(g.css("margin"+d))||0);e[f]=e[f]-(parseInt(g.css("border"+d+"Width"))||0)}e[f]=e[f]+(a.offset[k]||0);a.over[k]&&(e[f]=e[f]+g[c=="x"?"width":"height"]()*a.over[k])}else{d=g[k];e[f]=d.slice&&d.slice(-1)=="%"?parseFloat(d)/100*o:d}/^\d+$/.test(e[f])&&
(e[f]=e[f]<=0?0:Math.min(e[f],o));if(!b&&a.queue){h!=e[f]&&n(a.onAfterFirst);delete e[f]}});n(a.onAfter)}).end()};l.max=function(b,d){var a="x"==d?"Width":"Height",h="scroll"+a;if(!c(b).is("html,body"))return b[h]-c(b)[a.toLowerCase()]();var a="client"+a,j=b.ownerDocument.documentElement,i=b.ownerDocument.body;return Math.max(j[h],i[h])-Math.min(j[a],i[a])}})(jQuery);