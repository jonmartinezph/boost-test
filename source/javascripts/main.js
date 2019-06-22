$(document).ready(function(){

	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 125) {	        
	      $("header").addClass("scroll");
	    } else {
	      $("header").removeClass("scroll");
	    }
	});

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		dots: true,
		autoplay: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})

});