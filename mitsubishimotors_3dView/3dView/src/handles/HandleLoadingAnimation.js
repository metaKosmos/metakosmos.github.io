import {loadingPct} from "../Globals.js";

function HandleLoadingAnimation() {
    setInterval(function () {
        if (loadingPct.pctValue < loadingPct.nextPct && loadingPct.pctValue < 100) 
            loadingPct.pctValue += 1;
        document
            .getElementById("iframe-loader")
            .innerHTML = "carregando " + loadingPct.pctValue + "%<div style='width: " + loadingPct.pctValue + "%'></div>";
    }, 150);
}

export default HandleLoadingAnimation;