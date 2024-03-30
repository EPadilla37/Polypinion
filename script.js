
if (!localStorage.getItem('count')) {
    localStorage.setItem('count', 0);
}

let count = parseInt(localStorage.getItem('count')) + 1;
localStorage.setItem('count', count);

document.getElementById('counter').innerText = count;