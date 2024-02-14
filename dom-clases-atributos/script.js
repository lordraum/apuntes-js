const title = document.getElementById('title')
const name1 = document.getElementById('name')


console.log(name1.getAttribute('type'))

name1.setAttribute('type', 'number')

title.classList.add('main-title', 'other-title')

title.classList.remove('other-title')

console.log(name1.getAttribute('type'))

if(title.classList.contains('title')) console.log('Este es un título');
else 'Este no es un título'

title.classList.replace('main-title','main')

console.log(title.id)
console.log(title.innerHTML)

console.log(document.getElementById('for').getAttribute('for'));

