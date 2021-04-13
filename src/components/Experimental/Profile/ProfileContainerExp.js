import React from "react";
import ProfileExp from "./ProfileExp";
import {connect} from "react-redux";
import axios from 'axios'
import {setProfile} from "../../../redux/profileExp-reducer";



class ProfileContainerExp extends React.Component{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(r=>this.props.setProfile(r.data))
    }

    render() {
        return <ProfileExp {...this.props} />
    }

}

const mapStateToProps =(state)=> ({
    profileExp: state.profileExp

});
export default connect(mapStateToProps, {setProfile})(ProfileContainerExp);
