import {instanceAxios, APIResponseType, ResultCodeEnum, ResultCodeEnumForCaptcha} from "./api";


type AuthMeResponseDataType = {
        id: number
        email: string
        login: string
}

type LoginResponseType = {
        userId: number
}

type GetCaptchaUtl = {
        url: string
}

export const authAPI = {
    authMe() {
        return (
            instanceAxios.get<APIResponseType<AuthMeResponseDataType>>('/auth/me')
                .then(response => response.data)
        )
    },

    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return (
            instanceAxios.post<APIResponseType<LoginResponseType, ResultCodeEnum & ResultCodeEnumForCaptcha>>('/auth/login', {email, password, rememberMe, captcha})
                .then(response => response.data)
        )
    },

    logout() {
        return (
            instanceAxios.delete('/auth/login')
                .then(response => response.data)
        )
    },

    getCaptcha() {
        return (
            instanceAxios.get<GetCaptchaUtl>('/security/get-captcha-url')
                .then(response => response.data)
        )
    }
}