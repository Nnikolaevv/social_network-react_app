import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import ProfileContainer from "../Profile/ProfileContainer";
import UsersContainer from "../Users/UsersContainer";
import LoginContainer from "../Login/LoginContainer";
import Feed from "../Feed/Feed";
const DialogsContainer = React.lazy(() => import("../Dialogs/DialogsContainer"));

const MainComponentsWithSR = (props) => {
    return (
        <Switch>
            <Redirect exact from="/" to="/profile" />

            <Route path={'/profile/:userId?'}>
                <ProfileContainer/>
            </Route>

            <Route path={'/dialogs'}>
                <React.Suspense fallback={<div> Loading..... </div>}>
                    <DialogsContainer/>
                </React.Suspense>
            </Route>

            <Route path={'/users'}>
                <UsersContainer/>
            </Route>

            <Route path={'/login'}>
                <LoginContainer/>
            </Route>

            <Route path={'/feed'}>
                <Feed/>
            </Route>

            <Route path={'*'}>
                <div>404 NOT FOUND</div>
            </Route>
        </Switch>
    )

}

export default MainComponentsWithSR