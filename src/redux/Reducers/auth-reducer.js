import {authAPI} from "../../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_LOGIN_DATA = 'SET_LOGIN_DATA';


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    loginData: {
        email: null,
        password: null,
        rememberMe: false,
        captcha: false,
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        case SET_LOGIN_DATA:
            return {
                ...state,
                loginData : {...action.data},
                isAuth: true,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_AUTH_USER_DATA, data: {userId, email, login}});
export const setLoginData = (email, password, rememberMe, captcha) => (
    {type: SET_LOGIN_DATA, data: {email, password, rememberMe, captcha}})


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

export  const sendLoginData = (data) => {
    return (dispatch) => {
        authAPI.login(data)
            .then(response => {
                console.log(response)
               if (response.data.resultCode === 0) {
                   let {email, password, rememberMe, captcha} = data
                   dispatch(setLoginData(email, password, rememberMe, captcha))
               };
            })
        }
    }


export default authReducer;



