let reg = /[0-9]/g;

// Функция для обновления текста в подписи
function updateSlideNumber() {
    const slideNumberEl = document.querySelector('.slide-number');
    slideNumberEl.textContent = currentSlideIndex + ' мемный смешарик' + ' из ' + slideCount + ' смешариков'
}

// Функция для перемотки изображений вправо и их поочередного отображения
function fun() {
    hide(spisok[currentSlideIndex - 1].classList);
    
    if (currentSlideIndex < slideCount) {
        currentSlideIndex++;
    }
    
    setTimeout(() => {
        show(spisok[currentSlideIndex - 1].classList);
        updateSlideNumber(); // Обновить подпись
    }, 1000);
}


//функция, дающая свойство видимости для изображения
function show(clasL){
    document.documentElement.style.setProperty("--el", '-400px');

    clasL.add('show')
    setTimeout(()=> {
        clasL.add("close")
        document.documentElement.style.setProperty("--el", '0px');
    }, 10);

}

//функция, дающая свойство невидимости для изображений
function hide(clasL){
    document.documentElement.style.setProperty("--el", '400px');

    clasL.remove('close')
    setTimeout(()=> {
        clasL.remove('show')
    }, 1000);
     
}

// Функция для перемотки изображений влево и их поочередного отображения
function fun1() {
    hide1(spisok[currentSlideIndex - 1].classList);
    
    if (currentSlideIndex > 1) {
        currentSlideIndex--;
    }
    
    setTimeout(() => {
        show1(spisok[currentSlideIndex - 1].classList);
        updateSlideNumber(); // Обновить подпись
    }, 1000);
}

//функция, дающая свойство видимости для изображения
function show1(clasL){
    document.documentElement.style.setProperty("--el", '400px');

    clasL.add('show')
    setTimeout(()=> {
        clasL.add("close")
        document.documentElement.style.setProperty("--el", '0px');
    }, 10);

}

//функция, дающая свойство невидимости для изображений
function hide1(clasL){
    document.documentElement.style.setProperty("--el", '-400px');

    clasL.remove('close')
    setTimeout(()=> {
        clasL.remove('show')
    }, 1000);
     
}

//присвоение значения переменной х
let x = 1

//создание массива из изображений
const spisok = document.getElementsByClassName('def')
let slideCount = spisok.length; // Количество слайдов
let currentSlideIndex = 1;      // Индекс текущего слайда

// Вызываем обновление подписи сразу после загрузки страницы
updateSlideNumber();

const btn = document.getElementById("btn")
btn.addEventListener("click", fun) 

const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", fun1) 
