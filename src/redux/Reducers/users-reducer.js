const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const GET_USERS = 'GET-USERS';

const initialState = {
    users: [
        // {id: 1,
        //     avaImg: 'https://cdn.pnp.ru/upload/entities/2020/01/15/article/detailPicture/48/2d/d0/40/e84ae6bc95ba98684f59184cc5d1e3a9.jpg',
        //     followed: false,
        //     firstName: 'Nikolay',
        //     status: 'Hey Hey Hey',
        //     location: {city: 'Moscow', country: 'Russia'}},
        // {id: 2,
        //     avaImg: 'https://cdn.pnp.ru/upload/entities/2020/01/15/article/detailPicture/48/2d/d0/40/e84ae6bc95ba98684f59184cc5d1e3a9.jpg',
        //     followed: true,
        //     firstName: 'Alex',
        //     status: 'Hello world',
        //     location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 3,
        //     avaImg: 'https://cdn.pnp.ru/upload/entities/2020/01/15/article/detailPicture/48/2d/d0/40/e84ae6bc95ba98684f59184cc5d1e3a9.jpg',
        //     followed: false,
        //     firstName: 'Vasiliy',
        //     status: 'I am a Vasiliy',
        //     location: {city: 'Adler', country: 'Russia'}},
        ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            };
        case GET_USERS:
            return {
                ...state,
                users: [...state.users , ...action.users],
            }
        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const getUsersAC = (users) => ({type: GET_USERS, users})

export default usersReducer;