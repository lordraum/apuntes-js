
/* 
// Array.from
let palabra = 'Hello World'
let words = Array.from(palabra)
console.log(words)

let frase = 'Bienvenidos a esta nueva actualización'
let letrasFrase = Array.from(frase)
console.log(letrasFrase)

let letters = ['h', 'j', 'g','m', 'd', 'v']
let names = ['Fernando', 'Olga', 'Sebastián', 'Angela']
let numbers = [5, 21, 12, 54, 35, 1, 25, 25]

console.log(letters.sort())
console.log(names.sort())
console.log(numbers.sort((a,b)=> a-b))
console.log(numbers.sort((a,b)=> b-a)) */

/*
// .forEach()

let personNames = ['Fernando', 'Olga', 'Sebastián', 'Angela']

personNames.sort().forEach((personName)=> console.log(`${personName} vive en la transversal 5g # 48p 3 sur`)) */

//ejemplo selecciones
class Seleccion {
    constructor(nombre,puntos){
        this.nombre = nombre
        this.puntos = puntos
    }
}

/* 
const selBrasil = new Seleccion('Brasil',27)

const selArgentina = new Seleccion('Argentina',19)

const selEcuador = new Seleccion('Ecuador',16)

const selUruguay = new Seleccion('Uruguay',16)

const selColombia = new Seleccion('Colombia',14)

const selParaguay = new Seleccion('Paraguay',12)

const selPeru = new Seleccion('Perú',12)

const selChile = new Seleccion('Chile',7)

const selBolivia = new Seleccion('Bolivia',7)

const selVenezuela = new Seleccion('Venezuela',4)

const selecciones = [
    selBrasil,
    selArgentina,
    selEcuador,
    selUruguay,
    selColombia,
    selParaguay,
    selPeru,
    selChile,
    selBolivia,
    selVenezuela
]

selecciones.forEach((seleccion)=>
    console.log(`La selección de ${seleccion.nombre} tiene ${seleccion.puntos} puntos`)
)

 */

/* 

// .some y .every
let numbers = [15, 17, 21, 32, 44, 51, 66]

console.log(numbers.some(number=> number % 3 == 0))
console.log(numbers.every(number=> number % 3 == 0))

 */

/* 
//.map
let numbers = [9, 15, 17, 21, 32, 44, 51, 66, 144]
let numbersSqrt = numbers.map((number) => Math.sqrt(number))
console.log(numbersSqrt)
*/

// .filter

/* 
let numbers = [9, 15, 17, 21, 32, 44, 51, 66, 144]
let numbersFilter = numbers.filter((number) =>(number >30))

console.log(numbersFilter)
*/

// reduce

let ventas = [50000, 65000, 85000, 50000]

ventasIVA = ventas.reduce((a,b)=>a+b)*18/100
console.log(ventasIVA)
