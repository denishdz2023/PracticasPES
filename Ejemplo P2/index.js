// let frutas = ["pera", "Manzana", "Uva"];

// //Acceder de manera individual a un valor Array

// console.log(frutas[2])


// for(let fruta of frutas){
//     console.log(fruta);
// }

// frutas.push("piña")
// frutas.pop()
// frutas.unshift("Sandia")
// frutas.shift()

//EJERCICIO2

// let numeros = []
// let otrosnumeros = []
// let otros= []
// let arrayfinal = []


// for(let i = 1; i<=100; i++){
//     let mensaje = `El valor es: ${i}`
//     numeros.push(mensaje)

// }

// for(let i = 101; i<=200; i++){
//     let mensaje = `El valor es: ${i}`
//     otrosnumeros.push(mensaje)

// }
// for(let i = 201; i<=300; i++){
//     let mensaje = `El valor es: ${i}`
//     otros.push(mensaje)

// }

// arrayfinal = [...numeros,...otrosnumeros,...otros]


// arrayfinal.forEach((i)=>{
//     console.log(i)
// })

//EJERCICIO3


let persona = {
    nombre:`Denis`,
    edad: 18,
    carrera:`software`
    
}
let persona2 = {
    nombre:`Dennis`,
    edad: 18,
    carrera:`software2`
    
}
let persona3 = {
    nombre:`Dennnis`,
    edad: 18,
    carrera:`software3`
    
}
let arrayObjeto = [persona, persona2, persona3]

arrayObjeto.forEach((i)=>{
    console.log(i)
})

console.log(arrayObjeto[0].carrera)