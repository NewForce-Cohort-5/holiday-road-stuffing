import { Attraction } from './Attraction.js'
import { getAttractions, useAttractions } from "./AttractionProvider.js";

export const AttractionList = (selectListName, selectedChoice) => {
    let attractionListContainer = document.querySelector(".attraction-list");
    let attractionHTML = "";
    attractionListContainer.innerHTML = attractionHTML
    
    getAttractions()
    .then(() => {
            let attractionsArray = useAttractions();
            if(selectListName === "attractions"){
                attractionsArray = attractionsArray.filter(singleAttractionInLoop => {
                    return selectedChoice === singleAttractionInLoop.name
                })
            }
                attractionsArray.forEach((singleAttractionObj) => {
                    attractionListContainer.innerHTML += Attraction(singleAttractionObj)
                })
        });
    };