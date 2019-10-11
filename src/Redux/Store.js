import dialogReducer from "./dialog-reducer";
import userReducer from "./user-reducer";

let store={
    _state: {
        messagesPage:{
            dialogs: [
                {id: 1, name: 'Kostya'},
                {id: 2, name: 'Ira'},
                {id: 3, name: 'Alisa'},
                {id: 4, name: 'Eva'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Good, and are you?'},
                {id: 4, message: 'Thanks, good too!'}
            ],
            newMessageText: ''
        },
        postsPage:{
            posts:[
                {id:1, post:'Hi, Iam fine!'},
                {id:2, post:'Here so cool!!!'},
                {id:3, post:'This machine is very good'}
            ],
            newPostText:''
        }
    },
    getState(){
        return this._state;
    },
    _rerenderEntireTree(){
        console.log('State changed');
    },
    subscribe(observer){
        this._rerenderEntireTree=observer;
    },

    dispatch(action){
        this._state.messagesPage=dialogReducer(this._state.messagesPage, action);
        this._state.postsPage=userReducer(this._state.postsPage, action);
        this._rerenderEntireTree(this._state);
    }
};

export default store;
window.state=store;