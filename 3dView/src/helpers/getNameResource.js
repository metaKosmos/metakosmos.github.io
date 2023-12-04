import { namedResources } from "../Globals.js";

function GetNamedResources(resources, type){ 
    //Console.log('')
    var idx = 0;
    Object
        .keys(resources)
        .forEach((key) => {
            const name = resources[key].name || "noname_" + idx++;
            namedResources[type][name] = resources[key];
        });
}

export default GetNamedResources;