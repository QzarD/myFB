import {profileAPI} from "../Components/Api/api";

const ADD_POST='ADD-POST';
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE='SET_USER_PROFILE';
const SET_STATUS='SET_STATUS';

let initialState={
    posts:[
        {id:1, post:'Hi, Iam fine!'},
        {id:2, post:'Here so cool!!!'},
        {id:3, post:'This machine is very good'}
    ],
    newPostText:'',
    profile: null,
    status: '',
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
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
};

export const addPost=()=>({type:ADD_POST});
export const setUserProfile=(profile)=>({type:SET_USER_PROFILE, profile});
export const updateNewPostText=(text)=>({type:UPDATE_NEW_POST_TEXT, newText:text});
export const setStatus=(status)=>({type:SET_STATUS, status});

export const getUserId=(userId)=>{
    return (dispatch)=>{
        profileAPI.getUserId(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
}
export const getStatus=(userId)=>(dispatch)=>{
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data));
            });
}
export const updateStatus=(status)=>(dispatch)=>{
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0){
                    dispatch(setStatus(status));
                }
            });
}

export default postReducer;