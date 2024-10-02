function toggleConfirmationMessage() {
    const rightContainer = document.querySelector('.js-right-container');
    const confirmationMessage = document.querySelector('.js-confirmation-message');

    const isYearInvalid = verifyYear();
    const isMonthInvalid = verifyMonth();

    if (isYearInvalid || isMonthInvalid) {
        alert('Input field error');
    } else {
        rightContainer.style.display = 'none';
        confirmationMessage.style.display = 'block';
    }
}

const inputHolder = document.querySelector('.js-input-holder');
const cardFrontText = document.querySelector('.js-card-name-text');

inputHolder.addEventListener('input', function () {
    cardFrontText.textContent = inputHolder.value;
})

const inputName = document.querySelector('.js-input-card');
const cardNameText = document.querySelector('.js-card-front-text');

inputName.addEventListener('input', function () {
    cardNameText.textContent = inputName.value;
})

const inputCvC = document.querySelector('.js-CVC-input');
const cvcText = document.querySelector('.js-card-cvv-text');

inputCvC.addEventListener('input', function () {
    cvcText.textContent = inputCvC.value;
})

const infoText = document.querySelector('.js-mm-yy-input');
const cardExpirationText = document.querySelector('.js-card-expiration-text');

infoText.addEventListener('input', function () {
    cardExpirationText.textContent = infoText.value + "/";
})


const infoYear = document.querySelector('.js-mm-yy-input2');
const cardExpirationYear = document.querySelector('.js-card-expiration-text');

infoYear.addEventListener('input', function () {
    cardExpirationYear.textContent = infoText.value + "/" + infoYear.value;
})


document.querySelector('.js-Confirm-Button').addEventListener('click', function () {
    console.log('click');
});

function formatCardNumber(input) {
    let cardNumber = input.value.replace(/\s+/g, '');

    if (cardNumber.length > 16) {
        cardNumber = cardNumber.slice(0, 16);
    }
    cardNumber = cardNumber.replace(/(.{4})/g, '$1 ');
    input.value = cardNumber.trim();
}

function verifyYear() { 
    const infoYear = document.querySelector('.js-mm-yy-input2').value;
    const errorMessageHTML = document.querySelector('.js-error-message');

    if (infoYear === '' || Number(infoYear) < 23) {
        errorMessageHTML.style.display = 'block';
        return true;
    } else {
        errorMessageHTML.style.display = 'none';
    }
    return false;
}

function verifyMonth() {
    const infoText = document.querySelector('.js-mm-yy-input').value;
    const errorMessageHTMLM = document.querySelector('.js-error-message-month');

    if (infoText === '' || Number(infoText) < 1 || Number(infoText) > 12) {
        errorMessageHTMLM.style.display = 'block';
        return true;
    } else {
        errorMessageHTMLM.style.display = 'none';
    }
    return false;
}

