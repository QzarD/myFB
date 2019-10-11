import {usersAPI} from "../Components/Api/api";

const FOLLOW='FOLLOW';
const UNFOLLOW='UNFOLLOW';
const SET_PROFILES='SET_PROFILES';
const SET_CURRENT_PAGE='SET_CURRENT_PAGE';
const SET_TOTAL_PROFILES_COUNT='SET_TOTAL_PROFILES_COUNT';
const TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS='TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState={
    profiles:[ ],
    pageSize: 5,
    totalProfilesCount: 0,
    currentPage: 1,
    isFetching:false,
    followingInProgress:[ ]
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
        case TOGGLE_IS_FOLLOWING_PROGRESS:{
            return {...state,
                followingInProgress:action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
};

export const followSuccess=(profileId)=>({type: FOLLOW, profileId});
export const unfollowSuccess=(profileId)=>({type: UNFOLLOW, profileId});
export const setProfiles=(profiles)=>({type: SET_PROFILES, profiles});
export const setCurrentPage=(currentPage)=>({type: SET_CURRENT_PAGE, currentPage});
export const setTotalProfilesCount=(totalProfilesCount)=>({type: SET_TOTAL_PROFILES_COUNT, count:totalProfilesCount});
export const toggleIsFetching=(isFetching)=>({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress=(isFetching, userId)=>({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});
export const getUsers=(page, pageSize)=>{
    return (dispatch)=>{
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(page, pageSize)
            .then(response => {
                dispatch(toggleIsFetching(false));
                dispatch(setProfiles(response.data.items));
                dispatch(setTotalProfilesCount(response.data.totalCount));
            });
    }
};
export const follow=(profileId)=>{
    return (dispatch)=>{
        dispatch(toggleFollowingProgress(true, profileId));
        usersAPI.follow(profileId)
            .then(response=>{
                if (response.data.resultCode===0){
                    dispatch(followSuccess(profileId))
                }
                dispatch(toggleFollowingProgress(false, profileId));
            })
    }
};
export const unfollow=(profileId)=>{
    return (dispatch)=>{
        dispatch(toggleFollowingProgress(true, profileId));
        usersAPI.unfollow(profileId)
            .then(response=>{
                if (response.data.resultCode===0){
                    dispatch(unfollowSuccess(profileId))
                }
                dispatch(toggleFollowingProgress(false, profileId));
            })
    }
};



export default profileReducer;