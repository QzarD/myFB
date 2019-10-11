import {profileAPI} from "../Components/Api/api";

const ADD_POST='ADD-POST';
const SET_USER_PROFILE='SET_USER_PROFILE';
const SET_STATUS='SET_STATUS';

let initialState={
    posts:[
        {id:1, post:'Hi, Iam fine!'},
        {id:2, post:'Here so cool!!!'},
        {id:3, post:'This machine is very good'}
    ],
    profile: null,
    status: '',
}

const userReducer=(state=initialState, action)=> {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 5, post: action.textNewPost};
            return {
                ...state,
                posts:[...state.posts, newPost]
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
};

export const addPost=(textNewPost)=>({type:ADD_POST, textNewPost});
export const setUserProfile=(profile)=>({type:SET_USER_PROFILE, profile});
export const setStatus=(status)=>({type:SET_STATUS, status});

export const getUserId=(userId)=>{
    return (dispatch)=>{
        profileAPI.getUserId(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}
export const getStatusAPI=(userId)=>(dispatch)=>{
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            });
}
export const updateStatus=(status)=>(dispatch)=>{
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(setStatus(status));
                }
            });
}

export default userReducer;