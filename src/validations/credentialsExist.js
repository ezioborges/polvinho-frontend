export const emailExists = (email, registration) => {
    const credentialsInput = document.querySelector('#credentials')

     if (credentialsInput.value === email || Number(credentialsInput.value) === Number(registration)) {
        return true
    }
}

export const passwordExists = (password) => {
    const passwordInput = document.querySelector('#password')
    if (passwordInput.value == password) {
        return true
    }
}