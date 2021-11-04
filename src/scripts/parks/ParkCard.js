export const parkCard = (parkObject) => {
    return `
    <section>
    <h4 class="park_name">${parkObject.fullName}</h4>
    <div class="park_state">${parkObject.addresses[0].stateCode}</div>
    </section>

    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  More Info
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${parkObject.fullName}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="park">${parkObject.fullName} is located in ${parkObject.addresses[0].city} ${parkObject.addresses[0].stateCode}.<br></div>
        
        <div class="city">${parkObject.description}</div>
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



