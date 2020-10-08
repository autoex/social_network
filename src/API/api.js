import * as axios from "axios";

// const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY' : '7fc68edd-bf2c-4451-96db-e360a4c247b3'
    },


});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {

        return   instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },


    follow(userId) {

        return  instance.post(`follow/${userId}`)

    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile(userId) {

        return instance.get(`profile/${userId}`)
    }


};

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
};


