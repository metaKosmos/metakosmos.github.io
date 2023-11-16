const BASE_URL = "https://metakosmos.github.io/mitsubishimotors_3dView/";
const CAR_TEXTURES = {
    "GLS": {
        "bodyColor": {
            "azulBaikal": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Azul_Baikal.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Branco_Alpino.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Cinza_Londrino.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Prata_Cool.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Prata_Litio.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Preto_Onix.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Roghness.png`,
            "specular": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Specular.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Vermelho_Lucid.png`
        },
        "detailsColor": {
            "color": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Roughness.png`
        }
    },
    "HPE": {
        "bodyColor": {
            "azulBaikal": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Azul_Baikal.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Branco_Alpino.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Cinza_Londrino.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Prata_Cool.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Prata_Litio.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Preto_Onix.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Roghness.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Vermelho_Lucid.png`
        },
        "detailsColor": {
            "color": `${BASE_URL}/3dView/assets/textures/cars/HPE/detailsColor/HPE_Dets_Color.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/HPE/detailsColor/HPE_Dets_Roghness.png`
        }
    },
    "HPE_S": {
        "bodyColor": {
            "azulBaikal": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_AzulBaikal.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_BrancoAlpino.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_CinzaLondrino.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_PrataCool.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_PrataLitio.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_PretoOnix.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Roghness.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_VermelhoLucid.png`
        },
        "detailsColor": {
            "color": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/detailsColor/HPE-S_Dets_Color.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/detailsColor/HPE-S_Dets_Roghness.png`
        }
    },
    // Not sure where the s-awc stuff comes from
    "S-AWC": {
        "bodyColor": {},
        "detailsColor": {}
    },
    "seats": {
        "backSeat": {
            "plasticAlbedo": `${BASE_URL}/3dView/assets/textures/seats/backSeat/Black_Plastic_albedo.jpg`,
            "platicNormal": `${BASE_URL}/3dView/assets/textures/seats/backSeat/Black_Plastic_normal.png`,
            "plasticRoughness": `${BASE_URL}/3dView/assets/textures/seats/backSeat/Black_Plastic_roughness.jpg`,
            "leatherBlack": `${BASE_URL}/3dView/assets/textures/seats/backSeat/Seat_Back_LeatherBlack_Color.png`,
            "leatherWhite": `${BASE_URL}/3dView/assets/textures/seats/backSeat/Seat_Back_LeatherWhite_Color.png`,
            "seatWhiteAlbedo": `${BASE_URL}/3dView/assets/textures/seats/backSeat/Seat_Back_White_albedo.jpg`,
            "seatWhiteNormal": `${BASE_URL}/3dView/assets/textures/seats/backSeat/Seat_Back_White_normal.png`,
            "seatWhiteRoughness": `${BASE_URL}/3dView/assets/textures/seats/backSeat/Seat_Back_White_roughness.jpg`
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
    "vignetteEnable": false
}

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
    TEXTURES_UIDS
};
