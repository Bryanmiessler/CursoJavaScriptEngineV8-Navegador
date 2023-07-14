// Garbage Collection es un proceso automático realizado por el motor de JavaScript que consiste en eliminar aquellos objetos que no tienen referencias o son inalcanzables para el contexto de ejecución, a través del algoritmo mark-and-sweep (marcado y barrido).

const array = [1,2,3,4,5]
// Extrae el último elemento, guarda la referencia en la variable lastElement.
const lastElement = array.pop() 
console.log(lastElement) //5

const array2 = [1,2,3,4,5]
// Extrae el último elemento, pero no existe la referencia, entonces el Garbage Collection lo eliminará
array2.pop() 
console.log(array2) // [1,2,3,4]