import React from "react";
import classes from "./Profileinfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import UserImg from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (

        <div>
            <div>
                <img className={classes.profileInfo_header_img}
                     src="http://warnet.ws/uploads/media/topic/2020/05/11/02/5f15d086b97ccb65b09e.jpg" alt=""/>

            </div>

            <div>
                <div>
                    <img className={classes.userImg} src={props.profile.photos.large ? props.profile.photos.large : UserImg} alt=""/>
                </div>

                <ProfileStatusWithHooks status={props.status}  updateUserStatus={props.updateUserStatus} />
                <div>Full name: {props.profile.fullName}</div>
            </div>

        </div>
    );
};

export default ProfileInfo;
