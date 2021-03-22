import Experimental from "./Experimental";
import {connect} from "react-redux";
import {activePageAC, getPostsAC, getUsersAC, setTotalUsersAC} from "../../redux/exp-reducer";



const mapStateToProps =(state)=>({
    expPage: state.expPage
});
const mapDispatchToProps =(dispatch)=> ({
    getUsers: (users)=> {
        dispatch(getUsersAC(users))
    },
    getPosts: (posts)=> {
        dispatch(getPostsAC(posts));

    },

    setActivePage:  (page)=> {
        dispatch(activePageAC(page));

    },

    setTotalUsers:  (num)=> {
        dispatch(setTotalUsersAC(num));

    },


});
const ExperimentalContainer = connect(mapStateToProps, mapDispatchToProps)(Experimental);

export default ExperimentalContainer;