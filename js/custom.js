$(function() {
	window.scrollReveal = new scrollReveal();
	"use strict";
	
	// PreLoader
	$(window).load(function() {
		$(".loader").fadeOut(400);
	});

	// Backstretchs
	$("#header").backstretch("images/3.jpg");
	$("#services").backstretch("images/T.E.D 2K18 RUSA-05.png");
	
	// Countdown
	$('.countdown').downCount({
		date: '12/12/2014 12:00:00',
		offset: +10
	});			
    
});