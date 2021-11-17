import {GetItemsType, instanceAxios, APIResponseType} from "./api";


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return (
            instanceAxios.get<GetItemsType>(`/users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    },

    follow(id: number) {
        return (
            instanceAxios.post<APIResponseType>('/follow/' + id, {})
                .then(response => response.data)

        )
    },

    unfollow(id: number) {
        return (
            instanceAxios.delete('/follow/' + id)
                .then(response => response.data) as Promise<APIResponseType>
        )
    }
}