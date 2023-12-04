import {CAR_TEXTURES} from "../Constants.js";
import {carMaterials, carSelection, namedResources, sketchfabDict, texturesUids} from "../Globals.js";
import HandleError from "../handles/HandleError.js";

function ChangeLeatherColor(selectedColor) {
    if (sketchfabDict.api == null) {
        HandleError('Sketchfab API not loaded yet or failed.', 'On ChangeLeatherColor');
        return;
    };

    if (selectedColor == 'Black') {

        carMaterials.frontSeat.channels.AlbedoPBR.factor = 1;
        carMaterials.frontSeat.channels.SpecularPBR.factor = 0.2;

        sketchfabDict
            .api
            .setMaterial(carMaterials.frontSeat);

        carMaterials.backSeat.channels.AlbedoPBR.factor = 1;

        sketchfabDict
            .api
            .setMaterial(carMaterials.backSeat);

        carMaterials.doorOne.channels.AlbedoPBR.color = [0, 0, 0];

        sketchfabDict
            .api
            .setMaterial(carMaterials.doorOne);

        carMaterials.doorTwo.channels.AlbedoPBR.color = [0, 0, 0];

        sketchfabDict
            .api
            .setMaterial(carMaterials.doorTwo);

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
            .updateTexture(CAR_TEXTURES.seats.frontSeat.blackAlbedo, texturesUids.leatherAlbedoFront, (err, texturesUids) => {HandleError(err, texturesUids)});
        sketchfabDict
            .api
            .updateTexture(CAR_TEXTURES.seats.backSeat.leatherBlack, texturesUids.leatherAlbedoBack, (err, texturesUids) => {HandleError(err, texturesUids)});

    } else {

        carMaterials.frontSeat.channels.AlbedoPBR.factor = 0.6;
        carMaterials.frontSeat.channels.SpecularPBR.factor = 0;

        sketchfabDict
            .api
            .setMaterial(carMaterials.frontSeat);

        carMaterials.backSeat.channels.AlbedoPBR.factor = 0.6;

        sketchfabDict
            .api
            .setMaterial(carMaterials.backSeat);

        carMaterials.doorOne.channels.AlbedoPBR.color = [1, 1, 1];

        sketchfabDict
            .api
            .setMaterial(carMaterials.doorOne);

        carMaterials.doorTwo.channels.AlbedoPBR.color = [1, 1, 1];

        sketchfabDict
            .api
            .setMaterial(carMaterials.doorTwo);


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

            sketchfabDict
            .api
            .updateTexture(CAR_TEXTURES.seats.frontSeat.whiteAlbedo, texturesUids.leatherAlbedoFront, (err, leatherAlbedoFront) => {HandleError(err, leatherAlbedoFront)});

        sketchfabDict
            .api
            .updateTexture(CAR_TEXTURES.seats.backSeat.leatherWhite, texturesUids.leatherAlbedoBack, (err, texturesUids) => {HandleError(err, texturesUids)});
    };

}

export default ChangeLeatherColor;