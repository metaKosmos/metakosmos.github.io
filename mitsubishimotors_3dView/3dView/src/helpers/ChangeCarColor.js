import {carMaterials, sketchfabDict, carSelection, texturesUids, camera} from "../Globals.js";

function ChangeCarColor(index) {

    if (carMaterials.paint == null || sketchfabDict.api == null) {
        console.error("Sketchfab API not loaded yet or failed.");
        return;
    }

    carMaterials.paint.channels.RoughnessPBR.texture = null
    sketchfabDict
        .api
        .setMaterial(carMaterials.paint);

    if (carSelection.selectedModel == 0) {

        if (carSelection.latestModelSelected != carSelection.selectedModel) {
            //roughness
            sketchfabDict
                .api
                .updateTexture('', texturesUids.bodyRoughness, function (err, bodyRoughnessUID) {
                    if (!err) {
                        //console.log('Replaced texture with UID', bodyRoughnessUID);
                    }
                });

            //Details
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/GLS/Dets%20Color/GLS_Dets_Co' +
                        'lor.png',
                texturesUids.detailsColor, function (err, detailsColor) {
                    if (!err) {
                        //console.log('Replaced texture with UID', detailsColor);
                    }
                });

            //Details Roughtness
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/GLS/Dets%20Color/GLS_Dets_Ro' +
                        'ghness.png',
                texturesUids.detailsRoughness, function (err, detailsRoughness) {
                    if (!err) {
                        //console.log('Replaced texture with UID', detailsRoughness);
                    }
                });
        }

        if (index == 0) {
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/GLS/Body%20Color/GLS_Body_Br' +
                        'anco_Alpino.png',
                texturesUids.bodyTexture, function (err, bodyTexture) {
                    if (!err) {
                        sketchfabDict
                            .api
                            .updateTexture('https://seedsofnature.github.io/metakosmos/textures/GLS/Body%20Color/GLS_Body_Ro' +
                                    'ghness.png',
                            texturesUids.bodyRoughness, function (err, bodyRoughness) {});
                        //console.log('Replaced texture with UID', texturesUids.bodyTexture);
                        carMaterials.paint.channels.ClearCoatRoughness.factor = 0.072;
                        carMaterials.paint.channels.MetalnessPBR.factor = 0.12;
                        carMaterials.paint.channels.AlbedoPBR.factor = 1;
                        carMaterials.lowerPaint.channels.ClearCoatRoughness.factor = 0.072;
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.paint);
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.lowerPaint);
                        camera.enviromment.exposure = 1;
                        sketchfabDict
                            .api
                            .setEnvironment(camera.enviromment);
                    }
                });
        } else if (index == 2) {
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/GLS/Body%20Color/GLS_Body_Pr' +
                        'eto_Onix.png',
                texturesUids.bodyTexture, function (err, bodyTexture) {
                    if (!err) {
                        carMaterials.paint.channels.ClearCoatRoughness.factor = 0;
                        carMaterials.paint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.paint.channels.MetalnessPBR.factor = 0.85;
                        carMaterials.lowerPaint.channels.ClearCoatRoughness.factor = 0;
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.lowerPaint);
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.paint);
                        //console.log('Replaced texture with UID', texturesUids.bodyTexture);
                    }
                    camera.enviromment.exposure = 1;
                    sketchfabDict
                        .api
                        .setEnvironment(camera.enviromment);
                });
        } else if (index == 1) {
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/GLS/Body%20Color/GLS_Body_Az' +
                        'ul_Baikal.png',
                texturesUids.bodyTexture, function (err, bodyTexture) {
                    if (!err) {
                        sketchfabDict
                            .api
                            .updateTexture('https://seedsofnature.github.io/metakosmos/textures/GLS/Body%20Color/GLS_Body_Ro' +
                                    'ghness.png',
                            texturesUids.bodyRoughness, function (err, bodyRoughness) {});
                        //console.log('Replaced texture with UID', texturesUids.bodyTexture);
                        carMaterials.paint.channels.ClearCoatRoughness.factor = 0.072;
                        carMaterials.paint.channels.MetalnessPBR.factor = 0.85;
                        carMaterials.paint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.lowerPaint.channels.ClearCoatRoughness.factor = 0.072;
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.lowerPaint);
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.paint);

                        camera.enviromment.exposure = 2.08;
                        sketchfabDict
                            .api
                            .setEnvironment(camera.enviromment);

                    }
                });
        } else if (index == 3) {
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/GLS/Body%20Color/GLS_Body_Pr' +
                        'ata_Litio.png',
                texturesUids.bodyTexture, function (err, bodyTexture) {
                    if (!err) {
                        //console.log('Replaced texture with UID', texturesUids.bodyTexture);
                        carMaterials.paint.channels.ClearCoatRoughness.factor = 0;
                        carMaterials.paint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.paint.channels.MetalnessPBR.factor = 0.85;
                        carMaterials.lowerPaint.channels.ClearCoatRoughness.factor = 0;
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.lowerPaint);
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.paint);
                        camera.enviromment.exposure = 1;
                        sketchfabDict
                            .api
                            .setEnvironment(camera.enviromment);
                    }
                });
        } else if (index == 4) {
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/GLS/Body%20Color/GLS_Body_Ve' +
                        'rmelho_Lucid.png',
                texturesUids.bodyTexture, function (err, bodyTexture) {
                    if (!err) {
                        //console.log('Replaced texture with UID', texturesUids.bodyTexture);
                        carMaterials.paint.channels.ClearCoatRoughness.factor = 0;
                        carMaterials.paint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.paint.channels.MetalnessPBR.factor = 0.85;
                        carMaterials.lowerPaint.channels.ClearCoatRoughness.factor = 0;
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.lowerPaint);
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.paint);
                        camera.enviromment.exposure = 1;
                        sketchfabDict
                            .api
                            .setEnvironment(camera.enviromment);
                    }
                });
        } else if (index == 5) {
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/GLS/Body%20Color/GLS_Body_Pr' +
                        'ata_Cool.png',
                texturesUids.bodyTexture, function (err, bodyTexture) {
                    if (!err) {
                        //console.log('Replaced texture with UID', texturesUids.bodyTexture);
                        carMaterials.paint.channels.ClearCoatRoughness.factor = 0;
                        carMaterials.paint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.paint.channels.MetalnessPBR.factor = 0.85;
                        carMaterials.lowerPaint.channels.ClearCoatRoughness.factor = 0;
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.lowerPaint);
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.paint);
                        camera.enviromment.exposure = 1;
                        sketchfabDict
                            .api
                            .setEnvironment(camera.enviromment);
                    }
                });
        } else if (index == 6) {
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/GLS/Body%20Color/GLS_Body_Ci' +
                        'nza_Londrino.png',
                texturesUids.bodyTexture, function (err, bodyTexture) {
                    if (!err) {
                        //console.log('Replaced texture with UID', texturesUids.bodyTexture);
                        carMaterials.paint.channels.ClearCoatRoughness.factor = 0;
                        carMaterials.paint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.paint.channels.MetalnessPBR.factor = 0.85;
                        carMaterials.lowerPaint.channels.ClearCoatRoughness.factor = 0;
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.lowerPaint);
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.paint);
                        camera.enviromment.exposure = 1;
                        sketchfabDict
                            .api
                            .setEnvironment(camera.enviromment);
                    }
                });
        }
    } else if (carSelection.selectedModel == 1) {

        if (carSelection.latestModelSelected != carSelection.selectedModel) {
            //roughness
            sketchfabDict
                .api
                .updateTexture('', texturesUids.bodyRoughness, function (err, bodyRoughness) {
                    if (!err) {
                        //console.log('Replaced texture with UID', texturesUids.bodyRoughness);

                    }
                });

            //Details
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/HPE/Dets%20Color/HPE_Dets_Co' +
                        'lor.png',
                texturesUids.detailsColor, function (err, detailsColor) {
                    if (!err) {
                        //console.log('Replaced texture with UID', texturesUids.detailsColor);
                    }
                });

            //Details Roughtness
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/HPE/Dets%20Color/HPE_Dets_Ro' +
                        'ghness.png',
                texturesUids.detailsRoughness, function (err, detailsRoughness) {
                    if (!err) {
                        //console.log('Replaced texture with UID', texturesUids.detailsRoughness);
                    }
                });
        }

        if (index == 0) {
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/HPE/Body%20Color/HPE_Body_Br' +
                        'anco_Alpino.png',
                texturesUids.bodyTexture, function (err, bodyTexture) {
                    if (!err) {
                        sketchfabDict
                            .api
                            .updateTexture('https://seedsofnature.github.io/metakosmos/textures/HPE/Body%20Color/HPE_Body_Ro' +
                                    'ghness.png',
                            texturesUids.bodyRoughness, function (err, bodyRoughness) {});
                        //console.log('Replaced texture with UID', texturesUids.bodyTexture);
                        carMaterials.paint.channels.ClearCoatRoughness.factor = 0.072;
                        carMaterials.paint.channels.AlbedoPBR.factor = 1;
                        carMaterials.paint.channels.MetalnessPBR.factor = 0.12;
                        carMaterials.lowerPaint.channels.ClearCoatRoughness.factor = 0.072;
                        carMaterials.lowerPaint.channels.AlbedoPBR.factor = 1;
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.lowerPaint);
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.paint);
                        camera.enviromment.exposure = 1;
                        sketchfabDict
                            .api
                            .setEnvironment(camera.enviromment);
                    }
                });
        } else if (index == 2) {
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/HPE/Body%20Color/HPE_Body_Pr' +
                        'eto_Onix.png',
                texturesUids.bodyTexture, function (err, bodyTexture) {
                    if (!err) {
                        //console.log('Replaced texture with UID', texturesUids.bodyTexture);
                        carMaterials.paint.channels.ClearCoatRoughness.factor = 0;
                        carMaterials.paint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.lowerPaint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.paint.channels.MetalnessPBR.factor = 0.85;
                        carMaterials.lowerPaint.channels.ClearCoatRoughness.factor = 0;
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.lowerPaint);
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.paint);
                        camera.enviromment.exposure = 1;
                        sketchfabDict
                            .api
                            .setEnvironment(camera.enviromment);
                    }
                });
        } else if (index == 1) {
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/HPE/Body%20Color/HPE_Body_Az' +
                        'ul_Baikal.png',
                texturesUids.bodyTexture, function (err, bodyTexture) {
                    if (!err) {
                        sketchfabDict
                            .api
                            .updateTexture('https://seedsofnature.github.io/metakosmos/textures/HPE/Body%20Color/HPE_Body_Ro' +
                                    'ghness.png',
                            texturesUids.bodyRoughness, function (err, bodyRoughness) {});
                        //console.log('Replaced texture with UID', texturesUids.bodyTexture);
                        carMaterials.paint.channels.ClearCoatRoughness.factor = 0.072;
                        carMaterials.paint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.lowerPaint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.paint.channels.MetalnessPBR.factor = 0.85;
                        carMaterials.lowerPaint.channels.ClearCoatRoughness.factor = 0.072;
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.lowerPaint);
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.paint);
                        camera.enviromment.exposure = 2.08;
                        sketchfabDict
                            .api
                            .setEnvironment(camera.enviromment);
                    }
                });
        } else if (index == 3) {
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/HPE/Body%20Color/HPE_Body_Pr' +
                        'ata_Litio.png',
                texturesUids.bodyTexture, function (err, bodyTexture) {
                    if (!err) {
                        //console.log('Replaced texture with UID', texturesUids.bodyTexture);
                        carMaterials.paint.channels.ClearCoatRoughness.factor = 0;
                        carMaterials.paint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.lowerPaint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.paint.channels.MetalnessPBR.factor = 0.85;
                        carMaterials.lowerPaint.channels.ClearCoatRoughness.factor = 0;
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.lowerPaint);
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.paint);
                        camera.enviromment.exposure = 1;
                        sketchfabDict
                            .api
                            .setEnvironment(camera.enviromment);
                    }
                });
        } else if (index == 4) {
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/HPE/Body%20Color/HPE_Body_Ve' +
                        'rmelho_Lucid.png',
                texturesUids.bodyTexture, function (err, bodyTexture) {
                    if (!err) {
                        //console.log('Replaced texture with UID', texturesUids.bodyTexture);
                        carMaterials.paint.channels.ClearCoatRoughness.factor = 0;
                        carMaterials.paint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.lowerPaint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.paint.channels.MetalnessPBR.factor = 0.85;
                        carMaterials.lowerPaint.channels.ClearCoatRoughness.factor = 0;
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.lowerPaint);
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.paint);
                        camera.enviromment.exposure = 1;
                        sketchfabDict
                            .api
                            .setEnvironment(camera.enviromment);
                    }
                });
        } else if (index == 5) {
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/HPE/Body%20Color/HPE_Body_Pr' +
                        'ata_Cool.png',
                texturesUids.bodyTexture, function (err, bodyTexture) {
                    if (!err) {
                        //console.log('Replaced texture with UID', texturesUids.bodyTexture);
                        carMaterials.paint.channels.ClearCoatRoughness.factor = 0;
                        carMaterials.paint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.lowerPaint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.paint.channels.MetalnessPBR.factor = 0.85;
                        carMaterials.lowerPaint.channels.ClearCoatRoughness.factor = 0;
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.lowerPaint);
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.paint);
                        camera.enviromment.exposure = 1;
                        sketchfabDict
                            .api
                            .setEnvironment(camera.enviromment);
                    }
                });
        } else if (index == 6) {
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/HPE/Body%20Color/HPE_Body_Ci' +
                        'nza_Londrino.png',
                texturesUids.bodyTexture, function (err, bodyTexture) {
                    if (!err) {
                        //console.log('Replaced texture with UID', texturesUids.bodyTexture);
                        carMaterials.paint.channels.ClearCoatRoughness.factor = 0;
                        carMaterials.paint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.lowerPaint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.paint.channels.MetalnessPBR.factor = 0.85;
                        carMaterials.lowerPaint.channels.ClearCoatRoughness.factor = 0;
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.lowerPaint);
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.paint);
                        camera.enviromment.exposure = 1;
                        sketchfabDict
                            .api
                            .setEnvironment(camera.enviromment);
                    }
                });
        }
    } else if (carSelection.selectedModel == 2) {

        if (carSelection.latestModelSelected != carSelection.selectedModel) {
            //roughness
            sketchfabDict
                .api
                .updateTexture('', texturesUids.bodyRoughness, function (err, bodyRoughness) {
                    if (!err) {
                        //console.log('Replaced texture with UID', texturesUids.bodyRoughness);
                    }
                });

            //Details
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/HPE-S/Dets%20Color/HPE-S_Det' +
                        's_Color.png',
                texturesUids.detailsColor, function (err, detailsColor) {
                    if (!err) {
                        //console.log('Replaced texture with UID', texturesUids.detailsColor);
                    }
                });

            //Details Roughtness
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/HPE-S/Dets%20Color/HPE-S_Det' +
                        's_Roghness.png',
                texturesUids.detailsRoughness, function (err, detailsRoughness) {
                    if (!err) {
                        //console.log('Replaced texture with UID', texturesUids.detailsRoughness);

                    }
                });
        }

        if (index == 0) {
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/HPE-S/Body%20Color/HPE-S_Bod' +
                        'y_BrancoAlpino.png',
                texturesUids.bodyTexture, function (err, bodyTexture) {
                    if (!err) {
                        sketchfabDict
                            .api
                            .updateTexture('https://seedsofnature.github.io/metakosmos/textures/HPE-S/Body%20Color/HPE-S_Bod' +
                                    'y_Roghness.png',
                            texturesUids.bodyRoughness, function (err, bodyRoughness) {});
                        //console.log('Replaced texture with UID', texturesUids.bodyTexture);
                        carMaterials.paint.channels.ClearCoatRoughness.factor = 0.072;
                        carMaterials.paint.channels.AlbedoPBR.factor = 1;
                        carMaterials.lowerPaint.channels.AlbedoPBR.factor = 1;
                        carMaterials.paint.channels.MetalnessPBR.factor = 0.12;
                        carMaterials.lowerPaint.channels.ClearCoatRoughness.factor = 0.072;
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.lowerPaint);
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.paint);
                        camera.enviromment.exposure = 1;
                        sketchfabDict
                            .api
                            .setEnvironment(camera.enviromment);
                    }

                });
        } else if (index == 2) {
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/HPE-S/Body%20Color/HPE-S_Bod' +
                        'y_PretoOnix.png',
                texturesUids.bodyTexture, function (err, bodyTexture) {
                    if (!err) {
                        //console.log('Replaced texture with UID', texturesUids.bodyTexture);
                        carMaterials.paint.channels.ClearCoatRoughness.factor = 0;
                        carMaterials.paint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.lowerPaint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.paint.channels.MetalnessPBR.factor = 0.85;
                        carMaterials.lowerPaint.channels.ClearCoatRoughness.factor = 0;
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.lowerPaint);
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.paint);
                        camera.enviromment.exposure = 1;
                        sketchfabDict
                            .api
                            .setEnvironment(camera.enviromment);
                    }
                });
        } else if (index == 1) {
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/HPE-S/Body%20Color/HPE-S_Bod' +
                        'y_AzulBaikal.png',
                texturesUids.bodyTexture, function (err, bodyTexture) {
                    if (!err) {
                        sketchfabDict
                            .api
                            .updateTexture('https://seedsofnature.github.io/metakosmos/textures/HPE-S/Body%20Color/HPE-S_Bod' +
                                    'y_Roghness.png',
                            texturesUids.bodyRoughness, function (err, bodyRoughness) {});
                        //console.log('Replaced texture with UID', texturesUids.bodyTexture);
                        carMaterials.paint.channels.ClearCoatRoughness.factor = 0.072;
                        carMaterials.paint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.lowerPaint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.paint.channels.MetalnessPBR.factor = 0.85;
                        carMaterials.lowerPaint.channels.ClearCoatRoughness.factor = 0.072;
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.lowerPaint);
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.paint);
                        camera.enviromment.exposure = 2.08;
                        sketchfabDict
                            .api
                            .setEnvironment(camera.enviromment);
                    }
                });
        } else if (index == 3) {
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/HPE-S/Body%20Color/HPE-S_Bod' +
                        'y_PrataLitio.png',
                texturesUids.bodyTexture, function (err, bodyTexture) {
                    if (!err) {
                        //console.log('Replaced texture with UID', texturesUids.bodyTexture);
                        carMaterials.paint.channels.ClearCoatRoughness.factor = 0;
                        carMaterials.paint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.lowerPaint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.paint.channels.MetalnessPBR.factor = 0.85;
                        carMaterials.lowerPaint.channels.ClearCoatRoughness.factor = 0;
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.lowerPaint);
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.paint);
                        camera.enviromment.exposure = 1;
                        sketchfabDict
                            .api
                            .setEnvironment(camera.enviromment);
                    }
                });
        } else if (index == 4) {
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/HPE-S/Body%20Color/HPE-S_Bod' +
                        'y_VermelhoLucid.png',
                texturesUids.bodyTexture, function (err, bodyTexture) {
                    if (!err) {
                        //console.log('Replaced texture with UID', texturesUids.bodyTexture);
                        carMaterials.paint.channels.ClearCoatRoughness.factor = 0;
                        carMaterials.paint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.lowerPaint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.paint.channels.MetalnessPBR.factor = 0.85;
                        carMaterials.lowerPaint.channels.ClearCoatRoughness.factor = 0;
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.lowerPaint);
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.paint);
                        camera.enviromment.exposure = 1;
                        sketchfabDict
                            .api
                            .setEnvironment(camera.enviromment);
                    }
                });
        } else if (index == 5) {
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/HPE-S/Body%20Color/HPE-S_Bod' +
                        'y_PrataCool.png',
                texturesUids.bodyTexture, function (err, bodyTexture) {
                    if (!err) {
                        //console.log('Replaced texture with UID', texturesUids.bodyTexture);
                        carMaterials.paint.channels.ClearCoatRoughness.factor = 0;
                        carMaterials.paint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.lowerPaint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.paint.channels.MetalnessPBR.factor = 0.85;
                        carMaterials.lowerPaint.channels.ClearCoatRoughness.factor = 0;
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.lowerPaint);
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.paint);
                        camera.enviromment.exposure = 1;
                        sketchfabDict
                            .api
                            .setEnvironment(camera.enviromment);
                    }
                });
        } else if (index == 6) {
            sketchfabDict
                .api
                .updateTexture('https://seedsofnature.github.io/metakosmos/textures/HPE-S/Body%20Color/HPE-S_Bod' +
                        'y_CinzaLondrino.png',
                texturesUids.bodyTexture, function (err, bodyTexture) {
                    if (!err) {
                        //console.log('Replaced texture with UID', texturesUids.bodyTexture);
                        carMaterials.paint.channels.ClearCoatRoughness.factor = 0;
                        carMaterials.paint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.lowerPaint.channels.AlbedoPBR.factor = 0.5;
                        carMaterials.paint.channels.MetalnessPBR.factor = 0.85;
                        carMaterials.lowerPaint.channels.ClearCoatRoughness.factor = 0;
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.lowerPaint);
                        sketchfabDict
                            .api
                            .setMaterial(carMaterials.paint);
                        camera.enviromment.exposure = 1;
                        sketchfabDict
                            .api
                            .setEnvironment(camera.enviromment);
                    }
                });
        }
    }
}

export default ChangeCarColor;