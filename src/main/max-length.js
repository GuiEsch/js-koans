const maxLength = (ar) => 
  ar.reduce((acc, value)=> {
    if(acc < value.length){
        return value.length
    }
    return acc
  }, 0)

export { maxLength }
