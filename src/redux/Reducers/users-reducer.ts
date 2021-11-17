import {UserType} from "../../types/types";
import {AppStateType, BaseThunkType, InferActionsTypes} from "../reduxStore";
import {ThunkAction} from "redux-thunk";
import {usersAPI} from "../../api/usersAPI";
import {ResultCodeEnum} from "../../api/api";

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 5 as number,
    totalUserCount: 20 as number,
    currentPage: 1 as number,
    isFetching: false as boolean,
    followingInProgress: [] as Array<number> // array of users id
}

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            };
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            };
        case 'SET_USERS':
            return {
                ...state,
                users: [...action.users],
            };
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case 'SET_USERS_COUNT':
            return {
                ...state,
                totalUserCount: action.totalCount
            };
        case 'TOGGLE_FETCHING':
            return {
                ...state,
                isFetching: action.booleanOfFetching
            };
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':
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

// ACTIONS

type ActionTypes = InferActionsTypes<typeof actions>

export const actions = {
    followSuccess: (userId: number) => ({type: 'FOLLOW', userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
    setUsers: (users: Array<UserType>) => ({type: 'SET_USERS', users} as const),
    setCurrentPage: (numberPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage: numberPage} as const),
    setUsersCount: (totalCount: number) => ({type: 'SET_USERS_COUNT', totalCount} as const),
    toggleFetching: (booleanOfFetching: boolean) => ({type: 'TOGGLE_FETCHING', booleanOfFetching} as const),
    toggleFollowingProgress: (booleanOfFollow: boolean, userId: number) => ({type: 'TOGGLE_IS_FOLLOWING_PROGRESS', booleanOfFollow, userId} as const)
}


// THUNKs

type ThunkType = BaseThunkType<ActionTypes>

export const requestUsers = (currentPage: number, pageSize: number): ThunkType => {
        return async (dispatch, getState) => {

            dispatch(actions.toggleFetching(true));

            const data = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(actions.toggleFetching(false));
            dispatch(actions.setUsers(data.items));
            dispatch(actions.setUsersCount(data.totalCount));
        }
    };


export const changePage = (numberPage: number, pageSize: number): ThunkType =>
    async (dispatch) => {
    dispatch(actions.setCurrentPage(numberPage));
    dispatch(actions.toggleFetching(true));
    const data = await usersAPI.getUsers(numberPage, pageSize)
    dispatch(actions.toggleFetching(false));
    dispatch(actions.setUsers(data.items));

}

export const follow = (userId: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    const data = await usersAPI.follow(userId)
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(actions.followSuccess(userId))
    }
    dispatch(actions.toggleFollowingProgress(false, userId))
}

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    const data = await usersAPI.unfollow(userId)
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(actions.unfollowSuccess(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
}


export default usersReducer;