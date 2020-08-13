import React from "react";
import "./Style.css";
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavContainer from "./components/Nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = () => {


    return (

        <div className="app-wrapper">
            <Header/>
            <NavContainer />
            <div className="app-wrapper-content">
                <Route path='/dialogs'
                       render={() => <DialogsContainer />}/> {/*Variant 1*/}
                {/*<Route path='/profile' render={() => <Profile state={profilePage}/>}/>*/}
                <Route path='/profile'> <ProfileContainer /></Route> {/*Variant 2*/}
                <Route path='/users'
                       render={() => <UsersContainer/>}/>

                <Route path='/news' component={News}/> {/*Variant 3*/}
                <Route path='/settings' component={Settings}/>
                <Route path='/music' component={Music}/>


            </div>
            {/*  <Footer /> */}
        </div>
    );

};

export default App;
