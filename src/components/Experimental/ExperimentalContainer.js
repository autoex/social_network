import Experimental from "./Experimental";
import {connect} from "react-redux";
import {getUsersAC} from "../../redux/exp-reducer";



const mapStateToProps =(state)=>({
    expPage: state.expPage
});
const mapDispatchToProps =(dispatch)=> ({
    getUsers: (users)=> {
        dispatch(getUsersAC(users))
    }
});
const ExperimentalContainer = connect(mapStateToProps, mapDispatchToProps)(Experimental);

export default ExperimentalContainer;