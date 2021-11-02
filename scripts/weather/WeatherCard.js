

export const Weather = (park) => {
    return `
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        ${park.dayOfWeek}
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${park.day}</h5>
            <p class="card-text">${park.dayDescription}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${park.dayTemp}</li>
            <li class="list-group-item">${park.dayPrecip}</li>
            <li class="list-group-item">${park.dayWind}</li>
        </ul>
        </div>
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${park.night}</h5>
            <p class="card-text">${park.dayDescription}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${park.nightTemp}</li>
            <li class="list-group-item">${park.nightPrecip}</li>
            <li class="list-group-item">${park.nightWind}</li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</div>
    `
}