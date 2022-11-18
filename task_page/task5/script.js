let inp = document.querySelector('input'),
    par = document.querySelector('#duplicateField');

inp.addEventListener('keypress', (event) => {
    par.textContent = inp.value;
});

document.querySelector('button').addEventListener('click', (evt) => {
    if (evt.which === 1) {
        console.log(inp.value);
        inp.value = '';
        par.textContent = inp.value;
        evt.preventDefault();
    }
});