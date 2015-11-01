$(document).ready(function(){
	
	// TODO: make 42px spacing dynamic
	$(".a-u-fg").on( 'click', '.fg-left', function(){
		var w = $(this).width();
		var container = $(this).parents(".a-u-fg-inner");
		var pos = container.position();
		$(this).next().removeClass("focused").addClass("fg-right");
		$(this).prev().addClass("fg-left");
		$(this).addClass("focused")
					 .removeClass("fg-left");
		container.css({ left: pos.left + ( w + 42 ) });
		return false;
	});

	$(".a-u-fg").on( 'click', '.fg-right', function(){
		var w = $(this).width();
		var container = $(this).parents(".a-u-fg-inner");
		var pos = container.position();
		$(this).next().addClass("fg-right");
		$(this).prev().removeClass("focused").addClass("fg-left");
		$(this).addClass("focused")
					 .removeClass("fg-right");
		container.css({ left: pos.left - ( w + 42 ) });
		return false;
	});
});