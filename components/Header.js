import Image from "next/image";
import "../styles/Header.module.scss";

import Logo from "../public/logo-bookmark.svg";

const Header = () => {
    return (
        <header>
            <Image 
                src={Logo}
                alt="Logo de Bookmark"
                className="logo"
            />
            <p>MENU</p>
        </header>
    )
}

export default Header;