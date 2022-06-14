import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'))
function renderEntireDom(state) {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    sendMsg={store.sendMsg.bind(store)}
                    onTypingMsg={store.onTypingMsg.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>
    );
}
renderEntireDom(store.state)
store.subscribe(renderEntireDom)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();