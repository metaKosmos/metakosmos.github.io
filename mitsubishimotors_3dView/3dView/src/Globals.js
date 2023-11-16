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
    "latestModelSelected": 0,
    "selectedModel": 0 //0 GLS 1 HPE 2 HPE-S
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
    "bodyTexture": "615b725c793b4265bc175b3e4482c04c",
    "bodyRoughness": "a9f1fb7601114adbb614c7f324632df5",
    "detailsColor": "b92f89769b8347cca727b4777ba8ca2b",
    "detailsRoughness": "76595a30daf740e5ba608d1ebccdba9c",
    "leatherAlbedoFront": "5945fc0eedc546248de8bb7ce8f2c3cd",
    "leatherAlbedoBack": "05be3256011a4ec49be6cefd689edeed"
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
