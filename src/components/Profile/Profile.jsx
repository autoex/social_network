import React from "react";
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile =(props)=> {
        let posts = props.profilePage.posts;

        return (
            <div>
                <ProfileInfo/>

                <MyPosts posts={posts} dispatch={props.dispatch}  newPostText={props.profilePage.newPostText}/>

            </div>
        );

};

export default Profile;
