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

export const getAllSubjects = async (url) => {
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

    const data = await response.json();
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

    return data;
}
//TODO: depois separar as funções por entidade!!!
export const getSubjectsById = async (subjectId) => {
    const url = `http://localhost:2424/subjects/${subjectId}`

    const userLogin = localStorage.getItem('userLogin')
    const token = userLogin ? JSON.parse(userLogin).token : null;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    if(!response.ok) {
        throw new Error('Disciplina não encontrada pelo id informado')
    }

    const data  = response.json();

    return data;
}

export const userSubjectsData = async (userId) => {
    const url = `http://localhost:2424/users/${userId}/subjects`
    const userLogin = localStorage.getItem('userLogin');
    const token = userLogin ? JSON.parse(userLogin).token : null;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    if (!response.ok) {
        throw new Error('Erro ao carregar as disciplas no Usuário')
    }

    const data  = response.json();

    return data;
}