import React, {lazy} from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom'
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

const DialogsContainer  =  React.lazy(() => import("./components/Dialogs/DialogsContainer"));


class App extends React.Component {
    componentDidMount() {
        this.props.initial()
    }

    render() {
        if (!this.props.isInit) return <Preloader/>

        return (
            <div className={"app-wrapper"}>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>

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

                    <Route path={'/news'}>
                        <News/>
                    </Route>

                    <Route path={'/music'}>
                        <Music/>
                    </Route>

                    <Route path={'/settings'}>
                        <Settings/>
                    </Route>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isInit: state.app.isInit
    }
}

export default compose(
    connect(mapStateToProps, {initial})
    )(App)

