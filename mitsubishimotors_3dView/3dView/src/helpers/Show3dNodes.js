import {namedResources, sketchfabDict} from "../Globals.js";

function Show3dNodes(nodesNames) {
    nodesNames.forEach((nodeName) => {
        if (namedResources[nodeName]) {
            sketchfabDict
                .api
                .show(namedResources[nodeName].instanceID);
        };
    });
}

export default Show3dNodes;