import functions from "./functions.js";

// **********
//
// Add the event listeners
//

idNumber.addEventListener("change", () => {
  idNumberSize.textContent = functions.size(idNumber.value);
});

// ********Calculator listeners
idAddButton.addEventListener("click", () => {
  idResult.textContent = functions.add(
    Number(idCalcInput1.value),
    Number(idCalcInput2.value)
  );
});

idMinusButton.addEventListener("click", () => {
  idResult.textContent = functions.subtract(
    Number(idCalcInput1.value),
    Number(idCalcInput2.value)
  );
});

idMultiButton.addEventListener("click", () => {
  idResult.textContent = functions.multiply(
    Number(idCalcInput1.value),
    Number(idCalcInput2.value)
  );
});

idDivideButton.addEventListener("click", () => {
  idResult.textContent = functions.divide(
    Number(idCalcInput1.value),
    Number(idCalcInput2.value)
  );
});

// ********Tax calculator listeners
idTaxButton.addEventListener("click", () => {
  idTaxResult.textContent = functions.taxCalculator(Number(idTaxInput.value));
});

idTaxInput.addEventListener("keypress", event => {
  if (event.keyCode === 13) {
    idTaxResult.textContent = functions.taxCalculator(Number(idTaxInput.value));
  }
});

// ********Array listeners
idArrayAddButton.addEventListener("click", () => {
  idArrayMessage.textContent = functions.addToArray(Number(idArrayInput.value));
  idArrayInput.value = "";
});

idArrayShowButton.addEventListener("click", () => {
  idArrayMessage.textContent = functions.showArrayState();
});

idArrayTotalButton.addEventListener("click", () => {
  idArrayMessage.textContent = functions.totalArray();
});

idArrayClearButton.addEventListener("click", () => {
  idArrayMessage.textContent = functions.clearArray();
});

// Working with Dictionaries Listeners
idLookUpButton.addEventListener('click', () => {
  idDictionaryMessage.textContent = functions.myLookUp(idDictionaryInput.value.toUpperCase());
  idDictionaryInput.value = "";
});

idDictionaryInput.addEventListener('keypress', event => {
  if (event.keyCode === 13) {
  idDictionaryMessage.textContent = functions.myLookUp(idDictionaryInput.value.toUpperCase());
  idDictionaryInput.value = "";
  }
});