let iteneraryArray = []

export const useItenerary = () => {
    return iteneraryArray.slice()
}

export const getItenerary = () => {
    return fetch("http://localhost:8088/itenerary") // Fetch from the API
        .then(dirtyItenerary => dirtyItenerary.json())  // Parse as JSON
        .then(cleanItenerary => {
            // What should happen when we finally have the array?
            iteneraryArray = cleanItenerary
        })
}

export const saveItenerary = (itenerary) => {
return fetch("http://localhost:8088/itenerary", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(itenerary)
})

}