import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, HashRouter} from "react-router-dom";
import store from "./redux/reduxStore";
import {Provider} from "react-redux";
import {theme} from "./theme";
import { ThemeProvider} from "@material-ui/core";


ReactDOM.render(
    <React.StrictMode>
        {/*<BrowserRouter basename={process.env.PUBLIC_URL}>*/}
        <HashRouter>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </ThemeProvider>

        </HashRouter>
        {/*</BrowserRouter>*/}
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
