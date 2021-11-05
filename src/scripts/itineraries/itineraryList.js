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
        
const eateryNames = document.querySelectorAll(".eatery_name")
    const eateryNamesArray = []
    eateryNames.forEach(x=> eateryNamesArray.push( x.innerHTML ))

    console.log(eateryNamesArray)

const attractionNames = document.querySelectorAll(".attraction__name")
    const attractionNamesArray = []
    attractionNames.forEach(x=> attractionNamesArray.push( x.innerHTML ))
    console.log(attractionNamesArray)
        

const newItinerary = {
    parkName: document.querySelector(".park_name").innerHTML,
    parkState: document.querySelector(`.park_state`).innerHTML,
    bizarraryName: attractionNamesArray,
    eateryName: eateryNamesArray

}
       
        saveItinerary(newItinerary)
        .then(itineraryList)

    }
})
