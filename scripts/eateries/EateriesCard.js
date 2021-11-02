export const Eatery = (eateryObject) => {
    return `
    
    <div class="eateryTag">
        <div>${eateryObject.businessName}</div> 
    </div>
    
    <div class="eateryModel">
    <h3 class="eatery">${eateryObject.businessName} is located in ${eateryObject.city} ${eateryObject.state}.<br></h3>
    
    <div class="city">Age: ${eateryObject.description}</div>
    
    </div>
    
    `

}