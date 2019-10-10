import * as axios from "axios";


const instanse=axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY":"3b86e8aa-ba2b-4ce9-8488-61b438f5e9c3"}
})

export const usersAPI={
    getUsers(CurrentPage,pageSize){
        return instanse.get(`users?page=${CurrentPage}&count=${pageSize}`)
    },
    follow(id){
        return instanse.post(`follow/${id}`)
    },
    unfollow(id){
        return instanse.delete(`follow/${id}`)
    }
};

export const profileAPI={
    getUserId(userId){
        return instanse.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instanse.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instanse.put(`profile/status/`,{status})
    }
};
export const authAPI={
    auth(){
        return instanse.get(`auth/me`)
    },
    login(email, password, rememberMe){
        return instanse.post(`auth/login`,{email, password, rememberMe})
    },
    logout(){
        return instanse.delete(`auth/login`)
    },
};

