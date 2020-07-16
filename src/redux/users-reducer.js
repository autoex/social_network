const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initState = {
    users: [
        {
            id: 1,
            userPhoto: 'https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col/image.png',
            followed: true,
            fullName: 'Lewis',
            status: 'Black master',
            location: {city: 'London', country: 'England'}
        },
        {
            id: 2,
            userPhoto: 'https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col/image.png',
            followed: false,
            fullName: 'Carlos',
            status: 'Carlito',
            location: {city: 'Barcelona', country: 'Spain'}
        },
        {
            id: 3,
            userPhoto: 'https://www.formula1.com/content/dam/fom-website/drivers/S/SEBVET01_Sebastian_Vettel/sebvet01.png.transform/2col/image.png',
            followed: true, fullName: 'Seb', status: 'Finger', location: {city: 'Heppenheim', country: 'Germany'}
        },
        {
            id: 4,
            userPhoto: 'https://www.formula1.com/content/dam/fom-website/drivers/K/KIMRAI01_Kimi_R%C3%A4ikk%C3%B6nen/kimrai01.png.transform/2col/image.png',
            followed: true, fullName: 'Kimi', status: 'Iceman', location: {city: 'Oslo', country: 'Finland'}
        }

    ]
};

const usersReducer = (state = initState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //users:[...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                //users:[...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };

        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            };

        default :
            return state;

    }


};

export const followAC = (userID) => ({type: FOLLOW, userID});
export const unFollowAC = (userID) => ({type: UNFOLLOW, userID});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;