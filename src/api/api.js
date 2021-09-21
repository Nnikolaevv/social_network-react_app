import axios from "axios";


const baseURL = "https://social-network.samuraijs.com/api/1.0";
const API_KEY = "8b769d71-9c3b-4a97-8b52-9dc0a31f7331"

const instanceAxios = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        "API-KEY": API_KEY
    }
})

export const authAPI = {
    authMe() {
        return (
            instanceAxios.get('/auth/me')
                .then(response => response.data)
        )
    },

    login(email, password, rememberMe = false, captcha) {
        return (
            instanceAxios.post('/auth/login', {email, password, rememberMe, captcha})
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
            instanceAxios.get('/security/get-captcha-url')
        )
    }
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return (
            instanceAxios.get(`/users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    },

    follow(id) {
        return (
            instanceAxios.post('/follow/' + id, {})
                .then(response => response.data.resultCode)

        )
    },

    unfollow(id) {
        return (
            instanceAxios.delete('/follow/' + id)
                .then(response => response.data.resultCode)
        )
    }
}

export const profileAPI = {
    getProfile(userId) {
        return (
            instanceAxios.get('/profile/' + userId)
                .then(response => response.data)
        )
    },

    getStatus(userId) {
        return (
            instanceAxios.get('/profile/status/' + userId)
                .then(response => response.data)
        )
    },

    updateStatus(status) {
        return (
            instanceAxios.put('/profile/status', {status : status})
        )
    },

    uploadPhoto(file) {
        const formData = new FormData();
        formData.append('image', file)
        return (
            instanceAxios.put('/profile/photo', formData, {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            })
        )
    },

    sendProfile(data) {
        return (
            instanceAxios.put('/profile', data)
        )
    }

}


