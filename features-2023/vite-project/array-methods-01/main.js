import "array-find-last";

const numbers = [7, 10, 21, 37];
const words = ["Hello", "David", "How", "are", "you"];
const index = 3;
const letters = "x, y, z";
const matriz = [[1, 2, 3], 4, 5, 6, [7, 8]];
const nestedMatriz = [[[1, 2, 3]], 4, 5, 6, [[[7, 8]]]];
/* 
array.protoype.at() => Devuelve el elemento de un array según el índice, Se diferencia de porque puede usar números negativos arr[] */

// También funciona en strings

const myNumber = numbers.at(index);
const myOldNumber = numbers.at(-index);
const lastLetter = letters.at(-1);

// Bonus (con otra herramienta), acceder a la primera y a la última posición destructurando el arreglo como un objeto
const { 0: firstWord, 4: lastWord } = words;

/* 
array.prototype.findLast() && findLastIndex Devuelve el último elemento que coincide y el index respectivamente.
*/

const greater20LastNumber = numbers.findLast((x) => x > 20);
const minor20LastNumberIndex = numbers.findLastIndex((x) => x < 20);

/*
array.prototype.flat() =>
*/

const flatMatriz = matriz.flat();
//console.log(matriz, flatMatriz);

// Niveles de anidamiento => default => 1
// Valor Infinity => Aplana todo

const flatNestedMatriz = nestedMatriz.flat(2);
const flatAll = nestedMatriz.flat(Infinity);
//console.log(nestedMatriz, flatNestedMatriz, flatAll);

/* 
flatMap() => Es igual arr.flat().map()
*/

const addOne = flatMatriz.flatMap((x) => x + 1);
//console.log(addOne);

// También aplana un array presente en el callback

const foo1 = numbers.flatMap((x) => (x === 21 ? [1, 1] : 0));
const foo2 = numbers.flatMap((x) => x + [1, 5]);
console.log(numbers, foo1, foo2);

// mdn example in split str arr
const arr1 = ["it's Sunny in", "", "California"];

arr1.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap((x) => x.split(" "));
// ["it's","Sunny","in", "", "California"]

// Another mdn example
console.log([1, 2, , 4, 5].flatMap((x) => [x, x * 2])); // [1, 2, 2, 4, 4, 8, 5, 10]
