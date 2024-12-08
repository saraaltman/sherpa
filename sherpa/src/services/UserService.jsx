export async function createUser(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    const response = await fetch(`http://localhost:3000/user`, requestOptions);
    return await response.json();
}
