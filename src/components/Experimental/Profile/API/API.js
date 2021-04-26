import axios from 'axios'

const localInstance = axios.create({
    baseURL: 'http://localhost:3000/users'
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



    }
};


export default usersAPI;