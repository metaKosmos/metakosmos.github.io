import { carMaterials, sketchfabDict, namedResources, carSelection } from "../Globals.js";
import { GTMevent } from "../events/analytics.js";
import ChangeCarColor from "../helpers/ChangeCarColor.js";
import ChangeLeatherColor from "../helpers/ChangeLeatherColor.js";

function GlsEvents() {
    $(".gls")
        .click(function () {
            GTMevent('Car', 'GLS')
            $(".exterior-items").html(`<li>Roda de liga leve 18”</li>
                    <li>DRL em led</li> 
                    <li>Lanternas em led</li>
                    <li>Ar-condicionado digital automático</li> 
                    <li>Multimídia JBL com Wi-Fi integrado</li> 
                    <li>Câmera de ré</li>
                    <li>Tração 4x4</li>`);

            $(".info").html("Escolha a cor:");

            $(".rush-feature").addClass("active");

            //Adjust Color
            carMaterials.dets02.channels.ClearCoat.enable = true;
            carMaterials.dets02.channels.RoughnessPBR.factor = 0.6;
            carMaterials.dets02.channels.MetalnessPBR.factor = 1;

            carMaterials.lowerPaint.channels.ClearCoat.enable = true;
            carMaterials.lowerPaint.channels.RoughnessPBR.factor = 0.6;
            carMaterials.lowerPaint.channels.MetalnessPBR.factor = 1;

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
            ChangeCarColor('prataLitio', 'GLS');
            carSelection.latestModelSelected = 'GLS';


            //back logo
            sketchfabDict
                .api
                .hide(namedResources.nodes['LogoBack_Turbo'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['LogoBack_RUSH'].instanceID);
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
                .hide(namedResources.nodes['LogoBack_HPE'].instanceID);
            $("#intcolorwhite").css("display", "none");
            $(".gls").addClass("active");
            $(".hpe").removeClass("active");
            $(".hpes").removeClass("active");
            $(".awd").removeClass("active");
            ChangeLeatherColor('Black');

            $("#external-colors-type02").removeClass("d-none");
            $("#external-colors-type01").addClass("d-none");
        });
}

export default GlsEvents;
