import * as axios from "axios";


const instanse=axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY":"fc2a5c35-9a4a-4ac9-ae44-639fdb0cf397"}
})

export const usersAPI={
    getUsers(CurrentPage,pageSize){
        return instanse.get(`users?page=${CurrentPage}&count=${pageSize}`)
            .then (response=>{
                return response.data
            })
    },
    follow(id){
        return instanse.post(`follow/${id}`)
            .then (response=>{
                return response.data
            })
    },
    unfollow(id){
        return instanse.delete(`follow/${id}`)
            .then (response=>{
                return response.data
            })
    }
};

export const profileAPI={
    getUserId(userId){
        return instanse.get(`profile/${userId}`)
            .then (response=>{
                return response.data
            })
    },
    getStatus(userId){
        return instanse.get(`profile/status/${userId}`)
            .then (response=>{
                return response.data
            })
    },
    updateStatus(status){
        return instanse.put(`profile/status/`,{status})
            .then (response=>{
                return response.data
            })
    }
};
export const authAPI={
    auth(){
        return instanse.get(`auth/me`)
            .then (response=>{
                return response.data
            })
    },
    login(email, password, rememberMe){
        return instanse.post(`auth/login`,{email, password, rememberMe})
            .then (response=>{
                return response.data
            })
    },
    logout(){
        return instanse.delete(`auth/login`)
            .then (response=>{
                return response.data
            })
    },
};

