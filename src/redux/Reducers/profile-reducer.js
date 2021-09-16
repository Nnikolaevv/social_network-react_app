import {profileAPI} from "../../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST'

const initialState = {
    post: [
        {id: 1, message: 'Hello, how are you?', likeCount: 10},
        {id: 2, message: 'It\'s my first post', likeCount: 15},
        {id: 3, message: 'POST POST', likeCount: 15},
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: state.post.length + 1,
                message: action.post,
                likeCount: 0
            }
            return {
                ...state,
                post: [...state.post, newPost],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST:
            return {
                ...state,
               post: state.post.filter(post => post.id !== action.postId),
               }
        default:
            return state
    }
}


export const addPost = (post) => ({type: ADD_POST, post});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => {type: DELETE_POST, postId}


export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
            .catch(err => console.log(err));
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(status => {
                dispatch(setStatus(status));
            })
            .catch(err => console.log(err));
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            })
            .catch(err => console.log(err));
    }
}


export default profileReducer;