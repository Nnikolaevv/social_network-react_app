import axios from "axios";
import {UserType} from "../types/types";

const baseURL = "https://social-network.samuraijs.com/api/1.0";
const API_KEY = "971ae2d5-c366-4658-a81b-8b4913ab7d39"

export const instanceAxios = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        "API-KEY": API_KEY
    }
})

export type APIResponseType<D = {}, RC = ResultCodeEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeEnumForCaptcha {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
