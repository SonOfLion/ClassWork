//DOM


export const setButton = (textButton) => {
    //part 1
    // const button = `<button>${textButton}</button>`;
    // document.querySelector('body').innerHTML = button;

    //part 2
    const button = document.createElement('button');
    button.textContent = textButton;

    document.querySelector('body').append(button);
};

// console.log(typeoff(document));