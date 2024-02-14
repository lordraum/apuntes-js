const button = document.getElementById('button')
const box = document.getElementById('box') 
let point = 0

button.addEventListener('click',()=>{    
    point += 1
    if(point == 1){
        console.log(`CLICK! tienes ${point} punto`)    
    }else
    console.log(`CLICK! tienes ${point} puntos`) 
    }
)

button.addEventListener('dblclick',()=>{    
    point += 2
    console.log(`CLICK! tienes ${point} puntos`)    
    }
)

window.addEventListener('keyup',()=>{    
    point += 3
    console.log(`CLICK! tienes ${point} puntos`)    
    }
)

box.addEventListener('mouseup',()=>{    
    point += 5
    console.log(`Has soltado el mouse en la caja azúl tienes ${point} puntos`)    
    }
)

button.addEventListener('mouseenter',()=>{
    console.log('hover!')
    button.classList.replace('button--blue','button--green')
})

button.addEventListener('mouseleave',()=>{
    console.log('leave hover!')
    button.classList.replace('button--green','button--blue')
})






