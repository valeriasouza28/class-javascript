// clearTimeout vai cancelar um Timeout, alguma função que foi registrada pelo timeout
const timeOut = 3000
const finished = () => console.log('done!')

let timer = setTimeout(finished, timeOut)

clearTimeout(timer)
