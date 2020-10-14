import {
    onSendMessageClick
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

/*let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageCreator())
        },
        onNewMessageChange: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }


    }
};*/

/*let AuthRedirectComponent = WithAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, {onSendMessageClick, onNewMessageChange})(AuthRedirectComponent);

export default DialogsContainer;*/

export default compose(
    connect(mapStateToProps, {onSendMessageClick}),
    WithAuthRedirect
)(Dialogs);