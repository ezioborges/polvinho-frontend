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

    return response
}

export const fetchSubjects = async (url) => {
    const response = await fetch(url, {
        method: 'GET', 
        headers: { 'Content-Type': 'application/json' }
    })

    if (!response.ok) {

        throw new Error('Nenhuma disciplina cadastrada');
    }

    const data = await response.json();

    return Array.isArray(data) ? data : data.subjects || [];
}

export const fetchCreateUser = async (url, userData) => {
    console.log('pra ver se bate aqui', url);
    console.log('USER que vem do fetch ===> ', userData);
    
    const userLogin = localStorage.getItem('userLogin');

    const token = userLogin ? JSON.parse(userLogin).token : null;
    
    console.log("🚀 ~ fetchCreateUser ~ token:", token)
    const response = await fetch(url, {
        method: 'POST',
        headers: { 
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(userData)
    });
    console.log("🚀 ~ fetchCreateUser ~ response:", response)

    const data = await response.json();
    console.log("🚀 ~ fetchCreateUser ~ data:", data)
    return data;
}