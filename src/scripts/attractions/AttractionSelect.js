import { getAttractions, useAttractions } from "./AttractionProvider.js"
import { AttractionList } from "./AttractionList.js"

const contentTarget = document.querySelector(".attractions-dropDown")

export const AttractionSelect = () => {
    getAttractions()
        .then(() => {
    const attractions = useAttractions()
    render(attractions)
        })
}

const render = attractionsCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="attractionSelect">
            <option value="0">Please select an attraction...</option>
            ${
                attractionsCollection.map(attractionObject => {
                    const attractionName = attractionObject.name
                    return `<option>${attractionName}</option>`
                })
            }
        </select>
    `
}

const eventHub = document.querySelector("body")

eventHub.addEventListener("change", (eventObject) => {

    if(eventObject.target.id === "attractionSelect"){
        AttractionList("attractions", eventObject.target.value)
    }
})