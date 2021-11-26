import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, HashRouter} from "react-router-dom";
import store from "./redux/reduxStore";
import {Provider} from "react-redux";
import {theme} from "./theme";
import { ThemeProvider} from "@material-ui/core";


ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </ThemeProvider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
