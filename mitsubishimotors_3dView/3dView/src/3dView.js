import { CarEvents } from "./events/CarEvents.js";
import DoorEvents from "./events/DoorEvents.js";
import HandleLoadingAnimation from "./handles/HandleLoadingAnimation.js";
import LoadModel from "./helpers/LoadModel.js";
import SelectedCarColorEvent from "./events/SelectedCarColorEvent.js";

document.addEventListener("DOMContentLoaded", () => {
    // Handles
    HandleLoadingAnimation();

    // 3D Model
    LoadModel();

    // Events
    CarEvents(['HPE_S', 'S_AWC', 'HPE', 'GLS']);
    SelectedCarColorEvent();

    DoorEvents(); 
});
