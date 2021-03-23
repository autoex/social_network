import Experimental from "./Experimental";
import {connect} from "react-redux";
import {activePageAC, followAC, getPostsAC, getUsersAC, setTotalUsersAC, unFollowAC} from "../../redux/exp-reducer";
import React, {Component} from "react";
import axios from "axios";



class ExperimentalContainer extends Component {

    componentDidMount() {
        this.getUsers(this.props.expPage.activePage);
        this.getPosts();
    }

    getUsers = async (pageNumber) => {
        // let users = await axios(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.expPage.pageSize}`);
        let allUsersArray = await axios(`https://my-json-server.typicode.com/autoex/it-kama_rest/items`);
        let totalUsersCount = allUsersArray.data.length;
        let users = await axios(`https://my-json-server.typicode.com/autoex/it-kama_rest/items?_page=${pageNumber}&_limit=${this.props.expPage.pageSize}`);

        this.props.setTotalUsers(totalUsersCount);
        this.props.getUsers(users.data);

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
export default connect(mapStateToProps, mapDispatchToProps)(ExperimentalContainer);

