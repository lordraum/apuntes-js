// spread operator

// añadiendo elementos a funciones

let names = ['Juliana', 'Andrea', 'Susana', 'Patricia']

let namesToAdd = ['Eliana', 'Ana']


const addElements = (a,b) => {
    a.push(...b)
}

addElements(names,namesToAdd)

console.log(names)

// Añadir un array a otro array

let ingredients = ['Pollo', 'arroz', 'papa', 'tomate', 'cebolla']

let ingredientsToShop = ['mostaza' ,'pimienta']

ingredients.push(...ingredientsToShop)

console.log(ingredients)

// copiar, duplicar arrays

/* let numbers = [1,2,3,4,5]
let numbersCopy = [...numbers]

console.log(numbersCopy)

let oldUsers = ['johan', 'Cristian', 'Juan pablo', 'Carmen']

let newUsers = ['Fabian', 'Romualdo']

let users = [...oldUsers,...newUsers]

console.log(users) */

// Parámetros rest

/* const restParams = (...numbers) => {
    console.log(numbers)
}

restParams (1, 2, 3, 4) */

// Math

let numbersPow = [3,2]
console.log(Math.pow(...numbersPow))



