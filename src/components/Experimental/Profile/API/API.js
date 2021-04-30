import axios from 'axios'

const localInstance = axios.create({
    baseURL: 'http://localhost:3000/users/',
    headers: {'Content-Type': 'application/json'}
});

const placeholderInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
});

const usersAPI = {
    getUsersArr() {
        return localInstance()
    },
    getUsers(pageNumber, pageSize) {
        return localInstance(`?_page=${pageNumber}&_limit=${pageSize}`).then(users=> users.data);

    },
    getPosts() {
       return  placeholderInstance().then(data => data.data);



    },

    unfollow(userId) {

        axios.localInstance(`${userId}`, {followed: false})

    },

    follow(userId) {

        axios.localInstance(`${userId}`, {followed: true})

    }
};


export default usersAPI;