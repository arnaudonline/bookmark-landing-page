import Image from "next/image";

import Logo from "../public/logo-bookmark.svg";

const Footer = () => {
    return (
        <footer>
            <Image 
                src={Logo}
                alt="Logo de Bookmark"
                className="logo"
            />
            <nav className="footer-menu">
                <ul>
                    <li><a href="/">FEATURES</a></li>
                    <li><a href="/">PRICING</a></li>
                    <li><a href="/">CONTACT</a></li>
                </ul>
            </nav>
            <div className="socials">
                <img src="icon-facebook.svg" alt="" />
                <img src="icon-twitter.svg" alt="" />
            </div>
        </footer>
    )
};

export default Footer;