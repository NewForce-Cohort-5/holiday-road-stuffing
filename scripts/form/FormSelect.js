import { usePark } from "../parks/ParkProvider.js";
import { getPark } from "../parks/ParkProvider.js";
import { useAttractions } from "../attractions/AttractionProvider.js";
import { getAttractions } from "../attractions/AttractionProvider.js";
import { useEateries } from "../eateries/EateryProvider.js";
import { getEateries } from "../eateries/EateryProvider.js";

const parkTarget = document.querySelector(".filters-parks");
const bizarreTarget = document.querySelector(".filters-bizarraries");
const eateryTarget = document.querySelector(".filters-eateries");

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