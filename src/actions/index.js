
export function addUser(newUser) {
    return {
        type: 'ADD_USER',
        payload: newUser
    }
}

export function deleteUser(id) {
    return {
        type: 'DELETE_USER',
        payload: id
    }
}

export function editUser(user) {
    return {
        type: 'EDIT_USER',
        payload: user
    }
}