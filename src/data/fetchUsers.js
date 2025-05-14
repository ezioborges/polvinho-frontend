export async function fetchUsers() {
    const url = 'http://localhost:2424/users'
    const response = await fetch(url)
    const data = await response.json()
    console.log('response', data)

    return data
}