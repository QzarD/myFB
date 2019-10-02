const ADD_POST='ADD-POST';
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE='SET_USER_PROFILE';

let initialState={
    posts:[
        {id:1, post:'Hi, Iam fine!'},
        {id:2, post:'Here so cool!!!'},
        {id:3, post:'This machine is very good'}
    ],
    newPostText:'',
    profile: null
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
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state;
    }
};

export const addPost=()=>({type:ADD_POST});
export const setUserProfile=(profile)=>({type:SET_USER_PROFILE, profile});
export const updateNewPostText=(text)=>
    ({type:UPDATE_NEW_POST_TEXT, newText:text});
export default postReducer;