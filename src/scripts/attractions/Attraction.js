export const Attraction = (attraction) => {
  let hasSouvenirs = ""
  let hasRestrooms = ""
  let noAmenities = ""
  if(attraction.ameneties.souvenirs === true){
    hasSouvenirs = "You can buy souvenirs here." 
     }   else {
        hasSouvenirs = ""
  }
  if(attraction.ameneties.restrooms === true){
    hasRestrooms = "There are restrooms here."
    }   else {
        hasRestrooms = ""
  }
  if(attraction.ameneties.souvenirs === false && attraction.ameneties.restrooms === false){
    noAmenities = "There are no amenenities here."
  } else {
    noAmenities = ""
  }
  
  return `
  <div>
            <section class="attraction__card">
                <h4 class="attraction__name">${attraction.name}</h4>
                
                <ul style="list-style: none">
                  <li>${hasSouvenirs}</li>
                  <li>${hasRestrooms}</li>
                  <li>${noAmenities}</li>
                </ul>
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  More Info
</button>
            </section>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Found in ${attraction.city}, ${attraction.state}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>${attraction.description}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<button onClick="this.parentNode.parentNode.removeChild(this.parentNode);">Remove</button>
</div>
    `
}


