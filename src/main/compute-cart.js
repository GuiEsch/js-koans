const computeCart = (cartContent) => {
  let lines = cartContent.split('\n')
  let total = 0;
  lines.forEach(line => {
    let splittedLine = line.split(' ')
    if(splittedLine.length === 2){
      total += splittedLine[0]*splittedLine[1]
    }
  });
  return total
}

export { computeCart }
