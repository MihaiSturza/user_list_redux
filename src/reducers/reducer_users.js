export default function (state = [
        {
            id: 0,
            name: 'Ana',
            dob: '1987-02-17',
            phone: '0770312327'
        },
        {
            id: 1,
            name: 'Maria',
            dob: '1989-07-18',
            phone: '0752364891'
        }
    ], action) {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.payload];
        case 'EDIT_USER':
            return state.map(user => user.id === action.payload.id ? user = action.payload : user);
        case 'DELETE_USER':
            return state.filter( user => user.id !== Number(action.payload));
        default:
            return state;
    }
}
