import ChangeCamera from "../helpers/ChangeCamera.js";
import { camera } from "../Globals.js";

function CameraEvents() {
    $(".camera")
        .click(function () {
            
            camera.current = $(this).data("cam-id");

            console.log('CAMERA ', camera.current);

            $(".info").html('Escolha a cor:');

            if (camera.current == 0) {
                $("#external-colors").removeClass("d-none");
                $("#internal-colors").addClass("d-none");

                // $("#colorPicker").removeClass("active");
                // $(".changeColor").removeClass("active");                
                // $(".exterior-items").removeClass("active");
                // $(".interior-items").addClass("active");
            } else {

                $("#external-colors").addClass("d-none");
                $("#internal-colors").removeClass("d-none");


                // $("#colorPicker").addClass("active");
                // $("#colorPicker2").removeClass("active");

                // $(".changeColor").addClass("active");
                // $(".changeColorInt").removeClass("active");
                // $(".exterior-items").addClass("active");
                // $(".interior-items").removeClass("active");
            }

            ChangeCamera(camera.current);
        });
};

export default CameraEvents;