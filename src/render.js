import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {sendMsg, onTypingMsg} from "./redux/state";

function renderEntireDom(state={}) {
    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} sendMsg={sendMsg} onTypingMsg={onTypingMsg} />
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default renderEntireDom;