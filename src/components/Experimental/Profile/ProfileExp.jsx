import React from "react";
import Preloader from "../../common/Preloader/Preloader";


const ProfileExp = (props) => {
    if (!props.profileExp.profile) return <Preloader/>
    return (<>
        {props.profileExp.profile.fullName}
    </>)
};


export default ProfileExp;