import AwdEvents from "./events/AwdEvents.js";
import ButtonEvents from "./events/ButtonEvents.js";
import CameraEvents from "./events/CameraEvents.js";
import ColorEvents from "./events/ColorEvents.js";
import DoorEvents from "./events/DoorEvents.js";
import GlsEvents from "./events/GlsEvents.js";
import HpeEvents from "./events/HpeEvents.js";
import HpesEvents from "./events/HpesEvents.js";
import ViewEvents from "./events/ViewEvents.js";
import HandleLoadingAnimation from "./handles/HandleLoadingAnimation.js";
// import HandleResize from "./handles/HandleResize.js";
import LoadModel from "./helpers/LoadModel.js";

$(document).ready(() => {

    // Handles
    // HandleResize();
   HandleLoadingAnimation();
    
    // 3D Model
    LoadModel();

    // Events    
    ViewEvents();

    ButtonEvents();
    CameraEvents();
    ColorEvents();

    DoorEvents();
    
    GlsEvents();
    HpeEvents();
    HpesEvents();        
    AwdEvents();
});
