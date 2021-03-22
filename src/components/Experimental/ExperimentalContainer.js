import Experimental from "./Experimental";
import {connect} from "react-redux";
import {activePageAC, getPostsAC, getUsersAC} from "../../redux/exp-reducer";



const mapStateToProps =(state)=>({
    expPage: state.expPage
});
const mapDispatchToProps =(dispatch)=> ({
    getUsers: (users, usersCount)=> {
        dispatch(getUsersAC(users, usersCount))
    },
    getPosts: (posts)=> {
        dispatch(getPostsAC(posts));

    },

    setActivePage:  (page)=> {
        dispatch(activePageAC(page));

    }
});
const ExperimentalContainer = connect(mapStateToProps, mapDispatchToProps)(Experimental);

export default ExperimentalContainer;