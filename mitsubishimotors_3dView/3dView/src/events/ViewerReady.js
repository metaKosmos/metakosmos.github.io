import {loadingPct, namedResources, carMaterials, sketchfabDict, camera} from "../Globals.js";
import GetNamedResources from "../helpers/GetNameResource.js";
import {POST_PROCESSING} from "../Constants.js";
import RemoveNodes from "../helpers/RemoveNodes.js";
import ChangeCamera from "../helpers/ChangeCamera.js";
import ChangeCarColor from "../helpers/ChangeCarColor.js";
import ChangeLeatherColor from "../helpers/ChangeLeatherColor.js";
import {LOGOS} from "../Constants.js";

function ViewerReady() {

    loadingPct.nextPct = 99;
    var frameMask = document.getElementById("iframe-mask");
    var loader = document.getElementById("iframe-loader");

    sketchfabDict
        .api
        .getNodeMap((err, nodes) => {
            if (err) {
                console.error(err, err.stack);
                return;
            };
            GetNamedResources(nodes, "nodes");
            RemoveNodes(namedResources.nodes);
        });

    sketchfabDict
        .api
        .getEnvironment((err, envInfo) => {
            if (err) {
                console.error(err, err.stack);
                return;
            };
            camera.enviromment = envInfo;
        });

    sketchfabDict
        .api
        .getTextureList((err, textures) => {
            if (err) {
                console.error(err, err.stack);
                return;
            }
            GetNamedResources(textures, "textures");
        });

    sketchfabDict
        .api
        .getAnimations((err, animations) => {
            if (err) {
                console.error(err, err.stack);
                return;
            };
            if (animations.length > 0) {
                sketchfabDict
                    .api
                    .setCurrentAnimationByUID(animations[0][0]); //0 8 18 30
                sketchfabDict
                    .api
                    .setCycleMode('one');
                sketchfabDict
                    .api
                    .pause();
                sketchfabDict
                    .api
                    .seekTo(0);
            }
        });

    sketchfabDict
        .api
        .setPostProcessing(POST_PROCESSING);

    sketchfabDict
        .api
        .addEventListener('camerastop', () => {
            sketchfabDict
                .api
                .getCameraLookAt((err, returnCamera) => {
                    if (err) {
                        console.error(err, err.stack);
                        return;
                    };
                    switch (camera.current) {
                        case 0:
                            if (returnCamera.target[0] != camera.target[0] || returnCamera.target[1] != camera.target[1] || returnCamera.target[2] != camera.target[2]) 
                                ChangeCamera(0, true);
                            
                            $(".logo").attr("src", LOGOS.mitsubishi.black);

                            break;
                        case 1:
                            if (returnCamera.target[0] != camera.headTarget[0] || returnCamera.target[1] != camera.headTarget[1] || returnCamera.target[2] != camera.headTarget[2]) 
                                ChangeCamera(1, true);
                            $(".logo").attr("src", LOGOS.mitsubishi.white);
                            break;
                        case 2:
                            if (returnCamera.target[0] != camera.headTarget2[0] || returnCamera.target[1] != camera.headTarget2[1] || returnCamera.target[2] != camera.headTarget2[2]) 
                                ChangeCamera(2, true);
                            $(".logo").attr("src", LOGOS.mitsubishi.white);
                            break;
                        default:
                            console.log("Wrong camera index!");
                            break;
                    }
                });
        });

    sketchfabDict
        .api
        .getMaterialList((err, materials) => {
            if (err) {
                console.log(err);
                return;
            }
            GetNamedResources(materials, "materials");

            carMaterials.lowerPaint = namedResources.materials["Eclipse_Body_Bottom"];
            carMaterials.paint = namedResources.materials["Eclipse_Body_Textures"];

            carMaterials.frontSeat = namedResources.materials["Seat_Front_Leather"];
            carMaterials.backSeat = namedResources.materials["Seat_Back_Leather.001"];

            carMaterials.doorOne = namedResources.materials["PortaInt_Leather_White"];
            carMaterials.doorTwo = namedResources.materials["PortaInt_Leather_White.002"];

            carMaterials.lights = namedResources.materials["Emessive"];

            carMaterials.lowerPaint.channels.ClearCoat.enable = false;
            carMaterials.lowerPaint.channels.RoughnessPBR.factor = 1;
            carMaterials.lowerPaint.channels.MetalnessPBR.factor = 0;
            carMaterials.lowerPaint.channels.SpecularPBR.factor = 0.05;
            sketchfabDict
                .api
                .setMaterial(carMaterials.lowerPaint);
            //
            carMaterials.paint.channels.AlbedoPBR.factor = 1;
            carMaterials.paint.channels.MetalnessPBR.factor = 0.12;
            sketchfabDict
                .api
                .setMaterial(carMaterials.paint);
            //
            carMaterials.frontSeat.channels.AlbedoPBR.factor = 1;
            carMaterials.frontSeat.channels.SpecularPBR.factor = 0.2;
            sketchfabDict
                .api
                .setMaterial(carMaterials.frontSeat);
            //
            carMaterials.backSeat.channels.AlbedoPBR.factor = 0.6;
            sketchfabDict
                .api
                .setMaterial(carMaterials.backSeat);

            sketchfabDict
                .api
                .getCameraLookAt(function (err, camera) {
                    console.log(err)
                    ChangeCamera(0);
                    setTimeout(function () {
                        loadingPct.nextPct = 100;
                        ChangeCarColor(0);
                        ChangeLeatherColor(0);
                        $("#intcolorwhite").css("display", "none");
                        setTimeout(function () {
                            loadingPct.pctValue = 100;
                            document
                                .getElementById("iframe-loader")
                                .innerHTML = "carregando 100%<div style='width: 100%'></div>";
                            frameMask
                                .classList
                                .add("hidden");
                            loader
                                .classList
                                .add("hidden");
                        }, 1000);
                    }, 1100);
                });
        });
}

export default ViewerReady;