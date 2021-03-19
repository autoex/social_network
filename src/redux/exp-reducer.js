const GET_USERS = 'GET_USERS';

let initState = {
    users: [],
    text: 'Users list'

};

const experimentalReducer = (state = initState, action) => {

    switch (action.type) {
        case GET_USERS:
            return {...state, users: action.users};

        default:
            return state;

    }




};

export const getUsersAC = (users) => ({
    type: GET_USERS,
    users
});
export default experimentalReducer;