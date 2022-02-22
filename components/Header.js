import Image from "next/image";
import styles from "../styles/Header.module.scss";

import Logo from "../public/logo-bookmark.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={Logo} alt="Logo de Bookmark" className={styles.logo} />
      <p className={styles.nav_mobile}>MENU</p>
      <nav className={styles.nav}>
        <li>FEATURES</li>
        <li>PRICING</li>
        <li>CONTACT</li>
        <li>
          <a href="/" className={styles.button_red}>
            LOGIN
          </a>
        </li>
      </nav>
    </header>
  );
};

export default Header;
