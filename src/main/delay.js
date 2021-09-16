const delay = async (ms, value) => new Promise(resolve => { setTimeout(() => {resolve(value)}, ms)})

export default delay
