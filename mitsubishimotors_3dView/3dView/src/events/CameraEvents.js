import ChangeCamera from "../helpers/ChangeCamera.js";
import { camera } from "../Globals.js";

function CameraEvents() {
    $(".camera")
        .click(function () {

            camera.current = $(this).data("cam-id");

            if (camera.current != 0) {
                $("#colorPicker2").addClass("active");
                $("#colorPicker").removeClass("active");
                $(".changeColor").removeClass("active");
                $(".changeColorInt").addClass("active");
                // $(".exterior-items").removeClass("active");
                // $(".interior-items").addClass("active");
            } else {
                $("#colorPicker").addClass("active");
                $("#colorPicker2").removeClass("active");
                $(".changeColor").addClass("active");
                $(".changeColorInt").removeClass("active");
                // $(".exterior-items").addClass("active");
                // $(".interior-items").removeClass("active");
            }
            console.log("Change camera " + camera.current);
            ChangeCamera(camera.current);
        });
};

export default CameraEvents;