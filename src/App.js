import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { Route} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";


const App = (props) => {
    return (
            <div className={"app-wrapper"}>
                <HeaderContainer/>
                <Navbar />
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile/:userId?'}>
                        <ProfileContainer />
                    </Route>
                    <Route path={'/dialogs'}>
                        <DialogsContainer />
                    </Route>
                    <Route path={'/users'}>
                        <UsersContainer />
                    </Route>
                    <Route path={'/login'}>
                        <LoginContainer />
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

export default App;

