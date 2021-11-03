import { parkCard } from "./ParkCard.js"
import { getPark, usePark } from "./ParkProvider.js"


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
        parkArray.forEach((singleParkObj) => {
            contentTarget.innerHTML = parkCard(singleParkObj)
        })
    })
}

