import {applyMiddleware, combineReducers, createStore} from "redux";
import postReducer from "./post-reducer";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./Profiles-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";


let reducers=combineReducers({
    messagesPage:dialogReducer,
    postsPage:postReducer,
    profilesPage:profileReducer,
    auth:authReducer
});

let store=createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;