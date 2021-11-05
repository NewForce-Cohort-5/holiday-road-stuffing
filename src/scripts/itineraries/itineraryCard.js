import {useItinerary} from "./itineraryDataProvider.js"

// let cardArray = useItinerary().map(function(element){
//     return `${element.eateryName}`
// })

// //cardArray.join("")
// console.log(cardArray.join(' , '))

export const Itinerary = (itinerary) => {
    
   
    
    return `
    <section class="itinerary-card">
    <div class="parkName">Park Name: ${itinerary.parkName}</div>
    <div class="parkState">State: ${itinerary.parkState}</div>
    <div class="bizarraryName">Bizarrary: ${itinerary.bizarraryName}<br></br></div>
    <div class="eateryName">Eateries: <br>${itinerary.eateryName} </br></div>
    
    </section>    
    
    
    `
}