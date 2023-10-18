const Phn = document.getElementById("item-price");

function updateCaseNumber(isIncrese) {
  const caseNumberFiled = document.getElementById("item-input");
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

function phnNumber(newCaseNumber) {
  const phnText = newCaseNumber * 1291;
  Phn.innerText = phnText;
}

document.getElementById("value-plus").addEventListener("click", function() {
  const newCaseNumber = updateCaseNumber(true);

  phnNumber(newCaseNumber);
});

document.getElementById("value-minus").addEventListener("click", function() {
  const newCaseNumber = updateCaseNumber(false);
  phnNumber(newCaseNumber);
});
