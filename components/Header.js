import Image from "next/image";
import styles from "../styles/Header.module.scss";

import Logo from "../public/logo-bookmark.svg";

const Header = () => {
    return (
        <header className={styles.header}>
            <Image 
                src={Logo}
                alt="Logo de Bookmark"
                className={styles.logo}
            />
            <p>MENU</p>
        </header>
    )
}

export default Header;