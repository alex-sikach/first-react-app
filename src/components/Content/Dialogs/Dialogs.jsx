import React from 'react'
import style from './Dialogs.module.css'
import Chat_partner from "./Chat_partner/Chat_partner"
import {Route, Routes} from "react-router-dom";
import Chat from './Dialog/Chat/Chat'
import ChatFooter from './Dialog/ChatFooter/ChatFooter'

const Dialogs = (props) => {
    return (
        <div className={style.Main}>
            <div className={style.collocutors}>
                {
                    props.state.chat_partners.map(cp => {
                        return (
                            <Chat_partner
                                id={cp.id}
                                name={cp.name}
                                avatar={cp.avatar}
                            />)
                    })
                }
            </div>
            <div className={style.dialog}>
                <Routes>
                    {
                        props.state.chats.map(c => {
                            return (
                                <Route
                                    path={c.path}
                                    element={[
                                        <Chat chat_history={c.chat_history} />,
                                        <ChatFooter
                                            path={c.path}
                                            typingMsg={c.typingMsg}
                                            dispatch={props.dispatch}
                                        />
                                    ]}
                                />)
                        })
                    }
                </Routes>
            </div>
        </div>
    )
}

export default Dialogs;