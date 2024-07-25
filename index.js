const number1 = document.getElementById("n1");
const number2 = document.getElementById("n2");
const number3 = document.getElementById("n3");

const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");
const h3 = document.getElementById("h3");

function katta() {
    const result = Number(number1.value);
    const result2 = Number(number2.value);

    if (result > result2) {
        h1.innerHTML = result
    }else{
        h1.innerHTML = result2
    }

}

function kichik() {
    const result = Number(number1.value);
    const result2 = Number(number2.value);

    if (result2 > result) {
        h2.innerHTML = result
    }else{
        h2.innerHTML = result2
    }

}

function teng() {
    const result = Number(number1.value) == Number(number2.value);

    h3.innerHTML = (result)
}