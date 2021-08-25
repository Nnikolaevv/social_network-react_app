import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar store={props.store}/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'}>
                        <Profile store={props.store}/>
                    </Route>
                    <Route path={'/dialogs'}>
                        <DialogsContainer store={props.store}/>
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

