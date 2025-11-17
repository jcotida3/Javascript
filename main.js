

const display = document.getElementById("display");


function appendToDisplay(input) {
    display.value += input;
}

function clearDisplays() {
    display.value = null;
}

function calculate() {
    display.value = eval(display.value);
}

let x = Math.random() + 7;
console.log(x);