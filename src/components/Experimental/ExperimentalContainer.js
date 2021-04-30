import Experimental from "./Experimental";
import {connect} from "react-redux";
import {
    setActivePage,
    follow,
    getPosts,
    getUsers,
    inProgress,
    setTotalUsers,
    unFollow,
    toggleFollowing,
    followThunk, unFollowThunk, getPostsThunk, getUsersThunk
} from "../../redux/exp-reducer";
import React, {Component} from "react";



class ExperimentalContainer extends Component {

    componentDidMount() {
        this.getUsers(this.props.expPage.activePage);
        this.getPosts();
    }

    getUsers = async (pageNumber) => {
        this.props.getUsersThunk(pageNumber, this.props.expPage.pageSize)

    };

    getPosts= async () => {
        this.props.getPostsThunk();
    };

    setActivePage =(num)=> {
        this.props.setActivePage(num);
        this.getUsers(num);
    };

    follow =(idUser)=> {
        this.props.follow(idUser);
    };
    unFollow =(idUser)=> {
        this.props.unFollow(idUser)
    };

    render() {
        let pagesNumber = Math.ceil(this.props.expPage.totalCount / this.props.expPage.pageSize);
        // let pagesNumber = 11;
        let pages = [];
        for(let i =1; i<=pagesNumber; i++ ) {
            pages.push(i)
        }

        return (<>
           <Experimental setActivePage={this.setActivePage}
                         expPage={this.props.expPage}
                         followThunk={this.props.followThunk}
                         unFollowThunk={this.props.unFollowThunk}
           />
        </>)
    }
}




const mapStateToProps = (state) => ({
    expPage: state.expPage
});
const mapDispatchToProps = (dispatch) => ({
    getUsers: (users) => {
        dispatch(getUsers(users))
    },
    getPosts: (posts) => {
        dispatch(getPosts(posts));

    },

    setActivePage: (page) => {
        dispatch(setActivePage(page));

    },

    setTotalUsers: (num) => {
        dispatch(setTotalUsers(num));

    },

    follow: (idUser) => {
        dispatch(follow(idUser))
    },
    unFollow: (idUser) => {
        dispatch(unFollow(idUser))
    },
    inProgress: (status) => {
        dispatch(inProgress(status))
    }

});
export default connect(mapStateToProps, {getUsers, getPosts, setActivePage, setTotalUsers, follow, unFollow, inProgress, toggleFollowing, followThunk, unFollowThunk, getPostsThunk, getUsersThunk})(ExperimentalContainer);

