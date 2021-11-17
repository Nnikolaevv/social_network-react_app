import {getAuthUserData} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType, BaseThunkType, InferActionsTypes} from "../reduxStore";

const initialState = {
    isInit: false
}

type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_INITIAL_APP':
            return {
                ...state,
                isInit: true
            };
        default:
            return state;
    }
}

//Actions

type ActionTypes = InferActionsTypes<typeof actions>

export const actions = {
    setInitialApp: () => ({type: 'SET_INITIAL_APP'} as const)
}


// Thunk

type ThunkType = BaseThunkType<ActionTypes>

export const initial = (): ThunkType =>  async (dispatch) => {
    const loadingAuthUserData = dispatch(getAuthUserData());

    Promise.all([loadingAuthUserData])
        .then(() => {
                dispatch(actions.setInitialApp())
            }
        );
}


export default appReducer;



