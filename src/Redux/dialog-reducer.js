const ADD_MESSAGE='ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT='UPDATE-NEW-MESSAGE-TEXT';

let initialState={
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
};

const dialogReducer=(state=initialState, action)=> {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {id: 5, message: state.newMessageText};
            return {
                ...state,
                messages:[...state.messages, newMessage],
                newMessageText: ''
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText:action.newText
            }
        default:
            return state;
    }
};

export const addMessageActionCreator=()=>({type:ADD_MESSAGE});
export const updateNewMessageTextActionCreator=(text)=>
    ({type:UPDATE_NEW_MESSAGE_TEXT, newText:text});
export default dialogReducer;