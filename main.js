
var form = document.forms[0];
var amountInput = form.elements["amount"];
var exchangeSelect = form.elements["exchange"];
var resultParagraph = document.querySelector('.result');


form.onsubmit = function() {
 
  var amount = parseFloat(amountInput.value);
  var exchangeType = exchangeSelect.value;

  let convertedAmount;
  if (exchangeType === 'dollar') {
    convertedAmount = amount * 3.5;
  } else if (exchangeType === 'dinar') {
    convertedAmount = amount * 5;
  } else {
    convertedAmount = amount; 
  }

  
  resultParagraph.innerText = 'The converted amount is ' + convertedAmount + ' ' + 'nis';


  return false;
}