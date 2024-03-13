const  header = document.querySelector("#header")
const prayerForm = document.querySelector("#prayerForm")
const  cityInput = document.querySelector("#cityInput")
const  prayerBtn = document.querySelector("#prayerBtn")  


prayerForm.addEventListener("submit",function(e){
  e.preventDefault();
  let apiKey = '6b290b6d66bdcadb91913d71c51d257e'
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=metric&appid=${apiKey}`)
  .then(res=>res.json())
  .then(data=>
    weatherInfo.innerHTML = `
    <ul class="list">
    <li class="next__item"> <p class="header__text">${Math.round(data.main.temp)} C <sup>o</sup></p> 
    <p class="header__text">${data.weather[0].description}</p></li>`)
  
    .catch((error)=>{
      weatherInfo.innerHTML = `
      <p class="header__text">Bu shahar topilmadi</p>`})

})
 




prayerForm.addEventListener("submit",function(e){
  e.preventDefault();
  fetch(`https://islomapi.uz/api/present/day?region=${cityInput.value}`)
  .then(res=>res.json())
  .then(data=>
    prayerInfo.innerHTML = `
    <p id="dayText" class="header__subtext">${data.weekday}</p>
    <ul class="list">
    <li class="item">
    <p  id="bomdodText" class="header__next-text">Bomdod<br>${data.times.tong_saharlik}</p> <img class="header__img" src="./img/Screen Shot 2024-03-10 at 13.12.14.png" alt="img" width="150" height="150">  </li>
    <li class="item">
    <p class="header__next-text">Quyosh<br>${data.times.quyosh}</p>  <img class="header__img" src="./img/unnamed.webp" alt="img" width="150" height="150"></li>
    <li class="item">
    <p  class="header__next-text">Peshin<br>${data.times.peshin}</p><img class="header__img" src="./img/Screen Shot 2024-03-10 at 13.27.59.png" alt="img" width="150" height="150"></li>
    <li class="item">
    <p class="header__next-text">Asr<br>${data.times.asr}</p><img class="header__img" src="./img/Screen Shot 2024-03-10 at 13.34.28.png" alt="img" width="150" height="150"></li>
    <li class="item">
    <p class="header__next-text">Shom<br>${data.times.shom_iftor}</p> <img class="header__img" src="./img/unnamed.webp" alt="img" width="150" height="150"></li>
    <li class="item">
    <p  class="header__next-text">Hufton<br>${data.times.hufton}</p><img class="header__img" src="./img/Screen Shot 2024-03-10 at 13.12.14.png" alt="img" width="150" height="150">  </li>`)
    .catch((error)=>{
      weatherInfo.innerHTML = `
      <p  class="header__text">Bu shahar topilmadi</p>`})

})
function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}
let language = {
    eng: { 
        welcome: "PRAYER TIME"  ,
        cityInput: "Enter the city",
        prayerBtn: "Get information",
        bomdodText: "MORNING",
        dayText: "tuesday"
    },
    uz: {
        welcome: "NAMOZ VAQTLARI",
        cityInput: "Shaxarni kiriting",
        prayerBtn: "Malumot olish",
        bomdodText: "BOMDOD",
        dayText:"seshanba"
    },
    ru: {
        welcome: "ВРЕМЯ МОЛИТВЫ" ,
        cityInput: "Войдите в город",
        prayerBtn: "Получить информацию", 
        bomdodText: "УТРО",
        dayText:"вторник"
    } 
};
if (window.location.hash) {
    if (window.location.hash == "#uz") {
        header__title.textContent =
            language.uz.welcome;
        cityInput.textContent =
            language.uz.cityInput;
        prayerBtn.textContent =
            language.uz.prayerBtn;
        bomdodText.textContent =
            language.uz.bomdodText;
        dayText.textContent =
            language.uz.dayText;

    }
    else if (window.location.hash == "#ru") {
        header__title.textContent =
            language.ru.welcome;
        cityInput.textContent =
            language.ru.cityInput;
        prayerBtn.textContent =
            language.ru.prayerBtn;
        bomdodText.textContent =
            language.ru.bomdodText;
        dayText.textContent =
            language.ru.dayText;
   
    }
    else if (window.location.hash == "#eng") {
        header__title.textContent =
            language.eng.welcome;
        cityInput.textContent =
            language.eng.cityInput;
        prayerBtn.textContent =
            language.eng.prayerBtn;
        bomdodText.textContent =
            language.eng.bomdodText;
        dayText.textContent =
            language.eng.dayText;
      
    }
}
