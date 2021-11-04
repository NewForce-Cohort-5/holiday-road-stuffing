import { weatherCard } from "./WeatherCard.js";
import { getFiveDayWeather, useWeather } from "./WeatherProvider.js";

const contentTarget = document.querySelector('.weather-forecast');

export const weatherList = (whichFilter, wordToFilter) => {
   
    getFiveDayWeather(wordToFilter[0].latitude, wordToFilter[0].longitude)
    .then(() => {
        let fiveDayWeatherArray = useWeather();
        console.log(fiveDayWeatherArray)
        fiveDayWeatherArray.forEach((singleWeatherObj) => {
            if (fiveDayWeatherArray.indexOf(singleWeatherObj) === 0 ||
            fiveDayWeatherArray.indexOf(singleWeatherObj) === 8 ||
            fiveDayWeatherArray.indexOf(singleWeatherObj) === 16 ||
            fiveDayWeatherArray.indexOf(singleWeatherObj) === 24 ||
            fiveDayWeatherArray.indexOf(singleWeatherObj) === 32 ||
            fiveDayWeatherArray.indexOf(singleWeatherObj) === 40
            ) {
                contentTarget.innerHTML += weatherCard(singleWeatherObj)
                console.log(singleWeatherObj)
            }
            
        })

    })
}


/* 
    -forEach needs conditionals so that contentTarget only renders a single weather card for each day (total of 5 cards rendered )
    -weather card can have a weather icon on accordion 
    -itinerary preview container needs css layout/styling
*/