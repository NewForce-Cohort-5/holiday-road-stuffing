let eateries = []

    export const useEateries = () => eateries.slice()
    
    export const getEateries = () => {
        return fetch ("http://holidayroad.nss.team/eateries")
        .then(dirtyEatery => dirtyEatery.json())
        .then(cleanEatery => {
            eateries = cleanEatery
        })
    }



    
