//Método from
/* 
let palabra = 'Hello world'
let words = Array.from(palabra)
console.log(words) */

// Sintáxis =>
// nameArray.methodName(parameter => action)
// nameArray.nameMethod((par1,par2)=>action)

// Método sort
/* 
let letters = ['h', 'f', 's', 'a', 'd', 'o', 'c' ]

console.log(letters.sort())

// console = (7) ['a', 'c', 'd', 'f', 'h', 'o', 's']

let numbers = [21, 300, 45, 100, 7, 1000, 85]

console.log(numbers.sort((a,b)=>b-a))
 */

// Método forEach
/* 
let numbers = [5, 15, 25, 64, 12, 895]
numbers.forEach((number,index)=> 
console.log(`${number} está en la posición ${index}`))
 */

/* 
// Método every y some

let words = ['CSS', 'JavaScript','HTML','PHP']

console.log(words.some(word => word.length >4))
 */



// Métodos map, filter y reduce

/* 
let numbers = [1, 2, 3, 4, 5]
let result = numbers.map(number => number * 2)
console.log(result)
*/

/* 
let numbers = [1, 2, 3, 4, 5]
let result = numbers.filter(number => number >2)
console.log(result)
 */

/* et numbers = [1, 2, 3, 4, 5]
let result = (numbers.reduce((a,b)=>a*b))
console.log(result) */

const users = [
    
    {
        name : 'user 1',
        online : true
    },
    {
        name : 'user 2',
        online : false
    },
    {
        name : 'user 3',
        online : true
    },
    {
        name : 'user 4',
        online : true
    },
    {
        name : 'user 5',
        online : false
    }
]

const usersOnline = users.reduce((cont,user) => {
    if(user.online) cont++
    return cont
},0)

console.log(usersOnline)

// console = 2








