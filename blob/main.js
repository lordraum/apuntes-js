// Blob Representa a los archivos como data (raw)
//URL.createObjectURL(blob) crea una url para acceder al recurso

const catButton = document.getElementById('cat-button')
const dogButton = document.getElementById('dog-button')
const image = document.getElementById('image')

const catUrl = image.attributes.src.value = '../img/cat.webp'
const dogUrl = image.attributes.src.value = '../img/dog.webp'

catButton.addEventListener('click', (e) => {
  fetch(catUrl)
    .then(x => x.blob())
    .then(x => {
      image.src = URL.createObjectURL(x)
    })
})

dogButton.addEventListener('click', (e) => {
  fetch(dogUrl)
    .then(x => x.blob())
    .then(x => {
      image.src = URL.createObjectURL(x)
    })
})