const form = document.forms.test;
const button = form.querySelector('button[type="submit"]');

var y = 0;

function agaiin() {
  form.reset();
  for (let i = 1; i <= 8; i++) {
    document.getElementById(`er_${i}`).innerText = "";
  }
  document.getElementById("output33").innerText = "";
  document.getElementById("descriptionn").innerText = "";
  var descriptImg = document.getElementById("descript_img");
  if (descriptImg) {
    descriptImg.innerHTML = "";
  }

  y = 0;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (y == 0) {
    var descriptImg = document.getElementById("descript_img");
    if (descriptImg) {
      descriptImg.innerHTML = "";
    }

    let inputValue = form.elements.quest1.value.trim();

    if (!inputValue) {
      document.getElementById("er_8").innerText = "Вы ничего не ввели(";
    } else if (form.elements.quest1.validity.valid) {
      y += 2;
    }

    if (form.elements.r_two.value === "") {
      document.getElementById("er_1").innerText =
        "Вы забыли отметить вариант ответа.";
    } else {
      y += parseFloat(form.elements.r_two.value);
    }

    if (form.elements.r_three.value === "") {
      document.getElementById("er_2").innerText =
        "Вы забыли отметить вариант ответа.";
    } else {
      y += parseFloat(form.elements.r_three.value);
    }

    if (form.elements.r_four.value === "") {
      document.getElementById("er_3").innerText =
        "Вы забыли отметить вариант ответа.";
    } else {
      y += parseFloat(form.elements.r_four.value);
    }

    if (form.elements.r_five.value === "") {
      document.getElementById("er_4").innerText =
        "Вы забыли отметить вариант ответа.";
    } else {
      y += parseFloat(form.elements.r_five.value);
    }

    if (form.elements.r_six.value === "") {
      document.getElementById("er_5").innerText =
        "Вы забыли отметить вариант ответа.";
    } else {
      y += parseFloat(form.elements.r_six.value);
    }

    if (form.elements.r_seven.value === "") {
      document.getElementById("er_6").innerText =
        "Вы забыли отметить вариант ответа.";
    } else {
      y += parseFloat(form.elements.r_seven.value);
    }

    let inputValue2 = form.elements.quest8.value.trim();

    if (!inputValue2) {
      document.getElementById("er_7").innerText = "Вы ничего не ввели(";
    } else if (form.elements.quest8.validity.valid) {
      y += 2;
    }

    if (y === 0) {
      y = "пока никто";
      document.getElementById("descriptionn").innerText =
        "Вы не ответили ни на один вопрос. Неужели вам не интересно, кто вы из смешариков?";
      var descriptionElement1 = document.getElementById("descript_img");
      var image1 = new Image();
      image1.src = "./style/img/test_0.jpg";
      image1.width = 390;
      descriptionElement1.appendChild(image1);
    } else if (y >= 0.5 && y <= 9) {
      y = "Крош";
      document.getElementById("descriptionn").innerText =
        "Вы активный и жинерадостный человек. Общение - важная часть вашей жизни. Иногда вам свойственно проявление чувствительности и сострадания";
      var descriptionElement2 = document.getElementById("descript_img");
      var image2 = new Image();
      image2.src = "./style/img/test_krosh.jpg";
      image2.width = 390;
      descriptionElement2.appendChild(image2);
    } else if (y >= 9.5 && y <= 12) {
      y = "Ёжик";
      document.getElementById("descriptionn").innerText =
        "Вы неторопливы и рассудительны. Всегда стремитесь помочь близким и создать приятную атмосферу вокруг. Иногда бываете черезчур стеснительными и тихими";
      var descriptionElement3 = document.getElementById("descript_img");
      var image3 = new Image();
      image3.src = "./style/img/test_ydik.jpg";
      image3.width = 390;
      descriptionElement3.appendChild(image3);
    } else if (y >= 12.5 && y <= 16) {
      y = "Пин";
      document.getElementById("descriptionn").innerText =
        "Вы сдержанны в эмоциях, весьма молчаливы и немного чопорны. Но это лишь на первый взгляд. К решению проблем вы подходите с креативностью. Вы дорожите друзьями и очень привязываетесь к близким.";
      var descriptionElement4 = document.getElementById("descript_img");
      var image4 = new Image();
      image4.src = "./style/img/test_pin.jpg";
      image4.width = 390;
      descriptionElement4.appendChild(image4);
    } else if (y >= 16.5 && y <= 24) {
      y = "Карыч";
      document.getElementById("descriptionn").innerText =
        "У вас спокойный и строгий характер. За плечами немалый жизненный опыт и множество интересных воспоминаний. Вы любитель поностальгировать и, при случае, поделиться советом.";
      var descriptionElement5 = document.getElementById("descript_img");
      var image5 = new Image();
      image5.src = "./style/img/test_karych.jpg";
      image5.width = 390;
      descriptionElement5.appendChild(image5);
    } else if (y >= 24.5 && y <= 28) {
      y = "Нюша";
      document.getElementById("descriptionn").innerText =
        "У вас весьма переменчивый характер. Вам важна ваша внешность и мнение окружающих о вас. Во многих делах стремитесь к идеалу и проявляете качества перфекциониста.";
      var descriptionElement6 = document.getElementById("descript_img");
      var image6 = new Image();
      image6.src = "./style/img/test_nysha.jpg";
      image6.width = 390;
      descriptionElement6.appendChild(image6);
    }

    document.getElementById("output33").innerText = "Вы  " + y;
    document.getElementById("output3").innerText =
      "Последний результат теста: " + y;
  } else {
    button.disabled = true;
  }
});

const btn_a = document.getElementById("again");
btn_a.addEventListener("click", agaiin);
