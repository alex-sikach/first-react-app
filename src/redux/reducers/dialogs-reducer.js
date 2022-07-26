const startState = {
    chat_partners: [
        {
            id: "1",
            name: ["Mark", "Chris"],
            avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        },
        {
            id: "2",
            name: ["Joe", "Maker"],
            avatar: "https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg"
        },
        {
            id: "3",
            name: ["Felicity", "Smoak"],
            avatar: "https://img.favpng.com/14/10/18/emily-bett-rickards-felicity-smoak-arrow-png-favpng-TfX7epyVbXj2GTM2j1z7DG0vM.jpg"
        }
    ],
    chats: [
        {
            path: "/1",
            chat_history: [
                {message: "Hi, are you already at home?", from: 'me'},
                {message: "Yeah. I'm at home since 2.AM", from: 'them'},
                {message: "So, what are u gonna do now?", from: 'me'},
                {message: "I feel like sleepin'. Prolly I gonna have nap.", from: 'them'}
            ],
            typingMsg: ''
        },
        {
            path: "/2",
            chat_history: [
                {message: "Please don't fire me!", from: 'me'},
                {message: "Pleeeeease", from: 'me'},
                {message: "I'm beggin'", from: 'me'},
                {message: "Ha, pathetic", from: 'them'}
            ],
            typingMsg: ''
        },
        {
            path: "/3",
            chat_history: [
                {message: "You know what? That joke insulted me and you didn't even notice that!", from: 'them'},
                {message: "I suppose we should take a break in our relationship, sorry..", from: 'them'},
                {
                    message: "I'm really sorry but I respect your wish. Are u gonna remove me from the friends list?",
                    from: 'me'
                },
                {message: "I'm not 7, sure I ain't", from: 'them'}
            ],
            typingMsg: ''
        }
    ]
}

const SEND_MESSAGE = 'SEND_MESSAGE'
const ON_TYPING_MESSAGE = 'ON_TYPING_MESSAGE'

function dialogsReducer(state = startState, action={}) {
    switch (action.type) {
        case SEND_MESSAGE: {
            const stateCopy = {
                ...state,
                chats: [ ...state.chats ],
            }
            for (let i in stateCopy.chats) {
                stateCopy.chats[i] = { ...state.chats[i] }
                stateCopy.chats[i].chat_history = { ...state.chats[i].chat_history }
            }

            for (let i = 0; i < stateCopy.chats.length; i++) {
                if (stateCopy.chats[i].path === action.cpi) {
                    stateCopy.chats[i].chat_history.push({
                        message: stateCopy.chats[i].typingMsg,
                        from: 'me'
                    })
                    stateCopy.chats[i].typingMsg = '';
                    break;
                }
            }
            return stateCopy
        }
            break;
        case ON_TYPING_MESSAGE: {
            /*const stateCopy = {
                ...state,
                chats: [...state.chats]
            }
            for (let i = 0; i < stateCopy.chats.length; i++) {
                if (stateCopy.chats[i].path === action.cpi) {
                    stateCopy.chats[i].typingMsg = action.msg;
                    break;
                }
            }
            return stateCopy*/
            return {
                ...state,
                chats: state.chats.map(chat => {
                    if(chat.path === action.cpi) {
                        return {
                            ...chat,
                            typingMsg: action.msg,
                        }
                    }

                    return chat;
                }),
            }
        }
            break;
        default:
            return state;
    }
}

export default dialogsReducer;

export function sendMsgActionCreator(cpi) {
    return {
        type: SEND_MESSAGE,
        cpi
    }
}
export function onTypingMsgActionCreator(cpi, msg) {
    return {
        type: ON_TYPING_MESSAGE,
        cpi,
        msg
    }
}