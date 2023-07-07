import { getData } from "./js/API.js";

const $txtCity = document.getElementById("txtCity")
const $btnSend = document.getElementById("btnSend")


$btnSend.addEventListener("click", async (e)=>{
    const city = $txtCity.value;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&onecall?lang=sp&appid=`;
    const API_KEY = "eef1bee8e136427c52e09919160c87de";

    const data = await getData(URL, API_KEY)
    $txtCity.value = ""
    console.log(data)
    /* Show data in Document */
    

    show(data)
})


function show(city){
    const $country = document.querySelector(".country")
    const $city = document.querySelector(".city")
    const $description = document.querySelector(".description")
    const $main = document.querySelector(".main")
    const $temp = document.querySelector(".temp")
    const $icon = document.getElementById("icon")
    const $tempMax = document.querySelector(".temp-max")
    const $tempMin = document.querySelector(".temp-min")
    const $humidity = document.querySelector(".humidity")
    const $imgMain = document.getElementById("img-weather")

    if(city.main.humidity > 60){
        $imgMain.src = "./img/rain.png"
    }else{
        $imgMain.src = "./img/sun.png"
    }


    $tempMax.textContent = city.main.temp_max
    $tempMin.textContent = city.main.temp_min
    $humidity.textContent = city.main.humidity
    $icon.src = `https://openweathermap.org/img/wn/${city.weather[0].icon}.png`
    $country.textContent = city.sys.country
    $city.textContent = city.name
    $description.textContent = city.weather[0].description.toUpperCase()
    $main.textContent = city.weather[0].main.toUpperCase()
    $temp.textContent = city.main.feels_like

}
