
            jQuery(document).ready(function(){
			

			$("#top, #home, #whyus, #ourprocess, #clientsayings, #requestquote, #kandyvideos,.header,.social-medias,.menu").hide();

				$('#hidemecap').hide();

                 jQuery("#formIDe").validationEngine({promptPosition : "bottomRight", scroll: false});

            });

            


/*$('.item').find('.item_content').find('a').click(function(){

	$('.item').removeClass('active');

	$(this).parents('.item').addClass('active');

});*/

        $('.item').hover(

                function(){

                    var $this = $(this);

                    expand($this,$(this).attr('id'));

                },

                function(){

                    var $this = $(this);

                    collapse($this);

                }

            );

            function expand($elem,w){

                var angle = 0;

                var t = setInterval(function () {

                    if(angle == 1440){

                        clearInterval(t);

                        return;

                    }

                    angle += 40;

                    $('.link',$elem).stop().animate({rotate: '+=-40deg'}, 0);

                },10);

                $elem.stop().animate({width:w}, 1000)

                .find('.item_content').fadeIn(400,function(){

                    $(this).find('p').stop(true,true).fadeIn(600);

                });

            }

            function collapse($elem){

                var angle = 1440;

                var t = setInterval(function () {

                    if(angle == 0){

                        clearInterval(t);

                        return;

                    }

                    angle -= 40;

                    $('.link',$elem).stop().animate({rotate: '+=40deg'}, 0);

                },10);

                $elem.stop().animate({width:'32px'}, 1000)

                .find('.item_content').stop(true,true).fadeOut().find('p').stop(true,true).fadeOut();

            }



	$(function(){ $(".requestQuoteBlk-r-ul label").inFieldLabels(); });

	$('.scroll-pane').jScrollPane();



        /*    $(function(){

                $('.box').bind('mouseover',function() {

                    $(this).addClass('up');

                    $('.box').not('.up').fadeTo('normal',0.2);

                });

                $('.box').bind('mouseout',function() {

                    $('.box').removeClass('up').fadeTo('normal',1);

                });

            });*/



            initwidth = $('.box').width();

            initHeight = $('.box').height();





$('.kandyvideos-bulb-glow').jrumble({

	x: 3,

	y: 1,

	rotation: 2

});

$('.kandyvideos-bulb-glow').hover(function(){

	$(this).trigger('startRumble');

}, function(){

	$(this).trigger('stopRumble');

});



$('.kandyvideos-bulb_wrapper').hover(function(){		

	$(this).find('.kandyvideos-bulb-glow').stop().animate({

		opacity:1

	},400);

	}, function(){

		$(this).find('.kandyvideos-bulb-glow').stop().animate({

		opacity:0

	},4000);

});	

		

$('#pauseme').click(function(){

	$('.screenVideo').find('video')[0].pause();

	$('#playme').show();

	$('#playmeStart').hide();

	$('#pauseme').hide();

});



$('#playme').click(function(){

	$('.screenVideo').find('video')[0].play();

	$('#pauseme').show();

	$('#playme').hide();

	$('#playmeStart').hide();

});

$('#playmeStart').click(function(){

	$('.screenVideo').find('video')[0].play();

	$('#pauseme').show();

	$('#playme').hide();
	$('#playmeStart').hide();

		$('.screenVideo').find('video').css('visibility','visible');	

});

$('.screenVideo').find('video').bind("ended", function () {

	$('#playmeStart').show();

	$('#playme').hide();

	$('#pauseme').hide();

 }); 	

function browserCheck(){

	if($.browser.msie && parseInt($.browser.version, 10) == 7) {

		$('body').addClass('browser-msie-7');

		$('body').removeClass('browser-std');	

	}  

	else{

		$('body').addClass('browser-std');	

	}

	if($.browser.msie){

		$('body').addClass('browser-msie');

	}

	if($.browser.webkit) {

		$('body').addClass('webkit')

	 }

	if($.browser.mozilla) {

		$('body').addClass('mozilla')

	}

}

$(window).load(function(){

	browserCheck();

	$("a").each(function() {

	   $(this).attr("hideFocus", "true").css("outline", "none");

	});

});





function checkme(e){

	 if(!$("#formIDe").validationEngine('validate')){

         return false;

          }

	e.preventDefault();

	$('#hidemecap').hide();

				$.ajax({

			   type: "POST",

			   url: "mail.php",

			   data: "fName="+$("#firstname").val()+"&lName="+$('#lastname').val()+"&email="+$('#email').val()+"&captcha="+$('#captcha').val()+"&company="+$('#company').val()+"&city="+$('#city').val()+"&Country="+$('#Country').val()+"&Phone="+$('#Phone').val()+"&Website="+$('#Website').val()+"&AnimationInfo="+$('#AnimationInfo').val()+"&knowUs="+$('#knowUs').val(),

		    success: function(msg){
				
				if(msg=='false'){

					//$('#hidemecap').show();
					$('.captchaBlk').append('<div class="formError" id="hidemecap"><div class="formErrorArrow formErrorArrowBottom" ><div class="line1"><!-- --></div><div class="line2"><!-- --></div><div class="line3"><!-- --></div><div class="line4"><!-- --></div><div class="line5"><!-- --></div><div class="line6"><!-- --></div><div class="line7"><!-- --></div><div class="line8"><!-- --></div><div class="line9"><!-- --></div><div class="line10"><!-- --></div></div><div class="formErrorContent">Invalid captcha code<br></div></div>');
					

					

					}else{
						refreshcaptcha();
						refreshcaptcha();
						
						$('#hidemecap').remove();
						
						$('.requestQuoteBlk-r-ulLabel').css('display','block');
						$('.requestQuoteBlk-r-ulLabel').css('opacity','1');
							
						
						successCall();
						}

			}

			 });
			 
			 
	function refreshcaptcha(){


img = document.getElementById('captchaImg');
img.src = 'CaptchaSecurityImages.php?width=136&amp;height=47&amp;characters=5';

		
		
		}


	}


$("#captcha").live("keyup", function(){ if($(this).val()==''){$("#hidemecap").remove();} });  
$("#Website").live("focus", function(){if($(this).val()==''){$(this).val('http://');$(this).parent('.right-rq').find('label').hide()}  });  
$("#Website").live("blur", function(){if($(this).val()=='http://'){$(this).val('');$(this).parent('.right-rq').find('label').show()}  });  

