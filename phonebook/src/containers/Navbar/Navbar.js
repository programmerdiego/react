import React from 'react';
import logo from './logo.png';
import "./Navbar.css";

console.log(logo);

class Navbar extends React.Component {
    render (){
        return(
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <img className="logo" src={logo} alt="website logo"></img>
                        <a className="navbar-brand" href="#myPage">My UT Phonebook</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right"></ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Navbar;