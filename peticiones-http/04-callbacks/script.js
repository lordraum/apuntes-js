
/* const getUser = (id,cb)=>{
    const user = {
        name: 'David',
        id: id
    }

    if(id == 2) cb('El dato consultado no existe')
    else  cb(null,user)
}

getUser(1,(err,user)=>{
    if(err) return console.log(err)
    console.log(`user name is ${user.name}`)
}) */

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

const getUser = (id, cb)=>{
    const user = users.find(user => user.id == id)

    if(!user) cb(`El usuario id ${id} no existe`)
    else cb(null, user)    
}

const getEmail = (user, cb) => {
    const email = emails.find(email => email.id == user.id)

    if(!email) cb(`El usuario ${user.name} no tiene email`)
    else cb(null, {
        id: user.id,
        name: user.name,
        email: email.email
    })
}

getUser(1, (err, user) => {
    if(err) return console.log(err)

    getEmail(user, (err, res)=>{
        if(err) return console.log(err)
        console.log(res)
    })
})


