let objeto = {
  nome: "adriano",
  idade: 40,
  pais: "brasil"
}


console.log(objeto["pais"])

for (let key in objeto) {
  console.log(objeto[key])
}