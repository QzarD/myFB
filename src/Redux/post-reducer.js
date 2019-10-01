const ADD_POST='ADD-POST';
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';

let initialState={
    posts:[
        {id:1, post:'Hi, Iam fine!'},
        {id:2, post:'Here so cool!!!'},
        {id:3, post:'This machine is very good'}
    ],
    newPostText:''
}

const postReducer=(state=initialState, action)=> {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 5, post: state.newPostText};
            return {
                ...state,
                posts:[...state.posts, newPost],
                newPostText:''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;
    }
};

export const addPostCreator=()=>({type:ADD_POST});
export const updateNewPostTextCreator=(text)=>
    ({type:UPDATE_NEW_POST_TEXT, newText:text});
export default postReducer;