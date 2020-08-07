import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unFollowAC} from "../../redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";


class UsersComponent extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(
                response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });
    };

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(
                response => {
                    this.props.setUsers(response.data.items)
                });

    };


    render() {


        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      onPageChange={this.onPageChange}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}/>


    }


}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID)=> {
            dispatch(followAC(userID))
        },
        unFollow: (userID)=> {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users)=> {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber)=> {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalUsers)=> {
            dispatch(setTotalUsersCountAC(totalUsers))
        }
    }
};


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent);
export default UsersContainer;