import {authAPI} from "../../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_LOGOUT = 'SET_LOGOUT';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE'


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    errorMessage: [],
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
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessages: [...action.errorMessages]
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_AUTH_USER_DATA, data: {userId, email, login}});
export const setLogout = () => ({type: SET_LOGOUT})
export const setErrorMessage = (errorMessages) => ({type: SET_ERROR_MESSAGE, errorMessages})

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(data => {
                    if (data.resultCode === 0) {
                        let {id, email, login} = data.data
                        dispatch(setAuthUserData(id, email, login));
                    }
                }
            )
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
                console.log(data)
                if (data.resultCode === 0) {
                    dispatch(getAuthUserData())
                }
                if (data.resultCode === 1) {
                    dispatch(setErrorMessage(data.messages))
                }
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setLogout())
                }
            })
    }
}


export default authReducer;



