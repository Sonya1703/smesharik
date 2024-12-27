document.addEventListener('DOMContentLoaded', () => {
    const fio = localStorage.getItem("fio");
    const date = localStorage.getItem("date");
    const r__ = localStorage.getItem("r__");

    document.getElementById("output1").innerText = "Логин: " + fio;
    document.getElementById("output2").innerText = "Дата рождения: " + date;
    document.getElementById("output4").innerText = "Пол: " + r__;

});
