// El memory heap consiste en una manera desorganizada o aleatoria de guardar la información, ya sea valores, funciones, entre otros. ¿Recuerdas el componente de tu computador que guarda información de manera aleatoria? Exactamente, la RAM es donde guardará esta información mediante una referencia o dirección.

const objeto1 = {valor: 1}
const objeto2 = objeto1
objeto2.valor = 2

console.log(objeto1.valor)
console.log(objeto1 === objeto2)