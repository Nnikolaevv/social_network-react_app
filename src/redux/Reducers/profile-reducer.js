import {profileAPI} from "../../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    post: [
        {id: 1, message: 'Hello, how are you?', likeCount: 10},
        {id: 2, message: 'It\'s my first post', likeCount: 15},
        {id: 3, message: 'Yo Yo', likeCount: 20},
        {id: 4, message: 'buy', likeCount: 25},
    ],
    newPostText: '',
    profile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                post: [...state.post, newPost],
                newPostText: ""
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
            newPostText: action.newPostText,
        };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getProfile = (id) => {
    return (dispatch) => {
        let userId = id
        if (!userId) {
            userId = 2;
        }

        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
            .catch(err => console.log(err));
    }
}


export default profileReducer;