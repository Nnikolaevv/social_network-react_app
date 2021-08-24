import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {

    return (
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar state={props.state}/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'}>
                        <Profile profileState={props.state.profilePage}
                                 dispatch={props.dispatch}/>
                    </Route>
                    <Route path={'/dialogs'}>
                        <Dialogs dialogsState={props.state.dialogsPage}
                                 dispatch={props.dispatch}/>
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

