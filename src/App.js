import React, {Component} from "react";
import "./Style.css";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavContainer from "./components/Nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Error from "./components/Error/Error"
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import ExperimentalContainer from "./components/Experimental/ExperimentalContainer";
import ProfileContainerExp from "./components/Experimental/Profile/ProfileContainerExp";


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
                    <Switch>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/> {/*Variant 1*/}
                        {/*<Route path='/profile' render={() => <Profile state={profilePage}/>}/>*/}


                        <Route path='/profile/:userId?'> <ProfileContainerExp/></Route> {/*Variant 2*/}


                        <Route path='/users'
                               render={() => <UsersContainer/>}/>

                        <Route path='/news' component={News}/> {/*Variant 3*/}
                        <Route path='/settings' component={Settings}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/experimental' component={ExperimentalContainer}/>
                        <Route component={Error}/>
                    </Switch>

                </div>
                {/*  <Footer /> */}
            </div>
        );

    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});


const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);



const CircleApp = ()=> {

    return <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>

};

export default CircleApp;
