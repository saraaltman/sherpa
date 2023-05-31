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

export async function searchByStateAndRating(state, rating) {
    const response = await fetch(`http://localhost:3000/mountain?rating=${rating}&state=${state}`)
    return await response.json();
}

export async function searchByInputAndStateAndRating(name, state, rating) {
    const response = await fetch(`http://localhost:3000/mountain/search/${name}?rating=${rating}&state=${state}`)
    return await response.json();
}

export async function searchByInputAndState(name, state,) {
    const response = await fetch(`http://localhost:3000/mountain/search/${name}?state=${state}`)
    return await response.json();
}

export async function searchByInputAndRating(name, rating) {
    const response = await fetch(`http://localhost:3000/mountain/search/${name}?rating=${rating}`)
    return await response.json();
}




