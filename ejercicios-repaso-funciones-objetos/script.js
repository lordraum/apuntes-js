/* 
Crea una clase Libro -- ok
La clase libro tendrá título, autor, año y género. -- ok
Crea un método que devuelva toda la información del libro -- ok
Pide 3 libros y guárdalos en un array --
- crear array -- ok
- Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
Solución

- Crear búcle que cree 3 arrays con las variables con prompt para -- ok 
- introducir los campos por medio de un nuevo objeto de la clase book y el metodo push para insertarlos en el array
Validar que los campos no se introduzcan vacíos
Validar que el año sea un número y que tenga 4 dígitos
Validar que el género sea: aventuras, terror o fantasía


- Introducir  
Crea una función que muestre todos los libros
Crea una función que muestre los autores ordenados alfabéticamente
Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información
*/

//Creando clase libro


class Book {
  constructor(title, author, year, gender) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.gender = gender;
  }
  
  bookInfo() {
    return `El libro se llama ${this.title} escrito por ${this.author} en el año ${this.year} y es de ${this.gender}`
  }

  getGender() {
    return this.gender
  }
}

let books = []

while(books.length < 3) {
  let title = prompt('Título del libro')
  let author = prompt('Autor')
  let year = prompt('Año en que fue escrito')
  let gender = prompt(' Género del libro').toLowerCase()
  if(title != ''
  && author != ''
  && year != ''
  && gender != ''
  && year.length == 4
  && year/year === 1 
  && (gender == 'terror'|| gender =='fantasía' || gender == 'aventura')) {    
      books.push(new Book (title, author, year, gender))    
  }
}


let casa = {
  paredes : 'blancas',
  habitaciones : 4,
  baños : 1,
  cocina : 'integral',
  incluye : ['muebles', 'alfombra', 'lavadora'],
}

const showAllBooks = () =>{
  console.log(books)
}

const showAllAutors = () => {
  let authors = []

  for(let book of books){
    authors.push(book.author)
}
  console.log(authors.sort())
}

const showGender = () => {
  let gender = prompt('Introduce el genero a buscar')

  for(let book of books) {
    if(book.getGender() == gender){
        console.log(book.bookInfo())
    }
  }
}



//showAllBooks()
//showAllAutors()
showGender()






