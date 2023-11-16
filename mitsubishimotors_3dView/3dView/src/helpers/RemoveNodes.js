import {NODES_TO_REMOVE} from '../Constants.js';
import { sketchfabDict } from '../Globals.js';

function RemoveNodes(nodes) {
    NODES_TO_REMOVE.forEach((nodeName) => {
        if (nodes[nodeName]) {
            sketchfabDict.api.hide(nodes[nodeName].instanceID);
        }
    });
}

export default RemoveNodes;