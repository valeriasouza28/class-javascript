// clearInterval irá cancelar o setInterval registrado
const timeOut = 1000
const checking = () => console.log('checking!')

let interval = setTimeout(checking, timeOut)

setTimeout(() => clearInterval(interval), 3000)
