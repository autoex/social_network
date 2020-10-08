import {
    onNewMessageChange,
    onSendMessageClick
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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

let AuthRedirectComponent = WithAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, {onSendMessageClick, onNewMessageChange})(AuthRedirectComponent);

export default DialogsContainer;
