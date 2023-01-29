var host = 'https://damnty.github.io/PortuGram/';
var url = window.location.pathname;

$(document).ready(function() {

	/* ---------------------------------------------------------------------------- LEVELONE */


	/* ---------------------------------------------- WEBSITE HEIGHT CONTROL */

//	var height_resize = function() {
//		$('#content').css('min-height', '600px');
//		$('#left').css('min-height', '600px');
//		window.setTimeout(height_control, 1);
//	}
//	
//	var test = function() {
//		alert('hello');
//	}
//
//	var height_control = function() {
//
//		var content_height = $('#content').height();
//		var left_height = $('#left').height();
//
//		if (content_height > left_height) {
//			var new_height = content_height;
//		} else {
//			var new_height = left_height;
//		}
//		$('#left').css('min-height', new_height + 'px');
//		$('#content').css('min-height', new_height + 'px');
//		$('#right').css('min-height', (new_height + 20) + 'px');
//	}
//	height_control();
//	$(document).on('click', '#content .choices li', height_resize);

	/* ---------------------------------------------- HEADER LINK */


	$(document).on('click', '#menu .header', (function() {
		window.location.href = host;
	}));

	/* ---------------------------------------------- CATEGORY ON CLICK ACTIVE SWITCH */


	$(document).on('click', '#menu ul li', (function() {
		$(this).addClass('active')
		$(this).siblings().removeClass();
	}));

	/* ---------------------------------------------- CHOICE SWITCHER */


	$(document).on('click', 'li[data-opt]', (function() {
		var target = $(this).data('opt');
		$(this).addClass('active')
		$(this).siblings().removeClass();
		$('div[data-opt]').hide();
		$('div[data-opt=' + target + ']').show();
	}));

// ---------------------------------------------- CLOSING THE BRAKETS

});