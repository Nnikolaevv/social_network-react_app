import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Route} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";



const App = (props) => {
    return (
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar />
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'}>
                        <ProfileContainer />
                    </Route>
                    <Route path={'/dialogs'}>
                        <DialogsContainer />
                    </Route>
                    <Route path={'/users'}>
                        <UsersContainer />
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

