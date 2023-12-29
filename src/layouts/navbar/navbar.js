import React from "react";
import { NavLink } from "react-router-dom";
import PathConstants from "../../routes/pathConstants";
import '../../assets/styles/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <ul className="navbar-ul">
                    <li className="navbar-li">
                        <NavLink className="navlink" to={PathConstants.HOME}>Home</NavLink>
                    </li>
                    <li className="navbar-li">
                        <NavLink className="navlink" to={PathConstants.APPS}>Apps</NavLink>
                    </li>
                    <li className="navbar-li">
                        <NavLink className="navlink" to={PathConstants.PROJECTS}>Projects</NavLink>
                    </li>
                    <li className="navbar-li">
                        <NavLink className="navlink" to={PathConstants.ABOUT}>About</NavLink>
                    </li>
                    <li className="navbar-li">
                        <NavLink className="navlink" to={PathConstants.CONTACT}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;