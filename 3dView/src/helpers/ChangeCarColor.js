import {carMaterials, sketchfabDict, carSelection, texturesUids, camera} from "../Globals.js";
import {CAR_TEXTURES, TEXTURES_SETTINGS} from "../Constants.js";
import HandleError from "../handles/HandleError.js";

function ChangeCarColor(selectedColor, carName) {
    if (carMaterials.paint == null || sketchfabDict.api == null) {
        HandleError('Sketchfab API not loaded yet or failed.', 'On ChangeCarColor');
        return;
    };

    // Limpa o modelo 3d ao trocar o modelo de carro
    if (carSelection.latestModelSelected != carSelection.selectedModel) {
        sketchfabDict
            .api
            .updateTexture(CAR_TEXTURES[carName].bodyColor.roughness, texturesUids.bodyRoughness, (err, bodyRoughnessUID) => {
                HandleError(err, bodyRoughnessUID)
            });
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
        .updateTexture(CAR_TEXTURES[carName].bodyColor[selectedColor], texturesUids.bodyTexture, function (err, bodyTexture) {
            if (err) {
                HandleError(err, bodyTexture);
                return;
            };

            if (colorsToUpdateRoughness.includes(selectedColor)) {
                sketchfabDict
                    .api
                    .updateTexture(CAR_TEXTURES[carName].bodyColor.roughness, texturesUids.bodyRoughness, (err, bodyRoughness) => {
                        HandleError(err, bodyRoughness)
                    });

            };
            // Update textures values
            carMaterials.paint.channels.ClearCoatRoughness.factor = TEXTURES_SETTINGS[selectedColor].paint.ClearCoatRoughness;
            carMaterials.paint.channels.ClearCoat.factor = TEXTURES_SETTINGS[selectedColor].paint.ClearCoat;

            carMaterials.paint.channels.MetalnessPBR.factor = TEXTURES_SETTINGS[selectedColor].paint.MetalnessPBR;
            carMaterials.paint.channels.AlbedoPBR.factor = TEXTURES_SETTINGS[selectedColor].paint.AlbedoPBR;
            carMaterials.paint.channels.RoughnessPBR.factor = TEXTURES_SETTINGS[selectedColor].paint.RoughnessPBR;
            carMaterials.paint.channels.ClearCoat.thickness = 12;
            // All of them are 0
            carMaterials.lowerPaint.channels.ClearCoatRoughness.factor = TEXTURES_SETTINGS[selectedColor].lowerPaint.ClearCoatRoughness;

            // Set materials
            sketchfabDict
                .api
                .setMaterial(carMaterials.paint);

            sketchfabDict
                .api
                .setMaterial(carMaterials.lowerPaint);

            // Set camera exposure
            camera.enviromment.exposure = TEXTURES_SETTINGS[selectedColor].camera.exposure;
            sketchfabDict
                .api
                .setEnvironment(camera.enviromment);

        });

}

export default ChangeCarColor;
