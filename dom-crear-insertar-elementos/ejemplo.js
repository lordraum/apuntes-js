const days = ['Lunes' , 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo', 'Festivo']

const daysList = document.getElementById('daysList')

const fragment = document.createDocumentFragment()

/* Añadir cada día de la semana como un <li> en el <ul> listDays */
 
for(const day of days){
    const itemList = document.createElement('LI');
    itemList.textContent = day;
    fragment.appendChild(itemList)    
}

daysList.appendChild(fragmentList)

