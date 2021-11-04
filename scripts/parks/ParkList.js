import { parkCard } from "./ParkCard.js"
import { getPark, usePark } from "./ParkProvider.js"


const contentTarget = document.querySelector(".national-park")

export const parkList = (typeOfDropdown, selectedOption) => {
    getPark()
    .then(() => {
        let parkArray = usePark()
        
        if (typeOfDropdown === "national-parks") {
            parkArray = parkArray.filter(singleParkObj => {
                return selectedOption === singleParkObj.fullName
            })
        }
        parkArray.forEach((singleParkObj) => {
            contentTarget.innerHTML = parkCard(singleParkObj)
        })
    })
}

