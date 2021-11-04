
import { getPark, usePark } from "./ParkProvider.js"
import { parkList } from "./ParkList.js"
// import { saveNotes } from "../notes/NoteDataProvider.js"


// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".national-park")

export const parkSelect = () => {
        // The hint here is GET, in order to use something from DB you need to get it
       
        getPark()
        .then(() => {
            let parkArray = usePark()
            render(parkArray)
        })
    
}

const render = parkCollection => {

    contentTarget.innerHTML = `
        <select class="dropdown" id="park-name-dropdown">
            <option value="0">Please select a State Park</option>
            ${
                parkCollection.map(parkObject => {
                    const parkType = parkObject.fullName
                    return `<option>${parkType}</option>`
                })
            }
        </select>
    `
}


//filtering section

const filterEvent = document.querySelector("body")

filterEvent.addEventListener("change", (eventObject) => {
    //chnage is for dd

    const dropdownPark = eventObject.target.value

    if(eventObject.target.id === "park-name-dropdown"){
        parkList("national-parks", dropdownPark)

        }
    })