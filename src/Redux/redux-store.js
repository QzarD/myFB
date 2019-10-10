import {applyMiddleware, combineReducers, createStore} from "redux";
import postReducer from "./post-reducer";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./Profiles-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer";


let reducers=combineReducers({
    messagesPage:dialogReducer,
    postsPage:postReducer,
    profilesPage:profileReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer
});

let store=createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;