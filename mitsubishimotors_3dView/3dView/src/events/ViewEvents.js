import {camera} from "../Globals.js";
import ChangeCamera from "../helpers/ChangeCamera.js";

function ViewEvents() {
    document
        .getElementById('interior-view')
        .onclick = () => {
        document
            .getElementById('interior-view')
            .classList
            .add('active');
        document
            .getElementById('exterior-view')
            .classList
            .remove('active');
        document
            .getElementById('backSeat-view')
            .classList
            .remove('active');
    }

    document
        .getElementById('backSeat-view')
        .onclick = () => {
        document
            .getElementById('interior-view')
            .classList
            .remove('active');
        document
            .getElementById('exterior-view')
            .classList
            .remove('active');
        document
            .getElementById('backSeat-view')
            .classList
            .add('active');
    }

    document
        .getElementById('exterior-view')
        .onclick = () => {
        document
            .getElementById('interior-view')
            .classList
            .remove('active');
        document
            .getElementById('exterior-view')
            .classList
            .add('active');
        document
            .getElementById('backSeat-view')
            .classList
            .remove('active');
    }
    document
        .getElementById('changeColor')
        .onclick = () => {
        camera.current = 0;
        // document
        //     .getElementById('logo')
        //     .src = LOGOS.mitsubishi.black;
        ChangeCamera(camera.current);
        document
            .getElementById('changeColor')
            .classList
            .add('active');
        document
            .getElementById('changeColorInt')
            .classList
            .remove('active');
        document
            .getElementById('colorPicker2')
            .classList
            .remove('active');
        document
            .getElementById('colorPicker')
            .classList
            .add('active');
    }

    document
        .getElementById('changeColorInt')
        .onclick = () => {
        camera.current = 1;
        // document
        //     .getElementById('logo')
        //     .src = LOGOS.mitsubishi.white;
        ChangeCamera(camera.current);
        document
            .getElementById('changeColor')
            .classList
            .remove('active');
        document
            .getElementById('changeColorInt')
            .classList
            .add('active');
        document
            .getElementById('colorPicker')
            .classList
            .remove('active');
        document
            .getElementById('colorPicker2')
            .classList
            .add('active');
    }

}

export default ViewEvents;