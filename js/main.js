
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

  //-------- Active Sticky Js ----------//
  $(".default-header").sticky({topSpacing:0});


    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });

    $('.active-blog-slider').owlCarousel({
      loop: true,
      dots: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 2000,
      smartSpeed: 1000,
      animateOut: 'fadeOut',
    })

    $(document).ready(function() {
      $('.item-slider').show();
    });
 });
