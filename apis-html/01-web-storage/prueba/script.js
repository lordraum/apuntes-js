const num = document.getElementById('number')
const btn = document.getElementById('btn')

/* btn.addEventListener('click', (e) => {
  num.textContent++
  sessionStorage.setItem('numero', num.textContent)
})

const numValue = sessionStorage.getItem('numero')
console.log(numValue) */

btn.addEventListener('click', (e) => {
  num.textContent++
  localStorage.setItem('numero', num.textContent)
})

const numValue = localStorage.getItem('numero')
console.log(numValue)