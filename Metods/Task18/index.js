const list = document.querySelector('.list');
// console.log(listOfElem);

const handleCk = (event) => {
    if (!event.target.classList.contains('list-item')) return;
    console.log(event.target.textContent);
}

list.addEventListener('click', handleCk)