const getAllTruthies = () => {
  return [true, {}, [], 42, "foo", new Date(), Infinity]
}

const getAllFalsies = () => {
  return [false, null, undefined, 0, NaN, ""]
}

export { getAllFalsies, getAllTruthies }
