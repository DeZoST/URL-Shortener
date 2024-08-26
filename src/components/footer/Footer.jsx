import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content container">
                <div className="footer__logo">
                    <img src="/images/logo-white.svg" alt="Logo" />
                </div>
                <div className="footer__links-wrapper">
                    <div className="footer__links-container">
                        <h4 className="footer__links-title">Features</h4>
                        <ul className="footer__links-list">
                            <li className="footer__links">Link Shortening</li>
                            <li className="footer__links">Branded Links</li>
                            <li className="footer__links">Analytics</li>
                        </ul>
                    </div>
                    <div className="footer__links-container">
                        <h4 className="footer__links-title">Resources</h4>
                        <ul className="footer__links-list">
                            <li className="footer__links">Blog</li>
                            <li className="footer__links">Developers</li>
                            <li className="footer__links">Support</li>
                        </ul>
                    </div>
                    <div className="footer__links-container">
                        <h4 className="footer__links-title">Company</h4>
                        <ul className="footer__links-list">
                            <li className="footer__links">About</li>
                            <li className="footer__links">Our Team</li>
                            <li className="footer__links">Careers</li>
                            <li className="footer__links">Contact</li>
                        </ul>
                    </div>
                    <div className="footer__social-links">
                        <a href="#">
                            <img
                                src="/images/icon-facebook.svg"
                                alt="Facebook"
                            />
                        </a>
                        <a href="#">
                            <img src="/images/icon-twitter.svg" alt="Twitter" />
                        </a>
                        <a href="#">
                            <img
                                src="/images/icon-pinterest.svg"
                                alt="Pinterest"
                            />
                        </a>
                        <a href="#">
                            <img
                                src="/images/icon-instagram.svg"
                                alt="Instagram"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
