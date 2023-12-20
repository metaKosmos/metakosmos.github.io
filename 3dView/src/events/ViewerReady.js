import {
    loadingPct,
    namedResources,
    carMaterials,
    sketchfabDict,
    camera,
    texturesUids
} from "../Globals.js";
import GetNamedResources from "../helpers/getNameResource.js";
import { POST_PROCESSING } from "../Constants.js";
import RemoveNodes from "../helpers/RemoveNodes.js";
import ChangeCamera from "../helpers/ChangeCamera.js";
import ChangeCarColor from "../helpers/ChangeCarColor.js";
import ChangeLeatherColor from "../helpers/ChangeLeatherColor.js";
import { LOGOS } from "../Constants.js";
import HandleError from "../handles/HandleError.js";

function ViewerReady() {
    var frameMask = document.getElementById("iframe-mask");
    var loader = document.getElementById("iframe-loader");
    var cameraIndex = 0;

    sketchfabDict
        .api
        .getNodeMap((err, nodes) => {
            if (err) {
                HandleError(err, 'On Nodes');
                return;
            };
            GetNamedResources(nodes, "nodes");
            RemoveNodes(namedResources.nodes);
        });

    sketchfabDict
        .api
        .getEnvironment((err, envInfo) => {
            if (err) {
                HandleError(err, 'On Env Info');
                return;
            };
            camera.enviromment = envInfo;
        });

    sketchfabDict
        .api
        .getTextureList((err, textures) => {
            if (err) {
                HandleError(err, 'On Textures');
                return;
            }
            GetNamedResources(textures, "textures");
            texturesUids.bodyRoughness = namedResources.textures['GLS_Body_Roghness.png'].uid;
            texturesUids.detailsColor = namedResources.textures['GLS_Dets_Color.png'].uid;
            texturesUids.detailsRoughness = namedResources.textures['GLS_Dets_Roghness.png'].uid;
            texturesUids.bodyTexture = namedResources.textures['GLS_Body_Branco_Alpino.png'].uid; //cor do carro
            texturesUids.leatherAlbedoFront = namedResources.textures['Leather_White_albedo.jpg'].uid;
            texturesUids.leatherAlbedoBack = namedResources.textures['Seat_Back_LeatherWhite_Color.png'].uid;
        });

    sketchfabDict
        .api
        .getAnimations((err, animations) => {
            if (err) {
                HandleError(err, 'On Animations');
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
            $(".logo").attr("src", LOGOS.mitsubishi.black);

            sketchfabDict
                .api
                .getCameraLookAt(async (err, returnCamera) => {

                    sketchfabDict.api.getCameraLookAt(function (err, cameraLookAt) {
                        var cameraPosition = cameraLookAt.position;
                        var cameraTarget = cameraLookAt.target;
                        //console.log('Camera position:', cameraPosition);
                        //console.log('Camera target:', cameraTarget);
                    });

                    if (err) {
                        HandleError(err, returnCamera)
                        return;
                    };
                    if (camera.current == camera.changedCurrent && camera.current != cameraIndex) {
                        cameraIndex = camera.current;
                        switch (camera.current) {
                            case 0:
                                if (returnCamera.target[0] != camera.target[0] || returnCamera.target[1] != camera.target[1] || returnCamera.target[2] != camera.target[2])
                                    //ChangeCamera(0, true);

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
                                HandleError("Wrong camera index!", "camera.current");
                        }
                    }
                });
        });

    sketchfabDict
        .api
        .getMaterialList((err, materials) => {
            if (err) {
                HandleError(err, 'On Materials');
                return;
            };
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

                    if (err) {
                        HandleError(err, 'On CameraLookAt');
                        return;
                    };
                    ChangeCamera(0);
                    ChangeCarColor('prataLitio', 'GLS');
                    ChangeLeatherColor('Black');
                    setTimeout(() => {
                        $("#intcolorwhite").css("display", "none");
                        document
                            .getElementById("iframe-loader")
                            .innerHTML = "carregando 100%<div style='width: 100%'></div>";
                        frameMask
                            .classList
                            .add("hidden");
                        document
                            .getElementById("iframe-loader")
                            .remove()
                        clearInterval(loadingPct.intervalId); 
                    }, 1500);
                });
        });


    console.log('READY');

    document.getElementById("base-buttons").style.display = "block";
    document.getElementById("info-area").style.display = "block";


}

export default ViewerReady;