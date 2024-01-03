import {carMaterials, sketchfabDict, namedResources, carSelection} from "../Globals.js";
import { GTMevent } from "../events/analytics.js";
import ChangeCarColor from "../helpers/ChangeCarColor.js";
import ChangeLeatherColor from "../helpers/ChangeLeatherColor.js";

function HpeEvents() {
    $(".hpe")
        .click(function () {

            GTMevent('Car','HPE')

            carMaterials.lowerPaint.channels.ClearCoat.enable = true;
            carMaterials.lowerPaint.channels = carMaterials.paint.channels;

            sketchfabDict
                .api
                .setMaterial(carMaterials.lowerPaint);

            $(".exterior-items").html(`<li>Roda de liga leve 18”</li>
                    <li>DRL em led</li> 
                    <li>Faróis e lanternas em led</li>
                    <li>Ar-condicionado digital Dual Zone</li> 
                    <li>Multimídia JBL com Wi-Fi integrado</li>
                    <li>Câmera de ré</li>
                    <li>Bancos dianteiros elétricos e aquecidos</li>`);

            // $(".info").html("Couro Preto");
            $(".info").html("Escolha a cor:");

            //farol
            sketchfabDict
                .api
                .show(namedResources.nodes['Lights_Front_Silver'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['Lights_Front_VD_Glass'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['Lights_Front_Chrome'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['Lights_Front_BlackShiny'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['Lights_Front_Chrome.003'].instanceID);

            sketchfabDict
                .api
                .hide(namedResources.nodes['Lights_Front_Conver_GLS_Chrome'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['Lights_Front_Case_GLS_Chrome'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['Lights_Front_GLS_BlackMatt'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['Lights_Front_Cover_LedGLS_Silver'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['Lights_Front_Glass_GLS_Emissive'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['Lights_Front_Grid_GLS_Silver'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['Lights_Front_Glass_GLS_Chrome'].instanceID);

            //seat base
            sketchfabDict
                .api
                .show(namedResources.nodes['Seat_Front_Base_HPE_L'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['Seat_Front_Base_HPE_R'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['Seat_Front_Base_GLS_L'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['Seat_Front_Base_GLS_R'].instanceID);

            //shifter 2306
            sketchfabDict
                .api
                .show(namedResources.nodes['Painel_PaddleShifter'].instanceID);

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
                .show(namedResources.nodes['Gear_Panel_HPE'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['Gear_Panel_GLS'].instanceID);

            sketchfabDict
                .api
                .show(namedResources.nodes['Button_GearPanel_Parking_Detail'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['Button_GearPanel_Parking'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['Button_GearPanel_SeatHealting'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['Handbrake'].instanceID);

            sketchfabDict
                .api
                .hide(namedResources.nodes['P_Front_SideDetail_L'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['P_Front_SideDetail_R'].instanceID);

            carSelection.selectedModel = 'HPE';
            var carColorSelected = $(".car-color.active").data("color-id");
            ChangeCarColor(carColorSelected, 'HPE');
            carSelection.latestModelSelected = 'HPE';

            //back logo
            sketchfabDict
                .api
                .hide(namedResources.nodes['LogoBack_GLS'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['LogoBack_Vidro'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['LogoBack_S'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['LogoBack_HPE'].instanceID);

            $(".hpe").addClass("active");
            $(".gls").removeClass("active");
            $(".hpes").removeClass("active");
            $(".awd").removeClass("active");
            $("#intcolorwhite").css("display", "none");
            ChangeLeatherColor('Black');
        });
};

export default HpeEvents;
