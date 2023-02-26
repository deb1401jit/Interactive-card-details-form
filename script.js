// ====Input Elements====
const cardholderName = document.querySelector("#cardholder-name-inp");
const cardNumber = document.querySelector("#card-number-inp");
const month = document.querySelector("#exp-month-inp");
const year = document.querySelector("#exp-year-inp");
const cvc = document.querySelector("#cvc-inp");

// ====Display ELements====
const cardNumberDisplay = document.querySelector(".card-front-display-elements > p");
const cardNameDisplay = document.querySelector(".card-front-display-elements-flex > p:first-child");
const cardMonthDisplay = document.querySelector(".card-front-display-elements-flex span:first-child");
const cardYearDisplay = document.querySelector(".card-front-display-elements-flex span:last-child");
const cvcDisplay = document.querySelector(".card-back p");

//====Event Listeners====
cardholderName.addEventListener('input', () => {
    if (cardholderName.value === "") cardNameDisplay.innerText = "jane appleseed";
    else cardNameDisplay.innerText = cardholderName.value;
});

month.addEventListener('input', () => {
    if (month.value === "") cardMonthDisplay.innerText = "00";
    else cardMonthDisplay.innerText = month.value;
});

year.addEventListener('input', () => {
    if (year.value === "") cardYearDisplay.innerText = "000";
    else cardYearDisplay.innerText = year.value;
});

cardNumber.addEventListener('input', () => {
    if (cardNumber.value === "") cardNumberDisplay.innerText = "0000 0000 0000 0000";
    else cardNumberDisplay.innerHTML = cardNumber.value;
});

cvc.addEventListener('input', () => {
    if (cvc.value === "") cvcDisplay.innerText = "00";
    else cvcDisplay.innerText = cvc.value;
});


const confirm = document.getElementById("confirm");
confirm.addEventListener('click', ()=>{
    // Card Number
    if(emptyInput(cardNumber.value)){
        cardNumber.style.borderColor = "hsl(0, 100%, 66%)";
        document.getElementById("card-number-inp").nextElementSibling.innerText = "Can't be blank";
    }
    else if(!cardNumberCheck(cardNumber.value)){
        cardNumber.style.borderColor = "hsl(0, 100%, 66%)";
        document.getElementById("card-number-inp").nextElementSibling.innerText = "Wrong format, numbers only";
    }
    else{
        cardNumber.style.borderColor = "hsl(270, 3%, 87%)";
        document.getElementById("card-number-inp").nextElementSibling.innerText = "";
    }

    // Name
    if(emptyInput(cardholderName.value)){
        cardholderName.style.borderColor = "hsl(0, 100%, 66%)";
        document.getElementById("cardholder-name-inp").nextElementSibling.innerText = "Can't be blank";
    }
    else{
        cardholderName.style.borderColor = "hsl(270, 3%, 87%)";
        document.getElementById("cardholder-name-inp").nextElementSibling.innerText= "";
    }

    // Expiry Month
    if(emptyInput(month.value)){
        month.style.borderColor = "hsl(0, 100%, 66%)";
        document.querySelector(".flex-inp-container-2").nextElementSibling.innerText= "Can't be blank";
    }
    else if(!containsOnlyNumbers(month.value)){
        month.style.borderColor = "hsl(0, 100%, 66%)";
        document.querySelector(".flex-inp-container-2").nextElementSibling.innerText= "Wrong format, numbers only";
    }
    else{
        month.style.borderColor = "hsl(270, 3%, 87%)";
        document.querySelector(".flex-inp-container-2").nextElementSibling.innerText= "";
    }

    // Expiry Year
    if(emptyInput(year.value)){
        year.style.borderColor = "hsl(0, 100%, 66%)";
        document.querySelector(".flex-inp-container-2").nextElementSibling.innerText= "Can't be blank";
    }
    else if(!containsOnlyNumbers(year.value)){
        year.style.borderColor = "hsl(0, 100%, 66%)";
        document.querySelector(".flex-inp-container-2").nextElementSibling.innerText= "Wrong format, numbers only";
    }
    else{
        year.style.borderColor = "hsl(270, 3%, 87%)";
        document.querySelector(".flex-inp-container-2").nextElementSibling.innerText= "";
    }

    //CVC
    if(emptyInput(cvc.value)){
        cvc.style.borderColor = "hsl(0, 100%, 66%)";
        document.getElementById("cvc-inp").nextElementSibling.innerText= "Can't be blank";
    }
    else if(!containsOnlyNumbers(cvc.value)){
        cvc.style.borderColor = "hsl(0, 100%, 66%)";
        document.getElementById("cvc-inp").nextElementSibling.innerText= "Wrong format, numbers only";
    }
    else{
        cvc.style.borderColor = "hsl(270, 3%, 87%)";
        document.getElementById("cvc-inp").nextElementSibling.innerText= "";
    }

    if(!emptyInput(cvc.value) &&
    document.getElementById("card-number-inp").nextElementSibling.innerText === "" &&
    document.getElementById("cardholder-name-inp").nextElementSibling.innerText=== "" &&
    document.querySelector(".flex-inp-container-2").nextElementSibling.innerText=== "" &&
    document.getElementById("cvc-inp").nextElementSibling.innerText=== ""
    ) {
        let detailsContainer = document.querySelector(".cardholder-details");
        let  submittedContainer = document.querySelector(".submitted-container");
        detailsContainer.classList.add("hidden");
        submittedContainer.classList.remove("hidden");
    }
});



function cardNumberCheck(str) {
    let inputStr = str.split(" ");
    return /\d{4},\d{4},\d{4},\d{4}$/.test(inputStr);
}

function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
}

function emptyInput(str){
    if(str==="") return true;
    else return false;
}