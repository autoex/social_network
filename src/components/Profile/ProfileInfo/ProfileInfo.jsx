import React from "react";
import classes from "./Profileinfo.module.css";
import Preloader from "../../common/Preloader/Preloader";


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
                <img src={props.profile.photos.large} alt=""/>
            </div>

        </div>
    );
};

export default ProfileInfo;
