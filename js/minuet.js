/*
* Minuet v0.1.0
* 
* https://github.com/vitorfs/minuet
* Vitor Freitas - vitorfs@gmail.com
*/

$.fn.isEmpty = function () {
    var content = "";
    content = $(this).val();
    if ($.trim(content).length == 0) {
        $(this).closest(".control-group").addClass("error");
        var error = "";
        error = "O campo " + $(this).closest(".control-group").children(".control-label").html() + " é de preenchimento obrigatório";
        $(this).closest(".controls").children("span[class^=help-]").html(error);
        return 1;
    }
    else {
        $(this).closest(".control-group").removeClass("error");
        $(this).closest(".controls").children("span[class^=help-]").html("");
        return 0;
    }
};

$.fn.countCharacters = function (limit) {       
    if (limit - $(this).val().length <= 0) {
        $(this).val($(this).val().substr(0, limit));
        $(this).closest(".control-group").addClass("warning");
    }
    else {
        $(this).closest(".control-group").removeClass("warning");
    }
    $(this).closest(".controls").children("span[class^=help-]").html((limit - $(this).val().length) + " caracteres restantes");
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

$.fn.disable = function (action) {
    var text = $(this).html();
    if (action) {
        if (text.substr(text.length - 1) == "r") {
            text = text.substr(0, text.length - 1);
            text += "ndo";
        }
        text += "...";
        $(this).html(text);
        $(this).attr("disabled", true);
    }
    else {
        if (text.substr(text.length - 3) == "...") {
            text = text.substr(0, text.length - 3);
        }
        if (text.substr(text.length - 3) == "ndo") {
            text = text.substr(0, text.length - 3);
            text += "r";
        }
        $(this).html(text);
        $(this).attr("disabled", false);
    }
};

$.fn.toggleDisable = function () {
    $(this).disable(!$(this).is(":disabled"));
};