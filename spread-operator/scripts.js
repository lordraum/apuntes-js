/* Spread operator */

/* 
1. Copiar arrays y objetos
2. Crear objetos con valores predeterminados
3. Concatenar arrays
4. Añadir propiedad a un objeto sin alterar el original
5. Función restParams
6. Función pura para enviar elementos a un nuevo array
7. Expandir nodeList para iterarlo
8. Eliminar dulicados con Set()
9. Utilizar arrays con el objeto Math
*/

/* 1 */

/* const numbers = [1, 2, 3, 4, 5]

const persona = {
    fisrstName: 'David',
    lastName: 'Gómez',
    age: 39
}

const newNumbers = [...numbers]
const newPersona = {...persona}

console.log(newNumbers, newPersona) */

/* 2 */

/* 
const element = {
    id: 'element',
    class: 'active',
    color: 'blue'    
}

const div = {
    ...element,
    color: 'red'
}

console.log(div)
 */

/* 3 */

/* 
const inpares = [1, 3, 5]
const pares = [2, 4, 6]

const allNumbers = [...inpares, ...pares]

console.log(allNumbers)
 */

/* 4 */

/* 
const persona = {
    fisrstName: 'David',
    lastName: 'Gómez',
    age: 39
}

const newPersona = {...persona}

newPersona.CC = 80743331

console.log(newPersona)
 */

/* 5 */

/* 
const numbers = [1, 2, 3, 4, 5]

const restParams = (...n) => {
    console.log(n)
}

restParams(numbers)
*/

/* 6 */

/* 
const numbers = [1, 2, 3, 4, 5]
const otherNumbers = [6, 7, 8, 9, 10]


const addElementToArray = (arr, elm) => [...arr, elm]

const concatArrays = (arr1, arr2) => [...arr1, ...arr2]

const newNumbers = addElementToArray(numbers, 6)

const allNumbers = concatArrays(numbers, otherNumbers)

console.log(newNumbers, allNumbers)
 */

/* 7 */

/* 
paragraphs = [...document.querySelectorAll('.paragraph')]

paragraphs.map(paragraph => paragraph.style.color = 'green')
 */

/* 8 */

/* 
const numbers = [1, 2, 3, 4, 5, 3, 6, 4]

const unRepeatNumbers = [...new Set(numbers)]

console.log(unRepeatNumbers)

 */

/* 9 */

const numbers = [1, 2, 3, 4, 5, 3, 6, 4]

console.log(Math.max(...numbers))


