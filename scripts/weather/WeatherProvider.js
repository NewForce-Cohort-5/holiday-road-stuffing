


export const getWeather = (cityName) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=af3c1ecfd14387178ba1ebf6216c79c0`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(e => {
        alert('Wrong city name')
    })
}