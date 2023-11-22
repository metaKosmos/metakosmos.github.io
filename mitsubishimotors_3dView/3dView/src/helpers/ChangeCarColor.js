import {carMaterials, sketchfabDict, carSelection, texturesUids, camera} from "../Globals.js";
import {CAR_TEXTURES, TEXTURES_SETTINGS} from "../Constants.js";

function changeCarColor(selectedColor, carName) {
    if (carMaterials.paint == null || sketchfabDict.api == null) {
        console.error("Sketchfab API not loaded yet or failed.");
        return;
    };

    // Limpa o modelo 3d ao trocar o modelo de carro
    if (carSelection.latestModelSelected != carSelection.selectedModel) {
        sketchfabDict
            .api
            .updateTexture('', texturesUids.bodyRoughness, (err, bodyRoughnessUID) => {});
        sketchfabDict
            .api
            .updateTexture(CAR_TEXTURES[carName].detailsColor.color, texturesUids.detailsColor, (err, detailsColorUID) => {});
        sketchfabDict
            .api
            .updateTexture(CAR_TEXTURES[carName].detailsColor.roughness, texturesUids.detailsRoughness, (err, detailsRoughness) => {});
    };

    // Maybe do this later
    const colorsToUpdateRoughness = ['brancoAlpino', 'azulBaikal']

    sketchfabDict
        .api
        .updateTexture(CAR_TEXTURES[carName].bodyColor[selectedColor], texturesUids.bodyTexture, function (err, bodyTexture) {
            if (err) {
                console.error(err, bodyTexture);
                return;
            };

            if (colorsToUpdateRoughness.includes(selectedColor)) {
                sketchfabDict
                    .api
                    .updateTexture(CAR_TEXTURES[carName].bodyColor.roughness, texturesUids.bodyRoughness, (err, bodyRoughness) => {
                        err && console.error(err, bodyRoughness)
                    });

            };
            // Update textures values
            carMaterials.paint.channels.ClearCoatRoughness.factor = TEXTURES_SETTINGS[selectedColor].paint.ClearCoatRoughness;
            carMaterials.paint.channels.ClearCoat.factor = TEXTURES_SETTINGS[selectedColor].paint.ClearCoat;
            
            carMaterials.paint.channels.MetalnessPBR.factor = TEXTURES_SETTINGS[selectedColor].paint.MetalnessPBR;
            carMaterials.paint.channels.AlbedoPBR.factor = TEXTURES_SETTINGS[selectedColor].paint.AlbedoPBR;
            carMaterials.paint.channels.RoughnessPBR.factor = TEXTURES_SETTINGS[selectedColor].paint.RoughnessPBR;
            carMaterials.paint.channels.ClearCoat.thickness = TEXTURES_SETTINGS[selectedColor].paint.ClearCoatThickness || 15;
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

export default changeCarColor;
