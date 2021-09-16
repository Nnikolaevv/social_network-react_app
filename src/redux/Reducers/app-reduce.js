import {getAuthUserData} from "./auth-reducer";

const SET_INITIAL_APP = 'app/SET_INITIAL_APP';

const initialState = {
    isInit: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIAL_APP:
            return {
                ...state,
                isInit: true
            };
        default:
            return state;
    }
}

export const setInitialApp = () => ({type: SET_INITIAL_APP});

export const initial = () => (dispatch) => {
    const loadingAuthUserData = dispatch(getAuthUserData());

    Promise.all([loadingAuthUserData])
        .then(() => {
                dispatch(setInitialApp())
            }
        );
}


export default appReducer;



