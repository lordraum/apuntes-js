// Insertar II, reemplazar, clonar, eliminar.

const list = document.getElementById('list')
const newElement = document.createElement('LI')
newElement.textContent = 'Este es un nuevo elemento'
console.log(newElement)

// Añadiendo con el ya conocido .appenChild - lo puedo añadir solamente al final

/* list.append(newElement) */

// parent.insertBefore => inserta antes del elemento de referencia
// par1 nuevo elemento, par2 elemento de referencia

/* list.insertBefore(newElement, list.children[1]) */

/*
Parent.insertAdjacentElement => inserta indicándole una posición
par1 posición, par2 elemento a insertar
- Posiciones
-- beforebegin - Antes de que empiece (hermano anterior)
-- afterbegin - Después de que empiece (primer hijo)
-- beforeend - Antes de que acabe (último hijo)
-- afterend - Después de que acabe (hermano siguiente) 
*/

/* list.insertAdjacentElement('afterbegin', newElement) */

// reemplazar elementos

/*
parent.replaceChild
par1 newchild, par2 oldchild
*/

/* list.replaceChild(newElement, list.firstElementChild) */

/*
Nuevos métodos basados en Jquery
DOM manipulation convenience methods
par - elemento a insertar
-- parent.before - Antes de que empiece (hermano anterior)
-- parent.prepend - Después de que empiece (primer hijo)
-- parent.append - Antes de que acabe (último hijo)
-- parent.after - Después de que acabe (hermano siguiente)

.replaceWith()
par - nuevo elemento
Se puede acceder desde el elemento o desde el padre
*/

/* list.prepend(newElement) */

/* list.lastElementChild.replaceWith(newElement) */

/* document.getElementById('child-to-replace').replaceWith(newElement) */

// clonar elementos
/*
element.cloneNode
- true => clona todo el elemento con sus hijos
- false => clona el elemento sin sus hijos
*/

/* list.after(list.cloneNode(true)) */

// eleiminar elementos
/*
.remove() elimina el nodo
.removeChild() elimina el nodo hijo 
*/

/* list.remove() */
/* list.removeChild(list.children[0]) */









