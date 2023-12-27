const lowestValue = 1;
const highestValue = 100;
const numberSecret = generatorNumberRandom();
const elementLowestValue = document.querySelector('#lowest-value');
const elementHighestValue = document.querySelector('#highest-value');

function generatorNumberRandom() {
    return parseInt(Math.random() * highestValue + 1);
}

elementHighestValue.innerHTML = highestValue;
elementLowestValue.innerHTML = lowestValue;

console.log(numberSecret);