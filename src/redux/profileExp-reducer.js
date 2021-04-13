const SET_PROFILE = 'SET_PROFILE';


let initState = {
    profile: null,
    inProgress: false

};

const profileExperimentalReducer = (state = initState, action) => {

    switch (action.type) {
        case SET_PROFILE:
            return {...state, profile: action.profile};




        default:
            return state;

    }


};

export const setProfile = (profile) => ({
    type: SET_PROFILE,
    profile

});

export default profileExperimentalReducer;