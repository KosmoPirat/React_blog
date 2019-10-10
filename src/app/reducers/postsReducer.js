export default function reducer(state = {
    posts: [],
    fetching: false,
    error: null,

}, action) {
    switch (action.type) {
        case 'FETCH_POSTS': {
            return {...state, fetching: true}
        }
        case 'FETCH_POSTS_FULFILLED': {
            return {...state, fetching: false, posts: action.payload}
        }
        case 'FETCH_POSTS_REJECTED': {
            return {...state, fetching: false, error: action.payload}
        }


        case 'FETCH_USER_POSTS': {
            return {...state, fetching: true}
        }
        case 'FETCH_USER_POSTS_FULFILLED': {
            return {...state, fetching: false, posts: action.payload}
        }
        case 'FETCH_USER_POSTS_REJECTED': {
            return {...state, fetching: false, error: action.payload}
        }


        case 'ADD_POST': {
            return {...state, posts: [...state.posts, action.payload]}
        }
        case 'UPDATE_POST': {
            const {id} = action.payload;
            const newPosts = [...state.posts];
            const postIdxToUpdate = newPosts.findIndex(post => post.id === id);
            newPosts[postIdxToUpdate] = action.payload;

            return {...state, posts: newPosts}
        }
        case 'DELETE_POSTS': {
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload),

            }
        }
    }
    return state;
};