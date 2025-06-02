export async function fetchLogin(url) {

    const credentialsInput = document.querySelector('#credentials')
    const passwordInput = document.querySelector('#password')

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({
            email: credentialsInput.value,  
            password: passwordInput.value,
        })
    })

    // const data = await response.json()    

    return response
}