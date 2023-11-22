const animation = {
    "interval": null,
    "running": false,
    "doorOpened": false
};

const camera = {
    "enviromment": null,
    "current": 0,
    "position": [
        -5, 0, 0
    ],
    "target": [
        0, 0, 1
    ],
    "headPosition": [
        0.4254422457037528, -0.04222335228866392, 1.3057388324901753
    ],
    "headTarget": [
        0.4708062358048296, -0.37540759650188704, 1.0633014406907684
    ],
    "headPosition2": [
        0.5, -0.4, 1.4
    ],
    "headTarget2": [0, 0.5, 1]
};

// Used in helpers/ChangeCarColor.js
const carMaterials = {
    "paint": null,
    "lowerPaint": null,
    "doorOne": null,
    "doorTwo": null,
    "backSeat": null,
    "frontSeat": null,
    "lights": null
};

const carSelection = {
    "latestModelSelected": null,
    "selectedModel": 'GLS' 
};

const loadingPct = {
    "pctValue": 0,
    "nextPct": 10
};

const namedResources = {
    "nodes": {},
    "materials": {},
    "textures": {}
};

const priceInfo = {
    "basePrice": 242990,
    "option1Price": 0,
    "option2Price": 0,
    "currentColorText": "",
    "currentIntText": ""
};

const sketchfabDict = {
    "version": "1.12.1",
    "client": null,
    "api": null,
    // "urlid": "42b51939c68e448b9c9a06a24a0d21e5",
    "urlid": "8f9b2df5ae4048bc89e1e6cc87181913", 
    // "urlid": "33bd9534879a4f8d9491c96691be117f", //OG
};

const texturesUids = {
    "bodyTexture": null,
    "bodyRoughness": null,
    "detailsColor": null,
    "detailsRoughness": null,
    "leatherAlbedoFront": null,
    "leatherAlbedoBack": null
};

export {
    animation,
    camera,
    carMaterials,
    carSelection,
    loadingPct,
    namedResources,
    priceInfo,
    sketchfabDict,
    texturesUids
};
