/* const getName = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fer')
    },1500)
  })
}

const sayHello = async () => {
  const name = await getName()
  return `Hello ${name}`
}

sayHello().then(res => console.log(res)) */


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

const getUser = async (id)=>{
  // solicitar usuario
  const user = users.find(user => user.id == id)
      if(!user) throw new Error(`El usuario id ${id} no existe`)
      else return(user)  

}

const getEmail = async (user) => {
  const email = emails.find(email => email.id == user.id)
      if(!email) throw new Error(`El usuario ${user.name} no tiene email`)
      else return({
          id: user.id,
          name: user.name,
          email: email.email
      })   
}

const getInfo = async (id) => {
  try {
    const user = await getUser(id)
    const res = await getEmail(user)
    return `${user.name} email is ${res.email}`
  }
  catch(error){
    console.log(error)
  }
}

getInfo(4).then(res => console.log(res))
/* const getInfo = async (id) => {
  getUser(id)
  .then(getEmail)
  .then(console.log)
  .catch(console.log) 
}
getInfo(4) */



