const findMultiples = (max, multiplesOf) => {
    let array = []
    if(Array.isArray(multiplesOf)){
        multiplesOf.forEach(multiple => {
            array = array.concat(findMultiples(max, multiple))
        })
    }
    else {
        let nextNumber = multiplesOf
        let counter = 1
        while(nextNumber <= max){
            array.push(nextNumber)
            counter++
            nextNumber = counter*multiplesOf
        }
    }
    array.sort((a, b) => a-b)
    return array
}



export { findMultiples }
