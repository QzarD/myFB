const ADD_MESSAGE='ADD-MESSAGE';

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
};

const dialogReducer=(state=initialState, action)=> {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {id: 5, message: action.textNewMessage};
            return {
                ...state,
                messages:[...state.messages, newMessage]
            };
        default:
            return state;
    }
};

export const addMessageActionCreator=(textNewMessage)=>({type:ADD_MESSAGE, textNewMessage});
export default dialogReducer;