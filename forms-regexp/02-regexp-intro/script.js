const text = document.getElementById('text')

const regEx = /Sit/gi

console.log(regEx.test(text.textContent))

// sintáxis constructor
const regEx2 = new RegExp('doloremque','gi')
console.log(regEx2.test(text.textContent))
