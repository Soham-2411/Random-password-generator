const uppercaseArray = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
const lowercaseArray = Array.from({ length: 26 }, (_, index) => String.fromCharCode(97 + index));
const numbersArray = Array.from({length: 10}, (_, index) => String(index));
const symbolsArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', ';', ':', '<', '>', ',', '.', '?', '/'];

const includeUppercase = true;
const includeLowercase = true;
const includeNumbers = false;
const includeSymbols = true;
let password = 'P@R%$^FGG11';

const slider = document.getElementById('password-length-input');

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

const editConstraints = () => {
    const uppercase = document.getElementById('uppercase');
    const lowercase = document.getElementById('lowercase');
    const numbers = document.getElementById('numbers');
    const symbols = document.getElementById('symbols'); 
    console.log(uppercase.value);
}

const difficultyChange = () => {
    const difficultybar = document.getElementById('easy');
    difficultybar.style.backgroundColor = 'seagreen';
    difficultybar.style.border = 'none';
}

const generatePassword = () => {
    let combinedArray = [];
    if(includeUppercase)
        combinedArray = combinedArray.concat(uppercaseArray);
    if(includeLowercase)
        combinedArray = combinedArray.concat(lowercaseArray);
    if(includeNumbers)
        combinedArray = combinedArray.concat(numbersArray);
    if(includeSymbols)
        combinedArray = combinedArray.concat(symbolsArray);

    combinedArray.sort(()=> Math.random() - 0.5);

    let passwordArray = [];

    for (let i = 0; i < slider.value; i++) {
        passwordArray.push(combinedArray[Math.floor(Math.random() * combinedArray.length)]);
    }

    const passwordHTML = document.getElementById('password');
    password = passwordArray.join('');
    passwordHTML.innerHTML = password;

}