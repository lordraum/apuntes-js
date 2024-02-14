// DOM TRAVERSING

// Localizar objeto de referencia (<UL> id 'parent')

const parent = document.getElementById('parent')
console.log(parent);
console.log('********************');

// Localizar padres
console.log(parent.parentElement)
console.log('********************');
// closest() localiza el primer ascendiente que coincida con el selector
console.log('Elemento ascendiente (closest)')
console.log(parent.children[2].closest('.nav'))
console.log('********************');

// Localizar hijos
console.log(parent.children)
console.log('********************');
console.log(parent.children[1].textContent)
console.log('********************');
console.log(parent.firstElementChild.textContent)
console.log('********************');
console.log(parent.lastElementChild)
console.log('********************');
console.log(parent.hasChildNodes())
console.log('********************');
console.log(parent.firstChild.hasChildNodes())
console.log('********************');

// Localizar hermanos
console.log(parent.nextElementSibling)
console.log('********************');
console.log(parent.firstElementChild.nextElementSibling.textContent)
console.log('********************');
console.log(parent.previousElementSibling)
console.log('********************');
console.log(parent.parentElement.previousElementSibling)
console.log('********************');
console.log(parent.children[1].previousElementSibling.textContent)











