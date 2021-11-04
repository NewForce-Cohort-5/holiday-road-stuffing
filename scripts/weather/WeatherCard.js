

export const weatherCard = (weatherObj) => {
  let weatherDescriptionToCompare = weatherObj.weather[0].description;
  if(weatherDescriptionToCompare.includes("rain")) {
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
            <p class="card-text">${(weatherObj.weather[0].description).toUpperCase()}</p>
            <i class="bi bi-cloud-rain weather-icon"></i>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Temp: ${Math.round(weatherObj.main.temp)}&#8457;</li>
            <li class="list-group-item">Humidity: ${weatherObj.main.humidity}%</li>
            <li class="list-group-item">Wind: ${Math.round(weatherObj.wind.speed)}mph</li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</div>
    `
  } else if (weatherDescriptionToCompare.includes("snow")) {
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
            <p class="card-text">${(weatherObj.weather[0].description).toUpperCase()}</p>
            <i class="bi bi-cloud-snow weather-icon"></i>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Temp: ${Math.round(weatherObj.main.temp)}&#8457;</li>
            <li class="list-group-item">Humidity: ${weatherObj.main.humidity}%</li>
            <li class="list-group-item">Wind: ${Math.round(weatherObj.wind.speed)}mph</li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</div>
    `
  } else if (weatherDescriptionToCompare.includes("overcast clouds")) {
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
            <p class="card-text">${(weatherObj.weather[0].description).toUpperCase()}</p>
            <i class="bi bi-cloud-sun weather-icon"></i>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Temp: ${Math.round(weatherObj.main.temp)}&#8457;</li>
            <li class="list-group-item">Humidity: ${weatherObj.main.humidity}%</li>
            <li class="list-group-item">Wind: ${Math.round(weatherObj.wind.speed)}mph</li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</div>
    `
  } else if (weatherDescriptionToCompare.includes("scattered clouds") ||
  weatherDescriptionToCompare.includes("broken clouds")) {
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
            <p class="card-text">${(weatherObj.weather[0].description).toUpperCase()}</p>
            <i class="bi bi-clouds weather-icon"></i>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Temp: ${Math.round(weatherObj.main.temp)}&#8457;</li>
            <li class="list-group-item">Humidity: ${weatherObj.main.humidity}%</li>
            <li class="list-group-item">Wind: ${Math.round(weatherObj.wind.speed)}mph</li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</div>
    `
  } else if (weatherDescriptionToCompare.includes("few clouds")) {
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
            <p class="card-text">${(weatherObj.weather[0].description).toUpperCase()}</p>
            <i class="bi bi-cloud weather-icon"></i>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Temp: ${Math.round(weatherObj.main.temp)}&#8457;</li>
            <li class="list-group-item">Humidity: ${weatherObj.main.humidity}%</li>
            <li class="list-group-item">Wind: ${Math.round(weatherObj.wind.speed)}mph</li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</div>
    `
  } else if (weatherDescriptionToCompare.includes("clear sky")) {
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
            <p class="card-text">${(weatherObj.weather[0].description).toUpperCase()}</p>
            <i class="bi bi-sun weather-icon"></i>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Temp: ${Math.round(weatherObj.main.temp)}&#8457;</li>
            <li class="list-group-item">Humidity: ${weatherObj.main.humidity}%</li>
            <li class="list-group-item">Wind: ${Math.round(weatherObj.wind.speed)}mph</li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</div>
    `
  }
  
}