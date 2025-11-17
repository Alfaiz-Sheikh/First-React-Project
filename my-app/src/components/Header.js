import './Header.css';
import logo from '../assets/logo.png';

function Header(){
    return (
        <header>
            <nav>
                <div className="logo">
                    <a href="#"><img src={logo} alt="logo" /></a>
                </div>
                <div className="menu">
                    <ul className="list">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Restaurants</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>
                <a href="" className="login">Login</a>
                <span id="more">&#9776;</span>
                </nav>
        </header>
    )
}

export default Header;