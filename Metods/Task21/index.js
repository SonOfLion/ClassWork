'use strict';

const serverUrl = 'https://5ee220bb8b27f3001609462e.mockapi.io/api/v1/userForm';

const inputs = document.querySelectorAll('.form-input');
console.log(document.querySelectorAll);
const submitBtnElem = document.querySelector('.submit-button');
const errorElem = document.querySelector('.error-text');
const formElem = document.querySelector('.login-form');

const onValid = () => {
    formElem.reportValidity() ?
        submitBtnElem.disabled = false :
        submitBtnElem.disabled = true;
    errorElem.textContent = '';
}

const createUser = async(user) => {
    const response = await fetch(serverUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    if (!response.ok) {
        errorElem.textContent = "Failed to create user";
        throw new Error();
    }
    return response.json();
};

const onsendData = async(event) => {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(formElem));

    createUser(formData);

    const userData = await createUser(formData);

    inputs.forEach((elem) => (elem.value = ''));
    submitBtnElem.disabled = true;
    alert(JSON.stringify(userData));
};

formElem.addEventListener("submit", onsendData);
formElem.addEventListener("input", onValid);