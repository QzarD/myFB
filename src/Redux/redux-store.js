import {applyMiddleware, combineReducers, createStore} from "redux";
import userReducer from "./user-reducer";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./Profiles-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer";
import {dashboardReducer} from "./dashboard-reducer";


let reducers=combineReducers({
    messagesPage:dialogReducer,
    postsPage:userReducer,
    profilesPage:profileReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer,
    dashboard:dashboardReducer,
});

let store=createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;