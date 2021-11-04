import { weatherCard } from "./WeatherCard.js";
import { getFiveDayWeather, useWeather } from "./WeatherProvider.js";

const contentTarget = document.querySelector('.weather-forecast');

export const weatherList = (whichFilter, wordToFilter) => {
   
    getFiveDayWeather(wordToFilter[0].latitude, wordToFilter[0].longitude)
    .then(() => {
        let fiveDayWeatherArray = useWeather();
        console.log(fiveDayWeatherArray)
        fiveDayWeatherArray.forEach((singleWeatherObj) => {
            contentTarget.innerHTML = weatherCard(singleWeatherObj)
            console.log(singleWeatherObj)
        })

    })
}