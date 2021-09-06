import {usersAPI} from "../../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
    users: [],
    pageSize: 3,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [ ]
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
        case SET_USERS:
            return {
                ...state,
                users: [ ...action.users],
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case SET_USERS_COUNT:
            return  {
                ...state,
                totalUserCount: action.totalCount
            };
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.booleanOfFetching
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.booleanOfFollow ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id !== action.userId),
            }
        default:
            return state
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (numberPage) => ({type: SET_CURRENT_PAGE, currentPage: numberPage});
export const setUsersCount = (totalCount) => ({type: SET_USERS_COUNT, totalCount});
export const toggleFetching = (booleanOfFetching) => ({type:TOGGLE_FETCHING, booleanOfFetching});
export const toggleFollowingProgress = (booleanOfFollow, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS,booleanOfFollow, userId})

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setUsersCount(data.totalCount));
            })
            .catch(err => console.log(err));

    }
};

export const changePage = (numberPage, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(numberPage));
        dispatch(toggleFetching(true));

        usersAPI.getUsers(numberPage, pageSize)
            .then(data => {
                dispatch(toggleFetching(false));
                dispatch(setUsers(data.items));
            })
            .catch(err => console.log(err));
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));

        usersAPI.follow(userId)
            .then(resultCode => {
                if (resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            })

    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));

        usersAPI.unfollow(userId)
            .then(resultCode => {
                if (resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            })

    }
}



export default usersReducer;