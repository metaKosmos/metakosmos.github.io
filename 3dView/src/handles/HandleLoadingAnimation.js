import { loadingPct } from "../Globals.js";

function HandleLoadingAnimation() {
    loadingPct.intervalId = setInterval(function () {

        //console.log(loadingPct);

        if (loadingPct.pctValue < loadingPct.nextPct && loadingPct.pctValue < 100)
            loadingPct.pctValue += 1;
        document
            .getElementById("iframe-loader")
            .innerHTML = "carregando " + (loadingPct.pctValue * 5) + "%<div style='width: " + (loadingPct.pctValue * 5) + "%'></div>";
    }, 500);
}

export default HandleLoadingAnimation;