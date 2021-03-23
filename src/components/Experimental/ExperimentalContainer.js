import Experimental from "./Experimental";
import {connect} from "react-redux";
import {activePageAC, followAC, getPostsAC, getUsersAC, setTotalUsersAC, unFollowAC} from "../../redux/exp-reducer";


const mapStateToProps = (state) => ({
    expPage: state.expPage
});
const mapDispatchToProps = (dispatch) => ({
    getUsers: (users) => {
        dispatch(getUsersAC(users))
    },
    getPosts: (posts) => {
        dispatch(getPostsAC(posts));

    },

    setActivePage: (page) => {
        dispatch(activePageAC(page));

    },

    setTotalUsers: (num) => {
        dispatch(setTotalUsersAC(num));

    },

    follow: (idUser) => {
        dispatch(followAC(idUser))
    },
    unFollow: (idUser) => {
        dispatch(unFollowAC(idUser))
    }

});
const ExperimentalContainer = connect(mapStateToProps, mapDispatchToProps)(Experimental);

export default ExperimentalContainer;