import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../API/api";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 2;
        }
        usersAPI.getProfile(userId)
            .then(
                response => {
                    this.props.setUserProfile(response.data);
                });
    }

    render() {
        return (
            <Profile {...this.props} props={this.props.profile}/>

        );
    }

}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth

});

let WithRouterDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile})(WithRouterDataContainerComponent);
