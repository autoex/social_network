import React from "react";
import "./Style.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


// import Footer from "./components/Footer/Footer";

const App = (props) => {
    let nav = props.state.nav;

    return (

        <div className="app-wrapper">
            <Header/>
            {/*<Nav/>*/}
            <Nav nav={nav}/>
            <div className="app-wrapper-content">
                <Route path='/dialogs'
                       render={() => <DialogsContainer store={props.store}/>}/> {/*Variant 1*/}
                {/*<Route path='/profile' render={() => <Profile state={profilePage}/>}/>*/}
                <Route path='/profile'> <Profile store={props.store}/></Route> {/*Variant 2*/}


                <Route path='/news' component={News}/> {/*Variant 3*/}
                <Route path='/settings' component={Settings}/>
                <Route path='/music' component={Music}/>


            </div>
            {/*  <Footer /> */}
        </div>
    );

};

export default App;
