import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./My Posts/MyPosts"

class Profile extends React.Component {
    render() {
        return (
            <div>
                <div>Header img</div>
                <div>Ava + description</div>
                <MyPosts/>
            </div>
        );
    }
}

export default Profile;
