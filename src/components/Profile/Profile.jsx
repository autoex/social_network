import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


class Profile extends React.Component {
    render() {
        let posts = this.props.posts;
        return (
            <div>
                <ProfileInfo/>

                <MyPosts posts={posts}/>
            </div>
        );
    }
}

export default Profile;
