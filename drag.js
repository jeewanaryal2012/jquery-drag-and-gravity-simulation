
$(document).ready(function() {

	var groundY = $(".earth").position().top + $(".earth").height() - $(".drag").height() - 10;

	$(".drag").css({
		"margin-top": groundY
	});

	$(document).on("mousedown", ".drag", function() {
		$(this).addClass("moving");
		$(this).on("mousemove", function(e) {
			$(this).animate({
				"margin-left": e.clientX - $(this).width()/2,
				"margin-top": e.clientY - $(this).height()/2
			}, 0, function() {});
		});

		$(this).on("mouseup", function() {
			$(this).off("mousemove");
			$(this).removeClass("moving");
			$(this).animate({
					"margin-top": groundY
				}, 1000, function() {});
		});
	});
});
