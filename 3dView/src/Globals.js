const animation = {
    "interval": null,
    "running": false,
    "doorOpened": false
};

const camera = {
    "enviromment": null,
    "current": 0,
    "changedCurrent": 0,    
    "position": [-3.4446727769579892, -3.920127732368049, 2.9226225496577802],
    "target": [0.14320670441945327, -0.03443397894758263, 0.7446247763073608],
    "headPosition": [0.4618180956391606, 0.10671339354285858, 1.202025589666613],
    "headTarget": [0.4741707244600637, -0.3389848621924768, 1.1411940403217824],
    "headPosition2": [0.11183631100987593, 0.9887379274139888, 1.4166501073402105],
    "headTarget2": [0.10371857479361152, 0.31688550090242784, 1.240237541111411],
};

// Used in helpers/ChangeCarColor.js
const carMaterials = {
    "paint": null,
    "paint02": null,
    "dets": null,
    "dets02": null,
    "dets03": null,
    "dets04": null,
    "steering": null,    
    "steering02": null,   
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
    "urlid": "9c53ffeb24674de28342bc00ad8133ba", 
    // "urlid": "33bd9534879a4f8d9491c96691be117f", //OG
};

const texturesUids = {
    "bodyTexture": null,
    "body02Texture": null,
    "bottonTexture": null,
    "detsTexture": null,
    "dets02Texture": null,
    "dets03Texture": null,
    "dets04Texture": null,

    "bodyRoughness": null,
    "detailsColor": null,
    "detailsRoughness": null,
    "leatherAlbedoFront": null,
    "leatherAlbedoBack": null,
    "steering": null
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
