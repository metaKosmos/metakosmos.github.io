
function HandleError(err, material) {
    if (err) {
        const errorString = `Error: ${err} on material ${material}`;
        console.error(err);
        window.alert(errorString);
        return;
    };
}

export default HandleError;