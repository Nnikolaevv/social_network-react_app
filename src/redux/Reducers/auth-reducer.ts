import {ThunkAction} from "redux-thunk";
import {AppStateType, BaseThunkType, InferActionsTypes} from "../reduxStore";
import {authAPI} from "../../api/authAPI";
import {ResultCodeEnum, ResultCodeEnumForCaptcha} from "../../api/api";

type InitialStateType = typeof initialState

const initialState = {
    userId: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false ,
    isCaptcha: false ,
    urlCaptcha: null as null | string,
    error: null as null | string,
    errorMessage: null as null | string,
}

const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_AUTH_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        case 'SET_LOGOUT':
            return {
                ...state,
                userId: null,
                email: null,
                login: null,
                isAuth: false,
                errorMessage: null,
            };
        case 'SET_CAPTCHA':
            return {
                ...state,
                isCaptcha: action.booleanOfCaptcha
            }
        case 'SET_URL_CAPTCHA':
            return {
                ...state,
                urlCaptcha: action.url
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

//Actions

type ActionTypes = InferActionsTypes<typeof actions>

export const actions = {
    setAuthUserData: (userId: number, email: string, login: string) => ({type: 'SET_AUTH_USER_DATA', data: {userId, email, login}} as const),
    setLogout: () => ({type: 'SET_LOGOUT'} as const),
    setCaptcha: (booleanOfCaptcha: boolean) => ({type: 'SET_CAPTCHA', booleanOfCaptcha} as const),
    setUrlCaptcha: (url: string) => ({type: 'SET_URL_CAPTCHA', url} as const),
    setError: (error: string) => ({type: 'SET_ERROR', error} as const),
}

// Thunk's

type ThunkType = BaseThunkType<ActionTypes>

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const meData = await authAPI.authMe()
    if (meData.resultCode === ResultCodeEnum.Success) {
        let {id, email, login} = meData.data
        dispatch(actions.setAuthUserData(id, email, login));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    const loginData = await authAPI.login(email, password, rememberMe, captcha)
    if (loginData.resultCode === ResultCodeEnum.Success) {
        dispatch(actions.setError(''))
        dispatch(getAuthUserData())
        dispatch(actions.setCaptcha(false))
    } else {
        const message = loginData.messages.length > 0 ? loginData.messages[0] : "some error"
        console.log(loginData.messages)
        dispatch(actions.setError(message))/// on FORMIK GLOBAL ERRORS
        if (loginData.resultCode === ResultCodeEnumForCaptcha.CaptchaIsRequired) {
            dispatch(actions.setCaptcha(true))
            dispatch(getCaptcha())
        }
    }
}

export const logout = (): ThunkType => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(actions.setLogout())
    }
}

const getCaptcha = (): ThunkType => async (dispatch) => {
    const data = await authAPI.getCaptcha()
    dispatch(actions.setUrlCaptcha(data.url))
}

export default authReducer;



