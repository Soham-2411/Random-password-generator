const onSliderChange = () => {
    const slider = document.getElementById('password-length-input');
    console.log(slider.value);
    const lengthDisplay = document.getElementById('length-display');
    lengthDisplay.innerHTML = slider.value;
}

const difficultyChange = () => {
    const difficultybar = document.querySelectorAll('.easy');
}