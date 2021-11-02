import { parkCard } from "./ParkCard.js"
import { getPark, usePark } from "./ParkProvider.js"


const contentTarget = document.querySelector("#print-list")

export const parkList = () => {
    getPark()
        .then(() => {
            let parkArray = usePark()   

            let parkHTML = ""

            parkArray.forEach(singleParkObj => {

                parkHTML += parkCard(singleParkObj)

            })

            contentTarget.innerHTML = parkHTML

        })

}

// document.querySelector("#container").addEventListener("click", () => {
//     parkList()
// })