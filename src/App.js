import React from "react";
import logo from "./logo.svg";
//import "./App.css";
import "./Style.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

// import Footer from "./components/Footer/Footer";

class App extends React.Component {
    render() {
        let nav = this.props.nav;
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header/>
                    <Nav nav={nav}/>
                    <div className="app-wrapper-content">
                        <Route path='/messages' component={Dialogs}/>
                        <Route path='/profile' component={Profile}/>

                    </div>
                    {/*  <Footer /> */}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
