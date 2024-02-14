const alert = document.getElementById('alert')

addEventListener('online', (e) => {
    setAlert(true)
})

addEventListener('offline', (e) => {
    setAlert(false)
})

const setAlert = (isOnline) => {
    alert.classList.remove('alert--offline')
    alert.classList.remove('alert--online')

    isOnline 
    ? setTimeout (() => {
        alert.textContent = "Great!, you're online again"
        alert.classList.add('alert--online')
    },100)

    : setTimeout (() => {
        alert.textContent = "Ups!, it seems you're offline"
        alert.classList.add('alert--offline')
    },100)
}

