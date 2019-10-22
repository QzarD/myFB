


export const getProfiles = (state)=>{
    return state.profilesPage.profiles;
};
export const getPageSize = (state)=>{
    return state.profilesPage.pageSize;
};
export const getTotalUsersCount = (state)=>{
    return state.profilesPage.totalUsersCount;
};
export const getCurrentPage = (state)=>{
    return state.profilesPage.currentPage;
};
export const getIsFetching = (state)=>{
    return state.profilesPage.isFetching;
};
export const getFollowingInProgress = (state)=>{
    return state.profilesPage.followingInProgress;
};
