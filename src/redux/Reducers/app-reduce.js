import {getAuthUserData} from "./auth-reducer";

const SET_INITIAL_APP = 'SET_INITIAL_APP';

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



export const initial = () => {
    return (dispatch) => {
      let loadingAuthUserData = dispatch(getAuthUserData());


      Promise.all([loadingAuthUserData])
          .then(() => {
              dispatch(setInitialApp())
              console.log(loadingAuthUserData)
          }
        );
    }
}



export default appReducer;



