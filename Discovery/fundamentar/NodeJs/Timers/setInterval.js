// setInterval irá rodar uma função N vezes
//depois X milisegundos

const timeOut = 1000
const checking = () => console.log('checking!')

let timer = setTimeout(checking, timeOut)

setInterval(checking, timeOut)
