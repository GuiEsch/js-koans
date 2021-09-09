const createSequence = (length) => {
  let result = []
  for(let i=1; i<=length; i++){
    result.push(i)
  }
  return result;
}

export { createSequence }
