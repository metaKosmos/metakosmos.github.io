function SelectedCarColorEvent() {   
    const carColors = Array.from(document.getElementsByClassName('car-color'));

    carColors.forEach(carColor => {
        carColor.onmouseover = () => {
            document.getElementById('exterior-info').textContent = carColor.dataset.name
        }
    })
}


export default SelectedCarColorEvent;