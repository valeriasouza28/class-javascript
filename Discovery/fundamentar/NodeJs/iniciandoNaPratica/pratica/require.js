//módulos nativos

/*-- console.log(require()), para executar esse comando precisamos colocar um argumento nele ou dá erro

console.log(require('path'))*/

/* -- require é uma maneira de você chamar módulos que já são nativos do nodejs ou módulos que podemos criar e até mesmo instalar no node*, e o path é um módulo que já existe dentro do  node*/

//const path = require('path')

/*basename é uma função que pede um argumento um arquivo, podemos colocar como argumento __filename, e ele vai mostrar o nome do arquivo que estamos executando*/
//console.log(path.basename(__filename))

//meus módulos
/** dentro de require colocamos a localização do módulo */
const myModule = require('./exports.js')

//para verificar se funcionou
console.log(myModule)
