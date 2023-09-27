function getFlagValue(flag) {
  //procura qual que é o da posição no argv número da flag
  const index = process.argv.indexOf(flag) + 1

  //aqui eu estou pegando o resultado da flag
  return process.argv[index]
}

module.exports = getFlagValue

//console.log(process.argv)
