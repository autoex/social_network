import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/MyPostsContainer";


const Profile = (props) => {


    return (
        <>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </>

    );

};

export default Profile;
