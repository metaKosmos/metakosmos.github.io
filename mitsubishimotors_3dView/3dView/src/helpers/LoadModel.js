import {loadingPct} from "../Globals.js";
import {sketchfabDict} from "../Globals.js";
import GetTextureSize from "./GetTextureSize.js";
import ViewerReady from "../events/ViewerReady.js";

function LoadModel() {

    loadingPct.nextPct = 98;
    const textureSize = GetTextureSize();
    const iframe = document.getElementById('sketchfab-iframe');

    sketchfabDict.client = new Sketchfab(sketchfabDict.version, iframe);

    sketchfabDict
        .client
        .init(sketchfabDict.urlid, {
            success: (responseApi) => {
                sketchfabDict.api = responseApi;
                sketchfabDict
                    .api
                    .load();
                sketchfabDict
                    .api
                    .start();
                sketchfabDict
                    .api
                    .addEventListener('viewerready', () => ViewerReady());
            },
            error: (err) => {
                HandleError('Sketchfab API initialization failed.', 'On LoadModel');
                return;
            },
            dnt: 1,
            graph_optimizer: 0,
            ui_animations: 0,
            ui_annotations: 0,
            ui_general_controls: 0,
            ui_watermark_link: 0,
            ui_watermark: 0,
            ui_infos: 0,
            ui_stop: 0,
            transparent: 1,
            camera: 0,
            scrollwheel: 1,
            max_texture_size: textureSize,
            preload: 1,
            double_click: 0,
            orbit_constraint_pitch_down: 0,
            orbit_constraint_pitch_up: 0.65,
            orbit_constraint_pan: 1,
            orbit_constraint_zoom_out: 20
        });
}

export default LoadModel;