function load_animation(){$("#formIDe").each(function(){this.reset()});$("body").addClass("bodyFixheight");$("html").niceScroll();loadVideo();screen_height=$(window).height();screen_width=$(window).width();$("#home").css("z-index",1);$("#whyus").css("z-index",2);$("#ourprocess").css("z-index",3);$("#clientsayings").css("z-index",4);$("#requestquote").css("z-index",5);$("#kandyvideos").css("z-index",6);$("#top").css("z-index",10);$("#home").css("min-height",$(window).height());$(".balloon-default1,.balloon-default2,.balloon-default3,.balloon-default4,.balloon-default4b,.balloon-defaultr1,.whyustext").css("top",screen_height);$(".balloon-default1,.balloon-default2,.balloon-default3,.balloon-default4,.balloon-defaultr1,.balloon-default4b,.whyustext").css("bottom","auto");$(".balloon-defaultwh").css("top",1187);$(".scroll-balloonwh-c_l1t1").css("top",560);$(".scroll-balloonwh-c_l1t2").css("top",660);$(".scroll-balloonwh-c_l1t3").css("top",560);$(".scroll-balloonwh-c_l2t1").css("top",360);$(".scroll-balloonwh-c_l2t2").css("top",660);$(".scroll-balloonwh-c_l2t3").css("top",800);$(".client-saying-default1,.client-saying-default2,.client-saying-default3,.client-saying-default4,.client-saying-default5,.client-saying-default6,.client-saying-default7,.client-saying-default8,.scroll-bubble1,.scroll-bubble2,.scroll-bubble3").css("top",screen_height);$(".scroll-sayingtitle").css("top",400);$(".balloon-default1").css("z-index",9);$(".balloon-defaultr1").css("z-index",8);$(".clouds2l-default").css("z-index",8);$(".balloon-default2").css("z-index",7);$(".balloon-default3").css("z-index",6);$(".balloon-default4").css("z-index",5);$(".clouds2r2-default").css("z-index",4);$(".clouds2r1-default").css("z-index",3);$(".balloon-defaultwh").css("z-index",9);$(".whyustext").css("z-index",5);$(".balloon-default1").css("left",(screen_width/2)-($(".balloon-default1").width()/2));$(".balloon-defaultwh").css("left",(screen_width/2)-($(".balloon-defaultwh").width()/2));$(".balloon-defaultr1").css("left",(screen_width/2));$(".balloon-default2").css("left",(screen_width/2)-($(".balloon-default2").width()*2)+42);$(".balloon-default2-b").css("right",(screen_width/2)-($(".balloon-default2").width()*2)+142);$(".balloon-default3").css("left",(screen_width/2)-($(".balloon-default2").width()));$(".balloon-default3-b").css("left",(screen_width/2)-($(".balloon-default2").width())-200);$(".balloon-default4").css("right",(screen_width/2)-($(".balloon-default2").width())-($(".balloon-default3").width()+70));$(".balloon-default4b").css("left",(screen_width/2)-($(".balloon-default2").width())-($(".balloon-default3").width()-70));$(".storeBtnlml").css("left",(screen_width/2)-($(".storeBtnlml").width()/2));$(".whyustext").css("left",(screen_width/2)-45);$(".clouds2l-default").css("top",100);$(".clouds2r1-default").css("top",0);$(".clouds2r2-default").css("top",400);RepositionNav();var a=new $.scrolldeck({buttons:".navigation",slides:".pages",duration:600,easing:"linear",offset:0})}var videoAddFlag=0;var tag=document.getElementById("homevideo");function onVideoEnable(){tag.addEventListener("canplaythrough",function(a){$("#playerLoader").hide();if(videoAddFlag==0){homemovieFix();videoAddFlag=2}},false)}function homemovieFix(){$("#playmeStart").hide();$("#pauseme").show();$(".screenVideo").find("video").css("visibility","visible");$(".screenVideo").find("video")[0].play();var a=document.getElementById("homevideo");a.addEventListener("ended",function(b){loadVideoStream()},false)}function loadComplted(){if(($(window).height())>588){$("#home .screenVideo").css("margin-top",($(window).height()/2)-264)}else{$("#home .screenVideo").css("margin-top",0)}load_animation();$("#client-sayings").css("height",$(window).height());$(".scroll-sayingtitle").css("left",($(window).width()/2)-266-100);$(".client-saying-default1").css("left",($(window).width()/2)-266-100);$(".client-saying-default2").css("left",($(window).width()/2)-250-260);$(".client-saying-default3").css("left",($(window).width()/2)-243+175);$(".client-saying-default5").css("left",($(window).width()/2)-243);var i=$(window);var f=$("#home");var r=$("#home .sprite");var m=$("#whyus");var k=$("#whyus .sprite");var n=$("#ourprocess");var h=$("#ourprocess .sprite");var c=$("#kandyvideos");var o=$("#kandyvideos .sprite");var d=$("#clientsayings");var l=$("#clientsayings .sprite");var p=$("#requestquote");var a=$("#requestquote .sprite");var g=i.height();$("#home, #whyusin, #ourprocess, #kandyvideos, #clientsayings, #requestquote, #store").bind("inview",function(s,t){if(t){$(this).addClass("inview");$(this).css("min-height",$(window).height())}else{$(this).removeClass("inview")}});function b(s,w,v,u,t){return s+"% "+(-((w+v)-u)*t)-8+"px"}function e(s,w,v,u,t){return s+"% "+(-((w+v)-u)*t)+"px"}function j(v,u,t,s){return(-((v+u)-t)*s)}function q(){var s=i.scrollTop();if(f.hasClass("inview")){f.css({backgroundPosition:b(50,g,s,600,0.3)})}if(m.hasClass("inview")){}if(n.hasClass("inview")){n.css({backgroundPosition:b(50,g,s,2800,0.3)})}if(c.hasClass("inview")){c.css({backgroundPosition:e(50,g,s,3850,0.01)})}if(d.hasClass("inview")){}if(p.hasClass("inview")){}}i.resize(function(){resetResize()});i.bind("scroll",function(){q()})}function popup(a){$(".popupStyles-motionKandy").fadeOut();$("#"+a).fadeIn();$(".scroll-pane").jScrollPane();$(".formError").hide()}function popupclose(a){$("#"+a).fadeOut();$(".formError").show()}function successCall(){googleConv();$(".formError").hide();$(".footer_logo").focus();$("#requestQuoteBlk-r-thanks").show();$("#requestQuoteBlk-r-form").animate({top:-$("#requestQuoteBlk-r-form").height()-85,opacity:0},1200,function(){$("#requestQuoteBlk-r-form").hide()});$("#requestQuoteBlk-r-thanks").animate({top:0,opacity:1},1200)}function formCall(){$("#formIDe").each(function(){this.reset()});$(".captchaformError").addClass("ihide");$(".captchaformError").removeClass("ihide");$("#requestQuoteBlk-r-form").show();$(function(){$(".requestQuoteBlk-r-ul label").inFieldLabels()});$("#requestQuoteBlk-r-form").animate({top:0,opacity:1},1200);$("#requestQuoteBlk-r-thanks").animate({top:-$(".requestQuoteBlk-r-thanks").height()-212,opacity:0},1200,function(){$("#requestQuoteBlk-r-thanks").hide()})}function callPopup(a){$(".videoPopupframe").fadeOut();$("#videoPopupframe-"+a).fadeIn()}function closeVidpopup(a){$(a).parent(".videoPopupframe").find("video")[0].pause();$(".videoPopupframe").fadeOut()}function IEcloseVidpopup(a){player=new JarisFLVPlayer($(a).parent(".videoPopupframe").find("object").attr("id"));player.pause();$(".videoPopupframe").fadeOut()}function resetResize(){screen_height1=$(window).height();screen_width1=$(window).width();$(".balloon-default1").css("left",(screen_width1/2)-($(".balloon-default1").width()/2));$(".balloon-defaultwh").css("left",(screen_width1/2)-($(".balloon-defaultwh").width()/2));$(".balloon-defaultr1").css("left",(screen_width1/2));$(".balloon-default2").css("left",(screen_width1/2)-($(".balloon-default2").width()*2)+42);$(".balloon-default2-b").css("right",(screen_width1/2)-($(".balloon-default2").width()*2)+142);$(".balloon-default3").css("left",(screen_width1/2)-($(".balloon-default2").width()));$(".balloon-default3-b").css("left",(screen_width1/2)-($(".balloon-default2").width())-200);$(".balloon-default4").css("right",(screen_width1/2)-($(".balloon-default2").width())-($(".balloon-default3").width()+70));$(".balloon-default4b").css("left",(screen_width1/2)-($(".balloon-default2").width())-($(".balloon-default3").width()-70));$(".storeBtnlml").css("left",(screen_width1/2)-($(".storeBtnlml").width()/2));$(".whyustext").css("left",(screen_width1/2)-45);$(".scroll-sayingtitle").css("left",($(window).width()/2)-266-100);$(".client-saying-default1").css("left",($(window).width()/2)-266-100);$(".client-saying-default2").css("left",($(window).width()/2)-250-260);$(".client-saying-default3").css("left",($(window).width()/2)-243+175);$(".client-saying-default5").css("left",($(window).width()/2)-243);$(".client-saying-default1,.client-saying-default2,.client-saying-default3,.client-saying-default4,.client-saying-default5,.client-saying-default6,.client-saying-default7,.client-saying-default8,.scroll-bubble1,.scroll-bubble2,.scroll-bubble3").css("top",screen_height1);if(($(window).height())>168){$("#loadinglogo").css("margin-top",($(window).height()/2)-74)}else{$("#loadinglogo").css("margin-top",0)}}$(window).resize(function(){resetResize()});function IEload_animation(){$("body").addClass("bodyFixheight");$("html").niceScroll();screen_height=$(window).height();screen_width=$(window).width();$("#home").css("z-index",1);$("#whyus").css("z-index",2);$("#ourprocess").css("z-index",3);$("#clientsayings").css("z-index",4);$("#requestquote").css("z-index",5);$("#kandyvideos").css("z-index",6);$("#top").css("z-index",10);$("#home").css("min-height",$(window).height());$(".balloon-default1,.balloon-default2,.balloon-default3,.balloon-default4,.balloon-default4b,.balloon-defaultr1,.whyustext").css("top",screen_height);$(".balloon-default1,.balloon-default2,.balloon-default3,.balloon-default4,.balloon-defaultr1,.balloon-default4b,.whyustext").css("bottom","auto");$(".balloon-defaultwh").css("top",1187);$(".scroll-balloonwh-c_l1t1").css("top",560);$(".scroll-balloonwh-c_l1t2").css("top",660);$(".scroll-balloonwh-c_l1t3").css("top",560);$(".scroll-balloonwh-c_l2t1").css("top",360);$(".scroll-balloonwh-c_l2t2").css("top",660);$(".scroll-balloonwh-c_l2t3").css("top",800);$(".client-saying-default1,.client-saying-default2,.client-saying-default3,.client-saying-default4,.client-saying-default5,.client-saying-default6,.client-saying-default7,.client-saying-default8,.scroll-bubble1,.scroll-bubble2,.scroll-bubble3").css("top",screen_height);$(".scroll-sayingtitle").css("top",400);$(".balloon-default1").css("z-index",9);$(".balloon-defaultr1").css("z-index",8);$(".clouds2l-default").css("z-index",8);$(".balloon-default2").css("z-index",7);$(".balloon-default3").css("z-index",6);$(".balloon-default4").css("z-index",5);$(".clouds2r2-default").css("z-index",4);$(".clouds2r1-default").css("z-index",3);$(".balloon-defaultwh").css("z-index",9);$(".whyustext").css("z-index",5);$(".balloon-default1").css("left",(screen_width/2)-($(".balloon-default1").width()/2));$(".balloon-defaultwh").css("left",(screen_width/2)-($(".balloon-defaultwh").width()/2));$(".balloon-defaultr1").css("left",(screen_width/2));$(".balloon-default2").css("left",(screen_width/2)-($(".balloon-default2").width()*2)+42);$(".balloon-default2-b").css("right",(screen_width/2)-($(".balloon-default2").width()*2)+142);$(".balloon-default3").css("left",(screen_width/2)-($(".balloon-default2").width()));$(".balloon-default3-b").css("left",(screen_width/2)-($(".balloon-default2").width())-200);$(".balloon-default4").css("right",(screen_width/2)-($(".balloon-default2").width())-($(".balloon-default3").width()+70));$(".balloon-default4b").css("left",(screen_width/2)-($(".balloon-default2").width())-($(".balloon-default3").width()-70));$(".storeBtnlml").css("left",(screen_width/2)-($(".storeBtnlml").width()/2));$(".whyustext").css("left",(screen_width/2)-45);$(".clouds2l-default").css("top",100);$(".clouds2r1-default").css("top",0);$(".clouds2r2-default").css("top",400);RepositionNav();var a=new $.scrolldeck({buttons:".navigation",slides:".pages",duration:600,easing:"linear",offset:0})}function IEloadComplted(){if(($(window).height())>588){$("#home .screenVideo").css("margin-top",($(window).height()/2)-264)}else{$("#home .screenVideo").css("margin-top",0)}IEload_animation();$("#client-sayings").css("height",$(window).height());$(".scroll-sayingtitle").css("left",($(window).width()/2)-266-100);$(".client-saying-default1").css("left",($(window).width()/2)-266-100);$(".client-saying-default2").css("left",($(window).width()/2)-250-260);$(".client-saying-default3").css("left",($(window).width()/2)-243+175);$(".client-saying-default5").css("left",($(window).width()/2)-243);var i=$(window);var f=$("#home");var r=$("#home .sprite");var m=$("#whyus");var k=$("#whyus .sprite");var n=$("#ourprocess");var h=$("#ourprocess .sprite");var c=$("#kandyvideos");var o=$("#kandyvideos .sprite");var d=$("#clientsayings");var l=$("#clientsayings .sprite");var p=$("#requestquote");var a=$("#requestquote .sprite");var g=i.height();$("#home, #whyusin, #ourprocess, #kandyvideos, #clientsayings, #requestquote, #store").bind("inview",function(s,t){if(t){$(".menu").find(".item").removeClass("active");$(this).addClass("inview");$(this).css("min-height",$(window).height())}else{$(this).removeClass("inview")}});function b(s,w,v,u,t){return s+"% "+(-((w+v)-u)*t)-8+"px"}function e(s,w,v,u,t){return s+"% "+(-((w+v)-u)*t)+"px"}function j(v,u,t,s){return(-((v+u)-t)*s)}function q(){var s=i.scrollTop();if(f.hasClass("inview")){f.css({backgroundPosition:b(50,g,s,600,0.3)})}if(m.hasClass("inview")){}if(n.hasClass("inview")){n.css({backgroundPosition:b(50,g,s,2800,0.3)})}if(c.hasClass("inview")){c.css({backgroundPosition:e(50,g,s,3850,0.01)})}if(d.hasClass("inview")){}if(p.hasClass("inview")){}}i.resize(function(){resetResize()});i.bind("scroll",function(){q()})};