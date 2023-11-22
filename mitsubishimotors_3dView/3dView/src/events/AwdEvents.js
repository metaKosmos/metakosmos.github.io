import { carMaterials, sketchfabDict, namedResources, carSelection } from "../Globals.js";
import changeCarColor from "../helpers/changeCarColor.js";
import ChangeLeatherColor from "../helpers/ChangeLeatherColor.js";

function AwdEvents(api) {
    $(".awd")
        .click(function () {

            carMaterials.lowerPaint.channels.ClearCoat.enable = true;
            carMaterials.lowerPaint.channels = carMaterials.paint.channels;
            //carMaterials.lowerPaint.channels.AlbedoPBR.factor = 1;
            sketchfabDict.api.setMaterial(carMaterials.lowerPaint);

            $(".exterior-items").html("<span >- Roda de liga leve 18”</span> <span >- DRL em led</span> <span >- Faróis" +
                    " e lanternas em led</span><span >- Ar-condicionado digital Dual Zone</span> <spa" +
                    "n >- Multimídia JBL com GPS Offline e Wi-Fi integrado</span> <span >- Câmera de " +
                    "ré</span> <span >- Bancos dianteiros elétricos e aquecidos</span>");

            $("#colorPicker2 span.info").text("Couro Cinza Claro");
            //farol
            sketchfabDict.api.show(namedResources.nodes['Lights_Front_Silver'].instanceID);
            sketchfabDict.api.show(namedResources.nodes['Lights_Front_VD_Glass'].instanceID);
            sketchfabDict.api.show(namedResources.nodes['Lights_Front_Chrome'].instanceID);
            sketchfabDict.api.show(namedResources.nodes['Lights_Front_BlackShiny'].instanceID);
            sketchfabDict.api.show(namedResources.nodes['Lights_Front_Chrome.003'].instanceID);

            sketchfabDict.api.hide(namedResources.nodes['Lights_Front_Conver_GLS_Chrome'].instanceID);
            sketchfabDict.api.hide(namedResources.nodes['Lights_Front_Case_GLS_Chrome'].instanceID);
            sketchfabDict.api.hide(namedResources.nodes['Lights_Front_GLS_BlackMatt'].instanceID);
            sketchfabDict.api.hide(namedResources.nodes['Lights_Front_Cover_LedGLS_Silver'].instanceID);
            sketchfabDict.api.hide(namedResources.nodes['Lights_Front_Glass_GLS_Emissive'].instanceID);
            sketchfabDict.api.hide(namedResources.nodes['Lights_Front_Grid_GLS_Silver'].instanceID);
            sketchfabDict.api.hide(namedResources.nodes['Lights_Front_Glass_GLS_Chrome'].instanceID);

            //shifter 2306
            sketchfabDict.api.show(namedResources.nodes['Painel_PaddleShifter'].instanceID);

            //seat base
            sketchfabDict.api.show(namedResources.nodes['Seat_Front_Base_HPE_L'].instanceID);
            sketchfabDict.api.show(namedResources.nodes['Seat_Front_Base_HPE_R'].instanceID);
            sketchfabDict.api.hide(namedResources.nodes['Seat_Front_Base_GLS_L'].instanceID);
            sketchfabDict.api.hide(namedResources.nodes['Seat_Front_Base_GLS_R'].instanceID);

            //body
            sketchfabDict.api.show(namedResources.nodes['Body_Roof_HPE-S (Shiny details)'].instanceID);
            sketchfabDict.api.show(namedResources.nodes['Body_Roof_HPE-S'].instanceID);
            sketchfabDict.api.show(namedResources.nodes['Body_VD_Glass_Top'].instanceID);
            sketchfabDict.api.show(namedResources.nodes['Body_Roof_Open'].instanceID);

            sketchfabDict.api.hide(namedResources.nodes['Body_Roof_Close'].instanceID);
            sketchfabDict.api.hide(namedResources.nodes['Body_Roof'].instanceID);

            //front logo
            sketchfabDict.api.hide(namedResources.nodes['LogoFront_BlackMatte'].instanceID);
            sketchfabDict.api.show(namedResources.nodes['LogoFront_BlackShiny'].instanceID);

            //cambio
            sketchfabDict.api.show(namedResources.nodes['Gear_Panel_HPE'].instanceID);
            sketchfabDict.api.hide(namedResources.nodes['Gear_Panel_GLS'].instanceID);

            sketchfabDict.api.show(namedResources.nodes['Button_GearPanel_Parking_Detail'].instanceID);
            sketchfabDict.api.show(namedResources.nodes['Button_GearPanel_Parking'].instanceID);
            sketchfabDict.api.show(namedResources.nodes['Button_GearPanel_SeatHealting'].instanceID);
            sketchfabDict.api.hide(namedResources.nodes['Handbrake'].instanceID);

            sketchfabDict.api.show(namedResources.nodes['P_Front_SideDetail_L'].instanceID);
            sketchfabDict.api.show(namedResources.nodes['P_Front_SideDetail_R'].instanceID);

            carSelection.selectedModel = 'HPE_S';
            var carColorSelected = $(".car-color.active").data("color-id");
            changeCarColor(carColorSelected, 'HPE_S');
            carSelection.latestModelSelected = 'HPE_S';
            //back logo back logo
            sketchfabDict.api.hide(namedResources.nodes['LogoBack_GLS'].instanceID);
            sketchfabDict.api.show(namedResources.nodes['LogoBack_Vidro'].instanceID);
            sketchfabDict.api.show(namedResources.nodes['LogoBack_S'].instanceID);
            sketchfabDict.api.show(namedResources.nodes['LogoBack_HPE'].instanceID);
            $(".awd").addClass("active");
            $(".hpes").removeClass("active");
            $(".gls").removeClass("active");
            $(".hpe").removeClass("active");
            $("#intcolorwhite").css("display", "inline-block");
            ChangeLeatherColor(0);
        });
}

export default AwdEvents;
