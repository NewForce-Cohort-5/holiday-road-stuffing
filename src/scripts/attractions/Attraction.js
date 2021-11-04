export const Attraction = (attraction) => {
  let hasSouvenirs = ""
  let hasRestrooms = ""
  let noAmenities = ""
  if(attraction.ameneties.souvenirs === true){
    hasSouvenirs = "/src/imgs/souvenirs.png" 
     }   else {
        hasSouvenirs = "/src/imgs/no-souvenirs.png"
  }
  if(attraction.ameneties.restrooms === true){
    hasRestrooms = "/src/imgs/restrooms.jpg"
    }   else {
        hasRestrooms = "/src/imgs/no-restrooms.png"
  }
  return `
            <section class="attraction__card">
                <h4 class="attraction__name">${attraction.name}</h4>
                
                
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" id="modalButton" data-bs-toggle="modal" data-bs-target="#attractionsModal">
  More Info
</button>
            </section>

<!-- Modal -->
<div class="modal fade" id="attractionsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Found in ${attraction.city}, ${attraction.state}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>${attraction.description}</p>
      </div>
                <p><img class="restroom-image" src="${hasRestrooms}"> <img class="souvenirs-image" src="${hasSouvenirs}"</p>
                   
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    `
}


