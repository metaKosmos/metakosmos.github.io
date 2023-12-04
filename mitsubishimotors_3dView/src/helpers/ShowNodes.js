import {sketchfabDict} from "../Globals";

function ShowNodes(nodes) {
    NODES_TO_REMOVE.forEach((nodeName) => {
        if (nodes[nodeName]) {
            sketchfabDict
                .api
                .show(nodes[nodeName].instanceID);
        }
    });
};

export default ShowNodes;