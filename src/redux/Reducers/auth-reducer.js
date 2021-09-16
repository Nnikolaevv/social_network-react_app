import {authAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';
const SET_LOGOUT = 'auth/SET_LOGOUT';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        case SET_LOGOUT: {
            return {
                ...state,
                userId: null,
                email: null,
                login: null,
                isAuth: false,
                errorMessage: null,
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_AUTH_USER_DATA, data: {userId, email, login}});
export const setLogout = () => ({type: SET_LOGOUT})


export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.authMe()
    if (response.resultCode === 0) {
        let {id, email, login} = response.data
        dispatch(setAuthUserData(id, email, login));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        dispatch(stopSubmit('login', {_error: (response.messages || "some error")}))
    }
}

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setLogout())
    }
}

export default authReducer;



