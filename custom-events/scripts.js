const btnOne = document.getElementById('button-one')
const box = document.getElementById('container')
const myEvent = new CustomEvent('createdButton')

btnOne.addEventListener('click', () => {
  const btn = document.createElement('BUTTON')
  btn.setAttribute('id', 'button-two')
  btn.textContent = 'Two'
  box.append(btn)
  window.dispatchEvent(myEvent)
})

window.addEventListener(('createdButton'), (e) => {
  
  console.log(e.target)

  const btnTwo = document.getElementById('button-two')
  
  btnTwo.addEventListener('click', (e) => {
    e.target.parentElement.firstElementChild.remove()
  })
})

/* ------------------ */

// Pendiente event with detail, .md