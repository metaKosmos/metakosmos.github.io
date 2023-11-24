import {sketchfabDict, camera} from "../Globals.js";

function ChangeCamera(index, animate = false) {
    if (sketchfabDict.api == null) {
        HandleError('Sketchfab API not loaded yet or failed.', 'On ChangeCamera');
        return;
    }
    sketchfabDict
        .api
        .setCameraEasing('easeLinear');
    if (index == 0) {
        sketchfabDict
            .api
            .lookat(camera.position, camera.target, animate
                ? 1
                : 0);

        sketchfabDict
            .api
            .setCameraConstraints({
                zoomIn: 2.9,
                zoomOut: 7,
                useCameraConstraints: true,
                useZoomConstraints: true,
                usePitchConstraints: true,
                useYawConstraints: false,
                left: -1.6755160819145563,
                right: 1.6755160819145563,
                up: 1.5707963267948966,
                down: 0.08
            });

        sketchfabDict
            .api
            .setFov(50);
        if ($("#api-frame").hasClass("interior")) 
            $("#api-frame").removeClass("interior");
        }
    else if (index == 1) {
        sketchfabDict
            .api
            .setCameraConstraints({
                zoomIn: 0.1,
                zoomOut: 0.4,
                useCameraConstraints: true,
                useZoomConstraints: true,
                usePitchConstraints: true,
                useYawConstraints: true,
                left: -1.6755160819145563,
                right: 1.6755160819145563,
                up: 1.5707963267948966,
                down: -0.22597420841610782
            });

        sketchfabDict
            .api
            .lookat(camera.headPosition, camera.headTarget, animate
                ? 1
                : 0);

        sketchfabDict
            .api
            .setFov(102);
        if (!$("#api-frame").hasClass("interior")) 
            $("#api-frame").addClass("interior");
        }
    else if (index == 2) {

        sketchfabDict
            .api
            .setCameraConstraints({
                zoomIn: 0.1,
                zoomOut: 0.7,
                useCameraConstraints: true,
                useZoomConstraints: true,
                usePitchConstraints: true,
                useYawConstraints: false,
                up: 1.5707963267948966,
                down: -0.22597420841610782
            });

        sketchfabDict
            .api
            .lookat(camera.headPosition2, camera.headTarget2, animate
                ? 1
                : 0);

        sketchfabDict
            .api
            .setFov(60);
        if (!$("#api-frame").hasClass("interior")) 
            $("#api-frame").addClass("interior");
        }
    }

export default ChangeCamera;