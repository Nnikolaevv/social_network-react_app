import {usersAPI} from "../../api/api";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'users/SET_USERS_COUNT';
const TOGGLE_FETCHING = 'users/TOGGLE_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
    users: [],
    pageSize: 3,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
                users: [...action.users],
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case SET_USERS_COUNT:
            return {
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
export const toggleFetching = (booleanOfFetching) => ({type: TOGGLE_FETCHING, booleanOfFetching});
export const toggleFollowingProgress = (booleanOfFollow, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    booleanOfFollow,
    userId
})

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleFetching(true));
    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setUsersCount(data.totalCount));
};

export const changePage = (numberPage, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(numberPage));
    dispatch(toggleFetching(true));
    const data = await usersAPI.getUsers(numberPage, pageSize)
    dispatch(toggleFetching(false));
    dispatch(setUsers(data.items));

}

export const follow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    const resultCode = await usersAPI.follow(userId)
    if (resultCode === 0) {
        dispatch(followSuccess(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const unfollow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    const resultCode = await usersAPI.unfollow(userId)
    if (resultCode === 0) {
        dispatch(unfollowSuccess(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}


export default usersReducer;