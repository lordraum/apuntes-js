const form = document.getElementById('form')
const button = document.getElementById('submitButton')
const userName = document.getElementById('userName')
const email = document.getElementById('email')
const gender = document.getElementById('gender')
const terms = document.getElementById('terms')

const formIsValid = {
    name : false,
    email: false,
    gender: false,
    terms: false
}

// Disparar submit en form
form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateForm()
})

userName.addEventListener('change', (e) => {
    const data = e.target.value.trim()
    if(data.length>0) formIsValid.name = true
})

email.addEventListener('change', (e) => {
    const data = e.target.value.trim()
    if(data.length>0) formIsValid.email = true
})

gender.addEventListener('change', (e) => {
    formIsValid.gender = e.target.checked
})

terms.addEventListener('change', (e) => {
    formIsValid.terms = e.target.checked
    if(e.target.checked == true) button.removeAttribute('disabled') 
})


/* Crear función que valide que tdos los campos estén diligenciados. */
const validateForm = () => {
    const formValues = Object.values(formIsValid)
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1) form.submit()
    else alert('form invalid')    
}
