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
   
    const userLogin = localStorage.getItem('userLogin');
    const token = userLogin ? JSON.parse(userLogin).token : null;
    
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

export const getAllUsers = async (url) => {
    const userLogin = localStorage.getItem('userLogin')
    const token = userLogin ? JSON.parse(userLogin).token : null;

    const response  = await fetch(url, {
        method: 'GET',
        headers: {
            'constent-type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    if (!response.ok) {
        throw new Error('Erro ao buscar usuários');
    }

    const data = await response.json();
    console.log('data ===> ', data);
    

    return data;

}