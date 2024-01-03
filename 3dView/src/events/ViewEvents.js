import { LOGOS } from "../Constants.js";
import { camera } from "../Globals.js";
import { GTMsessionStart } from "../events/analytics.js";
import ChangeCamera from "../helpers/ChangeCamera.js";

function ViewEvents() {
    GTMsessionStart();
    $("#interiorView").click(function () {
        $("#interiorView").addClass("active");
        $("#exteriorView").removeClass("active");
        $("#interiorView2").removeClass("active");
    });

    $("#interiorView2").click(function () {
        $("#interiorView").removeClass("active");
        $("#exteriorView").removeClass("active");
        $("#interiorView2").addClass("active");
    });

    $("#exteriorView").click(function () {
        $("#interiorView").removeClass("active");
        $("#exteriorView").addClass("active");
        $("#interiorView2").removeClass("active");
    });

    $(".changeColor").click(function () {
        camera.current = 0;
        $(".logo").attr("src", LOGOS.mitsubishi.black);
        ChangeCamera(camera.current);
        $(".changeColor").addClass("active");
        $(".changeColorInt").removeClass("active");
        // $(".exterior-items").addClass("active");
        // $(".interior-items").removeClass("active");
        $("#colorPicker2").removeClass("active");
        $("#colorPicker").addClass("active");
    });

    $(".changeColorInt").click(function () {
        camera.current = 1;
        $(".logo").attr("src", LOGOS.mitsubishi.white);
        ChangeCamera(camera.current);
        $(".changeColor").removeClass("active");
        $(".changeColorInt").addClass("active");
        // $(".exterior-items").removeClass("active");
        // $(".interior-items").addClass("active");
        $("#colorPicker").removeClass("active");
        $("#colorPicker2").addClass("active");
    });

}

export default ViewEvents;