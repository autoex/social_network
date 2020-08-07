import UsersAPIComponent from "./UsersAPIComponent";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unFollowAC} from "../../redux/users-reducer";


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


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
export default UsersContainer;