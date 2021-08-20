import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import SideBarFriends from "./components/sideBar/sideBarFriends";


const App = (props) => {


    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar state={props.state}/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'}>
                        <Profile profileState={props.state.profilePage}/>
                    </Route>
                    <Route path={'/dialogs'}>
                        <Dialogs dialogsState={props.state.dialogsPage}/>
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
        </BrowserRouter>
    );
}

export default App;

