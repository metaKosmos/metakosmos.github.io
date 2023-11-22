import {priceInfo, carSelection} from "../Globals.js";
import writePrice from "../helpers/WritePrice.js";
import changeCarColor from "../helpers/changeCarColor.js";
import ChangeLeatherColor from "../helpers/ChangeLeatherColor.js";

function ColorEvents() {

    priceInfo.currentColorText = $("#colorPicker .car-color.active").data("name");

    if (parseInt($("#colorPicker .car-color.active").data("price")) != 0) {
        priceInfo.currentColorText += " £" + $("#colorPicker .car-color.active").data("price");
    };
    priceInfo.currentIntText = $("#colorPicker2 .int-color.active").data("name");

    if (parseInt($("#colorPicker2 .int-color.active").data("price")) != 0) {
        priceInfo.currentIntText += " £" + $("#colorPicker2 .int-color.active").data("price");
    };

    $("#colorPicker span.info").text(priceInfo.currentColorText);
    $("#colorPicker2 span.info").text(priceInfo.currentIntText);
    $("#totalPrice").text(writePrice(priceInfo.basePrice + priceInfo.option1Price + priceInfo.option2Price));

    $(".car-color").click(function () {
        
        var carColor = $(this).data("color-id");
        $(".car-color").removeClass("active");
        $(this).addClass("active");
        priceInfo.currentColorText = $(this).data("name");
        if (parseInt($(this).data("price")) != 0) 
            priceInfo.currentColorText += " £" + $(this).data("price");
        priceInfo.option1Price = parseInt($(this).data("price"));
        $("#totalPrice").text(writePrice(priceInfo.basePrice + priceInfo.option1Price + priceInfo.option2Price));
        changeCarColor(carColor, carSelection.selectedModel);
    });
    $(".car-color").hover(function () {
        var newText = $(this).data("name");
        if (parseInt($(this).data("price")) != 0) 
            newText += " £" + $(this).data("price");
        $("#colorPicker span.info").text(newText);
    }, function () {
        $("#colorPicker span.info").text(priceInfo.currentColorText);
    });

    $(".int-color").click(function () {
        var intColorIndex = $(this).data("color-id");
        $(".int-color").removeClass("active");
        $(this).addClass("active");
        priceInfo.currentIntText = $(this).data("name");
        if (parseInt($(this).data("price")) != 0) 
            priceInfo.currentIntText += " £" + $(this).data("price");
        priceInfo.option2Price = parseInt($(this).data("price"));
        $("#totalPrice").text(writePrice(priceInfo.basePrice + priceInfo.option1Price + priceInfo.option2Price));
        ChangeLeatherColor(intColorIndex);
    });
    $(".int-color").hover(function () {
        var newText = $(this).data("name");
        if (parseInt($(this).data("price")) != 0) 
            newText += " £" + $(this).data("price");
        $("#colorPicker2 span.info").text(newText);
    }, function () {
        $("#colorPicker2 span.info").text(priceInfo.currentIntText);
    });
};

export default ColorEvents;