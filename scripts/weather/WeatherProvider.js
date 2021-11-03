import {settings} from "../Settings.js"

let fiveDayWeatherForecast = [];
const weatherApiKey = settings.weatherKey;

export const useWeather = () => {
    return fiveDayWeatherForecast.slice();
}


export const getFiveDayWeather = (lat,lon) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        fiveDayWeatherForecast = data;
    })
    .catch(e => {
        alert('Please check latitude and longitude coordinates');
    })
}