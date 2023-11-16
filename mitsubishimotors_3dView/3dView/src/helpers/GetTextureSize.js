import { MAX_TEXTURE_SIZE } from "../Constants.js";

function GetTextureSize() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        return MAX_TEXTURE_SIZE.mobile;
    } else {
        return MAX_TEXTURE_SIZE.desktop;
    }
}

export default GetTextureSize;