import {
    onNewMessageChange,
    onSendMessageClick
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


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

const DialogsContainer = connect(mapStateToProps, {onSendMessageClick, onNewMessageChange})(Dialogs);

export default DialogsContainer;
