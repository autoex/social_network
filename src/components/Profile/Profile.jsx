import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/MyPostsContainer";
import {Redirect} from "react-router-dom";


const Profile = (props) => {
    if (!props.isAuth)  return <Redirect to={'/login'} />;

    return (
        <>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </>

    );

};

export default Profile;
