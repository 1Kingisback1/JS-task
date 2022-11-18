let qest = document.querySelector('#Oh');

qest.addEventListener('click', (event) => {
    let clientText = prompt ("Напишите свой вопрос", "");

    qest.textContent = clientText; 
    event.preventDefault();
});
