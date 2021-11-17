import {PhotosType, PostType, ProfileType} from "../../types/types";
import {BaseThunkType, InferActionsTypes} from "../reduxStore";
import {profileAPI} from "../../api/profileAPI";
import {ResultCodeEnum} from "../../api/api";

const initialState = {
    post: [
        {id: 1, message: 'Hello, how are you?', likeCount: 10},
        {id: 2, message: 'It\'s my first post', likeCount: 15},
        {id: 3, message: 'POST POST', likeCount: 15},
    ] as Array<PostType>,
    profile: null as null | ProfileType,
    status: '' as string
};

type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD_POST':
            const newPost = {
                id: state.post.length + 1,
                message: action.post,
                likeCount: 0
            }
            return {
                ...state,
                post: [...state.post, newPost],
            };
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            };
        case 'SET_STATUS':
            return {
                ...state,
                status: action.status
            };
        case 'DELETE_POST':
            return {
                ...state,
                post: state.post.filter(post => post.id !== action.postId),
            }
        case 'SAVE_PHOTO':
            return  {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        default:
            return state
    }
}

//Actions

type ActionTypes = InferActionsTypes<typeof actions>

export const actions = {
    addPost: (post: string) => ({type: 'ADD_POST', post} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SET_STATUS', status} as const),
    deletePost: (postId: number) => ({type: 'DELETE_POST', postId} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'SAVE_PHOTO', photos} as const),
}

//Thunks
type ThunkType = BaseThunkType<ActionTypes>

export const getProfile = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(data));
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    const status = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(status));
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(actions.setStatus(status));
    }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    const data = await profileAPI.uploadPhoto(file)
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }
}

export const saveProfile = (profileData: any):ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const data = await profileAPI.sendProfile(profileData)
    if (data.resultCode === ResultCodeEnum.Success) {
        if (userId != null) {
            dispatch(getProfile(userId))
        } else {
            throw new Error("userID can't be null")
        }
    } else {
        // dispatch(stopSubmit('ProfileDataForm', {_error: (response.data.messages[0] || "some error")}))
        return Promise.reject(data.messages[0])
    }
}

export default profileReducer;