import {authAPI} from "../../api/api";

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';
const SET_LOGOUT = 'auth/SET_LOGOUT';
const SET_CAPTCHA = 'auth/SET_CAPTCHA';
const SET_URL_CAPTCHA = 'auth/SET_URL_CAPTCHA';
const SET_ERROR = 'auth/SET_ERROR'

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isCaptcha: false,
    urlCaptcha: '',
    error: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        case SET_LOGOUT:
            return {
                ...state,
                userId: null,
                email: null,
                login: null,
                isAuth: false,
                errorMessage: null,
            };
        case SET_CAPTCHA:
            return {
                ...state,
                isCaptcha: action.booleanOfCaptcha
            }
        case SET_URL_CAPTCHA:
            return {
                ...state,
                urlCaptcha: action.url
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_AUTH_USER_DATA, data: {userId, email, login}});
export const setLogout = () => ({type: SET_LOGOUT});
export const setCaptcha = (booleanOfCaptcha) => ({type: SET_CAPTCHA, booleanOfCaptcha});
export const setUrlCaptcha = (url) => ({type: SET_URL_CAPTCHA, url});
const setError = (error) => ({type: SET_ERROR, error})


export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.authMe()
    if (response.resultCode === 0) {
        let {id, email, login} = response.data
        dispatch(setAuthUserData(id, email, login));
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.resultCode === 0) {
        dispatch(setError(''))
        dispatch(getAuthUserData())
        dispatch(setCaptcha(false))
    } else {
        dispatch(setError(response.messages || "some error"))/// on FORMIK GLOBAL ERRORS
        if (response.resultCode === 10) {
            dispatch(setCaptcha(true))
            dispatch(getCaptcha())
        }
    }
}

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setLogout())
    }
}

const getCaptcha = () => async (dispatch) => {
    const response = await authAPI.getCaptcha()
    dispatch(setUrlCaptcha(response.data.url))
}

export default authReducer;



