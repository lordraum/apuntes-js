/* DESTRUCTURING */

/* 
1- Objetos
    1.1- Crear variables para cada propiedad en una línea
    1.2- Acceder solo a las propiedades que necesitamos
    1.3- Acceder a la(s) propiedad deseada(s) y expandir el resto
    1.4- Cambiar el nombre a la key
2- Arrays
    2.1 Accediendo a elementos del array
    2.3 Creación de variables en una sola línea    
3- Funciones
    3.1 Procesar elementos de una función en una sola línea
    3.2 Utilizando como parámetros las propiedades de un objeto
4- Valores predeterminados

**** Pendiente valores predeterminados
*/

/* 1 */

/* 1.1 */

/* const persona = {
    firstName: 'David',
    lastName: 'Gómez',
    age: 39
}

const {firstName, lastName, age} = persona

console.log(firstName, lastName, age) */

/* 1.2 */

/* 
const persona = {
    firstName: 'David',
    lastName: 'Gómez',
    age: 39
}

const {age} = persona
console.log(age) */

/* 1.3 */

/* const persona = {
    firstName: 'David',
    lastName: 'Gómez',
    age: 39
}

const {age, ...rest} = persona
console.log(age, rest) */

/* 1.4 */

/* const persona = {
    firstName: 'David',
    lastName: 'Gómez',
    age: 39
}

const {age: edad} = persona
console.log(edad) */

/* 2 */

/* 2.1 */

/* const numbers = [1, 2, 3, 4, 5];
const [y, z, ...rest] = numbers;

console.log(y, z, rest)

const otherNumbers = [6, 7, 8, 9, 10
]

const [ , ,c, , ...restOthers] = otherNumbers
console.log(c, rest) */

/* 2.2 */

/* const [firstName, lastName] = ['David', 'Gómez']

console.log(firstName, lastName) */

/* 3 */

/* 3.1 */

/* const getArray = () => [5, 8]

const [a, b] = getArray()

console.log(a, b) */

/* 3.2 */


/* const div = {
    id: 'box',
    bgColor: 'blue',
    text: 'asdfasd asdfasdfad asdf asdfasd asdfasd'
}

const changeBackGroundColor = ({id, bgColor}) => `You have changed the background color of the element with the id ${id}, to ${bgColor}`

let mensaje = changeBackGroundColor(div)

console.log(mensaje) */

/* 4 */

//A una variable se le puede asignar un valor predeterminado, en el caso de que el valor desempacado del objeto sea undefined

const {a = 10, b = 5} = {a: 3};

console.log(a);
console.log(b);



