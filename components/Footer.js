import Image from "next/image";
import styles from "../styles/Footer.module.scss";

import Logo from "../public/logo-bookmark.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Image 
                src={Logo}
                alt="Logo de Bookmark"
                className={styles.logo}
                layout=""
            />
            <nav className={styles.footer_menu}>
                <ul>
                    <li><a href="/">FEATURES</a></li>
                    <li><a href="/">PRICING</a></li>
                    <li><a href="/">CONTACT</a></li>
                </ul>
            </nav>
            <div className={styles.socials}>
                <img src="icon-facebook.svg" alt="" />
                <img src="icon-twitter.svg" alt="" />
            </div>
        </footer>
    )
};

export default Footer;