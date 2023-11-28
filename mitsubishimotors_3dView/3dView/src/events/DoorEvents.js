import {animation, sketchfabDict} from "../Globals.js";

function DoorEvents() {
    document
        .getElementById("door-toogle")
        .onclick = () => {
        if (animation.running) 
            return;
        
        if (animation.doorOpened) {
            sketchfabDict
                .api
                .seekTo(2.5);
            sketchfabDict
                .api
                .setCycleMode('one');
            sketchfabDict
                .api
                .setSpeed(-1);
            sketchfabDict
                .api
                .pause();
            sketchfabDict
                .api
                .seekTo(2.5);
            sketchfabDict
                .api
                .play();

            animation.doorOpened = false;
            animation.running = true;
            document
                .getElementById("door-toogle")
                .classList
                .remove("active");

            animation.interval = setInterval(function () {
                sketchfabDict
                    .api
                    .getCurrentTime(function (err, time) {
                        if (time <= 0.1) {
                            sketchfabDict
                                .api
                                .pause();
                            clearInterval(animation.interval);
                            animation.running = false;
                        }
                    });
            }, 10);
        } else {
            sketchfabDict
                .api
                .seekTo(0);
            sketchfabDict
                .api
                .setCycleMode('one');
            sketchfabDict
                .api
                .setSpeed(1);
            sketchfabDict
                .api
                .pause();
            sketchfabDict
                .api
                .seekTo(0);
            sketchfabDict
                .api
                .play();

            animation.doorOpened = true;
            animation.running = true;
            document
                .getElementById("door-toogle")
                .classList
                .add("active");
            animation.interval = setInterval(function () {
                sketchfabDict
                    .api
                    .getCurrentTime(function (err, time) {
                        if (time >= 2) {
                            clearInterval(animation.interval);
                            animation.running = false;
                        }
                    });
            }, 10);
        };
    };

};

export default DoorEvents;