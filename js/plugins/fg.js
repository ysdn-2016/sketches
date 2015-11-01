$(document).ready(function(){
	
	$(".a-u-fg").on( 'click', '.fg-left', function(){
		var w = $(this).width();
		var container = $(this).parents(".a-u-fg-inner");
		var pos = container.position();
		$(this).next().removeClass("focused").addClass("fg-right");
		$(this).prev().addClass("fg-left");
		$(this).addClass("focused")
					 .removeClass("fg-left");
		container.offset({ left: pos.left + w });
		console.log(w);
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
		container.offset({ left: pos.left - w });
		return false;
	});
});