import {PhotosType, ProfileType} from "../types/types";
import {APIResponseType, instanceAxios} from "./api";

type SavePhotoResponseDataType = {
    photos: PhotosType
}

export const profileAPI = {
    getProfile(userId: number | null) {
        return (
            instanceAxios.get<ProfileType>('/profile/' + userId)
                .then(response => response.data)
        )
    },

    getStatus(userId: number) {
        return (
            instanceAxios.get<string>('/profile/status/' + userId)
                .then(response => response.data)
        )
    },

    updateStatus(status: string) {
        return (
            instanceAxios.put<APIResponseType>('/profile/status', {status: status})
                .then(response => response.data)
        )
    },

    uploadPhoto(file: File) {
        const formData = new FormData();
        formData.append('image', file)
        return (
            instanceAxios.put<APIResponseType<SavePhotoResponseDataType>>('/profile/photo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => response.data)
        )
    },

    sendProfile(data: ProfileType) {
        return (
            instanceAxios.put<APIResponseType>('/profile', data)
                .then(response => response.data)
        )
    }

}