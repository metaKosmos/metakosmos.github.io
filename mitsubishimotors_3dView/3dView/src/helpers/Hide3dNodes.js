import { namedResources, sketchfabDict } from "../Globals.js";

function Hide3dNodes(nodesNames) {
    nodesNames.forEach((nodeName) => {
        if (namedResources[nodeName]) {
            sketchfabDict
                .api
                .hide(namedResources[nodeName].instanceID);
        };
    });
}

export default Hide3dNodes;