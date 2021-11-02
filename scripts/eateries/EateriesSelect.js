
import { eateriesList } from "./EateriesList.js";
import { useEateries, getEateries } from "./EateryProvider.js";

const contentTarget = document.querySelector(".eateriesTarget")

export const EaterySelect = () => {
    //get all eateries from api
    
    getEateries()
    .then(() => {
    const eateries = useEateries()
    render(eateries)
    })
}


//create dropdown using object in array from api
const render = eateryCollection => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="eaterySelect">
    <option value="0">Please select an eatery</option>
    ${
        eateryCollection.map((eateryObj) => {
            const eatery = eateryObj.businessName
            return `<option>${eatery}</option>`
        
        })
    }
</select>
    
    `
}

//eventHub targets everything in the body
const eventHub = document.querySelector("body")

eventHub.addEventListener("change", (eventObj) => {

    if(eventObj.target.id === "eaterySelect") {
        eateriesList("eateries", eventObj.target.value)
    }

})