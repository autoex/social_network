import Experimental from "./Experimental";
import {connect} from "react-redux";
import {
    setActivePage,
    follow,
    getPosts,
    getUsers,
    inProgress,
    setTotalUsers,
    unFollow
} from "../../redux/exp-reducer";
import React, {Component} from "react";
import axios from "axios";



class ExperimentalContainer extends Component {

    componentDidMount() {
        this.getUsers(this.props.expPage.activePage);
        this.getPosts();
    }

    getUsers = async (pageNumber) => {
        this.props.inProgress(true);
        // let users = await axios(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.expPage.pageSize}`);
        let allUsersArray = await axios(`https://my-json-server.typicode.com/autoex/it-kama_rest/items`);
        let totalUsersCount = allUsersArray.data.length;
        let users = await axios(`https://my-json-server.typicode.com/autoex/it-kama_rest/items?_page=${pageNumber}&_limit=${this.props.expPage.pageSize}`);

        this.props.setTotalUsers(totalUsersCount);
        this.props.getUsers(users.data);
        this.props.inProgress(false);

    };

    getPosts= async () => {
        let posts = await axios('https://jsonplaceholder.typicode.com/posts');
        this.props.getPosts(posts.data);

    };

    setActivePage =(num)=> {

        this.props.setActivePage(num);

        this.getUsers(num);

    };
    follow =(idUser)=> {


        this.props.follow(idUser)
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
                         follow={this.follow}
                         unFollow={this.unFollow}
                         expPage={this.props.expPage}
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
export default connect(mapStateToProps, {getUsers, getPosts, setActivePage, setTotalUsers, follow, unFollow, inProgress})(ExperimentalContainer);

