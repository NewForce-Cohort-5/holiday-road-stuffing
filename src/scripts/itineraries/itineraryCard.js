import {useItinerary} from "./itineraryDataProvider.js"



export const Itinerary = (itinerary) => {
    
   
    
    return `
    <section class="itinerary-card">
    <div class="parkName">Park Name: ${itinerary.parkName}</div>
    <div class="parkState">State: ${itinerary.parkState}</div>
    <div class="bizarraryName">Bizarrary: ${itinerary.bizarraryName.join(", ")}<br></br></div>
    <div class="eateryName">Eateries: <br>${itinerary.eateryName.join(", ")} </br></div>
    
    </section>    
    
    
    `
}