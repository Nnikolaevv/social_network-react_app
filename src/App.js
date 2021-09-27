import React, {lazy} from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Redirect, Route, Switch} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initial} from "./redux/Reducers/app-reduce";
import Preloader from "./components/common/Preloader/Preloader";
import {Container, Grid, makeStyles} from "@material-ui/core";
import Navbarr from "./other/Navbar";
import Leftbar from "./other/Leftbar";
import Feed from "./other/Feed";
import Rightbar from "./other/Rightbar";
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));

const useStyles = makeStyles(theme => ({
    right: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    }
}))

const App = (props) => {


    // componentDidMount() {
    //     this.props.initial()
    // }
    //
         const classes = useStyles()


         //
         // if (!props.isInit) return <Preloader/>

        return (
            <div>
                <Navbarr/>
                <Grid container>
                    <Grid item sm={2} xs={2}>
                        <Leftbar/>
                    </Grid>
                    <Grid item sm={7} xs={10}>
                        <Feed/>
                    </Grid>
                    <Grid item sm={3} className={classes.right}>
                        <Rightbar/>
                    </Grid>
                </Grid>
            </div>
            // <Grid container>
            //    <Grid item xs={12} md={12}><HeaderContainer/></Grid>
            //     <Container>
            //         <Grid container>
            //             <Grid item xs={2} md={2} ><Navbar/></Grid>
            //             <Grid item xs={10} md={10}>
            //                 <Switch>
            //                     <Route path={'/profile/:userId?'}>
            //                         <ProfileContainer/>
            //                     </Route>
            //
            //                     <Route path={'/dialogs'}>
            //                         <React.Suspense fallback={<div> Loading..... </div>}>
            //                             <DialogsContainer/>
            //                         </React.Suspense>
            //                     </Route>
            //
            //                     <Route path={'/users'}>
            //                         <UsersContainer/>
            //                     </Route>
            //
            //                     <Route path={'/login'}>
            //                         <LoginContainer/>
            //                     </Route>
            //
            //                     <Route path={'/news'}>
            //                         <News/>
            //                     </Route>
            //
            //                     <Route path={'/music'}>
            //                         <Music/>
            //                     </Route>
            //
            //                     <Route path={'/settings'}>
            //                         <Settings/>
            //                     </Route>
            //
            //                     <Route path={'*'}>
            //                         <div>404 NOT FOUND</div>
            //                     </Route>
            //                 </Switch>
            //             </Grid></Grid>
            //
            //     </Container>
            //
            // </Grid>
        );
    }

const mapStateToProps = (state) => {
    return {
        isInit: state.app.isInit
    }
}

export default compose(
    connect(mapStateToProps, {initial})
)(App)

