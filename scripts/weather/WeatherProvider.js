import {settings} from "../Settings.js"

let fiveDayWeatherForecast = [];
const weatherApiKey = settings.weatherKey;

export const useWeather = () => {
    return fiveDayWeatherForecast.slice();
}


export const getFiveDayWeather = (lat,lon) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherApiKey}`)
    .then(response => response.json())
    .then(data => {
        fiveDayWeatherForecast = data.list;
    })
    .catch(e => {
        alert('Please check latitude and longitude coordinates');
    })
}