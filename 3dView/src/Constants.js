const BASE_URL = "https://metakosmos.github.io";
const CAR_TEXTURES = {
    "GLS": {
        "bodyColor": {
            "azulBaikal": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Azul_Baikal.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Branco_Alpino.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Cinza_Londrino.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Branco_Alpino.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Prata_Litio.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Preto_Onix.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Roughness.png`,
            "specular": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Specular.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Vermelho_Lucid.png`
        },
        "detailsColor": {
            "color": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Details_Color.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Details_Roughness.png`
        }
    },
    "HPE": {
        "bodyColor": {
            "azulBaikal": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Azul_Baikal.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Branco_Alpino.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Cinza_Londrino.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Branco_Alpino.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Prata_Litio.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Preto_Onix.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Roughness.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Vermelho_Lucid.png`
        },
        "detailsColor": {
            "color": `${BASE_URL}/3dView/assets/textures/cars/HPE/detailsColor/HPE_Details_Color.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/HPE/detailsColor/HPE_Details_Roughness.png`
        }
    },
    "HPE_S": {
        "bodyColor": {
            "azulBaikal": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Azul_Baikal.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Branco_Alpino.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Cinza_Londrino.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Branco_Alpino.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Prata_Litio.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Preto_Onix.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Roughness.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Vermelho_Lucid.png`
        },
        "detailsColor": {
            "color": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/detailsColor/HPE-S_Details_Color.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/detailsColor/HPE-S_Details_Roughness.png`
        }
    },
    // Not sure where the s-awc stuff comes from
    "S-AWC": {
        "bodyColor": {},
        "detailsColor": {}
    },
    "seats": {
        "backSeat": {
            "leatherBlack": `${BASE_URL}/3dView/assets/textures/seats/backSeat/Back_Leather_Black_Color.png`,
            "leatherWhite": `${BASE_URL}/3dView/assets/textures/seats/backSeat/Back_Leather_White_Color.png`,
            "seatWhiteAlbedo": `${BASE_URL}/3dView/assets/textures/seats/backSeat/Back_White_Albedo.jpg`,
            "seatWhiteNormal": `${BASE_URL}/3dView/assets/textures/seats/backSeat/Back_White_Normal.png`,
            "seatWhiteRoughness": `${BASE_URL}/3dView/assets/textures/seats/backSeat/Back_White_roughness.jpg`,
            "plasticAlbedo": `${BASE_URL}/3dView/assets/textures/seats/backSeat/Plastic_Albedo.jpg`,
            "platicNormal": `${BASE_URL}/3dView/assets/textures/seats/backSeat/Plastic_Normal.png`,
            "plasticRoughness": `${BASE_URL}/3dView/assets/textures/seats/backSeat/Plastic_Roughness.jpg`
        },
        "frontSeat": {
            "blackAlbedo": `${BASE_URL}/3dView/assets/textures/seats/frontSeat/Leather_Black_albedo.jpg`,
            "whiteAlbedo": `${BASE_URL}/3dView/assets/textures/seats/frontSeat/Leather_White_albedo.jpg`,
            "whiteAO": `${BASE_URL}/3dView/assets/textures/seats/frontSeat/Leather_White_AO.jpg`,
            "whiteMetallic": `${BASE_URL}/3dView/assets/textures/seats/frontSeat/Leather_White_metallic.jpg`,
            "whiteNormal": `${BASE_URL}/3dView/assets/textures/seats/frontSeat/Leather_White_normal.png`,
            "whiteRoughness": `${BASE_URL}/3dView/assets/textures/seats/frontSeat/Leather_White_roughness.jpg`,
            "blackAlbedo": `${BASE_URL}/3dView/assets/textures/seats/frontSeat/Leather_Black_albedo.jpg`,
            "blackAO": `${BASE_URL}/3dView/assets/textures/seats/frontSeat/Lether_Black_AO.jpg`,
            "blackMetallic": `${BASE_URL}/3dView/assets/textures/seats/frontSeat/Lether_Black_metallic.jpg`,
            "blackNormal": `${BASE_URL}/3dView/assets/textures/seats/frontSeat/Lether_Black_normal.png`,
            "blackRoughness": `${BASE_URL}/3dView/assets/textures/seats/frontSeat/Lether_Black_roughness.jpg`,
            "plasticAlbedo": `${BASE_URL}/3dView/assets/textures/seats/frontSeat/Plastic_Black_Albedo.jpg`,
            "plasticAO": `${BASE_URL}/3dView/assets/textures/seats/frontSeat/Plastic_Black_AO.jpg`,
            "plasticMetallic": `${BASE_URL}/3dView/assets/textures/seats/frontSeat/Plastic_Black_metallic.jpg`,
            "plasticNormal": `${BASE_URL}/3dView/assets/textures/seats/frontSeat/Plastic_Black_normal.png`,
            "plasticRoughness": `${BASE_URL}/3dView/assets/textures/seats/frontSeat/Plastic_Black_roughness.jpg`

        }
    }
};

const LOGOS = {
    "mitsubishi": {
        "white": `${BASE_URL}/3dView/assets/logo/mitsubishi-white.png`,
        "black": `${BASE_URL}/3dView/assets/logo/mitsubishi.png`
    }
};

const MAX_TEXTURE_SIZE = {
    "desktop": 2048,
    "mobile": 512
};

// Nodes to be removed from the model
const NODES_TO_REMOVE = [
    'Lights_Front_Silver',
    'Lights_Front_VD_Glass',
    'Lights_Front_Chrome',
    'Lights_Front_BlackShiny',
    'Lights_Front_Chrome.003',
    'Painel_PaddleShifter',
    'Body_Roof_HPE-S (Shiny details)',
    'Body_Roof_HPE-S',
    'Body_VD_Glass_Top',
    'Body_Roof_Open',
    'LogoBack_Vidro',
    'LogoBack_S',
    'LogoBack_HPE',
    'P_Front_SideDetail_L',
    'P_Front_SideDetail_R',
    'Seat_Front_Base_HPE_L',
    'Seat_Front_Base_HPE_R',
    'P_Back_Int_R_Leather_Black',
    'P_Back_Int_L_Leather_Black',
    'LogoFront_BlackShiny',
    'Gear_Panel_HPE',
    'Button_GearPanel_Parking_Detail',
    'Button_GearPanel_Parking',
    'Button_GearPanel_SeatHealting'
];

const POST_PROCESSING = {
    "postProcessReady": true,
    "ssrEnable": true,
    "ssrFactor": 1,
    "ssaoEnable": true,
    "ssaoRadius": 0.06524894406688769,
    "ssaoIntensity": 0.5,
    "ssaoBias": 0.013049788813377539,
    "vignetteEnable": false
};
const TEXTURES_SETTINGS = {
    'brancoAlpino': {
        'paint': {
            "ClearCoat": 0.3,
            "ClearCoatRoughness": 0.2,
            "MetalnessPBR": 0.85,
            "RoughnessPBR":0.3,
            "AlbedoPBR": 1
        },
        'lowerPaint': {
            "ClearCoatRoughness": 0.072
        },
        'camera': {
            'exposure': 1, //1 as default
        }
    },
    'azulBaikal': {
        'paint': {
            "ClearCoat": 0.2,
            "ClearCoatRoughness": 0.2,
            "MetalnessPBR": 0.5,
            "RoughnessPBR":0.5,
            "AlbedoPBR": 0.5
        },
        'lowerPaint': {
            "ClearCoatRoughness": 0.072
        },
        'camera': {
            'exposure': 2.08
        }
    },
    'pretoOnix': {
        'paint': {
            "ClearCoat": 0.3,
            "ClearCoatRoughness": 0.2,
            "MetalnessPBR": 0.85,
            "RoughnessPBR":0.1,
            "AlbedoPBR": 0.5
        },
        'lowerPaint': {
            "ClearCoatRoughness": 0
        },
        'camera': {
            'exposure': 1
        }
    },
    'prataLitio': {
        'paint': {
            "ClearCoat": 0.85,
            "ClearCoatRoughness": 0.3,
            "MetalnessPBR": 0.5,
            "RoughnessPBR":0.4,
            "AlbedoPBR": 1
        },
        'lowerPaint': {
            "ClearCoatRoughness": 0
        },
        'camera': {
            'exposure': 5
        }
    },
    'vermelhoLucid': {
        'paint': {
            "ClearCoat": 0.3,
            "ClearCoatRoughness": 0.2,
            "MetalnessPBR": 0.85,
            "RoughnessPBR":0.3,
            "AlbedoPBR": 0.5
        },
        'lowerPaint': {
            "ClearCoatRoughness": 0
        },
        'camera': {
            'exposure': 1
        }
    },
    'prataCool': {
        'paint': {
            "ClearCoat": 1,
            "ClearCoatRoughness": 0.1,
            "MetalnessPBR": 1,
            "RoughnessPBR":0.6,
            "AlbedoPBR": 0.5
        },
        'lowerPaint': {
            "ClearCoatRoughness": 0
        },
        'camera': {
            'exposure': 1.5
        }
    },
    'cinzaLondrino': {
        'paint': {
            "ClearCoat": 0.2,
            "ClearCoatRoughness": 0.2,
            "MetalnessPBR": 0.85,
            "RoughnessPBR":0.3,
            "AlbedoPBR": 0.5
        },
        'lowerPaint': {
            "ClearCoatRoughness":0
        },
        'camera': {
            'exposure': 5
        }
    }
};

const TEXTURES_UIDS = {
    "bodyRoughness": null,
    "detailsColor": null,
    "detailsRoughness": null,
    "body": null,
    "leatherAlbedoFront": null,
    "leatherAlbedoBack": null
};

export {
    CAR_TEXTURES,
    LOGOS,
    MAX_TEXTURE_SIZE,
    NODES_TO_REMOVE,
    POST_PROCESSING,
    TEXTURES_SETTINGS,
    TEXTURES_UIDS
};
