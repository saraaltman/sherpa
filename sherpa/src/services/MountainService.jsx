export async function searchByState(state) {
    const response = await fetch(`http://localhost:3000/mountain?state=${state}`)
    return await response.json();
}

export async function searchByRating(rating) {
    const response = await fetch(`http://localhost:3000/mountain?rating=${rating}`)
    return await response.json();
}

export async function searchByInput(name) {
    const response = await fetch(`http://localhost:3000/mountain/search/${name}`)
    return await response.json();
}