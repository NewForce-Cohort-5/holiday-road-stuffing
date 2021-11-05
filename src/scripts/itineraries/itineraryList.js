import { useItinerary, getItinerary, saveItinerary } from "./itineraryDataProvider.js";
import { Itinerary } from "./itineraryCard.js";


const contentTarget = document.querySelector(".savedItinerary")

export const itineraryList = () => {
    getItinerary()
    .then(() => {
        let itineraryArray = useItinerary()

        let itineraryHTML = "<h4>Saved Itineraries</h4>"

        itineraryArray.forEach((singleItineraryObj) => {
            itineraryHTML += Itinerary(singleItineraryObj)

        })
        contentTarget.innerHTML = `
            ${itineraryHTML}
        `
    })

}
const saveTarget = document.querySelector("body")



saveTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveItinerary") {

        const newItinerary = {
            parkName: document.querySelector(".park_name").innerHTML,
            parkState: document.querySelector(`.park_state`).innerHTML,
            bizarraryName: document.querySelector(`.attraction__name`).innerHTML,
            eateryName: document.querySelector(`.eatery_name`).innerHTML

        }
        console.log( newItinerary)
        saveItinerary(newItinerary)
        .then(itineraryList)

    }
})
