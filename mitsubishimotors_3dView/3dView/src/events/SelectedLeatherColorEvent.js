function SelectedLeatherColorEvent() {
    const leatherColors = Array.from(document.getElementsByClassName('int-color'));

    leatherColors.forEach(leatherColor => {
        leatherColor.onmouseover = () => {
            document.getElementById('interior-info').textContent = leatherColor.dataset.name
        }
    })
}


export default SelectedLeatherColorEvent;