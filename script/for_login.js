document.addEventListener('DOMContentLoaded', () => {
    const form = document.forms.login;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let x = true;

        if (!form.elements.fio.validity.valid) {
            document.getElementById("out1").innerText = "Вы неправильно ввели логин";
            x = false;
        } else {
            document.getElementById("out1").innerText = "";
            document.getElementById("output1").innerText = "Логин: " + document.getElementById("fio").value;
        }

        if (!form.elements.date.validity.valid) {
            document.getElementById("out2").innerText = "Вы забыли ввести дату рождения";
            x = false;
        } else {
            document.getElementById("out2").innerText = "";
            document.getElementById("output2").innerText = "Дата рождения: " + document.getElementById("date").value;
        }

        let genderValue;

        if (form.elements.r__.value === "") {
            document.getElementById("out4").innerText = "Вы забыли отметить ваш пол";
            x = false
        } else if (form.elements.r__.value == "Мужской"){
            document.getElementById("out4").innerText = "";
            document.getElementById("output4").innerText = "Пол: Мужской";
            genderValue = "Мужской";
        } else if (form.elements.r__.value == "Женский") {
            document.getElementById("out4").innerText = "";
            document.getElementById("output4").innerText = "Пол: Женский";
            genderValue = "Женский";
        } else if (form.elements.r__.value == "Ламинат"){
            document.getElementById("output4").innerText = "Пол: Ламинат";
            genderValue = "Ламинат";
        }

        document.getElementById('output4').innerText = 'Пол: ' + genderValue;

        if (x) {
            localStorage.setItem("fio", document.getElementById("fio").value);
            localStorage.setItem("date", document.getElementById("date").value);
            localStorage.setItem('r__', genderValue); 
            document.location.href = " ./main.html";
        }
    });
});

