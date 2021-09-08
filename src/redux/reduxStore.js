import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./Reducers/profile-reducer";
import dialogsReducer from "./Reducers/dialogs-reducer";
import sidebarReducer from "./Reducers/sidebar-reducer";
import usersReducer from "./Reducers/users-reducer";
import authReducer from "./Reducers/auth-reducer";
import thunk from "redux-thunk";
import { reducer as formReduce } from "redux-form";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReduce,
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;