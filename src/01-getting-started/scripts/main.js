import functions from './functions.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

// ********Calculator listeners
idAddButton.addEventListener('click', (() => {
    idResult.textContent = functions.add(Number(idCalcInput1.value), Number(idCalcInput2.value));
}));

idMinusButton.addEventListener('click', (() => {
    idResult.textContent = functions.subtract(Number(idCalcInput1.value), Number(idCalcInput2.value));
}));

idMultiButton.addEventListener('click', (() => {
    idResult.textContent = functions.multiply(Number(idCalcInput1.value), Number(idCalcInput2.value));
}));

idDivideButton.addEventListener('click', (() => {
    idResult.textContent = functions.divide(Number(idCalcInput1.value), Number(idCalcInput2.value));
}));

// ********Tax calculator listeners
idTaxButton.addEventListener('click', (() => {
    idTaxResult.textContent = functions.taxCalculator(Number(idTaxInput.value));
}));