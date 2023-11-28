import { NODES_TO_REMOVE, POST_PROCESSING } from "../Constants.js";
import {
    camera,
    carMaterials,
    loadingPct,
    namedResources,
    sketchfabDict,
    texturesUids
} from "../Globals.js";
import HandleError from "../handles/HandleError.js";
import ChangeCamera from "../helpers/ChangeCamera.js";
import ChangeCarColor from "../helpers/ChangeCarColor.js";
import ChangeLeatherColor from "../helpers/ChangeLeatherColor.js";
import GetNamedResources from "../helpers/GetNameResource.js";
import Hide3dNodes from "../helpers/Hide3dNodes.js";

function ViewerReady() {
    loadingPct.nextPct = 99;

    sketchfabDict
        .api
        .getNodeMap((err, nodes) => {
            if (err) {
                HandleError(err, 'On Nodes');
                return;
            };
            GetNamedResources(nodes, "nodes");
            Hide3dNodes(NODES_TO_REMOVE);
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
            sketchfabDict
                .api
                .getCameraLookAt((err, returnCamera) => {
                    if (err) {
                        HandleError(err, returnCamera)
                        return;
                    };
                    switch (camera.current) {
                        case 0:
                            if (returnCamera.target[0] != camera.target[0] || returnCamera.target[1] != camera.target[1] || returnCamera.target[2] != camera.target[2]) 
                                ChangeCamera(0, true);

                            break;
                        case 1:
                            if (returnCamera.target[0] != camera.headTarget[0] || returnCamera.target[1] != camera.headTarget[1] || returnCamera.target[2] != camera.headTarget[2]) 
                                ChangeCamera(1, true);

                            break;
                        case 2:
                            if (returnCamera.target[0] != camera.headTarget2[0] || returnCamera.target[1] != camera.headTarget2[1] || returnCamera.target[2] != camera.headTarget2[2]) 
                                ChangeCamera(2, true);
                            break;
                        default:
                            HandleError("Wrong camera index!", "camera.current");
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
                    loadingPct.nextPct = 100;
                    loadingPct.pctValue = 100;
                    ChangeCarColor('brancoAlpino', 'GLS');
                    ChangeLeatherColor('Black');
                    document
                        .getElementById('intcolorwhite')
                        .style
                        .display = "none";
                    document
                        .getElementById('loading-text')
                        .textContent = `Carregando ${loadingPct.pctValue}%`;
                    document
                        .getElementById('loading-bar-fill')
                        .style
                        .width = `${loadingPct.pctValue}%`;
                    document
                        .getElementById("iframe-loader")
                        .style
                        .display = "none";
                    clearInterval(loadingPct.intervalId);
                });
        });
}

export default ViewerReady;