

import * as fs from 'fs'
import * as path from 'path'

export function borrarArchivo(ruta){
    if(fs.existsSync(ruta)){
        fs.unlinkSync(ruta)
    }
}

 export function leerArchivoComoString(ruta){

    try {
                       
        let datos = fs.readFileSync(ruta,'utf-8')
        
        console.log(`Mostrando los contenidos del archivo ${path.resolve(ruta)}`)
        console.log(`\"`+datos+`\"`)
        
        

    }
    catch(error) {
        console.log(`Error abriendo el archivo: ${error.message}`)
    }

}


export function escribirTextoEnArchivo(ruta,texto,crear){

    try {
        let existe =  fs.existsSync(ruta)
        if (!existe && !crear){
        
            console.log(`Error: El archivo no existe!`)     
               
        }
        else
        {            
            fs.appendFileSync(ruta,texto+`\n`)
            
            if (!existe){
                console.log(`Se creo archivo ${path.resolve(ruta)}`)
            }
            console.log(`Se agrego la linea \"${texto}\" al archivo ${path.resolve(ruta)}`)
            }
        
        }
        catch(error) {
            console.log(`Error abriendo la ruta: ${error.message}`)
        }

}

export function transformarStringEnArrayDeNumeros(texto,separador){

  
        let array = texto.split(separador)
        let resultado  = []
        
        array.forEach(cadena => {
            if (!isNaN(cadena)){
            resultado.push(cadena)
            }
            
        })

        return resultado
}

export function transformarArrayDeNumerosAUnSoloString(array,separador){

  
        let resultado = array.join(separador)
        
        return resultado

}

export function combinarDosArrays(array1,array2){

        let resultado = array1.concat(array2)
        
        resultado = [...new Set([...array1,...array2])].sort((a,b) => a-b)

        return resultado
       
}

export function combinarNArrays(array){

        let resultado = []
        
        let resultadoAux = array[0]
        
        let esteArray  = []

        
        for (let i=1 ; i < array.length ; i++){
           
            esteArray = array[i]

            resultado = combinarDosArrays(resultadoAux,esteArray)
            
            

            resultadoAux = resultado



        }
           
        return resultado

}

