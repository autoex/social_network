import React from "react";
import classes from "./Profileinfo.module.css";


class ProfileInfo extends React.Component {
    render() {

        return (

            <div>
                <div>
                    <img className={classes.profileInfo_header_img}
                         src="http://warnet.ws/uploads/media/topic/2020/05/11/02/5f15d086b97ccb65b09e.jpg" alt=""/>

                </div>

            </div>
        );
    }

}

export default ProfileInfo;
