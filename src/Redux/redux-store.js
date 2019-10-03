import {combineReducers, createStore} from "redux";
import postReducer from "./post-reducer";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./Profiles-reducer";
import authReducer from "./auth-reducer";


let reducers=combineReducers({
    messagesPage:dialogReducer,
    postsPage:postReducer,
    profilesPage:profileReducer,
    auth:authReducer
});

let store=createStore(reducers);
export default store;