$(document).ready(function(){

	var items = $("#selected-work-fg").find('li');
	
	$(".a-u-fg").on( 'click', '.fg-left', function(){
		console.log("clicked");
		for (i = 0; i < items.length; i++) { 
			var item = items.eq(i);
			var pos = item.offset();
			item.offset({ left : pos.left + 1050 });
			console.log(pos.left);
		}
		items.removeClass("focused");
		$(this).next().addClass("fg-right");
		$(this).prev().addClass("fg-left");
		$(this).addClass("focused")
					 .removeClass("fg-left");
		return false;
	});

	$(".a-u-fg").on( 'click', '.fg-right', function(){
		console.log("clicked");
		for (i = 0; i < items.length; i++) { 
			var item = items.eq(i);
			var pos = item.offset();
			item.offset({ left : pos.left - 1050 });
		}
		items.removeClass("focused");
		$(this).next().addClass("fg-right");
		$(this).prev().addClass("fg-left");
		$(this).addClass("focused")
					 .removeClass("fg-right");
		return false;
	});
});