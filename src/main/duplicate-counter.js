const countDuplicate = (ar) => {
  let elements = [];
  let counter = 0;
  for(let i=0; i<ar.length; i++){
    if(elements.includes(ar[i])){
      counter++
      continue
    }
    elements.push(ar[i])
  }
  return counter
}

export { countDuplicate }
