let items = [
    { title: "Крош", description: "Крош – это один из главных персонажей мультсериала «Смешарики». Он представляет собой маленького, энергичного и жизнерадостного кролика синего цвета. Крош обожает приключения, спорт и активные игры. Его лучшие друзья – Бараш, Нюша и Ёжик. Вместе они переживают множество забавных ситуаций и учатся важным жизненным урокам.", image: "./style/img/krosh.jpg" },
    { title: "Ёжик", description: "Ёжик – один из ключевых персонажей мультсериала «Смешарики», представляющий собой дружелюбного ежа фиолетового цвета. Он отличается спокойным характером, рассудительностью и любовью к науке. Ёжик увлечён коллекционированием различных предметов, особенно фантиками.", image: "./style/img/yegik.jpg" },
    { title: "Бараш", description: "Бараш – один из персонажей мультсериала «Смешарики», представляющий собой задумчивого и мечтательного барашка розового цвета. Он известен своей склонностью к поэзии, музыке и философии. Бараш часто проводит время в размышлениях о смысле жизни, природе искусства и взаимоотношениях.", image: "./style/img/barash.jpg" },
    { title: "Нюша", description: "Нюша – одна из главных героинь мультсериала «Смешарики». Она представлена в виде розовой свиньи с большими глазами и длинными ресницами. Нюша известна своей красотой и элегантностью. Нюша обожает моду, косметику и всё, что связано с красотой.", image: "./style/img/nysha.jpg" },
    { title: "Совунья", description: "Совунья – один из второстепенных, но значимых персонажей мультсериала «Смешарики». Она изображена в виде мудрой и немного загадочной совы фиолетового цвета. Совунья нередко выступает в роли наставника для других Смешариков, помогая им понять сложные концепции и найти ответы на важные вопросы.", image: "./style/img/sovunya.jpg" },
    { title: "Пин", description: "Пин – один из необычных персонажей мультсериала «Смешарики», представляющий собой пингвина черно-белого цвета. Пин выделяется среди остальных Смешариков своим рационализмом, практичностью и техническим складом ума. Он редко участвует в активных играх и приключениях, предпочитая заниматься наукой и изобретательством.", image: "./style/img/pin.jpg" },
    { title: "Лосяш", description: "Лосяш – один из ярких и запоминающихся персонажей мультсериала «Смешарики». Он представлен в виде большого и добродушного лося оранжевого цвета. Из-за сильной увлечённости Лосяша научной деятельностью в его доме царит беспорядок, да и вид его самого довольно неряшливый.", image: "./style/img/losyash.jpg" },
    { title: "Копатыч", description: "Копатыч – один из самых узнаваемых персонажей мультсериала «Смешарики». Он представлен в виде медведя бурого цвета, обладающего спокойным характером. Копатыч известен своей любовью к труду и земледелию, проводя большую часть своего времени на огороде, где выращивает овощи и фрукты.", image: "./style/img/kopatych.jpg" },
    { title: "Карыч", description: "Карыч – один из второстепенных, но запоминающихся персонажей мультсериала «Смешарики». Он представлен в виде ворона синего цвета с ярким оранжевым клювом. Карыч известен своим острым языком, сарказмом и критическим взглядом на окружающий мир.", image: "./style/img/karych.jpg" },
    { title: "Биби", description: "Биби — второстепенный персонаж франшизы «Смешарики», высокоинтеллектуальный робот, созданный Пином в качестве своего сына. Очень любит учиться, летал на Луну, Сатурн и другие места. Из-за частых путешествий в дальний космос Биби нечасто видит своего создателя. Биби в значительной степени бескорыстен, всегда готов помочь другим и даже готов пожертвовать собой ради других.", image: "./style/img/bibi.jpg" }
    
];

const vvod = document.getElementById('vvod');
const vyvod = document.getElementById('vyvod');

function createItem(title, description, imageUrl) {
    const container = document.createElement('div');
    container.className = 'item';

    const h1 = document.createElement('h1');
    h1.innerText = title;
    h1.onclick = function() {
        toggleDescription(container);
    };

    const p = document.createElement('p');
    p.innerText = description;
    p.className = 'description';

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = title;
    img.className = 'image-class hidden';

    container.appendChild(h1);
    container.appendChild(p);
    container.appendChild(img);

    return container;
}

function toggleDescription(card) {
    if (card.classList.contains('expanded')) {
        // Если карточка уже открыта, закрываем ее
        card.classList.remove('expanded');
    } else {
        // Закрываем все открытые карточки
        document.querySelectorAll('.expanded').forEach(openCard => {
            openCard.classList.remove('expanded');
        });

        // Открываем текущую карточку
        card.classList.add('expanded');
    }
}

function displayAllItems() {
    vyvod.innerHTML = '';
    items.forEach(item => {
        const element = createItem(item.title, item.description, item.image);
        vyvod.appendChild(element);
    });
}

// Вызываем функцию для отображения всех элементов при загрузке страницы
displayAllItems();

vvod.addEventListener('input', () => {
    vyvod.innerHTML = '';
    items.filter(item => item.title.toLowerCase().includes(vvod.value.toLowerCase()))
        .forEach(item => {
            const element = createItem(item.title, item.description, item.image);
            vyvod.appendChild(element);
        });
});

function toggleDescription(card) {
    if (card.classList.contains('expanded')) {
        // Если карточка уже открыта, закрываем ее
        card.classList.remove('expanded');
    } else {
        // Закрываем все открытые карточки
        document.querySelectorAll('.expanded').forEach(openCard => {
            openCard.classList.remove('expanded');
        });

        // Открываем текущую карточку
        card.classList.add('expanded');
    }
}
