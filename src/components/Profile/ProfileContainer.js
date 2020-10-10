import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} props={this.props.profile}/>

        );
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile

});
/*let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);




let WithRouterDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, {getUserProfile})(WithRouterDataContainerComponent);*/


export default compose (
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    WithAuthRedirect


)(ProfileContainer);