import React, {Component} from "react";
import axios from 'axios'
import classes from './Experimental.module.css'

class Experimental extends Component {

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

    }

    render() {
        let pagesNumber = Math.ceil(this.props.expPage.totalCount / this.props.expPage.pageSize);
        // let pagesNumber = 11;
        let pages = [];
        for(let i =1; i<=pagesNumber; i++ ) {
            pages.push(i)
        }

        return (<>
            <div className={classes.paginator}>{pages.map(p=> <span key={p} onClick={() =>this.setActivePage(p)} className={this.props.expPage.activePage === p && classes.activePage}>{p}</span>)}</div>
            <h1>{this.props.expPage.text}</h1>

            <ul>
                {this.props.expPage.users.map(u=> <li key={u.id}>{u.name}</li>)}
            </ul>

            <h2>Posts</h2>

            <ul>
                {this.props.expPage.posts.map(p=> <li key={p.id}>{p.title}</li>)}
            </ul>
        </>)
    }
}

export default Experimental;