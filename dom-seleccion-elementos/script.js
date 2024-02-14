
// getElementById
/* const title = document.getElementById('title')
title.textContent = 'DOM seleccionar y modificar' */

// querySelector
/* const paragraph = document.querySelector('.paragraph:nth-child(3)')

paragraph.style.color = 'red'
 */

// querySelector y getElementById

/* const paragraph = document.getElementById('title')
const span = title.querySelector('span') */

const span = document.getElementById('title').querySelector('span')
console.log(span.textContent)

// querySelectorAll

const paragraphSpread = [...document.querySelectorAll('.paragraph')]
paragraphSpread.map(p=>p.style.color='green')

const paragraphArray = Array.from(document.querySelectorAll('.paragraph'))
paragraphArray.map(p=>p.style.color='blue')
console.log(paragraphArray)










