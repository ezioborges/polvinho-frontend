export async function fetchUsers(url) {
    const response = await fetch(url)
    const data = await response.json()
    console.log('response', data)

    return data
}