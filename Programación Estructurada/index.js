// // lllamada antes de inicializar la función
// saludar()

// //función de primero orden

// function saludar (){
//     console.log('hola fokin world')
// }
// //llamar despues de inicializar
// saludar()

// const saludarAnonimo= function(){
//     saludar()
// }

// saludarAnonimo()

// //objeto

// const usuario = {
//     nombre: 'Denis Benavides',
//     correo: 'N/A'

// }

// function agregarCorreo (nuevoCorreo){
//     usuario.correo = nuevoCorreo
// }

// console.log(usuario)
// agregarCorreo('denisalexisbenavides22q@gmail.com')

// //suma


// let a = 23
// let b = 23

// function sumar(){
//     return a + b
// }

// console.log(sumar())





// //ejercicio2

// let suma = function(a,b){
//     return a + b
// }

// console.log(suma(4,5))

// //una función qye permita determinar una multiplicación a partir de sumas

// const multiplicacion = function suma(a,b){
//         return (b != 0) ? a + suma(a, b-1) : 0
// }

// console.log(multiplicacion(2,6));

// //funciones recursivas

// let numero = 0
// while ( numero = 10){
//     console.log(numero)
//     numero++
// }

// function contador(numero = 0){

//       if (numero >= 10){
//        return
//     }
//     console.log(numero);
//     contador(numero+1)
// }

// console.log("funcion recursiva")
// contador()

// //funciones anidadas

// function media ( datos){

//     function sumatoria(serie){
//         let suma = 0
//         serie.forEach(numero => {
//             suma += numero
            
//         });
//         return suma
//     }
//     return sumatoria(datos) / datos.length
// }

// const misDatos= [5,6,4,6,4]
// console.log(`la media de ${misDatos}es: ${media(misDatos)}`)

//mediana
function mediana(datos){
    const largo = datos.length
    if (datos.length %2 ==0 ){
        let mitadArreglo = (largo )/2
        let anterior = mitadArreglo - 1
        let siguiente = mitadArreglo

        return(datos[anterior] + datos[siguiente]) /2
    }else{
        let mitadArreglo = Math.round((largo)/2)
        return datos[mitadArreglo -1]
    }
}

const misDatos = [5,6,7,19,3]
console.log(`la media de ${misDatos} es {media(misDatos)}`);
console.log(mediana(misDatos));


//varianza
 function media ( datos){

    function sumatoria(serie){
         let suma = 0
         serie.forEach(numero => {
             suma += numero
            
         });
         return suma
     }     return sumatoria(datos) / datos.length
}

