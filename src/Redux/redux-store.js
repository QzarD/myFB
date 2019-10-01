import {combineReducers, createStore} from "redux";
import postReducer from "./post-reducer";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./Profiles-reducer";


let reducers=combineReducers({
    messagesPage:dialogReducer,
    postsPage:postReducer,
    profilesPage:profileReducer
});

let store=createStore(reducers);
export default store;