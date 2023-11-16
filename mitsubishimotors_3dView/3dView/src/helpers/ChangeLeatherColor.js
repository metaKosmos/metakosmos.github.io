import { CAR_TEXTURES } from "../Constants.js";
import { carMaterials, carSelection, namedResources, sketchfabDict, texturesUids } from "../Globals.js";

function ChangeLeatherColor(index) {

    if (sketchfabDict.api == null) {
        console.error("Sketchfab API not loaded yet or failed.");
        return;
    }

    if (carSelection.selectedModel != 2) {
        index = 1;
    }

    if (index == 0) {
        //door leather black
        sketchfabDict
            .api
            .hide(namedResources.nodes['P_Back_Int_R_Leather_Black'].instanceID);
        sketchfabDict
            .api
            .hide(namedResources.nodes['P_Back_Int_L_Leather_Black'].instanceID);

        //door leather white
        sketchfabDict
            .api
            .show(namedResources.nodes['P_Back_Int_R_Leather_White'].instanceID);
        sketchfabDict
            .api
            .show(namedResources.nodes['P_Back_Int_L_Leather_White'].instanceID);

        carMaterials.frontSeat.channels.AlbedoPBR.factor = 0.6;
        carMaterials.frontSeat.channels.SpecularPBR.factor = 0;
        sketchfabDict
            .api
            .setMaterial(carMaterials.frontSeat);
        carMaterials.backSeat.channels.AlbedoPBR.factor = 0.6;
        sketchfabDict
            .api
            .setMaterial(carMaterials.backSeat);

        sketchfabDict
            .api
            .updateTexture(CAR_TEXTURES.seats.frontSeat.whiteAlbedo, texturesUids.leatherAlbedoFront, function (err, leatherAlbedoFront) {
                if (!err) {
                    return;
                }
            });

        sketchfabDict
            .api
            .updateTexture(CAR_TEXTURES.seats.frontSeat.leatherWhite, texturesUids.leatherAlbedoBack, function (err, texturesUids) {
                if (!err) {
                    return;
                }
            });

        carMaterials.doorOne.channels.AlbedoPBR.color = [1, 1, 1];
        carMaterials.doorTwo.channels.AlbedoPBR.color = [1, 1, 1];

        sketchfabDict
            .api
            .setMaterial(carMaterials.doorOne, function () {});

        sketchfabDict
            .api
            .setMaterial(carMaterials.doorTwo, function () {});
    } else if (index == 1) {

        carMaterials.frontSeat.channels.AlbedoPBR.factor = 1;
        carMaterials.frontSeat.channels.SpecularPBR.factor = 0.2;
        sketchfabDict
            .api
            .setMaterial(carMaterials.frontSeat);
        carMaterials.backSeat.channels.AlbedoPBR.factor = 1;
        sketchfabDict
            .api
            .setMaterial(carMaterials.backSeat);

        //door leather black
        sketchfabDict
            .api
            .show(namedResources.nodes['P_Back_Int_R_Leather_Black'].instanceID);
        sketchfabDict
            .api
            .show(namedResources.nodes['P_Back_Int_L_Leather_Black'].instanceID);

        //door leather white
        sketchfabDict
            .api
            .hide(namedResources.nodes['P_Back_Int_R_Leather_White'].instanceID);
        sketchfabDict
            .api
            .hide(namedResources.nodes['P_Back_Int_L_Leather_White'].instanceID);

        sketchfabDict
            .api
            .updateTexture(CAR_TEXTURES.seats.frontSeat.blackAlbedo, texturesUids.leatherAlbedoFront, function (err, texturesUids) {
                if (!err) {
                    return
                }
            });
        sketchfabDict
            .api
            .updateTexture(CAR_TEXTURES.seats.backSeat.leatherBlack, texturesUids.leatherAlbedoBack, function (err, texturesUids) {
                if (!err) {
                    return
                }
            });

        carMaterials.doorOne.channels.AlbedoPBR.color = [0, 0, 0];
        carMaterials.doorTwo.channels.AlbedoPBR.color = [0, 0, 0];

        sketchfabDict
            .api
            .setMaterial(carMaterials.doorOne, function () {});

        sketchfabDict
            .api
            .setMaterial(carMaterials.doorTwo, function () {});
    }
}
export default ChangeLeatherColor;