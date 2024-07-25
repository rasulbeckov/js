const number1 = document.getElementById("n1");
const number2 = document.getElementById("n2");
const number3 = document.getElementById("n3");

const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");
const h3 = document.getElementById("h3");

function katta() {
    const result = Number(number1.value) > Number(number2.value);

    h1.innerHTML = (result)
}

function kichik() {
    const result = Number(number1.value) < Number(number2.value);

    h2.innerHTML = (result)
}

function teng() {
    const result = Number(number1.value) == Number(number2.value);

    h3.innerHTML = (result)
}