function toggleConfirmationMessage() {
    const rightContainer = document.querySelector('.js-right-container');
    const confirmationMessage = document.querySelector('.js-confirmation-message');

    rightContainer.style.display = 'none';
    confirmationMessage.style.display='block';
}

const inputHolder = document.querySelector('.js-input-holder');
const cardFrontText = document.querySelector('.js-card-name-text');

inputHolder.addEventListener('input', function(){
    cardFrontText.textContent = inputHolder.value;
})

const inputName = document.querySelector('.js-input-card');
const cardNameText = document.querySelector('.js-card-front-text');

inputName.addEventListener('input',function(){
    cardNameText.textContent = inputName.value;
})

const inputCvC = document.querySelector('.js-CVC-input');
const cvcText = document.querySelector('.js-card-cvv-text');

inputCvC.addEventListener('input',function(){
    cvcText.textContent = inputCvC.value;
})