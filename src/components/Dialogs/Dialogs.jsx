import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

class Dialogs extends React.Component {
    render() {
        return (
            <div className={classes.dialogs}>
                <div className={classes.dialogs_items}>
                    <div className={`${classes.dialog} ${classes.active}`}>
                        <NavLink to="/dialogs/1">Dimich</NavLink>
                    </div>
                    <div className={classes.dialog}>
                        <NavLink to="/dialogs/2">Andrew</NavLink></div>
                    <div className={classes.dialog}>
                        <NavLink to="/dialogs/3">Margo</NavLink>
                    </div>
                    <div className={classes.dialog}>
                        <NavLink to="/dialogs/4">Stan</NavLink></div>
                </div>
                <div className={classes.messages}>


                    <div className={classes.message}>Hi</div>
                    <div className={classes.message}>How is your going?</div>
                    <div className={classes.message}>Thanks. I'm fine</div>
                    <div className={classes.message}>And you?</div>


                </div>
            </div>

        );
    }
}

export default Dialogs;
