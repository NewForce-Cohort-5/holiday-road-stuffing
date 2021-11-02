//This card has the Modal bottun. Do not forget to add two links in index

export const Eatery = (eateryObject) => {
    return `
    
    <div class="eateryTag">
        <h2>${eateryObject.businessName}</h2> 
    </div>
   
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  More Info
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${eateryObject.businessName}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="eatery">${eateryObject.businessName} is located in ${eateryObject.city} ${eateryObject.state}.<br></div>
        
        <div class="city">Age: ${eateryObject.description}</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    `

}

