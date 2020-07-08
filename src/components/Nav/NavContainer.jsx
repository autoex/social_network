import React from "react";
import StoreContext from "../../StoreContext";
import Nav from "./Nav";

const NavContainer = () => {

    return (
        <StoreContext.Consumer>

            {(store) =>
           {    let nav = store.getState().nav;
               return <Nav nav={nav}/>
           }}
        </StoreContext.Consumer>

    );

};

export default NavContainer;
