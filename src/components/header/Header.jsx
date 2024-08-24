import Button from "../button/Button";
import { useState } from "react";
import MobileMenu from "./mobile-menu/MobileMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header container">
            <img src="/images/logo.svg" alt="Logo" />
            <button
                className="header__menu-button"
                onClick={toggleMenu}
                aria-label="Main Menu"
            >
                <FontAwesomeIcon
                    className="header__menu-button-icon"
                    icon={faBars}
                />
            </button>
            <MobileMenu isOpen={isOpen} />
            <nav className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__links">
                        <a href="#">Features</a>
                    </li>
                    <li className="navbar__links">
                        <a href="#">Pricing</a>
                    </li>
                    <li className="navbar__links">
                        <a href="#">Resources</a>
                    </li>
                </ul>
                <ul className="navbar__list-cta">
                    <li className="navbar__links">
                        <a href="#">Login</a>
                    </li>
                    <li className="navbar__links">
                        <Button className={"header__btn"} text="Sign up" />
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
