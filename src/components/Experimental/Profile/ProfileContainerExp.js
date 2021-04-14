import React from "react";
import ProfileExp from "./ProfileExp";
import {connect} from "react-redux";
import axios from 'axios'
import {setProfile} from "../../../redux/profileExp-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainerExp extends React.Component {
    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId;
        if (!userId) { userId = 2}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(r => this.props.setProfile(r.data))
    }

    render() {
        return <ProfileExp {...this.props} />
    }

}

const mapStateToProps = (state) => ({
    profileExp: state.profileExp

});


export default withRouter(connect(mapStateToProps, {setProfile})(ProfileContainerExp));
