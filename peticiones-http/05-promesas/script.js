
const users = [
    {
        id: 1,
        name: 'David'
    },
    {
        id: 2,
        name: 'Laura'
    },
    {
        id: 3,
        name: 'Paul'
    }
]

const emails = [
    {
        id: 1,
        email: 'david@supermail.com'
    },
    {
        id: 2,
        email: 'laura@fansmail.com'
    }   
]

const getUser = (id)=>{
    // solicitar usuario
    const user = users.find(user => user.id == id)
    return promise = new Promise((resolve, reject)=>{
        if(!user) reject(`El usuario id ${id} no existe`)
        else resolve(user)
    })

}

const getEmail = (user) => {
    const email = emails.find(email => email.id == user.id)
    return promise = new Promise((resolve, reject)=> {
        if(!email) reject(`El usuario ${user.name} no tiene email`)
        else resolve({
            id: user.id,
            name: user.name,
            email: email.email
        })
    })
   
    
}

// forma simplificada

getUser(1)
    .then(getEmail)
    .then(console.log)
    .catch(console.log)

// Forma que muestra lo que sucede dentro
/* 
getUser(1)
    .then(user => getEmail(user))
    .then(res => console.log(res))
    .catch(err => console.log(err))
 */