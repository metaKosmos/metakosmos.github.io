const animation = {
    "interval": null,
    "running": false,
    "doorOpened": false
};

const camera = {
    "enviromment": null,
    "current": 0,
    "changedCurrent": 0,
    "position": [-4.870976199776911, -0.0629355493017227, 1.5080407936289586],
    "target": [0.1429519418097821, -0.0342716750010755, 0.7445627986873815],
    "headPosition": [0.4618180956391606, 0.10671339354285858, 1.202025589666613],
    "headTarget": [0.4741707244600637, -0.3389848621924768, 1.1411940403217824],
    "headPosition2": [0.11403112687774318, -0.20121384775887902, 1.2685950322369712],
    "headTarget2": [0.14295194180978213, 0.4208645045427722, 0.9774644072491593],
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
    "nextPct": 10,
    'intervalId': null
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
