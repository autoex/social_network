import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png'


class Users extends React.Component {

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
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        debugger;
        let pages = [];
        debugger;
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div className={classes.pagination}>
                <ul>
                    {pages.map(el => {
                        return <li className={this.props.currentPage === el && classes.selectedPage} onClick={() => {
                            this.onPageChange(el)
                        }}>{el}</li>
                    })}
                </ul>
            </div>


            {this.props.users.map(u => <div key={u.id} className={classes.userWrapper}>
                <div>
                    <div><img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""
                              className={classes.userPhoto}/></div>

                    {u.followed ?
                        <button onClick={() => {
                            this.props.unFollow(u.id)
                        }}>Unfollow</button> :
                        <button onClick={() => {
                            this.props.follow(u.id)
                        }}>Follow</button>}
                </div>
                <div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
            </div>)}
        </div>


    }


}

export default Users;