const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const GET_USERS = 'GET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';

const initialState = {
    users: [],
    pageSize: 20,
    totalUserCount: 0,
    currentPage: 1
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
                users: [ ...action.users],
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case SET_USERS_COUNT:
            return  {
                ...state,
                totalUserCount: action.totalCount
            }
        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const getUsersAC = (users) => ({type: GET_USERS, users});
export const setCurrentPageAC = (numberPage) => ({type: SET_CURRENT_PAGE, currentPage: numberPage});
export const setUsersCountAC = (totalCount) => ({type: SET_USERS_COUNT, totalCount})


export default usersReducer;