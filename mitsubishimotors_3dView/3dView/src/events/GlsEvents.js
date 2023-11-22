import {carMaterials, sketchfabDict, namedResources, carSelection} from "../Globals.js";
import changeCarColor from "../helpers/changeCarColor.js";
import ChangeLeatherColor from "../helpers/ChangeLeatherColor.js";

function GlsEvents() {
    $(".gls")
        .click(function () {

            $(".exterior-items").html("<span >- Roda de liga leve 18”</span> <span >- DRL em led</span> <span >- Lanter" +
                    "nas em led</span><span >- Ar-condicionado digital automático</span> <span >- Mul" +
                    "timídia JBL com Wi-Fi integrado</span> <span >- Câmera de ré</span>");

            carMaterials.lowerPaint.channels.ClearCoat.enable = false;
            carMaterials.lowerPaint.channels.RoughnessPBR.factor = 1;
            carMaterials.lowerPaint.channels.MetalnessPBR.factor = 0;
            carMaterials.lowerPaint.channels.SpecularPBR.factor = 0.05;
            //carMaterials.lowerPaint.channels.AlbedoPBR.factor = 0;
            sketchfabDict
                .api
                .setMaterial(carMaterials.lowerPaint);

            $("#colorPicker2 span.info").text("Couro Preto");
            //farol
            sketchfabDict
                .api
                .hide(namedResources.nodes['Lights_Front_Silver'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['Lights_Front_VD_Glass'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['Lights_Front_Chrome'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['Lights_Front_BlackShiny'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['Lights_Front_Chrome.003'].instanceID);

            sketchfabDict
                .api
                .show(namedResources.nodes['Lights_Front_Conver_GLS_Chrome'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['Lights_Front_Case_GLS_Chrome'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['Lights_Front_GLS_BlackMatt'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['Lights_Front_Cover_LedGLS_Silver'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['Lights_Front_Glass_GLS_Emissive'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['Lights_Front_Grid_GLS_Silver'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['Lights_Front_Glass_GLS_Chrome'].instanceID);

            //shifter 2306
            sketchfabDict
                .api
                .hide(namedResources.nodes['Painel_PaddleShifter'].instanceID);

            //seat base
            sketchfabDict
                .api
                .hide(namedResources.nodes['Seat_Front_Base_HPE_L'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['Seat_Front_Base_HPE_R'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['Seat_Front_Base_GLS_L'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['Seat_Front_Base_GLS_R'].instanceID);

            //body
            sketchfabDict
                .api
                .hide(namedResources.nodes['Body_Roof_HPE-S (Shiny details)'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['Body_Roof_HPE-S'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['Body_VD_Glass_Top'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['Body_Roof_Open'].instanceID);

            sketchfabDict
                .api
                .show(namedResources.nodes['Body_Roof_Close'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['Body_Roof'].instanceID);

            //front logo
            sketchfabDict
                .api
                .show(namedResources.nodes['LogoFront_BlackMatte'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['LogoFront_BlackShiny'].instanceID);

            //cambio
            sketchfabDict
                .api
                .hide(namedResources.nodes['Gear_Panel_HPE'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['Gear_Panel_GLS'].instanceID);

            sketchfabDict
                .api
                .hide(namedResources.nodes['Button_GearPanel_Parking_Detail'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['Button_GearPanel_Parking'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['Button_GearPanel_SeatHealting'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['Handbrake'].instanceID);

            sketchfabDict
                .api
                .hide(namedResources.nodes['P_Front_SideDetail_L'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['P_Front_SideDetail_R'].instanceID);

            carSelection.selectedModel = 'GLS';
            var carColorSelected = $(".car-color.active").data("color-id");
            changeCarColor(carColorSelected, 'GLS');
            carSelection.latestModelSelected = 'GLS';


            //back logo
            sketchfabDict
                .api
                .show(namedResources.nodes['LogoBack_GLS'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['LogoBack_Vidro'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['LogoBack_S'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['LogoBack_HPE'].instanceID);
            $("#intcolorwhite").css("display", "none");
            $(".gls").addClass("active");
            $(".hpe").removeClass("active");
            $(".hpes").removeClass("active");
            $(".awd").removeClass("active");
            ChangeLeatherColor(0);
        });
}

export default GlsEvents;
