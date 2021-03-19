import React, {Component} from "react";
import axios from 'axios'

class Experimental extends Component {

    componentDidMount() {
        this.getUsers()
    }

    getUsers = async () => {
        let users = await axios('https://jsonplaceholder.typicode.com/users');
        this.props.getUsers(users.data);

    };

    render() {

        return (<>
            <h1>{this.props.expPage.text}</h1>
            <ul>
                {this.props.expPage.users.map(u=> <li key={u.id}>{u.name}</li>)}
            </ul>
        </>)
    }
}

export default Experimental;