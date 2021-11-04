

export const weatherCard = (weatherObj) => {
    return `
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        ${new Date(weatherObj.dt_txt).toLocaleDateString('en-US')} 
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">${new Date(weatherObj.dt_txt).toLocaleDateString('en-US')}</h5>
            <p class="card-text">Today's Weather - ${weatherObj.weather[0].description}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">High Temp: ${weatherObj.main.temp_max}F</li>
            <li class="list-group-item">Low Temp: ${weatherObj.main.temp_min}F</li>
            <li class="list-group-item">Humidity: ${weatherObj.main.humidity}%</li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</div>
    `
}