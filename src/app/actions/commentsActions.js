import axios from "axios";

export const fetchComments = () => {
    return (dispatch) => {
        dispatch({type: 'FETCH_COMMENTS'});
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                dispatch({type: 'FETCH_COMMENTS_FULFILLED', payload: response.data});
            })
            .catch(error => {
                dispatch({type: 'FETCH_COMMENTS_REJECTED', payload: error});
            });
    };
};

export const fetchPostComments = (postID) => {
    return (dispatch) => {
        dispatch({type: 'FETCH_POST_COMMENTS'});
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postID}`)
            .then(response => {
                dispatch({type: 'FETCH_POST_COMMENTS_FULFILLED', payload: response.data});
            })
            .catch(error => {
                dispatch({type: 'FETCH_POST_COMMENTS_REJECTED', payload: error});
            });
    };
};

export const addComment = (data) => {
    return {
        type: 'ADD_COMMENT',
        payload: data,

    };
};

export const updateComment = (data) => {
    return {
        type: 'UPDATE_COMMENT',
        payload: data,

    };
};

export const deleteComment = (commentID) =>{
    return {
        type: 'DELETE_COMMENT',
        payload: commentID,

    };
};