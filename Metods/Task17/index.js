const emailInput = document.querySelector('#email.');
const passwordInput = document.querySelector('#password');

const emailErrorText = document.querySelector('.error-text_email');
const passwordErrorText = document.querySelector('.error-text_password');

const formElem = document.querySelector('form');

//algo
//1. validation
//2. handle submit: gather form data,create object,show alert
//2.1 gather form data +++
//2.2 Create Objcet +++
//2.3 Show alert +++

const validateEmail = () => {
    //TODO
    console.log('validateEmail')
};

const validatePassword = () => {
    //TODO
    console.log('validatePassword');
};

emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

const handleSubmit = (event) => {
    event.preventDefault(); //отменяет дефолтное поведение браузера

    const formData = new formData(formElem);
    const formObj = Object.fromEntries(formData);

    alert(JSON.stringify((Object.fromEntries(new FormData(formElem)))));
    // console.log(formData);
    // console.log(event);
}

formElem.addEventListener('submit', handleSubmit);