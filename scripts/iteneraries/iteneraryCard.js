export const Itenerary = (itenerary) => {
    return `
    <section class="itenerary card">
    <div class="parkName">Park Name: ${itenerary.parkName}</div>
    <div class="parkState">State: ${itenerary.parkState}</div>
    <div class="bizarraryName">Bizarrary: ${itenerary.bizarraryName}<br></br></div>
    <div class="eateryName">Eatery: <br>${itenerary.eateryName}</br></div>
    
    </section>    
    
    
    `
}