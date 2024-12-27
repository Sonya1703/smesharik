let b = 0;
const pages = document.getElementsByClassName('page');
const buttons = document.querySelectorAll('button');

// Удаляем активный класс со всех кнопок перед добавлением нового
function removeActiveClass() {
    buttons.forEach(button => button.classList.remove('active'));
}

document.getElementById("b1").addEventListener('click', () => {
    removeActiveClass();
    document.getElementById("b1").classList.add('active');
    pages[b].classList.add('no');
    pages[0].classList.remove('no');
    b = 0;
});

document.getElementById('b2').addEventListener('click', () => {
    removeActiveClass();
    document.getElementById("b2").classList.add('active');
    pages[b].classList.add('no');
    pages[1].classList.remove('no');
    b = 1;
});

document.getElementById('b3').addEventListener('click', () => {
    removeActiveClass();
    document.getElementById("b3").classList.add('active');
    pages[b].classList.add('no');
    pages[2].classList.remove('no');
    b = 2;
});

document.getElementById('b4').addEventListener('click', () => {
    removeActiveClass();
    document.getElementById("b4").classList.add('active');
    pages[b].classList.add('no');
    pages[3].classList.remove('no');
    b = 3;
});

document.getElementById('b5').addEventListener('click', () => {
    removeActiveClass();
    document.getElementById("b5").classList.add('active');
    pages[b].classList.add('no');
    pages[4].classList.remove('no');
    b = 4;
});