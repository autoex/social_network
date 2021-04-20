import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import {Link} from "react-router-dom";


const ProfileExp = (props) => {
    if (!props.profileExp.profile) return <Preloader/>

    return (<>
        {props.profileExp.profile.fullName}
        <br/>
        <button onClick={()=>props.history.goBack()}>Back</button>

    </>)
};


export default ProfileExp;