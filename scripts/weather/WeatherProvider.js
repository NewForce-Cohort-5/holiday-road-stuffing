let fiveDayWeatherForecast = [];

export const useWeather = () => {
    return fiveDayWeatherForecast.slice();
}


export const getFiveDayWeather = (lat,lon) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=af3c1ecfd14387178ba1ebf6216c79c0`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        fiveDayWeatherForecast = data;
    })
    .catch(e => {
        alert('Please check latitude and longitude coordinates');
    })
}