const counterFactory = () => {
  let counter = 1
  return () => counter++
}

export default counterFactory
