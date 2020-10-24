import React, {Component} from "react";
import "./Style.css";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavContainer from "./components/Nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends Component {
    componentDidMount() {

        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader/>;
        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <NavContainer/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/> {/*Variant 1*/}
                    {/*<Route path='/profile' render={() => <Profile state={profilePage}/>}/>*/}


                    <Route path='/profile/:userId?'> <ProfileContainer/></Route> {/*Variant 2*/}


                    <Route path='/users'
                           render={() => <UsersContainer/>}/>

                    <Route path='/news' component={News}/> {/*Variant 3*/}
                    <Route path='/settings' component={Settings}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/login' component={Login}/>


                </div>
                {/*  <Footer /> */}
            </div>
        );

    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});


export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
