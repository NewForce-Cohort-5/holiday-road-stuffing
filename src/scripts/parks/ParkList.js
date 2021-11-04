import { parkCard } from "./ParkCard.js"
import { getPark, usePark } from "./ParkProvider.js"
import { weatherList } from "../weather/WeatherList.js"

const contentTarget = document.querySelector(".national-park")

export const parkList = (whichFilter, wordToFilter) => {
    getPark()
    .then(() => {
        let parkArray = usePark()
        
        if (whichFilter === "national-park") {
            parkArray = parkArray.filter(singleParkObj => {
                return wordToFilter === singleParkObj.fullName
            })
        }
        weatherList("weather-forecast", parkArray)
        parkArray.forEach((singleParkObj) => {
            contentTarget.innerHTML = parkCard(singleParkObj)
        })
    })
}

