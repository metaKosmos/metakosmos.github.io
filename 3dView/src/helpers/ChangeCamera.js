import { sketchfabDict, camera } from "../Globals.js";

function ChangeCamera(index, animate = false) {
    if (sketchfabDict.api == null) {
        HandleError('Sketchfab API not loaded yet or failed.', 'On ChangeCamera');
        camera.current = camera.changedCurrent
        return;
    }
    sketchfabDict
        .api
        .setCameraEasing('easeLinear');
    if (index == 0) {
        sketchfabDict.api.lookat(camera.position, camera.target, 0);
        sketchfabDict
            .api
            .setCameraConstraints({
                position: [-3.4446727769579892, -3.920127732368049, 2.9226225496577802],
                target: [0.14320670441945327, -0.03443397894758263, 0.7446247763073608],
                useCameraConstraints: true,
                usePanConstraints: true,
                useZoomConstraints: true,
                usePitchConstraints: true,
                useYawConstraints: false,
                zoomIn: 2,
                zoomOut: 8,
                left: -0.903896833664431,
                right: 0.9038968336644317,
                up: 0.4795062471268632,
                down: -0.4023443223018508
            });
        sketchfabDict
            .api
            .setFov(50);
        if ($("#api-frame").hasClass("interior"))
            $("#api-frame").removeClass("interior");
        camera.current = camera.changedCurrent
    }
    else if (index == 1) {

        sketchfabDict.api.lookat(camera.headPosition, camera.headTarget, 0);
        sketchfabDict
            .api
            .setCameraConstraints({
                position: [4.095644343482733, -3.1859643618633404, 1.3662944636923688],
                target: [0.4741707244600637, -0.3389848621924768, 1.1411940403217824],
                useCameraConstraints: true,
                usePanConstraints: true,
                useZoomConstraints: true,
                usePitchConstraints: true,
                useYawConstraints: true,
                zoomIn: 0.1,
                zoomOut: 0.45,
                left: -1.278683325671635,
                right: 1.278683325671635,
                up: 0.7440614179554772,
                down: -0.6007607004233113
            });

        sketchfabDict
            .api
            .setFov(65);
        if (!$("#api-frame").hasClass("interior"))
            $("#api-frame").addClass("interior");
        camera.current = camera.changedCurrent
    }
    else if (index == 2) {

        sketchfabDict.api.lookat(camera.headPosition2, camera.headTarget2, 0);

        sketchfabDict
            .api
            .setCameraConstraints({
                position: [
                    4.095644343482733,
                    -3.1859643618633404,
                    1.3662944636923688
                  ],
                  target: [
                    0.10906072469526419,
                    0.23298168121014493,
                    1.2649756692445449
                  ],
                useCameraConstraints: true,
                usePanConstraints: true,
                useZoomConstraints: true,
                usePitchConstraints: true,
                useYawConstraints: true,
                zoomIn: 0.1,
                zoomOut: 0.6,
                left: -3.141593,
                right: 3.141593,
                up: 0.6779226252483239,
                down: -0.7109920216019004
            });

        sketchfabDict
            .api
            .setFov(65);
        if (!$("#api-frame").hasClass("interior"))
            $("#api-frame").addClass("interior");

        camera.current = camera.changedCurrent
    }
}

export default ChangeCamera;