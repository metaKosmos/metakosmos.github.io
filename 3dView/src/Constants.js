const BASE_URL = "https://metakosmos.github.io";
const CAR_TEXTURES = {
    "GLS": {
        "bodyColor": {
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/branco/Car_branco_BodyTexture_PBR_Diffuse.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/Cinza Londrino/Car_CinzaLondrino_BodyTexture_PBR_Diffuse.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/PrataLitio/Car_PrataLitio_BodyTexture_PBR_Diffuse.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/preto/Car_Preto_BodyTextures.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Roughness.png`,
            "specular": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Specular.png`,
        },
        "detailsColor": {
            "color": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Details_Color.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Details_Roughness.png`,
            "steering": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/Volante_Plastic_Matte_BaseColor.png`,
        },

        "bodyColor02":{
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/branco/Car_Body_Textures.V2__PBR_Diffuse.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/Cinza Londrino/Car_Body_Textures.V2__PBR_Diffuse.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/PrataLitio/Car_Body_Textures.V2__PBR_Diffuse.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/preto/Car_Body_Textures.V2__PBR_Diffuse.png`,
        },
        "bottonColor":{
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/branco/Car_branco_Body_bottom_PBR_Diffuse.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/Cinza Londrino/Car_CinzaLondrino_Body_bottom_PBR_Diffuse.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/PrataLitio/Car_PrataLitio_Body_bottom_PBR_Diffuse.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/preto/Car_Preto_BodyBottom.png`,
        },
        "detsColor":{
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
        },
        "detsColor02":{
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/branco/car_branco_detsTexture.V2_PBR_Diffuse.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/Cinza Londrino/car_CinzaLondrino_detsTexture.V2_PBR_Diffuse.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/PrataLitio/car_PrataLitio_detsTexture.V2_PBR_Diffuse.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/preto/Car_Preto_DetsTexture.v2.png`,
        },
        "detsColor03":{
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/ALL/Car_Dets_Textures.V3__PBR_Diffuse.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/ALL/Car_Dets_Textures.V3__PBR_Diffuse.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/ALL/Car_Dets_Textures.V3__PBR_Diffuse.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/ALL/Car_Dets_Textures.V3__PBR_Diffuse.png`,
        },
        "detsColor04":{
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/ALL/car_Dets_Textures.V4__PBR_Diffuse.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/ALL/car_Dets_Textures.V4__PBR_Diffuse.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/ALL/car_Dets_Textures.V4__PBR_Diffuse.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/ALL/car_Dets_Textures.V4__PBR_Diffuse.png`,
        },
    },
    "HPE": {
        "bodyColor": {
            "azulBaikal": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Azul_Baikal.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Branco_Alpino.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Branco_Alpino.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Prata_Litio.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Branco_Alpino.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Preto_Onix.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Roughness.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Vermelho_Lucid.png`
        },
        "detailsColor": {
            "color": `${BASE_URL}/3dView/assets/textures/cars/HPE/detailsColor/HPE_Details_Color.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/HPE/detailsColor/HPE_Detailss_Roughnes.png`,
            "steering": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/Volante_Plastic_Matte_BaseColor.png`
        },
        "bodyColor02":{
            "azulBaikal": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Azul_Baikal.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Branco_Alpino.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Branco_Alpino.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Branco_Alpino.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Prata_Litio.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Preto_Onix.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Roughness.png`,
            "specular": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Specular.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/GLS_Body_Vermelho_Lucid.png`
        },
        "bottonColor":{
            "azulBaikal": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Azul_Baikal.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Branco_Alpino.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Branco_Alpino.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Prata_Litio.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Branco_Alpino.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Preto_Onix.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Roughness.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/HPE/bodyColor/HPE_Body_Vermelho_Lucid.png`
        },

        "detsColor":{
            "azulBaikal":  `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "specular": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`
        },
        "detsColor02":{
            "azulBaikal": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "specular": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`
        },
        "detsColor03":{
            "azulBaikal": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/Car_Dets_Textures.V3__PBR_Diffuse_Azul.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/Car_Dets_Textures.V3__PBR_Diffuse_Branco.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/Car_Dets_Textures.V3__PBR_Diffuse_Branco.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/Car_Dets_Textures.V3__PBR_Diffuse_Cinza.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/Car_Dets_Textures.V3__PBR_Diffuse_Branco.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/ALL/Car_Dets_Textures.V3__PBR_Diffuse.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/HPE_Body_Roughness.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/Car_Dets_Textures.V3__PBR_Diffuse-Vermelho.png`
        },
        "detsColor04":{
            "azulBaikal": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "specular": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`
        },
    },
    "HPE_S": {
        "bodyColor": {
            "azulBaikal": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Azul_Baikal.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Branco_Alpino.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Branco_Alpino.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Prata_Litio.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Branco_Alpino.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Preto_Onix.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Roughness.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Vermelho_Lucid.png`
        },
        "detailsColor": {
            "color": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/detailsColor/HPE-S_Details_Color.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/detailsColor/HPE-S_Details_Roughness.png`,
            "steering": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/detailsColor/Volante_Plastic_Matte_BaseColor_HPE-S.jpg`
        },
        "bodyColor02":{
            "azulBaikal": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Azul_Baikal.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Branco_Alpino.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Branco_Alpino.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Prata_Litio.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Branco_Alpino.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Preto_Onix.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Roughness.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Vermelho_Lucid.png`
        },
        "bottonColor":{
            "azulBaikal": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Azul_Baikal.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Branco_Alpino.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Branco_Alpino.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Prata_Litio.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Branco_Alpino.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Preto_Onix.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Roughness.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Vermelho_Lucid.png`
        },

        "detsColor":{
            "azulBaikal":  `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "specular": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`
        },
        "detsColor02":{
            "azulBaikal": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "specular": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`
        },
        "detsColor03":{
            "azulBaikal": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/Car_Dets_Textures.V3__PBR_Diffuse_Azul.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/Car_Dets_Textures.V3__PBR_Diffuse_Branco.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/Car_Dets_Textures.V3__PBR_Diffuse_Branco.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/Car_Dets_Textures.V3__PBR_Diffuse_Cinza.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/Car_Dets_Textures.V3__PBR_Diffuse_Branco.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/ALL/Car_Dets_Textures.V3__PBR_Diffuse.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/HPE_Body_Roughness.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/Car_Dets_Textures.V3__PBR_Diffuse-Vermelho.png`
        },
        "detsColor04":{
            "azulBaikal": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "specular": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`
        },
    },
    // Not sure where the s-awc stuff comes from
    "S-AWC": {
        "bodyColor": {
            "azulBaikal": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Azul_Baikal.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Branco_Alpino.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Branco_Alpino.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Prata_Litio.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Branco_Alpino.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Preto_Onix.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Roughness.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Vermelho_Lucid.png`
        },
        "detailsColor": {
            "color": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/detailsColor/HPE-S_Details_Color.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/detailsColor/HPE-S_Details_Roughness.png`,
            "steering": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/detailsColor/Volante_Plastic_Matte_BaseColor_HPE-S.jpg`
        },
        "bodyColor02":{
            "azulBaikal": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Azul_Baikal.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Branco_Alpino.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Branco_Alpino.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Prata_Litio.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Branco_Alpino.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Preto_Onix.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Roughness.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Vermelho_Lucid.png`
        },
        "bottonColor":{
            "azulBaikal": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Azul_Baikal.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Branco_Alpino.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Branco_Alpino.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Prata_Litio.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Branco_Alpino.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Preto_Onix.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Roughness.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/HPE-S/bodyColor/HPE-S_Body_Vermelho_Lucid.png`
        },
        
        "detsColor":{
            "azulBaikal":  `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "specular": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`
        },
        "detsColor02":{
            "azulBaikal": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "specular": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`
        },
        "detsColor03":{
            "azulBaikal": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/Car_Dets_Textures.V3__PBR_Diffuse_Azul.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/Car_Dets_Textures.V3__PBR_Diffuse_Branco.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/Car_Dets_Textures.V3__PBR_Diffuse_Branco.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/Car_Dets_Textures.V3__PBR_Diffuse_Cinza.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/Car_Dets_Textures.V3__PBR_Diffuse_Branco.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/ALL/Car_Dets_Textures.V3__PBR_Diffuse.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/HPE_Body_Roughness.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/GLS/bodyColor/Car_Dets_Textures.V3__PBR_Diffuse-Vermelho.png`
        },
        "detsColor04":{
            "azulBaikal": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "brancoAlpino": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "cinzaLondrino": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "prataCool": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "prataLitio": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "pretoOnix": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "roughness": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "specular": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`,
            "vermelhoLucid": `${BASE_URL}/3dView/assets/textures/cars/GLS/detailsColor/GLS_Dets_Color.png`
        },
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
            "AlbedoPBR": 0.8,
            "MetalnessPBR": 0.6,
            "SpecularPBR": 0,
            "RoughnessPBR":0.3,
            "NormalmapPBR": 1,
            "ClearCoat": 0.3,
            "ClearCoatThickness": 20,
            "ClearCoatReflectivity": 0,
            "ClearCoatRoughness": 0.2,
            "ClearCoatNormalmap": 0.2,
        },
        'lowerPaint': {
            "ClearCoatRoughness": 0.072
        },
        'camera': {
            'exposure': 0.8, //1 as default
        }
    },
    'azulBaikal': {
        'paint': {
            "AlbedoPBR": 1,
            "MetalnessPBR": 0.4,
            "SpecularPBR": 0,
            "RoughnessPBR":0.2,
            "ClearCoat": 0,
            "ClearCoatThickness": 20,
            "ClearCoatReflectivity": 0,
            "ClearCoatRoughness": 0,
            "ClearCoatNormalmap": 0,
        },
        'lowerPaint': {
            "ClearCoatRoughness": 0.072
        },
        'camera': {
            'exposure': 1
        }
    },
    'pretoOnix': {
        'paint': {
            "AlbedoPBR": 0.5,
            "MetalnessPBR": 1,
            "SpecularPBR": 0,
            "RoughnessPBR": 1,
            "ClearCoat": 0.3,
            "ClearCoatThickness": 20,
            "ClearCoatReflectivity": 0,
            "ClearCoatRoughness": 0.2,
            "ClearCoatNormalmap": 1,
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
            "AlbedoPBR": 0.3,
            "MetalnessPBR": 0.6,
            "SpecularPBR": 0,
            "RoughnessPBR":0.5,
            "ClearCoat": 0.2,
            "ClearCoatThickness": 20,
            "ClearCoatReflectivity": 0,
            "ClearCoatRoughness": 0.2,
            "ClearCoatNormalmap": 1,
        },
        'lowerPaint': {
            "ClearCoatRoughness": 0
        },
        'camera': {
            'exposure': 1.15
        }
    },
    'vermelhoLucid': {
        'paint': {
            "AlbedoPBR": 0.5,
            "MetalnessPBR": 1,
            "SpecularPBR": 0,
            "RoughnessPBR":0.5,
            "ClearCoat": 0.3,
            "ClearCoatThickness": 15,
            "ClearCoatReflectivity": 0,
            "ClearCoatRoughness": 0.2,
            "ClearCoatNormalmap": 1,
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
            "AlbedoPBR": 1,
            "MetalnessPBR": 0.8,
            "SpecularPBR": 0,
            "RoughnessPBR":0.3,
            "ClearCoat": 0,
            "ClearCoatThickness": 20,
            "ClearCoatReflectivity": 0,
            "ClearCoatRoughness": 0.2,
            "ClearCoatNormalmap": 1,
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
            "AlbedoPBR": 0.6,
            "MetalnessPBR": 1,
            "SpecularPBR": 0,
            "RoughnessPBR":0.4,
            "ClearCoat": 1,
            "ClearCoatThickness": 15,
            "ClearCoatReflectivity": 0,
            "ClearCoatRoughness": 0.3,
            "ClearCoatNormalmap": 1,
        },
        'lowerPaint': {
            "ClearCoatRoughness":0
        },
        'camera': {
            'exposure': 1
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
