import Button from "../../button/Button";
import PropTypes from "prop-types";
import "./MobileMenu.css";

function MobileMenu({ isOpen }) {
    return (
        <nav
            className={`container mobile-menu ${
                isOpen ? "mobile-menu--open" : ""
            }`}
        >
            <ul className="mobile-menu__links">
                <li>
                    <a href="#">Features</a>
                </li>
                <li>
                    <a href="#">Pricing</a>
                </li>
                <li>
                    <a href="#">Resources</a>
                </li>
            </ul>
            <ul className="mobile-menu__links">
                <li>
                    <a href="#">Login</a>
                </li>
                <li>
                    <Button text="Sign up" className={"btn--menu"} />
                </li>
            </ul>
        </nav>
    );
}

MobileMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
};

export default MobileMenu;
