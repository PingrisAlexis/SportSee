import React from 'react';
import Logo from '../../assets/logo.png';
import styles from './Header.module.scss';

/**
 * @name Header
 * @description This is the header component.
 * @returns {JSX.Element}
 */

const Header = () => {
    return  <header className={styles.header_container}>
                <img src={Logo} />
                <ul>
                    <li>
                        Accueil
                    </li>
                    <li>
                        Profil
                    </li>
                    <li>
                        Réglage
                    </li>
                    <li>
                        Communauté
                    </li>
                </ul>
            </header>     
}
export default Header;