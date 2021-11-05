//This card has the Modal bottun. Do not forget to add two links for flexbow in index



export const Eatery = (eateryObject) => {
    
    let wheelchairAccessible = ""
let petFriendly = ""
let wifi = ""
let diaperFacility = ""
let playground = ""
let restrooms = ""

if( eateryObject.ameneties.wheelchairAccessible === true){
    wheelchairAccessible = "Yes" 
     
     }   else {
         wheelchairAccessible = "No"
     }

if( eateryObject.ameneties.petFriendly === true){
    petFriendly = "Yes" 
     
     }   else {
         petFriendly = "No"
     }

if( eateryObject.ameneties.wifi === true){
    wifi = "Yes" 
     
     }   else {
         wifi = "No"
     }

if( eateryObject.ameneties.diaperFacility === true){
    diaperFacility = "Yes" 
     
     }   else {
         diaperFacility = "No"
     }

if( eateryObject.ameneties.playground === true){
    playground = "Yes" 
     
     }   else {
         playground = "No"
     }

if( eateryObject.ameneties.restrooms === true){
    restrooms = "Yes" 
     
     }   else {
         restrooms = "No"
     }


    return `
    <div>
    <div class="eateryTag">
        <h4 class="eatery_name">${eateryObject.businessName}</h4> 
        
    </div>
   
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" id="modalButton" data-bs-toggle="modal" data-bs-target="#eateriesModal">
  More Info
</button>

<!-- Modal -->
<div class="modal fade" id="eateriesModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${eateryObject.businessName}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="eatery">${eateryObject.businessName} is located in ${eateryObject.city} ${eateryObject.state}.<br></div>
      
        <div class="city">Age: ${eateryObject.description}</div>
      </div>
      <div class="ameneties">
        <div>Ameneties:<br></div>
        <ul class="amenetiesOptions">
            <li>Wheelchair Accessible: ${wheelchairAccessible}</li>
            <li>Pet Friendly: ${petFriendly}</li>
            <li>Has Wifi: ${wifi}</li>
            <li>Has Changing Table: ${diaperFacility}</li>
            <li>Has Playground: ${playground}</li>
            <li>Restrooms: ${restrooms}</li>
        </ul>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>        
      </div>
    </div>
  </div>
</div>

<button id="removeButton" class="btn btn-outline-dark" onClick="this.parentNode.parentNode.removeChild(this.parentNode);">Remove</button>
</div>
    `

}

