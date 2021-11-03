

export const weatherCard = (weatherObj) => {
  console.log(weatherObj)
    return `
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        ${weatherObj.dayOfWeek}
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${weatherObj.day}</h5>
            <p class="card-text">${weatherObj.dayDescription}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${weatherObj.dayTemp}</li>
            <li class="list-group-item">${weatherObj.dayPrecip}</li>
            <li class="list-group-item">${weatherObj.dayWind}</li>
        </ul>
        </div>
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${weatherObj.night}</h5>
            <p class="card-text">${weatherObj.dayDescription}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${weatherObj.nightTemp}</li>
            <li class="list-group-item">${weatherObj.nightPrecip}</li>
            <li class="list-group-item">${weatherObj.nightWind}</li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</div>
    `
}