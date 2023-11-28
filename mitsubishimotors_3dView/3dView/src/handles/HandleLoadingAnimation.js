import {loadingPct} from "../Globals.js";

function HandleLoadingAnimation() {
    loadingPct.intervalId = setInterval(function () {
        if (loadingPct.pctValue < loadingPct.nextPct && loadingPct.pctValue < 100) 
            loadingPct.pctValue += 1;
        document.getElementById('loading-text').textContent = `Carregando ${loadingPct.pctValue}%`;
        document.getElementById('loading-bar-fill').style.width = `${loadingPct.pctValue}%`;
    }, 150);
}

export default HandleLoadingAnimation;