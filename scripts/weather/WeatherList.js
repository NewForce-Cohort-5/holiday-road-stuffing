import { weatherCard } from "./WeatherCard.js";
import { getFiveDayWeather, useWeather } from "./WeatherProvider.js";

const contentTarget = document.querySelector('.weather-forecast');

export const weatherList = (whichFilter, wordToFilter) => {
   
    getFiveDayWeather(wordToFilter[0].latitude, wordToFilter[0].longitude)
    .then(() => {
        let fiveDayWeatherArray = useWeather();
        console.log(fiveDayWeatherArray)
        fiveDayWeatherArray.forEach((singleWeatherObj) => {
            contentTarget.innerHTML += weatherCard(singleWeatherObj)
            console.log(singleWeatherObj)
        })

    })
}


/* 
    -innerHTML of contentTarget needs += to add more than one weatherCard
    -forEach needs conditionals so that contentTarget only renders a single weather card for each day (total of 5 cards rendered )
    -weather card temp needs converted from K to C to F
    -weather card can have a weather icon on accordion 
    -itinerary preview container needs css layout/styling
*/