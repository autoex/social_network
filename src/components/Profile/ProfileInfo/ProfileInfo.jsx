import React from "react";
import classes from "./Profileinfo.module.css"


class ProfileInfo extends React.Component {
    render() {

        return (
            <div>
                <div>
                    <img className={classes.profileInfo_header_img} src="https://www.w3schools.com/howto/img_nature_wide.jpg" alt=""/>
                </div>
                <div>
                    Ava + description
                </div>
            </div>
        );
    }

}

export default ProfileInfo;
