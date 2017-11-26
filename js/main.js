(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
		
		/** $(window).on('scroll', function (){
			if ($(window).scrollTop() > 1){
			  $('.header-top').addClass('fixed-top');
			} else {
			  $('.header-top').removeClass('fixed-top');
			}
		}); ***/
		
		
		//For Offsite Canvas
		$(".menu").click(function(){
			$(".off-canvas").css('margin-left' ,'-300px');
			$(".off-canvas").css('transition' ,'0.3s');
			$(".menu-show").css('right' ,'0px').addClass('animated fadeIn');
			$(this).hide();
		});
		$(".menu-cross ").click(function(){
			$(".off-canvas").css('margin-left' ,'0px');
			$(".menu-show").css('right' ,'-300px').removeClass('animated fadeIn');
            $('.menu').show();
		});
		
		
		$('.slider').bxSlider({
			pagerCustom: '#person-pager',
			autoControls: false,
			controls: false,
		});
		
		
		
		//For Skill Chart 
        $(".html5").circliful({
            animation: 1,
            animationStep: 5,
            start: 2,
			backgroundColor: '#000',
			foregroundColor: '#FA6719',
            percent: 88,
			foregroundBorderWidth: 13,
            backgroundBorderWidth: 13,
			showPercent: false,
			text: 'HTML5',
			textColor: '#000',
			noPercentageSign: true,
        });
        $(".javascript").circliful({
            animation: 1,
            animationStep: 5,
            start: 2,
			backgroundColor: '#000',
			foregroundColor: '#FA6719',
            percent: 70,
			foregroundBorderWidth: 13,
            backgroundBorderWidth: 13,
			showPercent: false,
            text: 'Javascript',
			textColor: '#000',
        });
        $(".php").circliful({
            animation: 1,
            animationStep: 4,
            start: 2,
			backgroundColor: '#000',
			foregroundColor: '#FA6719',
            percent: 60,
			foregroundBorderWidth: 13,
            backgroundBorderWidth: 13,
			showPercent: false,
            text: 'PHP',
			textColor: '#000',
			
        });
        $(".adobe").circliful({
			animation: 1,
            animationStep: 6,
            start: 2,
			backgroundColor: '#000',
			foregroundColor: '#FA6719',
            percent: 92,
			foregroundBorderWidth: 13,
            backgroundBorderWidth: 13,
			showPercent: false,
            text: 'Adobe',	
			textColor: '#000',
        });
		
		//For Parallax Background
		$('.parallax-bg').parallax("50%", 0.3);
		$('.parallax-bg-2').parallax("50%", -0.5);
        
        
        // For Window Scroll Top 
		$('.scroll-top').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 600);
			return false;
		});
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	