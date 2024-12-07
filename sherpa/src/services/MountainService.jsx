export async function searchByState(state) {
    const response = await fetch(`http://localhost:3000/mountain?state=${state}`);
    return await response.json();
}

export async function searchByRating(rating) {
    const response = await fetch(`http://localhost:3000/mountain?rating=${rating}`);
    return await response.json();
}

export async function searchByInput(name) {
    const response = await fetch(`http://localhost:3000/mountain/search/${name}`);
    return await response.json();
}

export async function searchByStateAndRating(state, rating) {
    const response = await fetch(`http://localhost:3000/mountain?rating=${rating}&state=${state}`);
    return await response.json();
}

export async function searchByInputAndStateAndRating(name, state, rating) {
    const response = await fetch(`http://localhost:3000/mountain/search/${name}?rating=${rating}&state=${state}`);
    return await response.json();
}

export async function searchByInputAndState(name, state,) {
    const response = await fetch(`http://localhost:3000/mountain/search/${name}?state=${state}`);
    return await response.json();
}

export async function searchByInputAndRating(name, rating) {
    const response = await fetch(`http://localhost:3000/mountain/search/${name}?rating=${rating}`);
    return await response.json();
}

// todo: add pagination
export async function getAllMountains() {
    const response = await fetch(`http://localhost:3000/mountain`);
    return await response.json();
}

export async function mountainSearch(name, state, rating) {
    if (name && !state && !rating) {
        return searchByInput(name);
    } else if (!name && state && !rating) {
        return searchByState(state);
    } else if (!name && !state && rating) {
        return searchByRating(rating)
    } else if (name && state && !rating) {
        return searchByInputAndState(name, state);
    } else if (name && !state && rating) {
        return searchByInputAndRating(name, rating);
    } else if (!name && state && rating) {
        return searchByStateAndRating(state, rating);
    } else if (name && state && rating) {
        return searchByInputAndStateAndRating(name, state, rating);
    } else {
        return getAllMountains();
    }
}




