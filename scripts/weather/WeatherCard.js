

export const Weather = (city) => {
    return `
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        ${city.dayOfWeek}
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${city.day}</h5>
            <p class="card-text">${city.dayDescription}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${city.dayTemp}</li>
            <li class="list-group-item">${city.dayPrecip}</li>
            <li class="list-group-item">${city.dayWind}</li>
        </ul>
        </div>
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${city.night}</h5>
            <p class="card-text">${city.dayDescription}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${city.nightTemp}</li>
            <li class="list-group-item">${city.nightPrecip}</li>
            <li class="list-group-item">${city.nightWind}</li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</div>
    `
}