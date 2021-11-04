import { Eatery } from "./EateriesCard.js"
import { getEateries, useEateries } from "./EateryProvider.js"

const contentTarget = document.querySelector(".eatery")

export const eateriesList = (whichFilter, wordToFilter) => {
    
   

    getEateries()
    .then(() => {
        let eateryArray = useEateries()
        
        if (whichFilter === "eateries") {
            eateryArray = eateryArray.filter(singleEateryObj => {
                return wordToFilter === singleEateryObj.businessName
            })
        }
        eateryArray.forEach((singleEateryObj) => {
            contentTarget.innerHTML += Eatery(singleEateryObj)
        })
    })
}

//if you want to add more than one eatery to list add + before = Eatery