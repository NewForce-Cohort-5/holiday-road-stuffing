// import { npsKey } from "./Settings.js"


let parkArray = []

export const usePark  = () => {
    return parkArray.slice()
}


export const getPark = () => {
    return fetch("https://developer.nps.gov/api/v1/parks?api_key=8bGRVK1sJQjmjEZijg04Du4RTYP7UEExZ5EuiPHf")
        .then(dirtyPark => dirtyPark.json())
        .then(cleanedPark => {
            parkArray = cleanedPark.data
                //adding .data here because it is the main object in our API that has the data
            // console.log(cleanedPark) 
        })

}

// export const saveParks = (note) => {
//     return fetch('http://localhost:8088/notes', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(note)
//     })

//     .then(getParks)
   
// }