// getElementById

const title = document.getElementById('title')

title.textContent = 'Este es un h1 modificado con javaScript'


// querySelector

const textOne = document.querySelector('.text-one')
console.log(textOne)

const redSpan = title.querySelector('.redspan')

const blueSpan = document.getElementById('text-three').querySelector('.span-blue')

// querySelectorAll y classList

const allText = [...document.querySelectorAll('.text')]
/* allText.map((text)=>text.style.color = 'green') */
allText.map((text)=>text.classList.add('text-green'))













