const Phn = document.getElementById("item-price");
const phnCase = document.getElementById('phnCase')
const totalElement = document.getElementById('totalElement')

function updateCaseNumber(isIncrese, inputName) {
  const caseNumberFiled = document.getElementById(inputName);
  const caseNumber = parseInt(caseNumberFiled.value);

  let newCaseNumber;

  if (isIncrese === true) {
    newCaseNumber = caseNumber + 1;
  } else {
    newCaseNumber = caseNumber - 1;
  }

  caseNumberFiled.value = newCaseNumber;
  return newCaseNumber;
}

function phnNumber(newPhnNumber) {
  const phnText = newPhnNumber * 1291;
    Phn.innerText = phnText;
    calculateTotal()
}
function caseNumber(newCaseNumber) {
  const caseText = newCaseNumber * 59;
    phnCase.innerText = caseText;
    calculateTotal()
}

document.getElementById("phn-plus").addEventListener("click", function() {
  const newPhnNumber = updateCaseNumber(true, "item-input");

  phnNumber(newPhnNumber);
});

document.getElementById("phn-minus").addEventListener("click", function() {
  const newPhnNumber = updateCaseNumber(false , "item-input");
  phnNumber(newPhnNumber);
});
document.getElementById("case-minus").addEventListener("click", function() {
  const newCaseNumber = updateCaseNumber(false, "case-input");
  caseNumber(newCaseNumber);
});
document.getElementById("case-plus").addEventListener("click", function() {
  const newCaseNumber = updateCaseNumber(true, "case-input");
  caseNumber(newCaseNumber);
});

function calculateTotal() {
    const phnTotal = parseInt(Phn.innerText) 
    const caseTotal = parseInt(phnCase.innerText) 
    const total = phnTotal + caseTotal;
    totalElement.innerText = total;
    return total
  }
