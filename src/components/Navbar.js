import "../Assets/Styles/navbar.scss"
import {useState} from "react";

function Navbar() {
    const [menu, setMenu] = useState(false);
    return (
        <div className="nav-bg">
        <nav className="Navbar">
            <div className="logo">LUNA</div>
             <div onClick={() => setMenu(!menu)} className={"hamburger " + (menu && "menu-close")}>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <div className={"navbar-links " + (menu && "active")}>
                <ul>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Menu</li>
                </ul>
            </div>
        </nav>
        </div>
    );
}

export default Navbar;