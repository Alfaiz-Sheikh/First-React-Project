import React from "react";
import './Header.css';
import logo from './assets/logo.png';

function Header(){
    return (
        <header>
            <nav>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menu">
                    <ul className="list">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About me</a></li>
                        <li><a href="#">Protfolio</a></li>
                        <li><a href="#">Contact me</a></li>
                    </ul>
                </div>
                <a href="" className="hire-me">Hire Me</a>
                <span id="more">&#9776;</span>
                </nav>
        </header>
    )
}

export default Header;