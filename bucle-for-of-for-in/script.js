/* let names = ['Tio','Flyser','Jabricio', 'Walcao', 'Cicinho' , 'Segis'];

for(let name of names) {
    console.log(name);
}

for(let index in names) {
    console.log(index);
} */


//Usando break y continue

let names = ['Johan','David','Fernando', 'Sebastián', 'Angela' , 'Olga'];

for(let name of names) {
    if(name === 'Sebastián') {
        break
    }
    console.log(name)    
}

//consola = Johan, David, Fernando

for(let name of names) {
    if(name === 'Sebastián') {
        continue
    }
    console.log(name)    
}

//consola = Johan, David, Fernando, Angela, Olga

/* 
for(let index in names) {
    if(names[index] === 'Walcao') {
        break
    }
    console.log(index)    
}

for(let index in names) {
    if(names[index] === 'Walcao') {
        continue
    }
    console.log(index)    
}

 */