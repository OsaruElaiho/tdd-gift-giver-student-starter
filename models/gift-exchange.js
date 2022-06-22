const {BadRequestError} = require("../utils/errors")

class GiftExchange {
    
    static pairs(names) {
        // If the number of names provided is odd, it should throw a new Error 
        // explaining that the number of names can't be odd.
        if (names.length % 2  !=  0){
            // throw new Error("Number of names can't be odd")
            throw new BadRequestError("Number of names can't be odd")
        }
        // array containing tuples
        const pairs = []
        while(names.length != 0){
            // reset the current pair to make a new pairing
            const currPair = []
            // while param array is not empty and currPair array length is is less than 2
            while((names.length != 0) && (currPair.length < 2)){
                const index = Math.floor(Math.random() * names.length) // random index
                const name = names[index] // name at random index
                currPair.push(name) // add random name to current pairing
                // remove the names used using its index and specify how many elements 
                // to remove --> 1
                names.splice(index,1)
            }
            // update list of pairs to be returned
            pairs.push(currPair)

        }
        return pairs
    }


    static traditional(names) {
        // randomize array
        let currIndex = names.length // start from back --> looping back
        let randomIndex

        // While there remain elements to shuffle.
        while (currIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currIndex)
        currIndex--

        // And swap it with the current element.
        [names[currIndex], names[randomIndex]] = [names[randomIndex], names[currIndex]]
        }

        //  array of strings indicating who is giving a gift to who
        const results = []
        let recieve
        for(let index = 0; index < names.length; index++){
            const give = names[index] 
            // The last person to receive a gift should give a gift to the first person.
            if(index == names.length - 1){
                recieve = names[0] // loop back to first person
            } else{
                recieve = names[index + 1] // next perosn gets gift
            }
            results.push(`${give} is giving a gift to ${recieve}`)
        }
        return results
    }
    
}


module.exports = GiftExchange