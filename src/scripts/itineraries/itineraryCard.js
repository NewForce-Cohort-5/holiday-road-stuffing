export const Itinerary = (itinerary) => {
    return `
    <section class="itinerary-card">
    <div class="parkName">Park Name: ${itinerary.parkName}</div>
    <div class="parkState">State: ${itinerary.parkState}</div>
    <div class="bizarraryName">Bizarrary: ${itinerary.bizarraryName}<br></br></div>
    <div class="eateryName">Eatery: <br>${itinerary.eateryName}</br></div>
    
    </section>    
    
    
    `
}