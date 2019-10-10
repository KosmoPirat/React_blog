export default function reducer(state = {
    users: [],
    fetching: false,
    error: null,

}, action) {
    switch (action.type) {
        case 'FETCH_USERS': {
            return {...state, fetching: true}
        }
        case 'FETCH_USERS_FULFILLED': {
            return {...state, fetching: false, users: action.payload}
        }
        case 'FETCH_USERS_REJECTED': {
            return {...state, fetching: false, error: action.payload}
        }


        case 'FETCH_USER': {
            return {...state, fetching: true}
        }
        case 'FETCH_USER_FULFILLED': {
            return {...state, fetching: false, users: action.payload}
        }
        case 'FETCH_USER_REJECTED': {
            return {...state, fetching: false, error: action.payload}
        }


        case 'ADD_USER': {
            return {...state, users: [action.payload, ...state.users]}
        }


        case 'UPDATE_USER': {
            const {id} = action.payload;
            const newUsers = [...state.users];
            const userIdxToUpdate = newUsers.findIndex(user => user.id === id);
            newUsers[userIdxToUpdate] = action.payload;

            return {...state, users: newUsers}
        }


        case 'DELETE_USER': {
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload),

            }
        }
    }
    return state;
};