const uppercaseArray = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
const lowercaseArray = Array.from({ length: 26 }, (_, index) => String.fromCharCode(97 + index));
const numbersArray = Array.from({ length: 10 }, (_, index) => String(index));
const symbolsArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', ';', ':', '<', '>', ',', '.', '?', '/'];

let includeUppercase = true;
let includeLowercase = true;
let includeNumbers = true;
let includeSymbols = false;
let password = 'P@R%$^FGG11';

const slider = document.getElementById('password-length-input');
const generateButton = document.getElementById('generate-button');

const onSliderChange = () => {
    const lengthDisplay = document.getElementById('length-display');
    lengthDisplay.innerHTML = slider.value;
}

const copyPassword = async () => {
    try {
        await navigator.clipboard.writeText(password);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}


const uppercaseCheckbox = document.getElementById('uppercase');
uppercaseCheckbox.addEventListener('change', () => {
    if (uppercaseCheckbox.checked) {
        includeUppercase = true;
    } else {
        includeUppercase = false;
    }
});
const lowercaseCheckbox = document.getElementById('lowercase');
lowercaseCheckbox.addEventListener('change', () => {
    if (lowercaseCheckbox.checked) {
        includeLowercase = true;
    } else {
        includeLowercase = false;
    }
});

const numberCheckbox = document.getElementById('numbers');
numberCheckbox.addEventListener('change', () => {
    if (numberCheckbox.checked) {
        includeNumbers = true;
    } else {
        includeNumbers = false;
    }
});

const symbolsCheckbox = document.getElementById('symbols');
symbolsCheckbox.addEventListener('change', () => {
    if (symbolsCheckbox.checked) {
        includeSymbols = true;
    } else {
        includeSymbols = false;
    }
});

const difficultyChange = () => {
    const difficultybar = document.getElementById('easy');
    difficultybar.style.backgroundColor = 'seagreen';
    difficultybar.style.border = 'none';
}

generateButton.addEventListener('click', ()=>{
    let combinedArray = [];
    if (includeUppercase)
        combinedArray = combinedArray.concat(uppercaseArray);
    if (includeLowercase)
        combinedArray = combinedArray.concat(lowercaseArray);
    if (includeNumbers)
        combinedArray = combinedArray.concat(numbersArray);
    if (includeSymbols)
        combinedArray = combinedArray.concat(symbolsArray);

    if(combinedArray.length === 0){
        alert("Can't have a password with no characters can we?");
        return;
    }

    combinedArray.sort(() => Math.random() - 0.5);

    let passwordArray = [];

    for (let i = 0; i < slider.value; i++) {
        passwordArray.push(combinedArray[Math.floor(Math.random() * combinedArray.length)]);
    }

    const passwordHTML = document.getElementById('password');
    password = passwordArray.join('');
    passwordHTML.innerHTML = password;
})