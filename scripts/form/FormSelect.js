import { usePark, getPark } from "../parks/ParkProvider.js";
import { parkList } from "../parks/ParkList.js";
import { useAttractions, getAttractions } from "../attractions/AttractionProvider.js";
import { AttractionList } from "../attractions/AttractionList.js";
import { useEateries, getEateries } from "../eateries/EateryProvider.js";
import { eateriesList } from "../eateries/EateriesList.js";
import {weatherList} from "../weather/WeatherList.js"

const parkTarget = document.querySelector(".filters-parks");
const bizarreTarget = document.querySelector(".filters-bizarraries");
const eateryTarget = document.querySelector(".filters-eateries");
const nationalParkContainer = document.querySelector(".national-park");

export const FormSelect = () => {
    getPark()
    .then(() => {
        const parks = usePark();
        renderParks(parks);
    })
    getAttractions()
    .then(() => {
        const bizarraries = useAttractions();
        renderBizarraries(bizarraries);
    })
    getEateries()
    .then(() => {
        const eateries = useEateries();
        renderEateries(eateries);
    })
}

const renderParks = (parksCollection) => {
    parkTarget.innerHTML = `
        <label for="">National Parks</label>
        <select class="form-control dropdown" id="park-name-dropdown">
            <option selected>Choose...</option>
            ${
                parksCollection.map((park) => {
                    const parkName = park.fullName;
                    return `<option>${parkName}</option>`
                })
            }
        </select>
    `
}

const renderBizarraries = (bizarrariesCollection) => {
    bizarreTarget.innerHTML = `
        <label for="">Bizarraries</label>
        <select class="form-control dropdown" id="attractionSelect">
            <option selected>Choose...</option>
            ${
                bizarrariesCollection.map((attraction) => {
                    const attractionName = attraction.name;
                    return `<option>${attractionName}</option>`
                })
            }
        </select>
    `
}

const renderEateries = (eateriesCollection) => {
    eateryTarget.innerHTML = `
        <label for="">Eateries</label>
        <select class="form-control dropdown" id="eaterySelect">
            <option selected>Choose...</option>
            ${
                eateriesCollection.map((eatery) => {
                    const eateryName = eatery.businessName;
                    return `<option>${eateryName}</option>`
                })
            }
        </select>
    `
}

const eventHub = document.querySelector("body")

//listen for change in "eaterySelect" id in the render function then call eateriesList which tagets the html div
eventHub.addEventListener("change", (eventObj1) => {

    if(eventObj1.target.id === "eaterySelect") {
        eateriesList("eateries", eventObj1.target.value)
    } 

})

eventHub.addEventListener("change", (eventObj2) => {

    if(eventObj2.target.id === "attractionSelect"){
        AttractionList("attractions", eventObj2.target.value)
    }
})

eventHub.addEventListener("change", (eventObj3) => {

    if(eventObj3.target.id === "park-name-dropdown") {
        parkList("national-park", eventObj3.target.value)
    } 

})
