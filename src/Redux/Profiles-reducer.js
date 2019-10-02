const FOLLOW='FOLLOW';
const UNFOLLOW='UNFOLLOW';
const SET_PROFILES='SET_PROFILES';
const SET_CURRENT_PAGE='SET_CURRENT_PAGE';
const SET_TOTAL_PROFILES_COUNT='SET_TOTAL_PROFILES_COUNT';
const TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING';

let initialState={
    profiles:[ ],
    pageSize: 5,
    totalProfilesCount: 0,
    currentPage: 1,
    isFetching:false
};

const profileReducer=(state=initialState, action)=> {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                profiles:state.profiles.map(p=>{
                    if(p.id===action.profileId){
                        return{...p, followed:true}
                    }
                    return p;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                profiles:state.profiles.map(p=>{
                    if(p.id===action.profileId){
                        return{...p, followed:false}
                    }
                    return p;
                })
            };
        case SET_PROFILES:{
            return {...state, profiles: action.profiles}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_PROFILES_COUNT:{
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING:{
            return {...state,isFetching:action.isFetching}
        }
        default:
            return state;
    }
};

export const follow=(profileId)=>({type: FOLLOW, profileId});
export const unfollow=(profileId)=>({type: UNFOLLOW, profileId});
export const setProfiles=(profiles)=>({type: SET_PROFILES, profiles});
export const setCurrentPage=(currentPage)=>({type: SET_CURRENT_PAGE, currentPage});
export const setTotalProfilesCount=(totalProfilesCount)=>({type: SET_TOTAL_PROFILES_COUNT, count:totalProfilesCount});
export const toggleIsFetching=(isFetching)=>({type: TOGGLE_IS_FETCHING, isFetching});
export default profileReducer;