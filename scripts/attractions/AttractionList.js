import { Attraction } from './Attraction.js'
import { getAttractions, useAttractions } from "./AttractionProvider.js";

const contentTarget = document.querySelector(".bizarre-attraction")

export const AttractionList = (selectListName, selectedChoice) => {
    
    
    getAttractions()
    .then(() => {
            let attractionsArray = useAttractions();
            if(selectListName === "attractions"){
                attractionsArray = attractionsArray.filter(singleAttractionInLoop => {
                    return selectedChoice === singleAttractionInLoop.name
                })
            }
                attractionsArray.forEach((singleAttractionObj) => {
                    contentTarget.innerHTML = Attraction(singleAttractionObj)
                })
        });
    };