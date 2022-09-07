import * as funciones from './api/funciones.js'


console.log('---TEST leerArchivoComoString---')
funciones.leerArchivoComoString('datos.txt')
console.log('---FIN---\n')


funciones.borrarArchivo('log.txt')


console.log('---TEST escribirTextoEnArchivo---')
funciones.escribirTextoEnArchivo('log.txt','Este es un nuevo mensaje',false)
funciones.escribirTextoEnArchivo('log.txt','Este es un nuevo mensaje',true)
funciones.escribirTextoEnArchivo('log.txt','Este es un nuevo mensaje',false)
console.log('---FIN---\n')



console.log('---TEST transformarStringEnArrayDeNumeros---')
console.log(funciones.transformarStringEnArrayDeNumeros('123 | 456 | 789 | 1bc | 10',' | '))
console.log('---FIN---\n')

console.log('---TEST transformarArrayDeNumerosAUnSoloString---')
console.log(funciones.transformarArrayDeNumerosAUnSoloString([123, 456, 789, 10],','))
console.log('---FIN---\n')

console.log('---TEST combinarDosArrays---')
console.log(funciones.combinarDosArrays([1, 5, 10],[2, 3, 8, 11]))
console.log('---FIN---\n')

console.log('---TEST combinarNArrays---')
console.log(funciones.combinarNArrays([[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]))
console.log('---FIN---\n')