//Pega função do arquivo flags
const getFlagValue = require('./flags')

//coloca saldação no console
console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)

console.log(process.argv)
