import { priceInfo, carSelection } from "../Globals.js";
import { GTMevent } from "../events/analytics.js";
// import writePrice from "../helpers/WritePrice.js";
import ChangeCarColor from "../helpers/ChangeCarColor.js";
import ChangeLeatherColor from "../helpers/ChangeLeatherColor.js";

function ColorEvents() {   
    // priceInfo.currentColorText = $(".car-color.active").data("name");

    // console.log(priceInfo.currentColorText);

    // if (parseInt($("#colorPicker .car-color.active").data("price")) != 0) {
    //     priceInfo.currentColorText += " £" + $("#colorPicker .car-color.active").data("price");
    // };
    // priceInfo.currentIntText = $("#colorPicker2 .int-color.active").data("name");

    // if (parseInt($("#colorPicker2 .int-color.active").data("price")) != 0) {
    //     priceInfo.currentIntText += " £" + $("#colorPicker2 .int-color.active").data("price");
    // };

    // $(".info").html(priceInfo.currentColorText);
    // $(".info").html(priceInfo.currentIntText);
    // $("#totalPrice").text(writePrice(priceInfo.basePrice + priceInfo.option1Price + priceInfo.option2Price));

    $(".car-color").click(function () {

        // priceInfo.currentColorText = $(".car-color.active").data("name");

        // console.log(priceInfo.currentColorText);

        // $(".info").html(priceInfo.currentColorText);

        // console.log("Click Color");

        var carColor = $(this).data("color-id");
        GTMevent(carSelection.selectedModel+'_ExteriorColor',carColor) 

        $(".car-color").removeClass("active");

        $(this).addClass("active");

        priceInfo.currentColorText = $(this).data("name");

        $(".info").html(priceInfo.currentColorText);

        // if (parseInt($(this).data("price")) != 0)
        //     priceInfo.currentColorText += " £" + $(this).data("price");
        // priceInfo.option1Price = parseInt($(this).data("price"));
        // $("#totalPrice").text(writePrice(priceInfo.basePrice + priceInfo.option1Price + priceInfo.option2Price));
        ChangeCarColor(carColor, carSelection.selectedModel);
    });

    // $(".car-color").hover(function () {
    //     var newText = $(this).data("name");
    //     if (parseInt($(this).data("price")) != 0)
    //         newText += " £" + $(this).data("price");
    //     $(".info").html(newText);
    // }, function () {
    //     $(".info").html(priceInfo.currentColorText);
    // });

    $(".int-color").click(function () {
        var intColor = $(this).data("color-id");
        GTMevent(carSelection.selectedModel+'_InteriorColor',intColor) 

        $(".int-color").removeClass("active");

        $(this).addClass("active");

        priceInfo.currentIntText = $(this).data("name");

        $(".info").html(priceInfo.currentIntText);


        // if (parseInt($(this).data("price")) != 0)
        //     priceInfo.currentIntText += " £" + $(this).data("price");
        // priceInfo.option2Price = parseInt($(this).data("price"));
        // $("#totalPrice").text(writePrice(priceInfo.basePrice + priceInfo.option1Price + priceInfo.option2Price));
        ChangeLeatherColor(intColor);
    });

    /*
    $(".int-color").hover(function () {
        var newText = $(this).data("name");
        if (parseInt($(this).data("price")) != 0)
            newText += " £" + $(this).data("price");
        $("#colorPicker2 h6.info").text(newText);
    }, function () {
        $("#colorPicker2 h6.info").text(priceInfo.currentIntText);
    });
    */
};

export default ColorEvents;