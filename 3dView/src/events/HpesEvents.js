import { carMaterials, sketchfabDict, namedResources, carSelection } from "../Globals.js";
import { GTMevent } from "../events/analytics.js";
import ChangeCarColor from "../helpers/ChangeCarColor.js";
import ChangeLeatherColor from "../helpers/ChangeLeatherColor.js";

function HpesEvents() {
    $(".hpes")
        .click(function () {
            GTMevent('Car', 'HPES')

            $(".exterior-items").html(`<li>Roda de liga leve 18”</li> 
                    <li>DRL em led</li> 
                    <li>Faróis e lanternas em led</li>
                    <li>Ar-condicionado digital Dual Zone</li> 
                    <li>Multimídia JBL com GPS Offline e Wi-Fi integrado</li> 
                    <li>Câmera de ré</li> 
                    <li>Bancos dianteiros elétricos e aquecidos</li>`);

            // $(".info").html("Couro Cinza Claro");
            $(".info").html("Escolha a cor:");
            
            carMaterials.steering.channels.AlbedoPBR.factor = 0.5;
            carMaterials.steering02.channels.MetalnessPBR.factor = 1;

            carMaterials.paint02.channels.AlbedoPBR.factor = 1;
            carMaterials.paint02.channels.RoughnessPBR.factor = 0.6;
            carMaterials.paint02.channels.MetalnessPBR.factor = 1;

            
            carMaterials.dets03.channels.ClearCoat.enable = true;
            carMaterials.dets03.channels.RoughnessPBR.factor = 0.6;
            carMaterials.dets03.channels.MetalnessPBR.factor = 1;

            //Dets
            carMaterials.dets.channels.AlbedoPBR.factor = 1;
            carMaterials.dets.channels.RoughnessPBR.factor = 0.1;
            carMaterials.dets.channels.MetalnessPBR.factor = 1;

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

            //shifter 2306
            sketchfabDict
                .api
                .show(namedResources.nodes['Painel_PaddleShifter'].instanceID);

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

            //body
            sketchfabDict
                .api
                .show(namedResources.nodes['Body_Roof_HPE-S (Shiny details)'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['Body_Roof_HPE-S'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['Body_VD_Glass_Top'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['Body_Roof_Open'].instanceID);

            sketchfabDict
                .api
                .hide(namedResources.nodes['Body_Roof_Close'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['Body_Roof'].instanceID);

            //front logo
            sketchfabDict
                .api
                .hide(namedResources.nodes['LogoFront_BlackMatte'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['LogoFront_BlackShiny'].instanceID);

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
                .show(namedResources.nodes['P_Front_SideDetail_L'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['P_Front_SideDetail_R'].instanceID);

            carSelection.selectedModel = 'HPE_S';
            var carColorSelected = $(".car-color.active").data("color-id");
            ChangeCarColor(carColorSelected, 'HPE_S');
            carSelection.latestModelSelected = 'HPE_S';
            //back logo
            sketchfabDict
            .api
            .show(namedResources.nodes['LogoBack_Turbo'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['LogoBack_GLS'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['LogoBack_RUSH'].instanceID);
            sketchfabDict
                .api
                .hide(namedResources.nodes['LogoBack_Vidro'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['LogoBack_S'].instanceID);
            sketchfabDict
                .api
                .show(namedResources.nodes['LogoBack_HPE'].instanceID);
            $(".hpes").addClass("active");
            $(".gls").removeClass("active");
            $(".hpe").removeClass("active");
            $(".awd").removeClass("active");
            $("#intcolorwhite").css("display", "inline-block");
            ChangeLeatherColor('Black');

            $("#external-colors-type01").removeClass("d-none");
            $("#external-colors-type02").addClass("d-none");
        });
};

export default HpesEvents;