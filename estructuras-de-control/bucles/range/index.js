// Función Generadora range
// const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

// Generar rango desde num1 a num2

const range = (start, stop) =>
  Array.from({ length: stop - start + 1 }, (_, i) => start + i);

// console.log(range(6, 10)); // [ 6, 7, 8, 9, 10 ]

// Realizar el # de iteraciones necesitadas
const getRandomNumbers = (size) =>
  Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);

const str = "asdfasdfasdasdfsdfsdfasdfsdfsdf"

// Buscar en el vídeo de midu de php vs js, la mejor forma de hacer el range
