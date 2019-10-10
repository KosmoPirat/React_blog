export default function reducer(state = {
    comments: [],
    fetching: false,
    error: null,

}, action) {
    switch (action.type) {
        case 'FETCH_COMMENTS': {
            return {...state, fetching: true}
        }
        case 'FETCH_COMMENTS_FULFILLED': {
            return {...state, fetching: false, comments: action.payload}
        }
        case 'FETCH_COMMENTS_REJECTED': {
            return {...state, fetching: false, error: action.payload}
        }


        case 'FETCH_POST_COMMENTS': {
            return {...state, fetching: true}
        }
        case 'FETCH_POST_COMMENTS_FULFILLED': {
            return {...state, fetching: false, comments: action.payload}
        }
        case 'FETCH_POST_COMMENTS_REJECTED': {
            return {...state, fetching: false, error: action.payload}
        }


        case 'ADD_COMMENT': {
            return {...state, comments: [...state.comments, action.payload]}
        }


        case 'UPDATE_COMMENT': {
            const {id} = action.payload;
            const newComments = [...state.comments];
            const commentIdxToUpdate = newComments.findIndex(comment => comment.id === id);
            newComments[commentIdxToUpdate] = action.payload;

            return {...state, comments: newComments}
        }


        case 'DELETE_COMMENTS': {
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id !== action.payload),

            }
        }
    }
    return state;
};