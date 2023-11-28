import {CAR_DESCRIPTIONS, CAR_OBJECTS} from "../Constants.js";
import {carSelection} from "../Globals.js";
import ChangeCarColor from "../helpers/ChangeCarColor.js";
import ChangeLeatherColor from "../helpers/ChangeLeatherColor.js";
import Hide3dNodes from "../helpers/Hide3dNodes.js";
import Show3dNodes from "../helpers/Show3dNodes.js";

function HandleCarEvents(selectedCar, selectedColor) {

    // Set the selected car
    carSelection.selectedModel = selectedCar;
    
    if(selectedCar == 'S_AWC') {
    ChangeCarColor(selectedColor, 'HPE_S');
    } else {
    ChangeCarColor(selectedColor, selectedCar);
    }
    // Set the button
    document.getElementsByClassName('car-color active')[0].classList.replace('active', 'hidden');
    document.getElementById(selectedCar).classList.replace('hidden', 'active');

    // Set the car description
    document.getElementsByClassName('exterior-items active')[0].classList.replace('active', 'hidden');
    document.getElementById(`${selectedCar}-exterior`).classList.replace('hidden', 'active');

    // Set the leather color description
    document
        .getElementById('interior-info')
        .textContent = CAR_DESCRIPTIONS[selectedCar]

    // Show relevant nodes

    Show3dNodes(CAR_OBJECTS[selectedCar].hide);

    // Remove non-relevant nodes
    Hide3dNodes(CAR_OBJECTS[selectedCar].show);

    // Remove the active class from the previous selected car
    if (carSelection.latestModelSelected) {
        document
            .getElementById(carSelection.latestModelSelected)
            .classList
            .remove('active');
    }
    document
        .getElementById(selectedCar)
        .classList
        .add('active');

    // Check to see if the selected car has white leather
    const whiteLeatherCars = ['HPE_S', 'S_AWC'];
    if (whiteLeatherCars.includes(selectedCar)) {
        document
            .getElementById('intcolorwhite')
            .style
            .display = "inline-block";
    } else {
        document
            .getElementById('intcolorwhite')
            .style
            .display = "none";
    }

    // All of them start with the black leather color
    ChangeLeatherColor('Black');

}

export function CarEvents(carNames) {
    carNames.forEach((carName) => {
        document
            .getElementById(carName)
            .onclick = () => {
            const carColor = document.getElementsByClassName("car-color active")[0].dataset.color
            HandleCarEvents(carName, carColor);
        };
    });
}