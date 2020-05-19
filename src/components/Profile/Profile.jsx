import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


class Profile extends React.Component {
    render() {
        let posts = this.props.profilePage.posts;
        // debugger;
        return (
            <div>
                <ProfileInfo/>

                <MyPosts posts={posts} addPost={this.props.addPost} updateNewPostText={this.props.updateNewPostText} newPostText={this.props.profilePage.newPostText}/>

            </div>
        );
    }
}

export default Profile;
