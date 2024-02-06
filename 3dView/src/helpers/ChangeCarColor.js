import { carMaterials, sketchfabDict, carSelection, texturesUids, camera } from "../Globals.js";
import { CAR_TEXTURES, TEXTURES_SETTINGS } from "../Constants.js";
import HandleError from "../handles/HandleError.js";

function ChangeCarColor(selectedColor, carName) {
    if (carMaterials.paint == null || sketchfabDict.api == null) {
        HandleError('Sketchfab API not loaded yet or failed.', 'On ChangeCarColor');
        return;
    };

    sketchfabDict
        .api
        .getCameraLookAt(function (err, cameraLookAt) {
            console.log('Play')
            var cameraPosition = cameraLookAt.position;
            var cameraTarget = cameraLookAt.target;
            console.log('Camera position:', cameraPosition);
            console.log('Camera target:', cameraTarget);
        });


    // Limpa o modelo 3d ao trocar o modelo de carro
    if (carSelection.latestModelSelected != carSelection.selectedModel) {
        //////////////////////////////
        sketchfabDict
            .api
            .updateTexture(CAR_TEXTURES[carName].detailsColor.steering, texturesUids.steering, (err, steeringUID) => {
                HandleError(err, steeringUID)
            });
        /////////////////////////////////
        sketchfabDict
            .api
            .updateTexture(CAR_TEXTURES[carName].detailsColor.color, texturesUids.detailsColor, (err, detailsColorUID) => {
                HandleError(err, detailsColorUID)
            });
        sketchfabDict
            .api
            .updateTexture(CAR_TEXTURES[carName].detailsColor.roughness, texturesUids.detailsRoughness, (err, detailsRoughness) => {
                HandleError(err, detailsRoughness)
            });

    };

    const colorsToUpdateRoughness = ['brancoAlpino', 'azulBaikal']

    sketchfabDict
        .api
        .updateTexture(CAR_TEXTURES[carName].bodyColor02[selectedColor], texturesUids.body02Texture, function (err, body02Texture) {
            HandleError(err, body02Texture);
        });

    sketchfabDict
        .api
        .updateTexture(CAR_TEXTURES[carName].bottonColor[selectedColor], texturesUids.bottonTexture, function (err, bottonTexture) {
            HandleError(err, bottonTexture);
        });

    sketchfabDict
        .api
        .updateTexture(CAR_TEXTURES[carName].detsColor[selectedColor], texturesUids.detsTexture, function (err, detsTexture) {
            HandleError(err, detsTexture);
        });

    sketchfabDict
        .api
        .updateTexture(CAR_TEXTURES[carName].detsColor02[selectedColor], texturesUids.dets02Texture, function (err, dets02Texture) {
            HandleError(err, dets02Texture);
        });

    sketchfabDict
        .api
        .updateTexture(CAR_TEXTURES[carName].detsColor03[selectedColor], texturesUids.dets03Texture, function (err, dets03Texture) {
            HandleError(err, dets03Texture);
        });

    sketchfabDict
        .api
        .updateTexture(CAR_TEXTURES[carName].detsColor04[selectedColor], texturesUids.dets04Texture, function (err, dets04Texture) {
            HandleError(err, dets04Texture);
        });

    sketchfabDict
        .api
        .updateTexture(CAR_TEXTURES[carName].bodyColor[selectedColor], texturesUids.bodyTexture, function (err, bodyTexture) {
            if (err) {
                HandleError(err, bodyTexture);
                return;
            };

            // Update textures values
            //carMaterials.paint.channels.ClearCoatRoughness.factor = TEXTURES_SETTINGS[selectedColor].paint.ClearCoatRoughness;
            // carMaterials.paint.channels.ClearCoat.factor = TEXTURES_SETTINGS[selectedColor].paint.ClearCoat;

            // carMaterials.paint.channels.MetalnessPBR.factor = TEXTURES_SETTINGS[selectedColor].paint.MetalnessPBR;
            //carMaterials.paint.channels.AlbedoPBR.factor = TEXTURES_SETTINGS[selectedColor].paint.AlbedoPBR;

            // carMaterials.lowerPaint.channels.AlbedoPBR.factor = TEXTURES_SETTINGS[selectedColor].lowerPaint.AlbedoPBR;

            // carMaterials.dets03.channels.AlbedoPBR.factor = TEXTURES_SETTINGS[selectedColor].lowerPaint.AlbedoPBR;

            //carMaterials.paint.channels.RoughnessPBR.factor = TEXTURES_SETTINGS[selectedColor].paint.RoughnessPBR;
            //carMaterials.paint.channels.ClearCoat.thickness = 12;
            // All of them are 0
            //carMaterials.lowerPaint.channels.ClearCoatRoughness.factor = TEXTURES_SETTINGS[selectedColor].lowerPaint.ClearCoatRoughness;

            // Set materials
            sketchfabDict
                .api
                .setMaterial(carMaterials.paint);

            sketchfabDict
                .api
                .setMaterial(carMaterials.paint02);

            sketchfabDict
                .api
                .setMaterial(carMaterials.lowerPaint);

            sketchfabDict
                .api
                .setMaterial(carMaterials.dets);

            sketchfabDict
                .api
                .setMaterial(carMaterials.dets02);

            sketchfabDict
                .api
                .setMaterial(carMaterials.dets03);

            sketchfabDict
                .api
                .setMaterial(carMaterials.steering);

                sketchfabDict
                .api
                .setMaterial(carMaterials.steering02);

            // Set camera exposure
            camera.enviromment.exposure = TEXTURES_SETTINGS[selectedColor].camera.exposure;
            sketchfabDict
                .api
                .setEnvironment(camera.enviromment);

        });
}

export default ChangeCarColor;
