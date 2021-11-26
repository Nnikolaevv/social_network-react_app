export type PostType = {
    id: number
    message: string
    likeCount: number
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts: ContactsType
    photos: PhotosType
}


export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}


export type GalleryImg = {
    id: number
    name: string
    url: string
}

export type FriendsType = {
    id: number
    name: string
    avatarImg: string
}
