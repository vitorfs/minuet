$.fn.countCharacters = function (limit) {		
	if (limit - $(this).val().length <= 0) {
		$(this).val($(this).val().substr(0, limit));
		$(this).closest("div.control-group").addClass("warning");
	}
	else {
		$(this).closest("div.controls").children("span[class^=help-]").html((limit - $(this).val().length) + " caracteres restantes");
		$(this).closest("div.control-group").removeClass("warning");
	}
};

$.fn.limitCharacters = function () {
	var limit = $(this).attr("charlimit");
	if (limit != undefined && !isNaN(limit)) {
		$(this).keyup(function () {
			$(this).countCharacters(limit);
		});
		$(this).blur(function () {
			$(this).countCharacters(limit);
		});
		$(this).countCharacters(limit);
	}
};