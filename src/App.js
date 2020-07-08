import React from "react";
import "./Style.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavContainer from "./components/Nav/NavContainer";


const App = () => {


    return (

        <div className="app-wrapper">
            <Header/>
            <NavContainer />
            <div className="app-wrapper-content">
                <Route path='/dialogs'
                       render={() => <DialogsContainer />}/> {/*Variant 1*/}
                {/*<Route path='/profile' render={() => <Profile state={profilePage}/>}/>*/}
                <Route path='/profile'> <Profile /></Route> {/*Variant 2*/}


                <Route path='/news' component={News}/> {/*Variant 3*/}
                <Route path='/settings' component={Settings}/>
                <Route path='/music' component={Music}/>


            </div>
            {/*  <Footer /> */}
        </div>
    );

};

export default App;
