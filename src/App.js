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
import {BrowserRouter, Route} from "react-router-dom";

// import Footer from "./components/Footer/Footer";

class App extends React.Component {
    render() {
        let nav = this.props.nav;
        let dialogs = this.props.dialogs;
        let messages = this.props.messages;
        let posts = this.props.posts;
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header/>
                    <Nav nav={nav}/>
                    <div className="app-wrapper-content">
                        <Route path='/dialogs' render={() => <Dialogs dialogs={dialogs} messages={messages}/>}/>
                        <Route path='/profile' render={() => <Profile posts={posts}/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/music' component={Music}/>


                    </div>
                    {/*  <Footer /> */}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
