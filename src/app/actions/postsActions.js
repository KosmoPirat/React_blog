import axios from "axios";

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch({type: 'FETCH_POSTS'});
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                dispatch({type: 'FETCH_POSTS_FULFILLED', payload: response.data});
            })
            .catch(error => {
                dispatch({type: 'FETCH_POSTS_REJECTED', payload: error});
            });
    };
};

export const fetchUserPosts = (userID) => {
    return (dispatch) => {
        dispatch({type: 'FETCH_USER_POSTS'});
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
            .then(response => {
                dispatch({type: 'FETCH_USER_POSTS_FULFILLED', payload: response.data});
            })
            .catch(error => {
                dispatch({type: 'FETCH_USER_POSTS_REJECTED', payload: error});
            });
    };
};

export const addPost = (data) => {
    return {
        type: 'ADD_POST',
        payload: data,

    };
};

export const updatePost = (data) => {
    return {
        type: 'UPDATE_POST',
        payload: data,

    };
};

export const deletePost = (postID) =>{
    return {
        type: 'DELETE_POST',
        payload: postID,

    };
};