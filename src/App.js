import React from "react";
//import logo from "./logo.svg";
//import "./App.css";
import "./Style.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {Route} from "react-router-dom";


// import Footer from "./components/Footer/Footer";

class App extends React.Component {
    render() {
        let nav = this.props.state.nav;
        let dialogsPage = this.props.state.dialogsPage;
        let profilePage = this.props.state.profilePage;
        return (

            <div className="app-wrapper">
                <Header/>
                <Nav nav={nav}/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <Dialogs state={dialogsPage}/>}/> {/*Variant 1*/}
                    {/*<Route path='/profile' render={() => <Profile state={profilePage}/>}/>*/}
                    <Route path='/profile'> <Profile profilePage={profilePage} addPost={this.props.addPost} updateNewPostText={this.props.updateNewPostText} /></Route> {/*Variant 2*/}


                    <Route path='/news' component={News}/> {/*Variant 3*/}
                    <Route path='/settings' component={Settings}/>
                    <Route path='/music' component={Music}/>


                </div>
                {/*  <Footer /> */}
            </div>
        );
    }
}

export default App;
