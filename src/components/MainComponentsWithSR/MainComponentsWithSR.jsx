import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import ProfileContainer from "../Profile/ProfileContainer";
import UsersContainer from "../Users/UsersContainer";
import LoginContainer from "../Login/LoginContainer";
import Feed from "../Feed/Feed";
import {makeStyles} from "@material-ui/core";
import Preloader from "../common/Preloader/Preloader";
const DialogsContainer = React.lazy(() => import("../Dialogs/DialogsContainer"));

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(8),
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(7),
        }
    },
}))

const MainComponentsWithSR = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
                <Switch>
                    <Redirect exact from="/" to="/profile" />

                    <Route path={'/profile/:userId?'}>
                        <ProfileContainer/>
                    </Route>

                    <Route path={'/dialogs'}>
                        <React.Suspense fallback={<Preloader />}>
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
        </div>
    )

}

export default MainComponentsWithSR