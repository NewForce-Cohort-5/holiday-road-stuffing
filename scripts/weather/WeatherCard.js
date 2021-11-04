

export const weatherCard = (weatherObj) => {
    return `
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        ${new Date(weatherObj.dt_txt).toLocaleDateString('en-US')} 
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div class="card">
        <div class="card-body">
            <p class="card-text">${(weatherObj.weather[0].description).toUpperCase()}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Temp: ${weatherObj.main.temp}&#8457;</li>
            <li class="list-group-item">Humidity: ${weatherObj.main.humidity}%</li>
            <li class="list-group-item">Wind: ${weatherObj.wind.speed}mph</li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</div>
    `
}