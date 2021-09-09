const sum = (...param) => {
  let result = 0
  param.forEach(x => {
    result += Array.isArray(x) ? sum(...x) : Number(x)
  })
  return result
}

export default sum