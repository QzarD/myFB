import {usersAPI} from "../Components/Api/api";

const FOLLOW = 'profilesPage/FOLLOW';
const UNFOLLOW = 'profilesPage/UNFOLLOW';
const SET_PROFILES = 'profilesPage/SET_PROFILES';
const SET_CURRENT_PAGE = 'profilesPage/SET_CURRENT_PAGE';
const SET_TOTAL_PROFILES_COUNT = 'profilesPage/SET_TOTAL_PROFILES_COUNT';
const TOGGLE_IS_FETCHING = 'profilesPage/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'profilesPage/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    profiles: [],
    pageSize: 10,
    totalProfilesCount: 0,
    portionSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                profiles: state.profiles.map(p => {
                    if (p.id === action.profileId) {
                        return {...p, followed: true}
                    }
                    return p;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                profiles: state.profiles.map(p => {
                    if (p.id === action.profileId) {
                        return {...p, followed: false}
                    }
                    return p;
                })
            };
        case SET_PROFILES: {
            return {...state, profiles: action.profiles}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_PROFILES_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
};

export const followSuccess = (profileId) => ({type: FOLLOW, profileId});
export const unfollowSuccess = (profileId) => ({type: UNFOLLOW, profileId});
export const setProfiles = (profiles) => ({type: SET_PROFILES, profiles});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalProfilesCount = (count) => ({type: SET_TOTAL_PROFILES_COUNT, count});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const getUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const response = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setProfiles(response.data.items));
    dispatch(setTotalProfilesCount(response.data.totalCount));
    dispatch(setCurrentPage(page))
};
export const follow = (profileId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, profileId));
    const response = await usersAPI.follow(profileId);
    if (response.data.resultCode === 0) {
        dispatch(followSuccess(profileId))
    }
    dispatch(toggleFollowingProgress(false, profileId));
};
export const unfollow = (profileId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, profileId));
    const response = await usersAPI.unfollow(profileId);
    if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(profileId))
    }
    dispatch(toggleFollowingProgress(false, profileId));
};


export default profileReducer;