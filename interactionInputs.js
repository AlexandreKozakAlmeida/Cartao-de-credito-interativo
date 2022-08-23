const cardNumber = document.querySelector("#cardNumber");
const proprietorName = document.querySelector('#titularName');

const cardNumberInput = document.querySelector("#fillCardNumberInput");
const fillName = document.querySelector('#fillNameInput');


const data = document.querySelector('#expDate');
const expDateInput = document.querySelector('#fillExpDateInput');

expDateInput.addEventListener("keyup", fillCvcNumber);

cardNumberInput.addEventListener("keyup", fillCardNumber);

fillName.addEventListener("keyup", fillCardName);


function fillCardNumber () {
  if(cardNumber.textContent = "0000 0000 0000 0000") {
    
    let numberValue = cardNumberInput.value;
    cardNumber.textContent = numberValue;
 }

 
};

function fillCardName () {
    if(proprietorName.textContent = 'Your Name Here') {
        let nameValue = fillName.value;
        proprietorName.textContent = nameValue;
    }
};

function fillCvcNumber() {
  if(data.textContent = "0000") {
    let fillData = expDateInput.value;
    data.textContent = fillData;
  }
};














