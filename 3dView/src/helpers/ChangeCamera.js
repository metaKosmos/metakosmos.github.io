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
                position: [ 4.095644343482733, -3.1859643618633404, 1.3662944636923688],
                target: [ 0.1429519418097821, -0.03427167500107549, 0.7445627986873815],
                useCameraConstraints: true,
                usePanConstraints: true,
                useZoomConstraints: true,
                usePitchConstraints: true,
                useYawConstraints: false,
                zoomIn: 2.9,
                zoomOut: 7,
                left: -0.7022758061465276,
                right: 0.7086851049394146,
                up: 0.5456450398340165,
                down: -0.1
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
                left: -0.7022758061465276,
                right: 0.7086851049394146,
                up: 0.5456450398340165,
                down: -0.4023443223018508
            });

        sketchfabDict
            .api
            .setFov(102);
        if (!$("#api-frame").hasClass("interior"))
            $("#api-frame").addClass("interior");
        camera.current = camera.changedCurrent
    }
    else if (index == 2) {

        sketchfabDict.api.lookat(camera.headPosition2, camera.headTarget2, 0);

        sketchfabDict
            .api
            .setCameraConstraints({
                position: [ 4.095644343482733, -3.1859643618633404, 1.3662944636923688],
                target: [ 0.1429519418097821, 0.42086450454277224, 0.9774644072491593],
                useCameraConstraints: true,
                usePanConstraints: true,
                useZoomConstraints: true,
                usePitchConstraints: true,
                useYawConstraints: true,
                zoomIn: 0,
                zoomOut: 0.7,
                left: 2.336904008986092,
                right: -2.5353203871075523,
                up: 0.5897375683054524,
                down: -0.13778915147323656
            });

        sketchfabDict
            .api
            .setFov(60);
        if (!$("#api-frame").hasClass("interior"))
            $("#api-frame").addClass("interior");

        camera.current = camera.changedCurrent
    }
}

export default ChangeCamera;