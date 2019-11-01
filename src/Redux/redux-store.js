import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import userReducer from "./user-reducer";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./Profiles-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer";
import {dashboardReducer} from "./dashboard-reducer";
import {dashboard2Reducer} from "./dashboard2-reducer";


let reducers=combineReducers({
    messagesPage:dialogReducer,
    postsPage:userReducer,
    profilesPage:profileReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer,
    dashboard:dashboardReducer,
    dashboard2:dashboard2Reducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
/*window.store=store;*/

export default store;