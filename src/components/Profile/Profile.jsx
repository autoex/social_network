import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


class Profile extends React.Component {
    render() {
        return (
            <div>
                <ProfileInfo/>

                <MyPosts/>
            </div>
        );
    }
}

export default Profile;
