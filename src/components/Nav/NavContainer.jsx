import Nav from "./Nav";
import {connect} from "react-redux";

/*const NavContainer = () => {

    return (
        <StoreContext.Consumer>

            {(store) => {
                let nav = store.getState().nav;
                return <Nav nav={nav}/>
            }}
        </StoreContext.Consumer>

    );

};*/
let mapStateToProps = (state) => {
    return {
        nav: state.nav
    }

};

const NavContainer = connect(mapStateToProps)(Nav);
export default NavContainer;
