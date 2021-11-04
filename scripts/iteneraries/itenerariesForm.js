import { saveItenerary } from "./iteneraryDataProvider.js"
import 


const contentTarget = document.querySelector("body")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "Save Itenerary") {

        const newItenerary = {
            parkName: document.querySelector(`.park_name`).value,
            parkState: document.querySelector(`.park_state`).value,
            bizarraryName: document.querySelector(`.attraction_name`).value,
            eateryName: document.querySelector(`.eatery_name`).value

        }
        saveEntry(newItenerary)

    }
})