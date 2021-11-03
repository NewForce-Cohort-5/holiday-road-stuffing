import { Weather } from "./WeatherCard.js";
import { getFiveDayWeather, useWeather } from "./WeatherProvider.js";

const contentTarget = document.querySelector('.weather-forecast');

export const weatherList = (whichFilter, wordToFilter) => {
    getFiveDayWeather(wordToFilter.latitude, wordToFilter.longitude)
    .then(() => {
        let fiveDayWeatherArray = useWeather();
        console.log(wordToFilter.latitude, wordToFilter.longitude)

        // if (whichFilter === "weather-forecast") {
        //     let latitude 
        //     fiveDayWeatherArray = fiveDayWeatherArray.filter(singleWeatherObj => {
        //         return whichFilter ===
        //     })
        // }
    })
}