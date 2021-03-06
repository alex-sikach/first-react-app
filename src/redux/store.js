import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import musicReducer from "./reducers/music-reducer";
import todoReducer from "./reducers/todo-reducer";

let store = {
    _state: {
        profile: profileReducer(),
        dialogs: dialogsReducer(),
        music: musicReducer(),
        todo: todoReducer()
    },
    get state() {return this._state},
    _callSubscriber(){},
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profile = profileReducer(this.state.profile, action)
        this._state.dialogs = dialogsReducer(this.state.dialogs, action)
        this._state.music = musicReducer(this.state.music, action)
        this._state.todo = todoReducer(this.state.todo, action)

        this._callSubscriber(this.state)
    }
}

export default store;